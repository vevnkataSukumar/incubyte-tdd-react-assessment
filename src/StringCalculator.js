import React from 'react';
import './App.css';
import { SumUp } from './util';

function StringCalculator() {
  const [numberArr, setNumberArr] = React.useState([]);
  const [inputText, setInputText] = React.useState(''); // Input field value

  const handleAdd = () => {
    if (!inputText.trim()) {
      setInputText(''); // Optional: Clear the input field, even if it's empty
      return;
    }
    const numArray = SumUp(inputText);
    console.log('=======> ', numArray);
    setNumberArr(numArray);
    setInputText(''); // Clear input field after adding
  };

  const sum = numberArr?.reduce((total, num) => total + Number(num), 0);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <div data-testid="sum">Sum: {sum}</div>
    </div>
  );
}

export default StringCalculator;
