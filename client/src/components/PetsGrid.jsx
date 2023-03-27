import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Pet from './Pet';

const PetsGrid = ({ pets }) => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}
      padding={10}
    >
      {pets.map(pet => (
        <Pet pet={pet} key={pet.id} />
      ))}
    </SimpleGrid>
  );
};

export default PetsGrid;
