import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from './StringCalculator';

describe('StringCalculator', () => {
  test('should return 0 when an empty string is passed', () => {
    render(<StringCalculator />);

    // // Initially, the sum should be 0
    // const sumElement = screen.getByTestId('sumValue');
    // expect(sumElement).toHaveTextContent('0');

    // // Get the input field and buttons
    // const inputField = screen.getByPlaceholderText('Enter Text');
    // const addButton = screen.getByText('Add');

    // Initially, the sum should be 0
    const sumElement = screen.getByTestId('sum');
    expect(sumElement).toHaveTextContent('Sum: 0');

    // Get the input field and button
    const inputField = screen.getByPlaceholderText('Enter Text');
    const addButton = screen.getByText('Add');

    // Simulate entering empty string and clicking Add
    fireEvent.change(inputField, { target: { value: '' } });
    fireEvent.click(addButton);
    expect(sumElement).toHaveTextContent('Sum: 0');

    // Simulate entering "1" and clicking Add
    fireEvent.change(inputField, { target: { value: '1' } });
    fireEvent.click(addButton);
    expect(sumElement).toHaveTextContent('Sum: 1'); // 1

    // Simulate entering "1,2" and clicking Add
    fireEvent.change(inputField, { target: { value: '1,2' } });
    fireEvent.click(addButton);
    expect(sumElement).toHaveTextContent('Sum: 3'); // 1 + 2 = 3
    

    // Simulate entering "2,5,6,7,8,10" and clicking Add
    fireEvent.change(inputField, { target: { value: '2,5,6,7,8,10' } });
    fireEvent.click(addButton);
    expect(sumElement).toHaveTextContent('Sum: 38');

  });
});