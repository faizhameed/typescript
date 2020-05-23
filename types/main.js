var count = 5;
count = "a";
var a;
a = 1;
a = true;
a = "a"; // no errors
/* but if we dd ;ike this */
var b;
b = 1;
b = "hit"; // warns again
// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// best practice is this
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var backGroundColor = Color.Blue;
