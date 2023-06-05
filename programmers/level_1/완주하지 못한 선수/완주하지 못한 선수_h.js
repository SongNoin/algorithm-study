function solution(participant, completion) {
  const map = new Map();

  participant.forEach((elem) => {
    map.has(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1);
  });

  completion.forEach((name) => {
    map.set(name, map.get(name) - 1);
    if (map.get(name) === 0) map.delete(name);
  });

  const loser = map.keys();
  return loser.next().value;
}
