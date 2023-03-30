import React from 'react';
import {
  FormControl,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';

import { EmailIcon, LockIcon } from '@chakra-ui/icons';

import { Link } from 'react-router-dom';

const LoginForm = ({ handleChange, handleLogin, type }) => {
  return (
    <FormControl position='relative'>
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
          <Link to={type === 'user' ? '/UserRegister' : '/register'}>
            Signup
          </Link>
        </Box>
      </Text>
    </FormControl>
  );
};

export default LoginForm;
