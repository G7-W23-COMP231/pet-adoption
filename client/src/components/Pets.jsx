import React, { useState, useEffect } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import { PetsGrid, SearchBar } from './';
import { petsData } from '../utils/pets';

const Pets = () => {
  const [pets, setPets] = useState([]);

  // Just for now, since data fetching is not yet done
  // TODO: Needs to work on
  useEffect(() => {
    setPets(petsData);
  }, []);

  // Implement later
  const onSearchChange = event => {};

  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      minH='calc(100vh - 60px)'
      gap={2}
    >
      <Show above='lg'>
        <GridItem padding={5} borderRight='1px solid #f5f7f9'>
          <SearchBar onSearchChange={onSearchChange} />
        </GridItem>
      </Show>
      <GridItem>
        <PetsGrid pets={pets} />
      </GridItem>
    </Grid>
  );
};

export default Pets;
