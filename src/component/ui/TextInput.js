import React from 'react';
import { func, string } from 'prop-types';

const TextInput = ({ value, onChange, ...props }) => (
  <textarea className="text-input" value={value} onChange={onChange} {...props}></textarea>
);

TextInput.propTypes = {
  onChange: func,
  value: string.isRequired,
};

export default TextInput;
