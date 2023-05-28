// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 예전 풀이
function solution(nums) {
  // 폰켓몬들을 담는 배열
  const pocket = [];

  for (let i = 0; i < nums.length; i++) {
    if (
      pocket.includes(nums[i]) === false &&
      // pocket 배열의 중복값을 제거
      pocket.length < nums.length / 2
      // pocket 에 넣을 수 있는 최대 폰켓몬 값까지만 배열에 추가
    ) {
      pocket.push(nums[i]);
    }
  }
  return pocket.length;
}

// 재풀이
function solution(nums) {
  const pocket = [...new Set(nums)];
  const selectCnt = Math.abs(nums.length / 2);
  return pocket.length > selectCnt ? selectCnt : pocket.length;
}
