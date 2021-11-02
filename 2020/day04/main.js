function load() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      handleFetch(data);
    });
}

function handleFetch(data) {
  let count = 0;
  let passports = data.split(/\n\s*\n/);

  // console.log(passports); // Passports är en array där varje rad är en sträng innehållandes passen

  let filteredPassports = passports.map(
    (element) => element.search("cid") > 0 && countWords(element) > 6
  );
  // console.log(filteredPassports);

  for (let j = 0; j < passports.length; j++) {
    if (
      passports[j].search("ecl") > -1 &&
      passports[j].search("pid") > -1 &&
      passports[j].search("eyr") > -1 &&
      passports[j].search("hcl") > -1 &&
      passports[j].search("byr") > -1 &&
      passports[j].search("iyr") > -1 &&
      passports[j].search("hgt") > -1
    ) {
      count++;
    }
  }

  console.log(count);
}

function countWords(str) {
  return str.trim().split(/\s+/).length;
}
