//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 and 5 => FizzBuzz
//not divisible by 3 or 5 => return the number
//Not a Number => "Not a number"

const output = fizzBuss(5);
console.log(output);
function fizzBuss(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  else return input;
}
