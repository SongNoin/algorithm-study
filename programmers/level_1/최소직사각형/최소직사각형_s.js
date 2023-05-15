// https://school.programmers.co.kr/learn/courses/30/lessons/86491
function solution(sizes) {
  sizes.forEach((el) => el.sort((a, b) => a - b));

  let x = sizes.reduce((a, c) => Math.max(a, c[0]), 0);
  let y = sizes.reduce((a, c) => Math.max(a, c[1]), 0);
  return x * y;
}
