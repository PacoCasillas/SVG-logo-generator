// Define the Shape class that other shapes will inherit from
class Shape {
  // Constructor takes in fill attribute
  constructor(fill) {
    this.fill = fill;
  }

  // Get the fill attribute for this shape
  getAttributes() {
    return `fill="${this.fill}"`;
  }
}

// Export the Shape class
module.exports = Shape;