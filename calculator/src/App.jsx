import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

const App = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (buttonName) => {
    if (!isNaN(buttonName)) {
      handleNumber(buttonName);
    } else {
      handleOperator(buttonName);
    }
  };

  const handleNumber = (number) => {
    if (currentValue === '0') {
      setCurrentValue(number);
    } else {
      setCurrentValue(currentValue + number);
    }
  };

  const handleOperator = (operator) => {
    switch (operator) {
      case 'C':
        clear();
        break;
      case '=':
        calculate();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        setOperator(operator);
        setPreviousValue(currentValue);
        setCurrentValue('0');
        break;
      default:
        break;
    }
  };

  const clear = () => {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  const calculate = () => {
    if (operator && previousValue) {
      const current = parseFloat(currentValue);
      const previous = parseFloat(previousValue);
      let result;

      switch (operator) {
        case '+':
          result = previous + current;
          break;
        case '-':
          result = previous - current;
          break;
        case '*':
          result = previous * current;
          break;
        case '/':
          result = previous / current;
          break;
        default:
          return;
      }

      setCurrentValue(String(result));
      setPreviousValue(null);
      setOperator(null);
    }
  };

  return (
    <div className="app">
      <Display value={currentValue} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;

