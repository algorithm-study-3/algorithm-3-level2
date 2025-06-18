function delay(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

delay("a", 1000);
delay("b", 2000);
console.log("c");

(async () => {
  await delay("d", 1000); // 1초 후 출력
  await delay("e", 2000); // 그 후 2초 후 출력
  console.log("f");
})();
