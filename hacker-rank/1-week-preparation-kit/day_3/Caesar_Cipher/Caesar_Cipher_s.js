// https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-three

// 풀이
function caesarCipher(s, k) {
  let result = "";

  k = k % 26;

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    let transformedCode = charCode;

    if (charCode >= 65 && charCode <= 90) {
      transformedCode = ((charCode - 65 + k) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      transformedCode = ((charCode - 97 + k) % 26) + 97;
    }

    result += String.fromCharCode(transformedCode);
  }

  return result;
}
