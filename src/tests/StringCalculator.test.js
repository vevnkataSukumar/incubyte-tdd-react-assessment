import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../container/StringCalculator';

describe('StringCalculator', () => {
  test('should return 0 when an empty string is passed', () => {
    render(<StringCalculator />);

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

    // Simulate entering ";\n1;2" and clicking Add
    fireEvent.change(inputField, { target: { value: '//;\n1;2' } });
    fireEvent.click(addButton);
    expect(sumElement).toHaveTextContent('Sum: 3');

    // Simulate entering "//*\n2*3" and clicking Add
    fireEvent.change(inputField, { target: { value: '//*\\n2*3' } });
    fireEvent.click(addButton);
    expect(sumElement).toHaveTextContent('Sum: 6');

    // Simulate entering "2,5,6,7,8,10001" and clicking Add and ignorig the values which are grater than 1000
    fireEvent.change(inputField, { target: { value: '2,5,6,7,8,10001' } });
    fireEvent.click(addButton);
    expect(sumElement).toHaveTextContent('Sum: 28');

    //test case for string with numbers in it and removing special charecters other than numbers, comma and - from it and returning the sum of the numbers
    fireEvent.change(inputField, { target: { value: 'abc123!@#,45de*67?890' } });
    fireEvent.click(addButton);
    expect(sumElement).toHaveTextContent('Sum: 1125');


    //test case for string with numbers in it and removing special charecters other than numbers, comma and - from it and returning the sum of the numbers
    fireEvent.change(inputField, { target: { value: '[*][%]\n1*2%3' } });
    fireEvent.click(addButton);
    expect(sumElement).toHaveTextContent('Sum: 6');

    // test case for string with negative numbers in it and removing special charecters other than numbers, comma and - from it and returning the sum of the numbers
    fireEvent.change(inputField, { target: { value: '$$$1,23%%%,[[__))-3]' } });
    fireEvent.click(addButton);
    expect(sumElement).toHaveTextContent('Sum: negatives not allowed');
  });
});