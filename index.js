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
