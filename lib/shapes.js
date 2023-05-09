// making a class of Shapes that will incline square, circle and triangle
class Shapes {
    // constructor function for the information that will be passed down into the shapes 
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // this will eventully include fill(color) and stroke(outline)
    }

    generate() {
        let x = 10;
        let y = 10;
        let.width = 
        let.height = 
    }
}

// making a class Square that will extend from Shapes 
class Square extends Shapes {
    // constructor function that create the shape of a square
    constructor(x, y, width, height) {
        // super will actually call that data
        super(x, y, width, height);
    }
    generate() {
        super.generate(this.x, this.y, this.width, this.height)
    }
}

let square = new Square(10, 10, 30, 30)

// making a class Circle that will extend from Shapes
class Circle extends Shapes {
    constructor(x, y, width, height, rx, ry) {
        super(x, y, width, height);
        this.rx = rx;
        this.ry = ry;
    }
    generate() {
        super.generate(this.x, this.y, this.width, this.height)
    }
        
}

//making a class Triangle that will extend from shapes
class Triangle extends Shapes {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }
    generate() {
        super.generate(this.x, this.y, this.width, this.height)
    }
        
}

