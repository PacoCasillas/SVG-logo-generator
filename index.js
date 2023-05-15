const inquirer = require('inquirer');
const fileSystem = require('fs');

// import classes from different files
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');


// regex to match a string that represents a 3 or 6 digit hexadecimal color value starting with a #
// '^' match the start of the string, '#' symbol at the beggining of the color value
// () group of characters to match
// [A-Fa-f0-9] matches any uppercase and lowercase letter A-F or digit 0 to 9 
const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|[a-zA-Z]+$/;

// prompt user for input 
inquirer.prompt([
    // input for logo text with maximum 3 characters 
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to 3 characters for the text inside your logo',
        validate: input => input.length <= 3
    },
    // input for color in keyword or hexadecimal 
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color name or a hexadecimal value for the color of the text (e.g. #FF0000 or green)',
        validate: input => colorRegex.test(input)
    },
    // list of shape choices for logo background 
    {
        type: 'list',
        name: 'shape',
        message: 'What shape background would you like your logo to be?',
        choices: [
            'triangle',
            'circle',
            'square',
        ],
    },
    // input for shape background color in keyword or hexadecimal 
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color name or a hexadecimal value for the shape background (e.g. #FF0000 or green)',
        validate: input => colorRegex.test(input),
    },
])

// When all the prompts are answered pass the answers into the generateLogo function 
.then(answers => {
    console.log(answers);

    // Create logo elements based on user input
    const logoText = answers.logoText;
    const textColor = answers.textColor;
    const shapeType = answers.shape;
    const shapeColor = answers.shapeColor;

    // Create shape object based on shape selected
let shapeObj;
switch (shapeType) {
    case "circle":
        shapeObj = new Circle(100, 100, 100, shapeColor, logoText, textColor);
        break;
    case "square":
        shapeObj = new Square(0, 0, shapeColor, logoText, textColor);
        break;
    case "triangle":
        shapeObj = new Triangle(150, 0, 0, 200, 300, 200, shapeColor, logoText, textColor);
        break;
}

    // call fs module to write the file that will include the logo
    fileSystem.writeFile('index.html', generateLogo(shapeObj), (err) =>
        err ? console.log(err) : console.log('Logo was created successfully! Check index.html')
    );
});


const generateLogo = (shapeObj) => {
    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>

  
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            ${shapeObj.generate()}
        </svg>
  

      </html>`;
  };
