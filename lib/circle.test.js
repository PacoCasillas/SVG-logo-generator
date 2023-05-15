// Import the Circle class
const Circle = require('./circle');

// Test the generate() method of the Circle class
describe('Circle', () => {
    test('renders an SVG string', () => {
      // Create a new Circle instance with coordinates, radius, shape fill color, logo text, text color
      const circle = new Circle(50, 50, 25, '#fff', 'My Logo', '#000');
      // Call the generate() method
      const svg = circle.generate();
      // Assert that the SVG string is a string
      expect(typeof svg).toBe('string');
      // Assert that the SVG string contains a circle element
      expect(svg).toMatch(/<circle/);
      // Assert that the SVG string contains a text element
      expect(svg).toMatch(/<text/);
    });
  });