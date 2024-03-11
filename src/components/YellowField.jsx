import React from 'react';
import '../styles/components/YellowField.css';
import { getColumnSizeClass } from '../utils/layoutHelpers';

export const YellowField = ({ text }) => {

  return (
    <div className={`field-content text-center`}>
        { text.charAt(0).toUpperCase() + text.slice(1) }
    </div>
  );
};
