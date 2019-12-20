import React from 'react';

import './error-indicator.css';
import icon from './death-star.png'

const ErrorIndicator = () => {
  return (
    <div className="error">
      <img src={icon} alt='error_icon'></img>
      <h3>BOOM!</h3>
      <div>Something go wrong,droids were sent to fix it !</div>
    </div>
  );
};

export default ErrorIndicator;