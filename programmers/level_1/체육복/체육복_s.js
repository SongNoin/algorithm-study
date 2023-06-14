// 예전 풀이
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost.filter((student) => !reserve.includes(student));
  reserve = reserve.filter((student) => !losted.includes(student));

  // 체육복을 잃어버린 학생 수를 뺀 값을 초기값으로 저장
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    const student = lost[i];

    if (reserve.includes(student - 1)) {
      // 잃어버린 학생의 앞 번호를 reserve 배열에서 찾는다.
      reserve.splice(reserve.indexOf(student - 1), 1);
      answer++;
    } else if (reserve.includes(student + 1)) {
      // 잃어버린 학생의 뒷 번호를 reserve 배열에서 찾는다.
      reserve.splice(reserve.indexOf(student + 1), 1);
      answer++;
    }
  }

  return answer;
}

// 재 풀이 1
function solution(n, lost, reserve) {
  let hasNoStudents = 0;
  lost = lost.filter((el) => !reserve.includes(el));
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1))
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
    else if (reserve.includes(lost[i]))
      reserve.splice(reserve.indexOf(lost[i]), 1);
    else if (reserve.includes(lost[i] + 1))
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
    else hasNoStudents++;
  }
  return n - hasNoStudents;
}

// 재 풀이 2
// 개선사항
// 1. 여유분이 있는 학생이 동시에 훔쳐질 수 도 있어서 For문 이전에 제외 시켜야한다.
// 2. n이 순서대로 주어지지 않는 경우가 있어서 sort해주어야 한다.
function solution(n, lost, reserve) {
  let hasNoStudents = 0;
  const filterRes = reserve
    .filter((el) => !lost.includes(el))
    .sort((a, b) => a - b);
  const filterLost = lost
    .filter((el) => !reserve.includes(el))
    .sort((a, b) => a - b);
  for (let i = 0; i < filterLost.length; i++) {
    if (filterRes.includes(filterLost[i] - 1))
      filterRes.splice(filterRes.indexOf(filterLost[i] - 1), 1);
    else if (filterRes.includes(filterLost[i] + 1))
      filterRes.splice(filterRes.indexOf(filterLost[i] + 1), 1);
    else hasNoStudents++;
  }
  return n - hasNoStudents;
}
