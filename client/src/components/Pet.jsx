import { petsData } from '../utils/pets';
import {
  Link,
  Image,
  FormLabel,
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

const Pet = ({ pet }) => {
  // I will work on the fetching as soon as it is available
  return (
    <Card
      width={{ base: '100%' }}
      borderRadius='lg'
      overflow='hidden'
      fontSize='sm'
    >
      <Link href='/signin'>
        <Image src={pet.image} alt={pet?.description} />
      </Link>
      <CardBody>
        <Heading fontSize='lg' mb={2}>
          {pet.name}
        </Heading>

        <VStack alignItems='flex-start'>
          <Text>Name: {pet?.name}</Text>
          <Text>Age: {pet?.age} years old</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default Pet;
