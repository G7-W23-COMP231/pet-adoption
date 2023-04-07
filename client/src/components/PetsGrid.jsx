import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

const PetsGrid = ({ children }) => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}
      padding={10}
    >
      {children}
    </SimpleGrid>
  );
};

export default PetsGrid;
