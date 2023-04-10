import { petsData } from "../utils/pets";
import {
  Image,
  FormLabel,
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import UploadImage from "./UploadImage";

const Pet = ({ pet }) => {
  // I will work on the fetching as soon as it is available
  return (
    <Card
      width={{ base: "100%" }}
      borderRadius="lg"
      overflow="hidden"
      fontSize="sm"
    >
      <a href="/signin">
        <Image src={pet.petPhoto} alt={pet?.description} />
      </a>
      <CardBody>
        <Heading fontSize="lg" mb={2}>
          {pet.petName}
        </Heading>

        <VStack alignItems="flex-start">
          <Text>Name: {pet?.petName}</Text>
          <Text>Age: {pet?.age} years old</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default Pet;
