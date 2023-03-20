import { Textarea, Text } from '@chakra-ui/react';

const TextAreaInput = ({ name, label, onChange }) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Text mb='8px'>{label}</Text>
      <Textarea
        name={name}
        onChange={onChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
    </div>
  );
};

export default TextAreaInput;
