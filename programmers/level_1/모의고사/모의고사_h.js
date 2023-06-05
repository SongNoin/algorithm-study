// * 틀림 (다시 풀기)
function solution(answers) {
  const oneRemain = answers.length % one.length;
  const twoRemain = answers.length % two.length;
  const threeRemain = answers.length % three.length;

  let oneRes = 0;
  let twoRes = 0;
  let threeRes = 0;

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < one.length + oneRemain + 1; j++) {
      if (answers[i] === one[j]) {
        oneRes = oneRes + 1;
      }
    }
    for (let j = 0; j < two.length + twoRemain + 1; j++) {
      if (answers[i] === two[j]) {
        twoRes = twoRes + 1;
      }
    }
    for (let j = 0; j < three.length + threeRemain + 1; j++) {
      if (answers[i] === three[j]) {
        threeRes = threeRes + 1;
      }
    }
  }
  const map = new Map();
  map.set(1, oneRes);
  map.set(2, twoRes);
  map.set(3, threeRes);

  const arrMap = Array.from(map);

  arrMap.sort((a, b) => a[1] - b[1]);
  console.log('arrMap', arrMap);

  if (arrMap[0][1] === arrMap[1][1]) {
    return [arrMap[0][0], arrMap[1][0], arrMap[2][0]];
  } else {
    return [arrMap[0][0]];
  }
}
