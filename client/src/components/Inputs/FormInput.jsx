import { Input, FormLabel } from '@chakra-ui/react';

const FormInput = ({ label, type, onChange, placeHolder, name, style }) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <FormLabel style={style} htmlFor={name}>
        {label}
      </FormLabel>
      <Input
        id={name}
        type={type}
        onChange={onChange}
        required
        placeholder={placeHolder}
        name={name}
      />
    </div>
  );
};

export default FormInput;
