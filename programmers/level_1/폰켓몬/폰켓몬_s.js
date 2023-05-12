// https://school.programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
  const pocket = [...new Set(nums)];
  const selectCnt = Math.abs(nums.length / 2);
  return pocket.length > selectCnt ? selectCnt : pocket.length;
}
