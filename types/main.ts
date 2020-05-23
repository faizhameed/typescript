let count = 5;
count = "a";

let a;
a = 1;
a = true;
a = "a"; // no errors

/* but if we dd ;ike this */

let b: number;

b = 1;
b = "hit"; // warns again

// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// best practice is this
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}
let backGroundColor = Color.Blue;
