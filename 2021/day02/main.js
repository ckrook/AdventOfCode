load();
let lines;
function load() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      lines = data.split("\n");
      first(data);
      second(data);
    });
}

function first(data) {
  let horizontal = 0;
  let depth = 0;
  let arr = [];
  arr = data.split("\n");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let words = arr[i].split(" ");
    let direction = words[0];
    let amount = parseInt(words[1]);
    if (direction === "forward") {
      horizontal += amount;
    }
    if (direction === "down") {
      depth += amount;
    }
    if (direction === "up") {
      depth -= amount;
    }
  }
  let sum = horizontal * depth;
  console.log(sum);
}

function second(data) {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  let arr = [];
  arr = data.split("\n");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let words = arr[i].split(" ");
    let direction = words[0];
    let amount = parseInt(words[1]);
    if (direction === "forward") {
      horizontal += amount;
      depth += aim * amount;
    }
    if (direction === "down") {
      aim += amount;
    }
    if (direction === "up") {
      aim -= amount;
    }
    console.log(
      `
      Direction: ${direction}
      Amount: ${amount}
      Horizon: ${horizontal}
      Depth: ${depth}
      Aim: ${aim}
      `
    );
  }
  let sum = horizontal * depth;
  console.log(sum);
}
