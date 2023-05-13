// // making a class of Shapes that will incline square, circle and triangle
// class Shape {
//     // constructor function for the information that will be passed down into the shapes 
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         //pass in the inquierer input (color, text, etc )

//         // this will eventully include fill(color) and stroke(outline)
//     }

//     // values shared between all shapes at the point of creation
//     // generate() {
//     //     // let x = 150;
//     //     // let y = 125;
//     //     // let width = 300;
//     //     // let height = 200;
//     // }
// }

// // making a class Square that will extend from Shapes 
// class Square extends Shape {
//     // constructor function that extends the class from shapes to create the a square (fill)
// //     constructor(x, y, width, height) {
// //         // super will actually call that data
// //         super(x, y, width, height);
// //     }
// //     generate() {
// //         super.generate(this.x, this.y, this.width, this.height)
// //     }
// }

// let square = new Square(0, 50, 200, 200)

// // // making a class Circle that will extend from Shapes


// // //making a class Triangle that will extend from shapes
// // class Triangle extends Shapes {
// //     constructor(x, y, width, height) {
// //         super(x, y, width, height);
// //     }
// //     generate() {
// //         super.generate(this.x, this.y, this.width, this.height)
// //     }
        
// // }

// // // I believe im going to need to export using
// module.exports = Shape;

class Shape {
    constructor(type, fill, ...params) {
      this.type = type;
      this.fill = fill;
      this.params = params;
    }
  
    generate() {
      let attributes = `fill="${this.fill}"`;
      let shape = '';
  
      switch (this.type) {
        case 'circle':
          const [cx, cy, r] = this.params;
          shape = `<circle cx="${cx}" cy="${cy}" r="${r}" ${attributes} />`;
          break;
        case 'rect':
          const [x, y, width, height] = this.params;
          shape = `<rect x="${x}" y="${y}" width="${width}" height="${height}" ${attributes} />`;
          break;
        case 'polygon':
          const points = this.params[0];
          shape = `<polygon points="${points}" ${attributes} />`;
          break;
      }
  
      return shape;
    }
  }
  
  class Circle extends Shape {
    constructor(cx, cy, r, fill) {
      super('circle', fill, cx, cy, r);
    }
  }
  
  class Rectangle extends Shape {
    constructor(x, y, width, height, fill) {
      super('rect', fill, x, y, width, height);
    }
  }
  
  class Polygon extends Shape {
    constructor(points, fill) {
      super('polygon', fill, points);
    }
  }
  
//   module.exports = { Shape, Circle, Rectangle, Polygon };

module.exports = Shape;