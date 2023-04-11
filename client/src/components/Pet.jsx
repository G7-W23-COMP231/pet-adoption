import {
  Image,
  Card,
  CardBody,
  Button,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import noImage from '../assets/no-image-placeholder.webp';
import UploadImage from './UploadImage';

const Pet = ({ pet }) => {
  // I will work on the fetching as soon as it is available
  return (
    <Card
      width={{ base: '100%', md: '300px' }}
      borderRadius='lg'
      overflow='hidden'
      fontSize='sm'
    >
      <a href='/signin'>
        <Image
          src={pet.petPhoto || noImage}
          alt={pet?.description}
          height={200}
          width='100%'
          objectFit='cover'
        />
      </a>
      <CardBody position='relative' bg='#fdfcfc'>
        <Heading fontSize='lg' mb={2}>
          {pet.petName || 'Not Applicable'}
        </Heading>

        <VStack alignItems='flex-start'>
          <Text margin={0}>Name: {pet?.petName || 'Not Applicable'}</Text>
          <Text>Age: {pet?.age} years old</Text>
        </VStack>
        <Button
          borderRadius={100}
          colorScheme='green'
          size='sm'
          position='absolute'
          right={5}
          bottom={5}
        >
          Adopt
        </Button>
      </CardBody>
    </Card>
  );
};

export default Pet;
