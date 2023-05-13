class Circle {
    constructor(x, y, radius, color, text, textColor) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.text = text;
      this.textColor = textColor;
    }
  
    generate() {
      return `
        <circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}"></circle>
        <text x="${this.x}" y="${this.y}" fill="${this.textColor}" text-anchor="middle" font-size="50">${this.text}</text>
      `;
    }
  }
  
  module.exports = Circle;

//   class Circle extends Shapes {
//     constructor(cx, cy, r, fontSize, textXLocation, textYLocation, textAnchorPosition, inputShapeColorFill, inputText, inputTextColorFill) {
//         super();
//         this.cx = cx;
//         this.cy = cy;
//         this.r = r;

//         this.textXLocation = textXLocation;
//         this.textXLocation = textYLocation; 
//         this.fontSize = fontSize;
//         this.textAnchorPosition = textAnchorPosition;

//         this.inputShapeColorFill = inputShapeColorFill;
//         this.inputText = inputText;
//         this.inputTextColorFill = inputTextColorFill;

//     }

//     generate() {
//         super.generate(cx, cy, r, inputShapeColorFill, textXLocation, textYLocation, inputText, fontSize, textAnchorPosition, inputTextColorFill)
//         let cx = 150;
//         let cy = 125;
//         let r = 90;

//         let fontSize = 60;
//         let textXLocation = 150;
//         let textYLocation = 125;
//         let textAnchorPosition = ('middle');

//         let inputShapeColorFill = (inputShapeColor);
//         let inputText = (inputText);
//         let inputTextColorFill = (inputTextColor);


//     }
        
// }