import React from "react";
import {
  Button,
  Box,
  Image,
  SimpleGrid,
  Heading,
  AspectRatio,
  Center,
  Text,
  VStack,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { Link } from "react-router-dom";
import logo from "../public/logo.png";

interface CardProps {
  imageUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      maxH={800}
    >
      <Image src={imageUrl} alt={title} />
      <Box p="6">
        <Box alignItems="baseline">
          <Heading fontSize="xl">{title}</Heading>
        </Box>
      </Box>
    </Box>
  );
};

const ImageBox: React.FC = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80";

  return (
    <Box position="relative" maxW="full" w="100%">
      <AspectRatio ratio={25 / 9}>
        <Image src={imageUrl} alt="Image Description" objectFit="cover" />
      </AspectRatio>

      <Center
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        flexDirection="column"
        bgColor="rgba(0, 0, 0, 0.5)"
      >
        <Heading as="h1" size="xl" color="white" mb={4}>
          Empowering the Next Generation of Athletes by the World Community
        </Heading>
        <Text fontSize="4sm" maxW={800} color="white" mb={4}>
          We collaborate with esteemed brands to offer life-changing
          scholarships to aspiring and gifted athletes from all sports
          disciplines. Our mission is to empower the next generation of sports
          stars and provide them with the support they need to excel in their
          chosen fields.
        </Text>

        <Button colorScheme="teal">Get Started</Button>
      </Center>
    </Box>
  );
};
const SearchBar: React.FC = () => {
  return (
    <VStack align="flex-start" mb={4} mt={4}>
      <Box
        my={4}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        mb={20}
      >
        <Text mb={5} fontSize={"lg"} fontWeight={"bold"} maxWidth={"480px"}>
          Explore and support talented athletes from various sports disciplines
        </Text>
        <Input placeholder="Search" w={["90%", "80%", "60%", "500px"]} />
      </Box>
    </VStack>
  );
};

export const LandingPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const image1 =
    "https://images.unsplash.com/photo-1488474739786-757973c2dff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80";

  const image2 =
    "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80";

  const image3 =
    "https://images.unsplash.com/photo-1622979857654-9363bb0a1243?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=748&q=80";
  return (
    <Box>
      <Box w="100%">
        <VStack align="stretch" mb={4}>
          <Flex mt={3} align="center">
            <Image src={logo} boxSize="150px" />
            <Heading
              as="h1"
              size="4xl"
              noOfLines={1}
              ml={3} // You can adjust this value to add more or less space after the image
              color="#323232"
            >
              SportyAchiever
            </Heading>
          </Flex>

          <Box mb={4}>
            <Button
              colorScheme="teal"
              mr={4}
              mt={10}
              position="absolute"
              top={2}
              right={2}
              onClick={onOpen}
            >
              Create Profile
            </Button>
            <Link to="/profile">Profile</Link>
            <Modal isOpen={isOpen} onClose={onClose}>
              §
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create Profile</ModalHeader>
                <ModalBody>
                  <Input placeholder="Username" mb={3}></Input>
                  <Input placeholder="Sport" mb={3}></Input>
                  <Input placeholder="Description"></Input>
                </ModalBody>
                <ModalCloseButton />
                <ModalFooter>
                  <Button colorScheme="teal" mr={3} onClick={onClose}>
                    <Link to="/profile">Create</Link>
                  </Button>
                  <Button variant="ghost" onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </VStack>
      </Box>
      <ImageBox />
      <SearchBar />

      <SimpleGrid columns={3} spacing={10}>
        <Card imageUrl={image1} title="Emily Foster"></Card>
        <Card imageUrl={image2} title="Ryan Andeson" />
        <Card imageUrl={image3} title="Mickael Davis" />
        <Card imageUrl={image2} title="Sophia Kim" />
        <Card imageUrl={image1} title="John key" />
        <Card imageUrl={image3} title="Alex Jones" />
      </SimpleGrid>
    </Box>
  );
};
