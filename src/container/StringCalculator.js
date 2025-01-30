import React from 'react';
import '../styles/StringCalculator.css'
import { SumUp } from '../utils';

function StringCalculator() {
  // const [numberArr, setNumberArr] = React.useState([]);
  const [inputText, setInputText] = React.useState(''); // Input field value
  const [sumVal, setSumVal] = React.useState(0);

  const handleAdd = () => {
    if (!inputText.trim()) {
      setInputText(''); // Optional: Clear the input field, even if it's empty
      return;
    }
    const sumResult = SumUp(inputText);
    setSumVal(sumResult);
    // setNumberArr(numArray);
    setInputText(''); // Clear input field after adding
  };

  // const sum = typeof numberArr === 'string' ? numberArr : numberArr?.reduce((total, num) => total + num, 0);

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
        <button onClick={handleAdd} className={'button'}>Add</button>
        <div data-testid="sum" className={'sumText'}>Sum: {sumVal}</div>
      </div>
    </div>
  );
}

export default StringCalculator;
