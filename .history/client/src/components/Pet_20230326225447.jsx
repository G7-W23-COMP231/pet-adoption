import { petsData } from '../utils/pets';
import { Box, Image } from '@chakra-ui/react';


const Pet = () => {
  // I will work on the fetching as soon as it is available
  return (
    <div>
      {petsData.map(pet => (
        <div key={pet.id}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <img
            src={pet.image}
            alt={pet.description}
            height='50px'
            width='50px'
          />

          <p>Name: {pet.name}</p>
          <p>Age: {pet.age}</p>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default Pet;