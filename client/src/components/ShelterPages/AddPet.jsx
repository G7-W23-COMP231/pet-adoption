import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadImage from "../UploadImage";

import {
  Button,
  ButtonGroup,
  FormControl,
  Container,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";

import { CheckBoxInput, FormInput } from "../Inputs";
import {
  SelectionFormGroup,
  RadioInputGroup,
  TextAreaInputGroup,
} from "../InputGroups";

import {
  addPetDefaultField,
  selectOptions,
  radioOptions,
  textAreaOptions,
} from "../../utils";
import axios from "axios";

const AddPet = () => {
  const [formField, setFormField] = useState(addPetDefaultField);
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const resetFormFields = () => {
    setFormField(addPetDefaultField);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const data = { ...formField, petPhoto: url };

  const handleSubmit = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();

    axios
      .post("https://petadoptionteam.azurewebsites.net/pets/addpet", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .then((data) => {
        alert("Added Succesfully"), navigate("/showpets");
      })
      .catch((err) => {
        console.log(err);

        alert("Something went wrong", err);
      });
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
        <span style={{ fontSize: "1rem" }}>Please enter your pet details</span>
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
          <Box mb={6}>
            <FormInput
              type="text"
              placeHolder="Pet name"
              label="Pet name"
              onChange={handleChange}
              name={"petName"}
              required="required"
            />
          </Box>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={10}
          >
            <GridItem>
              <FormInput
                type="text"
                placeHolder="Pet Breed"
                label="Pet Breed"
                onChange={handleChange}
                name={"petBreed"}
                required="required"
              />
            </GridItem>
            <GridItem margin="10px">
              <FormInput
                type="text"
                placeHolder="Pet Gender"
                label="Pet Gender"
                onChange={handleChange}
                name={"petGender"}
                required="required"
              />
            </GridItem>
          </Grid>
          <Box mb={6}>
            <UploadImage url={url} setUrl={setUrl} />
          </Box>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={10}
          >
            {/* Items in first column */}
            <GridItem colSpan={1}>
              <SelectionFormGroup
                selectOptions={selectOptions.slice(0, 3)}
                onChange={handleChange}
                required
              />
            </GridItem>

            {/* Items in second column */}
            <GridItem colSpan={1}>
              <SelectionFormGroup
                selectOptions={selectOptions.slice(3, 6)}
                onChange={handleChange}
                required
              />
            </GridItem>

            {/* Items in third column */}
            <GridItem colSpan={1}>
              <SelectionFormGroup
                selectOptions={selectOptions.slice(6)}
                onChange={handleChange}
                required
              />
            </GridItem>
          </Grid>
        </Box>

        <Grid
          maxW="7xl"
          mx="auto"
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={8}
          style={{ marginTop: "2rem" }}
          boxShadow="md"
          p={16}
          borderRadius={8}
          bg="#fcfcfc"
          mb={5}
        >
          <GridItem colSpan={1}>
            <RadioInputGroup
              radioOptions={radioOptions}
              onChange={handleChange}
              required
            />

            <CheckBoxInput
              name="canGetWithHumanAge"
              label={
                "Can get along with humans whose ages are (click all that apply):"
              }
              choices={{
                first: "Under 8 years old",
                second: "Over 8 years old",
                third: "Elderly",
              }}
              style={{
                marginLeft: "3rem",
                marginTop: "1rem",
                fontSize: ".8rem",
              }}
              onChange={handleChange}
              color="teal"
            />
          </GridItem>

          <GridItem
            colSpan={1}
            paddingLeft={{ base: "0rem", md: "3.6rem" }}
            style={{ base: "3" }}
          >
            <TextAreaInputGroup
              textAreaOptions={textAreaOptions}
              onChange={handleChange}
            />
          </GridItem>
        </Grid>
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

export default AddPet;
