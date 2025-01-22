import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should add numbers and display the sum', () => {
    render(<App />);

    // Initially, the sum should be 0
    const sumElement = screen.getByTestId('sum');
    expect(sumElement).toHaveTextContent('0');

  });
});