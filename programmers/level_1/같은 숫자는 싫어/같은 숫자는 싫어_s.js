// https://school.programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }

  return answer;
}
