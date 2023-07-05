// https://school.programmers.co.kr/learn/courses/30/lessons/12939

// 풀이
// split으로 문자열을 배열로 바꿔준다.
// 정렬후 최솟값과 최댓값을 return 해준다.
function solution(s) {
  const sortedArr = s.split(" ").sort((a, b) => a - b);
  return sortedArr[0] + " " + sortedArr.at(-1);
}
