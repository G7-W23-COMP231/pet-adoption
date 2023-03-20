import { SelectInput } from '../Inputs';

const SelectionFormGroup = ({ onChange, selectOptions, value }) => {
  if (selectOptions.length <= 0) return <h1>Something went wrong</h1>;
  return (
    <div style={{ marginBottom: '2rem' }}>
      {selectOptions.map((option, i) => {
        const { label, name, options } = option;
        return (
          <SelectInput
            key={label}
            label={label}
            name={name}
            onChange={onChange}
            options={options}
            value={value}
          />
        );
      })}
    </div>
  );
};

export default SelectionFormGroup;
