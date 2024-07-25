showStars(10);

function showStars(rows) {
  let pattern = "";
  for (let x = 1; x <= rows; x++) {
    pattern += "*";
    console.log(pattern);
  }
}
