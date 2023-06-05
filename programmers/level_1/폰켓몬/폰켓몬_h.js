// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const monsTypesNums = new Set(nums);
  const newMonsNums = nums.length / 2;

  return newMonsNums < monsTypesNums.size ? newMonsNums : monsTypesNums.size;
}
