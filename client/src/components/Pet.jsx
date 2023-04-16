import {
  Image,
  Card,
  CardBody,
  Button,
  Heading,
  Text,
  Box,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import noImage from "../assets/no-image-placeholder.webp";
import UploadImage from "./UploadImage";
import { useNavigate } from "react-router-dom";

const Pet = ({
  pet,
  isShelterLogin,
  isUserLogin,
  setPetId,
  setEditablePetUrl,
}) => {
  const navigate = useNavigate();

  const link = isShelterLogin
    ? `/pets/${pet._id}`
    : isUserLogin
    ? `/pets/${pet._id}`
    : "/user/login";

  // I will work on the fetching as soon as it is available
  return (
    <Card
      width={{ base: "100%", md: "300px" }}
      borderRadius="lg"
      overflow="hidden"
      fontSize="sm"
    >
      <Link to={link} onClick={() => setPetId(pet._id)}>
        <Image
          src={pet.petPhoto || noImage}
          alt={pet?.description}
          height={200}
          width="100%"
          objectFit="cover"
        />
      </Link>
      <CardBody position="relative" bg="#fdfcfc">
        <Heading fontSize="lg" mb={2}>
          {pet.petName || "Not Applicable"}
        </Heading>

        <VStack alignItems="flex-start">
          <Text margin={0}>Name: {pet?.petName || "Not Applicable"}</Text>
          <Text>Age: {pet?.age} </Text>
          <Text>Breed: {pet?.petBreed}</Text>
        </VStack>
        <Box display="flex" justifyContent="flex-end" marginTop={3} gap={2}>
          {isShelterLogin && (
            <Button
              borderRadius={100}
              colorScheme="teal"
              size="sm"
              variant="outline"
              onClick={() => {
                setEditablePetUrl(pet._id);
                navigate("/editpet");
              }}
            >
              Edit
            </Button>
          )}

          <Button borderRadius={100} colorScheme="teal" size="sm">
            Adopt
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
};

export default Pet;
