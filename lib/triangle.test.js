const Triangle = require('./triangle');

// Test the Triangle class
describe('Triangle', function () {
  test('should generate an SVG string with polygon and text elements', function () {
    // Triangle instance with these attributes:
    // x1=0, y1=0, x2=300, y2=0, x3=150, y3=200, text color, logo text, shape color
    const triangle = new Triangle(0, 0, 300, 0, 150, 200, '#FF0000', 'Test', '#FFFFFF');
    // Call the generate() method
    const svg = triangle.generate();
    // Assert that the SVG string contains a polygon (triangle) element
    expect(svg).toMatch(/<polygon/);
    // Assert that the SVG string contains a text element
    expect(svg).toMatch(/<text/);
  });
});