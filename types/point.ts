export class Point {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    //...
    console.log("X " + this._x + ", Y " + this._y);
  }

  getDistance(another: Point) {
    //...0
  }

  get x() {
    return this._x;
  }

  set x(x: number) {
    if (x < 0) {
      throw new Error("x cannot be less than zero");
    } else {
      this._x = x;
    }
  }
}
