const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 0);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid Offset");
  } else {
    const out = [...array];
    const element = out.splice(index, 1)[0];
    console.log(element);
    out.splice(position, 0, element);
    return out;
  }
}
