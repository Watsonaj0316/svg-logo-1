
test('Circle', () => {
    expect(true).toBe(true);
});

test('Square', () => {
  expect(true).toBe(true);
});

test('Triangle', () => {
  expect(true).toBe(true);
});

// test.mjs
import { Circle, Square, Triangle } from './shapes.mjs';

describe('Circle', () => {
  test('renders correctly', () => {
    // Create a new Circle instance
    const shape = new Circle();
    
    // Set the color
    const color = 'blue';
    shape.setColor(color);
    
    // Call the render method and test the output
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
  });
});

describe('Square', () => {
  test('renders correctly', () => {
    // Create a new Square instance
    const shape = new Square();

    // Set the color
    const color = 'red';
    shape.setColor(color);

    // Call the render method and test the output
    expect(shape.render()).toEqual(`<rect x="50" y="50" height="200" width="200" fill="${color}"/>`);
  });
});

describe('Triangle', () => {
  test('renders correctly', () => {
    // Create a new Triangle instance
    const shape = new Triangle();

    // Set the color
    const color = 'green';
    shape.setColor(color);

    // Call the render method and test the output
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
  });
});
