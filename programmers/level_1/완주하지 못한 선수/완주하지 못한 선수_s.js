// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 예전 풀이
function solution(participant, completion) {
  let answer = "";
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
}

// 재풀이
function solution(participant, completion) {
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
