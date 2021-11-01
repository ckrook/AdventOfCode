function load() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      handleFetch(data);
    });
}

function handleFetch(data) {
  let count = 0;
  let field = data.split("\n");
  let scalefactor = Math.ceil((3 * field.length) / field[0].length);
  console.log(scalefactor);
  const bigfield = field.map((row) => row.repeat(10000));
  let [row, col] = [0, 0];

  while (row < field.length) {
    if (bigfield[row][col] === "#") count++;
    row += 2;
    col++;
    console.log(count);
  }
}
