import React, { useState } from 'react';

import {
  Button,
  ButtonGroup,
  FormControl,
  Container,
  Grid,
  GridItem,
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

const AddPet = () => {
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

    /* if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    fetch('http://localhost:5000/animalshelter/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formField),
    })
      .then(res => res.json())
      .then(data => alert('Registered Succesfully'))
      .catch(err => alert('Something went wrong', err));*/
  };

  return (
    <Container
      maxW='1200px'
      style={{
        padding: '6rem',
        fontSize: '.8rem',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginBottom: '5rem',
          fontSize: '2rem',
        }}
      >
        <h2 style={{ fontWeight: 'bold' }}>Welcome</h2>
        <span style={{ fontSize: '1rem' }}>Please enter your pet details</span>
      </div>
      <FormControl onSubmit={handleSubmit}>
        <FormInput
          type='text'
          placeHolder='Pet name'
          label='Pet name'
          onChange={handleChange}
          name={'petName'}
          style={{ fontSize: '.7rem' }}
        />

        <FormInput
          type='file'
          label='Pet Photo'
          style={{ fontSize: '.7rem' }}
        />

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10}>
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

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={8}
          style={{ marginTop: '2rem' }}
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
          <Button colorScheme='teal' variant='solid' width='8rem' type='submit'>
            Save
          </Button>
          <Button width='6rem' onClick={resetFormFields} type='reset'>
            Cancel
          </Button>
        </ButtonGroup>
      </FormControl>
    </Container>
  );
};

export default AddPet;
