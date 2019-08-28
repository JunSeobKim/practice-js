// String
const what = "JunSeob";
// Boolean
const b = true;
const c = false;
//Number
const wat = 1234567890;
//float
const a = 26.613;
//Array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);

console.log(daysOfWeek[3]);
//Object
const junseobInfo = {
  name: "JunSeob",
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "Darknight"],
  pet: [{ name: "mozzi", fatty: false }, { name: "neo", fatty: true }]
};

console.log(junseobInfo.pet[1].name);

//function
function sayHello(a, b) {
  console.log(a, b);
}

sayHello("junseob", "hello!");

// function_2
function sayHello2(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello2("JunSeob", 15);

console.log(greetNicolas);

// function_3
const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multi: function(a, b) {
    return a * b;
  },
  squa: function(a, b) {
    return a ** b;
  },
  divi: function(a, b) {
    return a / b;
  }
};

let ab = calculator.plus(5, 6);
console.log(ab);
ab = calculator.minus(5, 6);
console.log(ab);
ab = calculator.multi(5, 6);
console.log(ab);
ab = calculator.squa(5, 6);
console.log(ab);
ab = calculator.divi(5, 6);
console.log(ab);

// js dom functions (DOCUMENT OBJECT MODEL)
//const title = document.querySelector("#title");

// console.dir(title);

// title.innerHTML = "Hi! From JS";
// title.style.color = "red";

// document.title = "I own you now";

// console.dir(document);

//function handleClick() {
//  title.style.color = "blue";
//}

//title.addEventListener("click", handleClick);

//if
if ("10" == 10) {
  console.log("hi");
} else {
  console.log("ho");
}

if ("10" === 10) {
  console.log("hi");
} else {
  console.log("ho");
}

// true && true == true;
// true && false == false;
// true || false == true;
// false || false == false;

// const age = prompt("how old are you");

// if (age >= 18 && age <= 21) {
//   console.log("you can drink but you should not");
// } else if (age > 21) {
//   console.log("you can drink");
// } else {
//   console.log("you cant");
// }

//       function practice
// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#55efc4";

// function handleClick() {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick);
// }
// init();

// function pressKeydown() {
//   console.log("keeee");
// }

// window.addEventListener("keydown", pressKeydown);

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  //   const hasClass = title.classList.contains(CLICKED_CLASS);
  //   if (!hasClass) {
  //     title.classList.add(CLICKED_CLASS);
  //   } else {
  //     title.classList.remove(CLICKED_CLASS);
  //   }
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
