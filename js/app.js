let a = 10;
let b = 6;
let c = "10";

// operators
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

// urinary operators
console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(--a);

// comparison
console.log(a < b);
console.log(a > b);
console.log(a == b);
console.log(a == c);
console.log(a === c);

// control flow

// if and else statement
let score = 80;

if (score >= 80) {
  console.log("You had A");
} else if (score >= 75) {
  console.log("You had B");
} else if (score >= 70) {
  console.log("You had B");
} else if (score >= 65 && score < 70) {
  console.log("You had C+");
} else if (score >= 60 && score < 65) {
  console.log("You had C");
} else if (score >= 55 && score < 60) {
  console.log("You had D+");
} else if (score >= 50 && score < 55) {
  console.log("You had D");
} else if (score < 60 && score < 50) {
  console.log("You had E");
}

// switch case
const gender = "Male";

switch (gender) {
  case "Male":
    console.log("Go to the male washroom");
    break;
  case "Female":
    console.log("Go to the female washroom");
    break;
  default:
    console.log("No washroom for you");
    break;
}

// for loop
for (let count = 1; count < 10; count++) {
  console.log(count);
}

// while loop
let count = 1;

while (count < 10) {
  console.log(count);
  count++;
}
