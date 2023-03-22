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
      <Box display={{ base: 'none', md: 'block' }} className='left'></Box>
      <Center padding={{ sm: '6rem 2rem', md: '0 0' }} bg='#F9FBFF'>
        <Container>
          <FormControl p={10}>
            <Stack gap={2}>
              <Box>
                <Heading as='h2'>I don't have an account</Heading>
                <span>Sign up with your email and password</span>
              </Box>

              <Box>
                <FormInput
                  type='text'
                  name='shelterName'
                  placeholder='shelter name'
                  onChange={handleChange}
                  outline='flushed'
                  required
                />
              </Box>

              <Box>
                <FormInput
                  type='email'
                  name='email'
                  placeholder='email'
                  onChange={handleChange}
                  required
                  outline='flushed'
                />
              </Box>

              <Box>
                <Select name='location' onChange={handleChange}>
                  <option value=''>Location</option>
                  <option value='ABCD'>ABCD</option>
                  <option value='EFGH'>EFGH</option>
                  <option value='IJKL'>IJKL</option>
                  <option value='MNOP'>MNOP</option>
                </Select>
              </Box>

              <Box>
                <FormInput
                  type='password'
                  name='password'
                  placeholder='password'
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box>
                <FormInput
                  type='password'
                  name='confirmPassword'
                  placeholder='confirm password'
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box>
                <Button width='100%' colorScheme='teal' onClick={handleSubmit}>
                  Sign Up
                </Button>
              </Box>
            </Stack>
          </FormControl>
        </Container>
      </Center>
    </Grid>
  );
};

export default Register;
