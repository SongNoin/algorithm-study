/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/86491
 *  */

function solution(sizes) {
  // 1. 배열을 돌며, 명함 가로/세로를 sorting한다.
  for (let i = 0; i < sizes.length; i++) {
    sizes[i] = sizes[i].sort((a, b) => a - b);
  }

  // 2. 다시 배열을 돌며, w의 Max와 h의 Max를 알아낸다.
  let maxW = 0;
  let maxH = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (maxW < sizes[i][0]) maxW = sizes[i][0];
    if (maxH < sizes[i][1]) maxH = sizes[i][1];
  }
  // 3. 각 Max를 곱하여 return 한다
  return maxW * maxH;
}
