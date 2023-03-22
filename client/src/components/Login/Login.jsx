import React, { useState } from 'react';
import {
  Container,
  Center,
  Box,
  FormControl,
  Button,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import FormInput from '../Inputs/FormInput';
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

  console.log(formField);

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
      height='calc(100vh - 60px)'
      backgroundImage={wave}
      bgPosition='bottom'
      bgRepeat='no-repeat'
      bgColor='#fafafa'
    >
      <Container
        maxW='sm'
        color='#444'
        // border='1px'
        p={10}
        m={{ base: 10, md: 0 }}
        borderRadius={10}
        boxShadow='md'
        bg='#F9FBFF'
      >
        <Box mb={7} textAlign='center'>
          <Heading as='h2' mb={2}>
            Welcome back!
          </Heading>
          <Text fontSize='xs' color='#777'>
            Open your heart and home to a furry friend - Adopt now!
          </Text>
        </Box>

        <FormControl>
          <Box mb={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon color='gray.300' />}
              />
              <Input
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
            <Button colorScheme='teal' width='100%' onClick={handleLogin}>
              Login
            </Button>
          </Box>
          <Text fontSize={12} textAlign='center'>
            Don't you have an account?{' '}
            <Box as='span' ml={1} letterSpacing={0.5} color='teal'>
              <Link to='/register'>Signup</Link>
            </Box>
          </Text>
        </FormControl>
      </Container>
    </Center>
  );
};

export default Login;
