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
  let increase = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] > lines[i + 1]) {
      increase++;
    }
  }
  console.log(increase);
}

function second(data) {
  let increase2 = 0;
  let arr = lines.map((x) => parseInt(x));
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] + arr[i + 1] + arr[i + 2] <
      arr[i + 1] + arr[i + 2] + arr[i + 3]
    ) {
      increase2++;
    }
  }
  console.log(increase2);
}
