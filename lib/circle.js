// Import the Shape class
const Shape = require('./shapes');

// Define the Circle class that inherits from Shape
class Circle extends Shape {
  // Constructor takes in cx, cy, r, fill, logoText, textColor, shapeColor attributes
  constructor(cx, cy, r, fill, logoText, textColor, shapeColor) {
    // Call the parent constructor with fill attribute
    super(fill);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  // Generate the SVG string for this circle
  generate() {
    // Get the attributes from the parent Shape class
    const attributes = this.getAttributes();
    // Define the variables needed for the SVG string
    const { cx, cy, r, logoText, textColor, shapeColor } = this;
    // Return the SVG string with the circle and text elements
    return `
      <circle cx="${cx}" cy="${cy}" r="${r}" ${attributes} />
      <text x="100" y="120" text-anchor="middle" fill="${textColor}" font-size="60px" font-family="sans-serif">${logoText}</text>
    `;
  }
}

// Export the Circle class
module.exports = Circle;