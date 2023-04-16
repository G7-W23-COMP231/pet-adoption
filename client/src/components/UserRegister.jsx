import React, { useState } from "react";

import {
  Button,
  ButtonGroup,
  FormControl,
  Container,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";

import { CheckBoxInput, FormInput } from "./Inputs";
import {
  SelectionFormGroup,
  RadioInputGroup,
  TextAreaInputGroup,
} from "./InputGroups";

//import { SelectionFormGroup, RadioInputGroup, TextAreaInputGroup } from './InputGroups';

import {
  addOwnerDefaultField,
  selectOptions,
  radioOptions,
  radioUserReg,
  textAreaOptions,
} from "../utils";

const AddOwner = () => {
  const [formField, setFormField] = useState(addOwnerDefaultField);

  const resetFormFields = () => {
    setFormField(addOwnerDefaultField);
  };

  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "country",
      "street",
      "city",
      "province",
      "email",
      "phoneNumber",
      "password",
    ];
    for (const field of requiredFields) {
      if (!formField[field]) {
        return false;
      }
    }
    return true;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formField);

    if (!validateForm()) {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    //https://petadoptionteam.azurewebsites.net/
    fetch("http://localhost:5000/owner/addowner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formField),
    })
      .then((res) => res.json())
      .then((data) => alert("Added Succesfully"))
      .catch((err) => alert("Something went wrong", err));
  };

  return (
    <Container maxW="100%" p={10} bg="#f1f1f1">
      <Box
        style={{
          textAlign: "center",
          marginBottom: "5rem",
          fontSize: "2rem",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>Welcome</h2>
        <span style={{ fontSize: "1rem" }}>
          Please enter your owner details
        </span>
      </Box>
      <FormControl onSubmit={handleSubmit} fontSize="1.2rem">
        <Box
          boxShadow="md"
          maxW={"7xl"}
          mx="auto"
          p={16}
          borderRadius={8}
          bg="#fcfcfc"
          mb={5}
        >
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={10}
          >
            <GridItem colSpan={1}>
              <Box mb={6}>
                <FormInput
                  type="text"
                  placeHolder="Owner name"
                  label="First name"
                  onChange={handleChange}
                  name={"firstName"}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box mb={6}>
                <FormInput
                  type="text"
                  placeHolder="Owner name"
                  label="Last Name"
                  onChange={handleChange}
                  name={"lastName"}
                />
              </Box>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={10}
          >
            <GridItem colSpan={1}>
              <Box mb={6}>
                <FormInput
                  type="text"
                  placeHolder="Country"
                  label="Country"
                  onChange={handleChange}
                  name={"country"}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box mb={6}>
                <RadioInputGroup
                  radioOptions={radioUserReg}
                  onChange={handleChange}
                />
              </Box>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={10}
          >
            <GridItem colSpan={1}>
              <Box mb={6}>
                <FormInput
                  type="text"
                  placeHolder="Street"
                  label="Street"
                  onChange={handleChange}
                  name={"street"}
                />
              </Box>
            </GridItem>
            <GridItem>
              <Box mb={6}>
                <FormInput
                  type="text"
                  placeHolder="City"
                  label="City"
                  onChange={handleChange}
                  name={"city"}
                />
              </Box>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={10}
          >
            <GridItem>
              <Box mb={6}>
                <FormInput
                  type="text"
                  placeHolder="Province"
                  label="Province"
                  onChange={handleChange}
                  name={"province"}
                />
              </Box>
            </GridItem>
          </Grid>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={10}
          >
            <GridItem colSpan={1}>
              <Box mb={6}>
                <FormInput
                  type="text"
                  placeHolder="Email Address"
                  label="Email Address"
                  onChange={handleChange}
                  name={"email"}
                  isRequired={true}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box mb={6}>
                <FormInput
                  type="text"
                  placeHolder="Phone Number"
                  label="Phone Number"
                  onChange={handleChange}
                  name={"phoneNumber"}
                />
              </Box>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={10}
          >
            <GridItem colSpan={1}>
              <Box mb={6}>
                <FormInput
                  type="password"
                  placeHolder="Password"
                  label="Password"
                  onChange={handleChange}
                  name={"password"}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box mb={6}>
                <FormInput
                  type="password"
                  placeHolder="Confirm Password"
                  label="Confirm Password"
                  onChange={handleChange}
                  name={"confirmPassword"}
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>

        <Box maxW="7xl" mx="auto">
          <ButtonGroup>
            <Button
              colorScheme="teal"
              variant="solid"
              width="8rem"
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button
              variant="outline"
              width="6rem"
              onClick={resetFormFields}
              type="reset"
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Box>
      </FormControl>
    </Container>
  );
};

export default AddOwner;
