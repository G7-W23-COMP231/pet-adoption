import { petsData } from '../utils/pets';
import { Box, Image, FormLabel } from '@chakra-ui/react';

const Pet = () => {
  // I will work on the fetching as soon as it is available
  return (
    <Box
    boxShadow='md'
    maxW={'7xl'}
    mx='auto'
    p={16}
    borderRadius={8}
    bg='#fcfcfc'
    mb={5}
  >
      {petsData.map(pet => (
        <div key={pet.id}>
          <Box width='100px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <img
            src={pet.image}
            alt={pet.description}
            height='100px'
            width='100px'
          />
          </Box>
          
          <FormLabel>
          <p>Name: {pet.name}</p>
          <p>Age: {pet.age} years old</p><br></br>
          </FormLabel>
          
        </div>
      ))}
    </Box>
  );
};

export default Pet;