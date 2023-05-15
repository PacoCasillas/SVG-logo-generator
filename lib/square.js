// Import the Shape class
const Shape = require('./shapes');

// Define the Square class that inherits from Shape
class Square extends Shape {
  // Constructor takes in x, y, fill, logoText, textColor, shapeColor attributes
  constructor(x, y, fill, logoText, textColor, shapeColor) {
    // Call the parent constructor with fill attribute
    super(fill);
    this.x = x;
    this.y = y;
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.fill = fill; 
  }

  // Generate the SVG string for this square
  generate() {
    // Get the attributes from the parent Shape class
    const attributes = this.getAttributes();
    // Define the variables needed for the SVG string
    const { x, y, logoText, textColor, shapeColor} = this;
    // Return the SVG string with the rect and text elements
    return `
      <rect x="${x}" y="${y}" width="300px" height="200px" ${attributes} />
      <text x="150" y="110" text-anchor="middle" fill="${textColor}" font-size="60px" font-family="sans-serif">${logoText}</text>
    `;
  }
}

// Export the Circle square
module.exports = Square;