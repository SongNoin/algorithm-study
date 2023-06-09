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
