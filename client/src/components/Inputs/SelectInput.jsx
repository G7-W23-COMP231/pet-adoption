import { FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const SelectInput = ({ label, name, options, onChange }) => {
  if (!Array.isArray(options)) return <h1>Something went wrong</h1>;
  return (
    <div style={{ marginBottom: "2rem" }}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Select
        id={name}
        name={name}
        onChange={onChange}
        defaultValue={options[0]}
      >
        {options.length <= 0 ? (
          <h1>Something went wrong</h1>
        ) : (
          options.map((option, i) => (
            <option key={option + i} value={option}>
              {option}
            </option>
          ))
        )}
      </Select>
    </div>
  );
};

export default SelectInput;
