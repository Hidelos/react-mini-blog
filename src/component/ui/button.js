import { func, string } from 'prop-types';
import React from 'react';

const Button = ({ title, onClick, ...props }) => (
  <button className="button" type="button" onClick={onClick} {...props}>
    {title}
  </button>
);

Button.propTypes = {
  onClick: func,
  title: string.isRequired,
};

export default Button;
