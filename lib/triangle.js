// Import the Shape class
const Shape = require('./shapes');

// Define the Triangle class that inherits from Shape
class Triangle extends Shape {
  // Constructor takes in fill, x1, y1, x2, y2, x3, y3, logoText, and textColor attributes
  constructor(x1, y1, x2, y2, x3, y3, fill, logoText, textColor, shapeColor) {
    // Call the parent constructor with fill attribute
    super(fill);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  // Generate the SVG string for this triangle
  generate() {
    // Get the attributes from the parent Shape class
    const attributes = this.getAttributes();
    // Define the variables needed for the SVG string
    const { x1, y1, x2, y2, x3, y3, logoText, textColor, shapeColor} = this;
    // Return the SVG string with the circle and text elements
    return `
      <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" ${attributes} />
      <text x="150" y="140" text-anchor="middle" fill="${textColor}" font-size="60px" font-family="sans-serif">${logoText}</text>
    `;
  }
}

// Export the Triangle class
module.exports = Triangle;