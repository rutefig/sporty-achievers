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
} from "@chakra-ui/react";

interface CardProps {
  imageUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
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
  const imageUrl = "https://source.unsplash.com/random";

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
  const imageUrl = "https://source.unsplash.com/random";

  return (
    <Box>
      <Box w="100%">
        <VStack align="stretch" mb={4}>
          <Box mt={20}>
            <Heading
              as="h2"
              size="2xl"
              noOfLines={1}
              position="absolute"
              mr={10}
              top={1}
              mt={10}
              color="#323232"
            >
              SportyAchiever
            </Heading>
            <Box mb={4}>
              <Button
                colorScheme="teal"
                mr={4}
                mt={10}
                position="absolute"
                top={2}
                right={2}
              >
                Create Profile
              </Button>
              <Button
                colorScheme="teal"
                position="absolute"
                top={2}
                mt={10}
                right={180}
              >
                Sign in
              </Button>
            </Box>
          </Box>
        </VStack>
      </Box>
      <ImageBox />
      <SearchBar />

      <SimpleGrid columns={3} spacing={10}>
        <Card imageUrl={imageUrl} title="Emily Foster" />
        <Card imageUrl={imageUrl} title="Ryan Andeson" />
        <Card imageUrl={imageUrl} title="Mickael Davis" />
        <Card imageUrl={imageUrl} title="Sophia Kim" />
        <Card imageUrl={imageUrl} title="John key" />
        <Card imageUrl={imageUrl} title="Alex Jones" />
      </SimpleGrid>
    </Box>
  );
};
