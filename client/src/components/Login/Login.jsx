import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Button,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Center,
  Input,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

import { Link } from 'react-router-dom';
import wave from '../../assets/wave.svg';

const defaultFormField = {
  email: '',
  password: '',
};

const Login = () => {
  // State of Login Form
  const [formField, setFormField] = useState(defaultFormField);

  // It will update the state for every input change
  const handleChange = event => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleLogin = event => {
    event.preventDefault();

    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formField),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == 'Access Granted') {
          window.location.href = '/showpets';
        } else {
          alert(data.message);
        }
      })
      .catch(err => alert('Access Denied'));

    /*
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
    */
  };

  return (
    <Center
      minWidth='100vw'
      height='calc(100vh - 60px)'
      backgroundImage={wave}
      bgPosition='bottom'
      bgRepeat='no-repeat'
      bgColor='#fafafa'
    >
      <Box
        py={6}
        px={8}
        borderRadius={10}
        boxShadow='md'
        bg='#F9FBFF'
        maxW='xs'
        mx={{ base: '1rem', sm: '0' }}
      >
        <Box mb={6} textAlign='center'>
          <Heading as='h2' mb={2} fontSize='2xl'>
            Welcome back!
          </Heading>
          <Text fontSize='.6rem'>
            Open your heart and home to a furry friend - Adopt now!
          </Text>
        </Box>

        <FormControl>
          <Box mb={2}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon color='gray.300' />}
              />
              <Input
                fontSize='sm'
                focusBorderColor='teal.400'
                type='email'
                name='email'
                id='email'
                placeholder='email'
                onChange={handleChange}
              />
            </InputGroup>
          </Box>
          <Box mb={6}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<LockIcon color='gray.300' />}
              />
              <Input
                fontSize='sm'
                focusBorderColor='teal.400'
                type='password'
                name='password'
                id='password'
                placeholder='password'
                onChange={handleChange}
              />
            </InputGroup>
          </Box>
          <Box mb={3}>
            <Button
              fontSize='sm'
              colorScheme='teal'
              width='100%'
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
          <Text fontSize='xs' textAlign='center'>
            Don't you have an account?{' '}
            <Box as='span' ml={1} letterSpacing={0.5} color='teal'>
              <Link to='/register'>Signup</Link>
            </Box>
          </Text>
        </FormControl>
      </Box>
    </Center>
  );
};

export default Login;
