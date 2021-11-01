function load() {
  fetch("test.txt")
    .then((res) => res.text())
    .then((data) => {
      handleFetch(data);
    });
}

function handleFetch(data) {
  let count = 0;
  let passports = data.split(/\n\s*\n/);
  let formated;
  let length = Object.keys(passports).length;
  let myobj = {};
  let list = [];
  // console.log(passports); // Passports är en array där varje rad är en sträng innehållandes passen
  passports.forEach((element) => {
    let property = element.replace(/\n/g, " ").split(" "); // För varje rad i passet, ta strängen och dela upp den i egenskaper
    console.log(property);
    for (let j = 0; j < property.length; j++) {
      let [key, val] = property[j].split(":"); // Splitta varje egenskap till en nyckel och ett värde
      myobj = {
        [key]: val,
      };
      list.push(myobj);
    }
    count++;

    // console.log(list);
  });

  // console.log(length);
}
