import { Input, FormLabel } from '@chakra-ui/react';

const FormInput = ({
  fontSize,
  label,
  type,
  onChange,
  placeholder,
  name,
  outline = 'outline',
  value,
}) => {
  return (
    <div>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        variant={outline}
        id={name}
        type={type}
        onChange={onChange}
        required
        placeholder={placeholder}
        name={name}
        focusBorderColor='teal.400'
        fontSize={fontSize}
        value={value}
      />
    </div>
  );
};

export default FormInput;
