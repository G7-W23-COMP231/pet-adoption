import React, { useState, useNavigate } from "react";

import {
  Button,
  ButtonGroup,
  FormControl,
  Container,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";

import { SelectionFormGroup, RadioInputGroup } from "../InputGroups";

import { selectOptionsPO, radioOptionsPO } from "../../utils";

const PetOwnerSurvey = () => {
  const [formField, setFormField] = useState({});

  const resetFormFields = () => {
    setFormField(petOwnerSurveyDefaultField);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    const navigate = useNavigate();
    //console.log(formField);

    if (!token) {
      //alert("Access Denied");
      navigate("/login");
    } else {
      fetch("http://localhost:5000/survey/ownersurvey", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formField),
      })
        .then((res) => res.json())
        .then((data) => alert("Added Succesfully"))
        .catch((err) => alert("Something went wrong", err));
    }
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
        <h2 style={{ fontWeight: "bold" }}>Welcome, Pet Owner!</h2>
        <span style={{ fontSize: "1rem" }}>What do you like in a pet?</span>
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
            {/* Items in first column */}
            <GridItem colSpan={1}>
              <SelectionFormGroup
                selectOptions={selectOptionsPO.slice(0, 3)}
                onChange={handleChange}
              />
            </GridItem>

            {/* Items in second column */}
            <GridItem colSpan={1}>
              <SelectionFormGroup
                selectOptions={selectOptionsPO.slice(3, 6)}
                onChange={handleChange}
              />
            </GridItem>

            {/* Items in third column */}
            <GridItem colSpan={1}>
              <SelectionFormGroup
                selectOptions={selectOptionsPO.slice(6)}
                onChange={handleChange}
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
              radioOptions={radioOptionsPO}
              onChange={handleChange}
            />
          </GridItem>

          <GridItem
            colSpan={1}
            paddingLeft={{ base: "0rem", md: "3.6rem" }}
            style={{ base: "3" }}
          ></GridItem>
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

export default PetOwnerSurvey;
