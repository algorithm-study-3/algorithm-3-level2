function solution(word) {
  const result = [];
  const dic = ["A", "E", "I", "O", "U"];

  const create = (n, alphabet) => {
    if (n === 0) {
      result.push(alphabet);
      return;
    }

    for (let i = 0; i < 5; i++) {
      create(n - 1, `${alphabet}${dic[i]}`);
    }
  };

  create(1, "");
  create(2, "");
  create(3, "");
  create(4, "");
  create(5, "");

  result.sort();

  for (let i = 0; i < result.length; i++) {
    if (result[i] === word) {
      return i + 1;
    }
  }
}

const result = solution("AAAAE");

console.log(result);
