import { func, string } from 'prop-types';
import React from 'react';

const Button = ({ title, ...props }) => (
  <button className="button" type="button" {...props}>
    {title}
  </button>
);

Button.propTypes = {
  onClick: func,
  title: string.isRequired,
};

export default Button;
