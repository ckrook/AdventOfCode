let lines;
let goals = 2020;

function load() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      lines = data.split("\n").map((x) => parseInt(x));
    });

  let lenght = Object.keys(lines).length;

  for (let i = 0; i < lenght; i++) {
    for (k = 1; k < lenght; k++) {
      if (lines[i] + lines[k] == goals) {
        console.log(lines[i] * lines[k]);
      }
    }
  }
}
