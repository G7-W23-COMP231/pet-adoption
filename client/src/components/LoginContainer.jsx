import React from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';

import wave from '../assets/wave.svg';

import { BiHomeAlt2, BiUser } from 'react-icons/bi';

const LoginContainer = ({ children, type }) => {
  return (
    <Center
      minWidth='100vw'
      height='calc(100vh - 73px)'
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
        position='relative'
      >
        <Box
          position='absolute'
          boxSize={70}
          borderRadius={100}
          display='flex'
          justifyContent='center'
          alignItems='center'
          boxShadow='md'
          top={-7}
          left={-5}
          bg='#f7f7f7'
        >
          {type === 'user' ? (
            <BiUser fontSize={30} />
          ) : (
            <BiHomeAlt2 fontSize={30} />
          )}
        </Box>

        <Box mb={6} textAlign='center'>
          <Heading as='h2' mb={2} fontSize='2xl'>
            Welcome back!
          </Heading>

          <Text fontSize='.6rem'>
            Open your heart and home to a furry friend - Adopt now!
          </Text>
        </Box>
        {children}
      </Box>
    </Center>
  );
};

export default LoginContainer;
