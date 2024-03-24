import fs from 'fs';
import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'color',
        message: 'Select a color for your logo:',
        choices: ['red', 'blue', 'green'],
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo:',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for your logo:',
    },
    {
        type: 'input',
        name: 'filename',
        message: 'Enter the filename to save the logo as (without extension):',
    },
];

function generateSVG(color, shape, text) {
    let shapeElement = '';
    let textX = 0;
    let textY = 0;
    
    switch (shape) {
        case 'circle':
            shapeElement = `<circle cx="50%" cy="50%" r="100" fill="${color}" />`;
            textX = '50%';
            textY = '50%';
            break;
        case 'square':
            shapeElement = `<rect x="50" y="50" height="200" width="200" fill="${color}" />`;
            textX = '150';
            textY = '150';
            break;
        case 'triangle':
            shapeElement = `<polygon points="0,200 300,200 150,0" fill="${color}" />`;
            textX = '150';
            textY = '100';
            break;
        default:
            // Handle unknown shape
            break;
    }

    return `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                ${shapeElement}
                <text x="${textX}" y="${textY}" font-size="60" text-anchor="middle" fill="black">${text}</text>
            </svg>`;
}

async function generateLogo() {
    try {
        const answers = await inquirer.prompt(questions);
        const svgContent = generateSVG(answers.color, answers.shape, answers.text);
        const filename = `${answers.filename}.svg`;
        fs.writeFileSync(filename, svgContent);
        console.log(`Logo successfully saved as ${filename}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

generateLogo();
