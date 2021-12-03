load();
let lines;
function load() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      lines = data.split("\n");
      // first(data);
      second(data);
    });
}

function first(data) {
  let gamma = "";
  let epsilon = "";
  let col1 = "";
  let col2;
  let col3;
  let col4;
  let col5;
  let col6;
  let col7;
  let col8;
  let col9;
  let col10;
  let col11;
  let col12;

  let arr = [];
  arr = data.split("\n");

  for (let i = 0; i < arr.length; i++) {
    let temp;
    col1 += arr[i].charAt(0);
    col2 += arr[i].charAt(1);
    col3 += arr[i].charAt(2);
    col4 += arr[i].charAt(3);
    col5 += arr[i].charAt(4);
    col6 += arr[i].charAt(5);
    col7 += arr[i].charAt(6);
    col8 += arr[i].charAt(7);
    col9 += arr[i].charAt(8);
    col10 += arr[i].charAt(9);
    col11 += arr[i].charAt(10);
    col12 += arr[i].charAt(11);
  }

  gamma += gammafunc(col1);
  gamma += gammafunc(col2);
  gamma += gammafunc(col3);
  gamma += gammafunc(col4);
  gamma += gammafunc(col5);
  gamma += gammafunc(col6);
  gamma += gammafunc(col7);
  gamma += gammafunc(col8);
  gamma += gammafunc(col9);
  gamma += gammafunc(col10);
  gamma += gammafunc(col11);
  gamma += gammafunc(col12);

  epsilon += epsilonfunc(col1);
  epsilon += epsilonfunc(col2);
  epsilon += epsilonfunc(col3);
  epsilon += epsilonfunc(col4);
  epsilon += epsilonfunc(col5);
  epsilon += epsilonfunc(col6);
  epsilon += epsilonfunc(col7);
  epsilon += epsilonfunc(col8);
  epsilon += epsilonfunc(col9);
  epsilon += epsilonfunc(col10);
  epsilon += epsilonfunc(col11);
  epsilon += epsilonfunc(col12);

  let digit1 = parseInt(gamma, 2);
  let digit2 = parseInt(epsilon, 2);
  let sum = digit1 * digit2;
  console.log("Answer to part 1 is " + sum);
}

function gammafunc(string) {
  let length = string.length;
  let countzero = 0;
  let countone = 0;

  for (let i = 0; i < length; i++) {
    if (string.charAt(i) === "1") {
      countone++;
    }
    if (string.charAt(i) === "0") {
      countzero++;
    }
  }
  if (countone > countzero) {
    return "1";
  } else {
    return "0";
  }
}

function epsilonfunc(string) {
  let length = string.length;
  let countzero = 0;
  let countone = 0;

  for (let i = 0; i < length; i++) {
    if (string.charAt(i) === "1") {
      countone++;
    }
    if (string.charAt(i) === "0") {
      countzero++;
    }
  }
  if (countone < countzero) {
    return "1";
  } else {
    return "0";
  }
}

function second(data) {
  let x = [];
  let arr = [];
  arr = data.split("\n");
  let an = func(arr);
  console.log(an);
}

function func(arr) {
  console.log(arr);
  let count1;
  let count0;
  let i = 0;
  arr.forEach((element) => {
    if (element.charAt(i) === "1") {
      count1++;
    } else {
      count0++;
    }
    i++;
    if (arr.length === i) {
      if (count1 > count0) {
        arr.forEach((element) => {});
      }
    }
  });
}
