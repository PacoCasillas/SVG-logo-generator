const inquirer = require('inquirer');
const fileSystem = require('fs');

// call the circle file
const Circle = require('./lib/circle');
const Shape = require('./lib/shapes');

// const shapes = require('./lib/shapes.js');

// // 

// match a string that represents a 3 or 6 digit hexadecimal color value starting with a #
// '^' match the start of the string, '#' symbol at the beggining of the color value
// () group of characters to match
// [A-Fa-f0-9] matches any uppercase and lowercase letter A-F or digit 0 to 9 
const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|[a-zA-Z]+$/;

inquirer.prompt([
    
    // 3 characters input 
{
    type: 'input',
    name: 'logoText',
    message: 'Enter up to 3 characters for the text inside your logo',
    validate: input => input.length <= 3
},

    // color text keyword or hexadecimal 
{
    type: 'input',
    name: 'color',
    message: 'Enter a color name or a hexadecimal value for the color of the text (e.g. #FF0000 or green)',
    validate: input => colorRegex.test(input)
},
    // shape of the logo 
{
    type: 'list',
    name: 'shape',
    message: 'What shape background would you like your logo to be?' ,
    choices: [
        'triangle',
        'circle',
        'square',
    ],
},
    // shape color background keyword or hexadecimal 
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color name or a hexadecimal value for the shape background (e.g. #FF0000 or green)',
    validate: (input) => colorRegex.test(input),
},
])

// When all the prompts are answered pass the answers into the generateLogo function 
.then(answers => {
    console.log(answers)
    const logoContent = generateLogo(answers);

    // Create logo elements based on user input
    let logoElements = '';
    const logoText = answers.logoText;
    const textColor = answers.color;

    // call fs module to write the file that will include the logo
    // do a validation and return the rrer if there is one

    fileSystem.writeFile('index.html', logoContent, (err) =>
        err ? console.log(err) : console.log('Logo was created successfully! Check index.html')

    );
});

// OOP put this in a class 
// genereateLogo function with all the input passed onto it
const generateLogo = ({logoText, color, shape, shapeColor}) => {
    // Create shape object based on shape selected
    let shapeObj;
    switch (shape) {
      case "circle":
        shapeObj = new Circle(100, 100, 100, shapeColor, logoText, color);
        break;
      case "rect":
        shapeObj = new Shape("rect", "#00FF00", 50, 50, 100, 100);
        break;
      case "polygon":
        shapeObj = new Shape("polygon", "#0000FF", "100,10 150,90 50,90");
        break;
    }
  
    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>

  
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            ${shapeObj.generate()}
        </svg>
  

      </html>`;
  };
