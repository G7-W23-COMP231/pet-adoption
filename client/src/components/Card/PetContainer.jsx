import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const PetContainer = ({ imgSrc, imgAlt }) => {    

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imgSrc} alt={imgAlt} />
    </Box>
  );
}

export default PetContainer;
