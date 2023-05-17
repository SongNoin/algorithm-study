// https://school.programmers.co.kr/learn/courses/30/lessons/42840

const answerTable = [
  // 1번 수포자
  [1, 2, 3, 4, 5],
  // 2번 수포자
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < answerTable.length; j++) {
      if (answerTable[j][i % answerTable[j].length] === answers[i]) score[j]++;
    }
  }
  const biggest = Math.max(...score);
  const result = [];
  for (let k = 0; k < score.length; k++) {
    if (biggest === score[k]) result.push(k + 1);
  }
  return result;
}
