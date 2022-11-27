import React from 'react';
import { func, string } from 'prop-types';

const TextInput = ({ title, ...props }) => (
  <textarea className="text-input" {...props}>
    {title}
  </textarea>
);

TextInput.propTypes = {
  onChange: func,
  title: string.isRequired,
};

export default TextInput;
