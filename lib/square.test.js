const Square = require('./square');

// Test the Square class
describe('Square', () => {
  test('generate() returns the correct SVG string', () => {
    // Create a new Square instance with the following attributes:
    // x=0, y=0, shape fill color, logo text, text color
    const square = new Square(0, 0, '#FF0000', 'Test', '#FFFFFF');
    // Call the generate() method
    const svg = square.generate();
    // Assert that the SVG string is a string
    expect(typeof svg).toBe('string');
    // Assert that the SVG string contains a rectangle element
    expect(svg).toMatch(/<rect/);
    // Assert that the SVG string contains a text element
    expect(svg).toMatch(/<text/);
  });
});