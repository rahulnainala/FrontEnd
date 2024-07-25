const numbers = [1, 2, 3, 4];

const count = getMax(numbers);

console.log(count);

// function getMax(array) {
//     if (array.length === 0) return undefined;
//     let maxVar = array[0];
//     for (let index in array) {
//       if (array[index] > maxVar) {
//         maxVar = array[index];
//       }
//     }
//     return maxVar;
//   }

function getMax(array) {
  if (array.length === 0) return undefined;
  return array.reduce((a, b) => (a > b ? a : b));
}
