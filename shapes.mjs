// shapes.mjs

class Circle {
  constructor() {}

  render() {
    return '<svg width="300" height="300"><circle cx="50%" cy="50%" r="100" fill="blue" /></svg>';
  }
}

class Square {
  constructor() {}

  render() {
    return '<svg width="300" height="300"><rect x="50" y="50" height="200" width="200" fill="red" /></svg>';
  }
}

class Triangle {
  constructor() {}

  render() {
    return '<svg height="200" width="300"><polygon points="0,200 300,200 150,0" fill="green" /></svg>';
}

}

function generateSVG(color, shape, text) {
  let shapeElement;
  switch (shape) {
      case 'circle':
          shapeElement = new Circle();
          break;
      case 'square':
          shapeElement = new Square();
          break;
      case 'triangle':
          shapeElement = new Triangle();
          break;
      default:
          throw new Error('Invalid shape');
  }

  const svg = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
                  ${shapeElement.render()}
              </svg>`;
  return svg;
}

export { generateSVG };
