import React from 'react';
import { Image } from '@chakra-ui/react';
import dog from '../assets/registerDog.webp';

const DogImage = () => {
  return (
    <Image
      src={dog}
      filter='grayscale(40%)'
      objectFit='cover'
      boxSize={'calc(100vh - 60px)'}
      borderRightRadius='10px'

    />
  );
};

export default DogImage;
