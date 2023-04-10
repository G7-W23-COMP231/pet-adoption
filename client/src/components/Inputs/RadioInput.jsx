import { Flex, FormLabel, Spacer, Radio, RadioGroup } from "@chakra-ui/react";

const choices = {
  yes: "Yes",
  no: "No",
  somewhat: "Somewhat",
};

export function RadioInput({ label, name, onChange }) {
  const { yes, no, somewhat } = choices;
  return (
    <div style={{ marginBottom: "1rem" }}>
      <FormLabel as="legend" htmlFor={name} style={{ marginBottom: ".4rem" }}>
        {label}
      </FormLabel>
      <RadioGroup
        style={{ marginLeft: "3rem" }}
        colorScheme="teal"
        defaultValue="Yes"
      >
        <Flex>
          <Radio name={name} onChange={onChange} value="Yes">
            {yes}
          </Radio>
          <Spacer />
          <Radio name={name} onChange={onChange} value="No">
            {no}
          </Radio>
          <Spacer />
          <Radio name={name} onChange={onChange} value="Somewhat">
            {somewhat}
          </Radio>
        </Flex>
      </RadioGroup>
    </div>
  );
}
export default RadioInput;
