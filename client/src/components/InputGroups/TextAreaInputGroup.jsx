import React from 'react';
import { TextAreaInput } from '../Inputs';

const TextAreaInputGroup = ({ textAreaOptions, onChange }) => (
  <>
    {textAreaOptions.map(option => {
      const { name, label } = option;
      return (
        <TextAreaInput
          key={label}
          name={name}
          label={label}
          onChange={onChange}
        />
      );
    })}
  </>
);

export default TextAreaInputGroup;
