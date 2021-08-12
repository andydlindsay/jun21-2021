class Rectangle {
  constructor(length, width) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }
}

const myRectangle = new Rectangle(4, 3);
console.log(myRectangle.area());

class Prism extends Rectangle {
  constructor(length, width, height) {
    super(length, width);
    this.height = height;
  }

  volume() {
    return this.area() * this.height;
  }
}

const myPrism = new Prism(3, 4, 5);
console.log(myPrism.volume());
