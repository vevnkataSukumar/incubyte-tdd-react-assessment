import React from 'react';
import './StringCalculator.css';
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
    setNumberArr(numArray);
    setInputText(''); // Clear input field after adding
  };

  const sum = typeof numberArr === 'string' ? numberArr : numberArr?.reduce((total, num) => total + num, 0);

  return (
    <div className={'container'}>
      <h2 className={'header'}>String Calculator</h2>
      <div className={'card'}>
        <input
          type="text"
          placeholder="Enter Text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className={'input'}
        />
        <button onClick={handleAdd} className={'button'}>Sum Up</button>
        <div data-testid="sum" className={'sumText'}>Sum: {sum}</div>
      </div>
    </div>
  );
}

export default StringCalculator;
