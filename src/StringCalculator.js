import React from 'react';
import './App.css';
import { SumUp } from './util';

function StringCalculator() {
  const [sumValue, setSumValue] = React.useState(0);
  const [inputText, setInputText] = React.useState(''); // Input field value

  const handleAdd = () => {
    const sum = SumUp(inputText);
    console.log('=======> ', sum);
    setSumValue(sum);
    setInputText(''); // Clear input field after adding
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter Text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <div data-testid="sumValue">Sum: {sumValue}</div>
    </div>
  );
}

export default StringCalculator;
