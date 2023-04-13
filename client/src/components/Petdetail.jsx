import { Box, Button, Image } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Petdetail({ pet }) {
  const navigate = useNavigate();
  return (
    <Box width={{ base: "80%", md: "50%" }} mx="auto">
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        marginTop={{ base: 10, md: 20 }}
        color="#444"
        gap={{ md: 20 }}
      >
        <Image
          src={pet?.petPhoto}
          alt={pet?.petName}
          borderRadius={10}
          width="100%"
          height={{ base: "300px", md: "400px" }}
          objectFit="cover"
          marginBottom={5}
        />

        <Box
          fontSize={16}
          display="flex"
          flexDirection={{ base: "row", md: "column" }}
          gap={{ base: 10, md: 2 }}
        >
          <Box>
            <Text>
              Name:
              <Text as="span" fontWeight="semibold">
                {" "}
                {pet?.petName}
              </Text>
            </Text>
            <Text>
              Breed:{" "}
              <Text as="span" fontWeight="semibold">
                {pet?.petBreed}
              </Text>
            </Text>
            <Text>
              Age:{" "}
              <Text as="span" fontWeight="semibold" whiteSpace="nowrap">
                {pet?.age}
              </Text>
            </Text>
          </Box>
          <Box>
            <Text>
              Gender:{" "}
              <Text as="span" fontWeight="semibold">
                {pet?.petGender}
              </Text>
            </Text>

            <Text>
              Good with First Time Pet Owner:{" "}
              <Text as="span" fontWeight="semibold">
                {pet?.gwithFirstPetOwner}
              </Text>{" "}
            </Text>
            <Text>
              Medical History{" "}
              <Text as="span" fontWeight="semibold">
                {pet?.medHistory}
              </Text>{" "}
            </Text>
            <Text>
              Behavior Issue:{" "}
              <Text as="span" fontWeight="semibold">
                {pet?.behaveIssue}
              </Text>{" "}
            </Text>
            <Text>
              Vaccination Record Issue:{" "}
              <Text as="span" fontWeight="semibold">
                {pet?.vaccRecord}
              </Text>{" "}
            </Text>
            {/* name, breed, age, size, gender, temperament, behaviour, medical history */}
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop={5} gap={4}>
        <Box display="flex" gap={5}>
          <Button borderRadius="full" colorScheme="orange" width="150px">
            Select
          </Button>
          <Box
            boxSize={10}
            bg="#fff"
            cursor="pointer"
            outline="1px solid rgb(221, 107, 32)"
            transition="all 400ms"
            _hover={{
              bg: "rgb(233, 172, 132)",
              outline: "1px solid transparent",
            }}
            borderRadius="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <AiOutlineHeart size={22} color="rgb(221, 107, 32)" />
          </Box>
        </Box>

        <Button
          colorScheme="orange"
          variant="ghost"
          borderRadius="full"
          onClick={() => navigate("/showpets")}
        >
          <IoArrowBack size={26} color="rgb(221, 107, 32)" />
        </Button>
      </Box>
    </Box>
  );
}
