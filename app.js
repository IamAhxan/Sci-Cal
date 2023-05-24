let input = document.getElementById("inputBox");
console.log(input);
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML == "sin") {
      string = Math.sin(string);
      input.value = string;
    } else if (e.target.innerHTML == "cos") {
      string = Math.cos(string);
      input.value = string;
    } else if (e.target.innerHTML == "log") {
      string = Math.log(string);
      input.value = string;
    } else if (e.target.innerHTML == "tan") {
      string = Math.tan(string);
      input.value = string;
    } else if (e.target.innerHTML == "x!") {
      input.value = string;
    } else if (e.target.innerHTML == "x²") {
      input.value = string;
    } else if (e.target.innerHTML == "√") {
      input.value = string;
    } else if (e.target.innerHTML == "π") {
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

function pow() {
  string = Math.pow(string, 2);
}

function sqrt() {
  string = Math.sqrt(string, 2);
}

function pi() {
  string = 3.14159265359;
}


function fact() {
  var i, num, f;
  f = 1;
  num = string;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  string = f;
}
