import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

const PetsGrid = ({ children }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={4} padding={10}>
      {children}
    </SimpleGrid>
  );
};

export default PetsGrid;
