const marks = [80, 80, 90];

//Average

//1-59 : F
//60-69:D
// 70-79:C
// 80-89:B
// 90-100 :A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let total_marks = 0;
  let average = 0;
  for (let mark of marks) total_marks += mark;
  average = total_marks / 3;
  {
    if (average < 60) return "F";
    if (average < 70) return "D";
    if (average < 80) return "C";
    if (average < 90) return "B";
    if (average < 100) return "A";
  }
}
