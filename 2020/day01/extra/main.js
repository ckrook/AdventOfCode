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
      for (m = 2; m < lenght; m++) {
        if (lines[i] + lines[k] + lines[m] == goals) {
          return (
            console.log("Number 1 is: " + lines[i]),
            console.log("Number 2 is: " + lines[k]),
            console.log("Number 3 is: " + lines[m]),
            console.log("The total number is " + lines[i] * lines[k] * lines[m])
          );
        }
      }
    }
  }
}
