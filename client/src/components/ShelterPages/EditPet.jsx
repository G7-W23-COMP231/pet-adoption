import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  FormControl,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  SelectionFormGroup,
  RadioInputGroup,
  TextAreaInputGroup,
} from "../InputGroups";
import { CheckBoxInput, FormInput } from "../Inputs";
import { selectOptions, radioOptions, textAreaOptions } from "../../utils";
import axios from "axios";
import { useLocation } from "react-router-dom";
//import pet from "../Pet";

const EditPet = () => {
  const [formField, setFormField] = useState({});
  const [url, setUrl] = useState("");
  //const { _id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const petId = location.state.petId;
  console.log(petId);
  useEffect(() => {
    // Fetch the pet information by ID
    const fetchPet = async () => {
      try {
        const token = localStorage.getItem("token");
        //https://petadoptionteam.azurewebsites.net/
        const res = await axios.get(`http://localhost/5000/editpet/${petId}`, {
          headers: { Authorization: `Bearer ${token}` },
          "Content-Type": "application/json",
        });
        setFormField(res.data.pet);
        setUrl(res.data.pet.petPhoto);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPet();
  }, [petId]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const data = { ...formField, petPhoto: url };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      //https://petadoptionteam.azurewebsites.net/
      await axios.put(`http://localhost:5000/pets/editpet/${petId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      alert("Updated Successfully");
      navigate("/showpets");
    } catch (error) {
      console.error(error);
      alert("Something went wrong", error);
    }
  };

  return (
    <Container maxW="100%" p={10} bg="#fdfdfd">
      <Box
        style={{
          textAlign: "center",
          marginBottom: "5rem",
          fontSize: "2rem",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>Welcome</h2>
        <span style={{ fontSize: "1rem" }}>Please update your pet details</span>
      </Box>
      <FormControl onSubmit={handleSubmit}>
        <Box boxShadow="md" p={6} borderRadius={8} bg="#fcfcfc" mb={5}>
          <Box mb={6}>
            <FormInput
              type="text"
              placeHolder="Pet name"
              label="Pet name"
              onChange={handleChange}
              name={"petName"}
              value={formField.petName}
              style={{ fontSize: ".7rem" }}
            />
          </Box>
          <Box mb={6}>
            <FormInput
              //type="file"
              label="Pet Photo"
              style={{ fontSize: ".7rem" }}
              outline="none"
              value={formField.petPhoto}
            />
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
              />
            </GridItem>

            {/* Items in second column */}
            <GridItem colSpan={1}>
              <SelectionFormGroup
                selectOptions={selectOptions.slice(3, 6)}
                onChange={handleChange}
              />
            </GridItem>

            {/* Items in third column */}
            <GridItem colSpan={1}>
              <SelectionFormGroup
                selectOptions={selectOptions.slice(6)}
                onChange={handleChange}
              />
            </GridItem>
          </Grid>
        </Box>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={8}
          style={{ marginTop: "2rem" }}
          boxShadow="md"
          p={6}
          borderRadius={8}
          bg="#fcfcfc"
          mb={5}
        >
          <GridItem colSpan={1}>
            <RadioInputGroup
              radioOptions={radioOptions}
              onChange={handleChange}
            />

            <CheckBoxInput
              checked={formField.canGetWithHumanAge}
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
            onClick="{resetFormFields}"
            type="reset"
          >
            Cancel
          </Button>
        </ButtonGroup>
      </FormControl>
    </Container>
  );
};

export default EditPet;
