const numbers = [1, 2, 3, 4, 5];
Includes(3, numbers);
function Includes(number, Array) {
  for (let key of Array) {
    if (number === Array[key]) {
      console.log(Array[key], true);
    }
  }
}
