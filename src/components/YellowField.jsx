import React from 'react';
import '../styles/components/YellowField.css';
import { capitalizeFirstLetter } from '../utils/format';

export const YellowField = ({ text }) => {

  return (
    <div className={`field-content text-center`}>
      { capitalizeFirstLetter(text) }
    </div>
  );
};
