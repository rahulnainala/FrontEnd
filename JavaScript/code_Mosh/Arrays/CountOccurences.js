const numbers = [1, 2, 3, 3, 4];

const count = countOccurrences(numbers, -1);

console.log(count); // Should print 1

function countOccurrences(array, searchElement) {
  const output = array.reduce((prev, curr) => {
    if (curr === searchElement) prev++;
    return prev;
  }, 0);
  return output;
}
