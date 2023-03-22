import { Input, FormLabel } from '@chakra-ui/react';

const FormInput = ({
  label,
  type,
  onChange,
  placeholder,
  name,
  outline = 'outline',
  style,
}) => {
  return (
    <div>
      <FormLabel htmlFor={name} style={style}>
        {label}
      </FormLabel>
      <Input
        variant={outline}
        id={name}
        type={type}
        onChange={onChange}
        required
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default FormInput;
