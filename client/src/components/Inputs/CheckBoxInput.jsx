import {
  CheckboxGroup,
  Stack,
  Checkbox,
  FormLabel,
  Spacer,
} from '@chakra-ui/react';

const CheckBoxInput = ({ label, choices, name, onChange, style }) => {
  const { first, second, third } = choices;
  return (
    <div>
      <CheckboxGroup colorScheme='green'>
        <FormLabel style={{ fontSize: style.fontSize }}>{label}</FormLabel>
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          <Checkbox name={name} onChange={onChange} value='1'>
            {first}
          </Checkbox>
          <Spacer />
          <Checkbox name={name} onChange={onChange} value='2'>
            {second}
          </Checkbox>
          <Spacer />

          <Checkbox name={name} onChange={onChange} value='3'>
            {third}
          </Checkbox>
        </Stack>
      </CheckboxGroup>
    </div>
  );
};

export default CheckBoxInput;
