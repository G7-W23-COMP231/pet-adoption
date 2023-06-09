import React, { useState } from 'react';

import {
  Button,
  ButtonGroup,
  FormControl,
  Container,
  Grid,
  GridItem,
  Box,
} from '@chakra-ui/react';

import { CheckBoxInput, FormInput } from '../Inputs';
import {
  SelectionFormGroup,
  RadioInputGroup,
  TextAreaInputGroup,
} from '../InputGroups';

import {
  addPetDefaultField,
  selectOptions,
  radioOptions,
  textAreaOptions,
} from '../../utils';

const EditPet = () => {
  const [formField, setFormField] = useState(addPetDefaultField);

  const resetFormFields = () => {
    setFormField(addPetDefaultField);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formField);

    fetch('http://localhost:5000/pet/editpet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formField),
    })
      .then(res => res.json())
      .then(data => alert('Updated Succesfully'))
      .catch(err => alert('Something went wrong', err));
  };

  return (
    <Container maxW='100%' p={10} bg='#fdfdfd'>
      <Box
        style={{
          textAlign: 'center',
          marginBottom: '5rem',
          fontSize: '2rem',
        }}
      >
        <h2 style={{ fontWeight: 'bold' }}>Welcome</h2>
        <span style={{ fontSize: '1rem' }}>Please update your pet details</span>
      </Box>
      <FormControl onSubmit={handleSubmit}>
        <Box boxShadow='md' p={6} borderRadius={8} bg='#fcfcfc' mb={5}>
          <Box mb={6}>
            <FormInput
              type='text'
              placeHolder='Pet name'
              label='Pet name'
              onChange={handleChange}
              name={'petName'}
              style={{ fontSize: '.7rem' }}
            />
          </Box>
          <Box mb={6}>
            <FormInput
              type='file'
              label='Pet Photo'
              style={{ fontSize: '.7rem' }}
              outline='none'
            />
          </Box>

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
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
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={8}
          style={{ marginTop: '2rem' }}
          boxShadow='md'
          p={6}
          borderRadius={8}
          bg='#fcfcfc'
          mb={5}
        >
          <GridItem colSpan={1}>
            <RadioInputGroup
              radioOptions={radioOptions}
              onChange={handleChange}
            />

            <CheckBoxInput
              name='canGetWithHumanAge'
              label={
                'Can get along with humans whose ages are (click all that apply):'
              }
              choices={{
                first: 'Under 8 years old',
                second: 'Over 8 years old',
                third: 'Elderly',
              }}
              style={{
                marginLeft: '3rem',
                marginTop: '1rem',
                fontSize: '.8rem',
              }}
              onChange={handleChange}
            />
          </GridItem>

          <GridItem
            colSpan={1}
            paddingLeft={{ base: '0rem', md: '3.6rem' }}
            style={{ base: '3' }}
          >
            <TextAreaInputGroup
              textAreaOptions={textAreaOptions}
              onChange={handleChange}
            />
          </GridItem>
        </Grid>
        <ButtonGroup>
          <Button
            colorScheme='teal'
            variant='solid'
            width='8rem'
            type='submit'
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button
            variant='outline'
            width='6rem'
            onClick={resetFormFields}
            type='reset'
          >
            Cancel
          </Button>
        </ButtonGroup>
      </FormControl>
    </Container>
  );
};

export default EditPet;
