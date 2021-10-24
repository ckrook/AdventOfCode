function load() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      lines = data.split("\n").map((x) => parseInt(x));
    });
}
