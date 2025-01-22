import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from './StringCalculator';

describe('StringCalculator', () => {
  test('should return 0 when an empty string is passed', () => {
    render(<StringCalculator />);

    // Initially, the sum should be 0
    const sumElement = screen.getByTestId('sumValue');
    expect(sumElement).toHaveTextContent('0');

    // Get the input field and buttons
    const inputField = screen.getByPlaceholderText('Enter Text');
    const addButton = screen.getByText('Add');
    
    // Simulate adding the first number
    fireEvent.change(inputField, { target: { value: '' } });
    fireEvent.click(addButton);

    // Check if the sum is 5 after the first click
    expect(sumElement).toHaveTextContent(0);
  });
});