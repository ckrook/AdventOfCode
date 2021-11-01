let lines;
var passwords = [];
let myArray = {};
let temp;
let charCount = 0;

function load() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      lines = data.split("\n");
    });
  let lenght = Object.keys(lines).length;
  lines.forEach((element) => {
    let words = element.split(" ");
    // console.log(words);
    myArray = {
      low: words[0].substring(0, words[0].indexOf("-")),
      high: words[0].substring(words[0].indexOf("-") + 1),
      character: words[1].substring(0, words[1].length - 1),
      password: words[2],
    };
    passwords.push(myArray);
  });

  let countvalid = 0;
  console.log(lines);
  for (let k = 0; k < lenght; k++) {
    let string = passwords[k].password;
    let character = passwords[k].character;
    let low = parseInt(passwords[k].low);
    let high = parseInt(passwords[k].high);
    console.log("Find", character, "in", string);
    let regEx = new RegExp(`${character}`, "g");
    let passwordlength;

    let password = string.match(regEx);
    if (password == null) password = 0;
    else passwordlength = string.match(regEx).length;

    if (passwordlength >= low && passwordlength <= high) {
      countvalid++;
    }
  }
  console.log(countvalid);
}
