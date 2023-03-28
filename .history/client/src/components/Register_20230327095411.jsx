import React, { useState } from 'react';

import {
  Box,
  FormControl,
  Select,
  Grid,
  Center,
  Button,
  Stack,
  Heading,
  Flex,
  Show,
  GridItem,
} from '@chakra-ui/react';

import DogImage from './DogImage';

import { FormInput } from './Inputs';

const defaultFormField = {
  confirmPassword: '',
  email: '',
  location: 'ABCD',
  password: '',
  animalShelterName: '',
};

const Register = () => {
  const [formField, setFormField] = useState(defaultFormField);

  const { password, confirmPassword } = formField;

  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
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
      .catch(err => alert('Something went wrong', err));
  };

  return (
    <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }}>
      <Show above='md'>
        <GridItem>
          <DogImage />
        </GridItem>
      </Show>

      <GridItem>
        <Center height={'calc(100vh - 60px)'}>
          <FormControl px={6} maxW='300px'>
            <Box as='header' mb={8} textAlign='center'>
              <Heading as='h2' fontSize={{ base: 'sm', md: 'xl' }}>
                I don't have an account
              </Heading>
              <Box as='span' fontSize='xs'>
                Sign up with your email and password
              </Box>
            </Box>
            <Grid
              templateAreas={{
                base: `'first' 'second' 'third' 'fourth'`,
                md: `'first second' 'third third' 'fourth fourth'`,
              }}
              gap={2}
            >
              <GridItem area='first'>
                <FormInput
                  fontSize={'xs'}
                  type='text'
                  name='animalShelterName'
                  placeholder='shelter name'
                  onChange={handleChange}
                  required
                  value={formField.animalShelterName}
                />
              </GridItem>
              <GridItem area='second'>
                <FormInput
                  fontSize={'xs'}
                  type='email'
                  name='email'
                  placeholder='email'
                  onChange={handleChange}
                  required
                  value={formField.email}
                />
              </GridItem>

              <GridItem area='third'>
                <Select
                  fontSize={'xs'}
                  name='location'
                  onChange={handleChange}
                  focusBorderColor='teal.400'
                  value={formField.location}
                >
                  <option value=''>Location</option>
                  <option value='ABCD'>ABCD</option>
                  <option value='EFGH'>EFGH</option>
                  <option value='IJKL'>IJKL</option>
                  <option value='MNOP'>MNOP</option>
                </Select>
              </GridItem>

              <GridItem area='fourth'>
                <Flex gap={2}>
                  <FormInput
                    fontSize={'xs'}
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={handleChange}
                    required
                    value={formField.password}
                  />

                  <FormInput
                    fontSize={'xs'}
                    type='password'
                    name='confirmPassword'
                    placeholder='confirm password'
                    onChange={handleChange}
                    required
                    value={formField.confirmPassword}
                  />
                </Flex>
              </GridItem>
            </Grid>
            <Flex gap={4} mt={4}>
              <Button
                fontSize={'xs'}
                width='100%'
                colorScheme='teal'
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Button
                fontSize={'xs'}
                width='50%'
                variant='outline'
                colorScheme='teal'
                onClick={resetFormFields}
              >
                Cancel
              </Button>
            </Flex>
          </FormControl>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default Register;
