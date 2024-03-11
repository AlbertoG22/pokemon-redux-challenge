import React from 'react';
import '../styles/components/YellowField.css';
import { capitalizeFirstLetter } from '../utils/format';

export const YellowField = ({ text, colNum }) => {
  return (
    <div className={`field-content text-center col-${ 12 / colNum }`}>
      { capitalizeFirstLetter(text) }
    </div>
  );
};
