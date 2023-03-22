import React, { useState } from 'react';
import './Register.css';

import {
  Box,
  FormControl,
  Select,
  Grid,
  Container,
  Center,
  Button,
  Stack,
  Heading,
  Flex,
  ButtonGroup,
  Spacer,
} from '@chakra-ui/react';
import { FormInput } from '../Inputs';

const defaultFormField = {
  confirmPassword: '',
  email: '',
  location: 'ABCD',
  password: '',
  shelterName: '',
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
      <Box
        display={{ base: 'none', md: 'block' }}
        className='left'
        filter='grayscale(60%)'
      ></Box>
      <Center padding={{ sm: '6rem 2rem', md: '0 0' }} bg='#F9FBFF'>
        <Container>
          <FormControl p={10}>
            <Box mb={8} textAlign='center' color='teal.700'>
              <Heading as='h2' fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}>
                I don't have an account
              </Heading>
              <Box
                as='span'
                fontSize='xs'
                fontWeight='medium'
                letterSpacing={0.5}
              >
                Sign up with your email and password
              </Box>
            </Box>

            <Flex mb={5} gap={2}>
              <FormInput
                type='text'
                name='shelterName'
                placeholder='shelter name'
                onChange={handleChange}
                required
                value={formField.shelterName}
              />

              <FormInput
                type='email'
                name='email'
                placeholder='email'
                onChange={handleChange}
                required
                value={formField.email}
              />
            </Flex>
            <Stack>
              <Box>
                <Select
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
              </Box>

              <Flex gap={2}>
                <FormInput
                  type='password'
                  name='password'
                  placeholder='password'
                  onChange={handleChange}
                  required
                  value={formField.password}
                />

                <FormInput
                  type='password'
                  name='confirmPassword'
                  placeholder='confirm password'
                  onChange={handleChange}
                  required
                  value={formField.confirmPassword}
                />
              </Flex>
            </Stack>
            <Flex gap={4} mt={8}>
              <Button width='100%' colorScheme='teal' onClick={handleSubmit}>
                Sign Up
              </Button>

              <Button
                width='50%'
                variant='outline'
                colorScheme='teal'
                onClick={resetFormFields}
              >
                Cancel
              </Button>
            </Flex>
          </FormControl>
        </Container>
      </Center>
    </Grid>
  );
};

export default Register;
