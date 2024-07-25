const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
  const Output = [];
  for (min; min <= max; min++) Output.push(min);
  return Output;
}
