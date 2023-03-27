import { RadioInput } from '../Inputs';

const RadioInputGroup = ({ radioOptions, onChange }) => {
  return (
    <div>
      {radioOptions.map(option => {
        const { label, name } = option;
        return (
          <RadioInput
            key={label}
            label={label}
            name={name}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

export default RadioInputGroup;
