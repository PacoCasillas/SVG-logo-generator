const Shape = require('./shapes');

// Test the Shape class
describe('Shape', () => {
  test('getAttributes() returns the correct attributes', () => {
    // Create a new Shape instance with a random color string
    const colorString = '#123456';
    const shape = new Shape(colorString);

    // Call the getAttributes() method
    const attributes = shape.getAttributes();

    // Check that the returned attributes string contains the color string
    expect(attributes).toContain(colorString);
  });
});





