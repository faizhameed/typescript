class Point3 {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    // to make it optional you
    // write x?:number with '?' mark
    this.x = x;
    this.y = y;
  }

  draw() {
    //...
    console.log("X " + this.x + ", Y " + this.y);
  }

  getDistance(another: Point3) {
    //...0
  }
}

let point3 = new Point3(4, 5);
point3.x = 6; // its not accessible
point3.draw();
