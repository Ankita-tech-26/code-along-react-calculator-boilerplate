import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = ({ onButtonClick }) => {
  const buttons = [
    '7', '8', '9', '/', 
    '4', '5', '6', '*', 
    '1', '2', '3', '-', 
    '0', 'C', '=', '+'
  ];

  return (
    <div className="button-panel">
      {buttons.map(button => (
        <Button 
          key={button} 
          name={button} 
          onClick={onButtonClick} 
        />
      ))}
    </div>
  );
};

export default ButtonPanel;
