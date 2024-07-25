function Sum(...args) {
  if (Array.isArray(args[0])) {
    let total = 0;
    for (let index of args[0]) {
      total += index;
    }
    console.log(total);
  } else {
    let total = 0;
    for (let index of args) {
      total += index;
    }
    console.log(total);
  }
}

Sum([1, 2, 3, 4, 5]);
Sum(1, 2, 3, 4, 5);
