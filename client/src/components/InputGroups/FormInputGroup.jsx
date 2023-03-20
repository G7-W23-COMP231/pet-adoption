import React from 'react';

const FormInputGroup = ({ type, label, placeHolder, onChange, style }) => {
  return (
    <>
      <FormInput
        type='text'
        placeHolder='Pet name'
        label='Pet name'
        onChange={handleChange}
        name={'petName'}
        style={{ fontSize: '.7rem' }}
      />
    </>
  );
};

export default FormInputGroup;
