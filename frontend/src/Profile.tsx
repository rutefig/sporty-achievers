import React from "react";
import { Box, Flex, Avatar, Heading, Stack, VStack } from "@chakra-ui/react";

// interface ProfileProps {
//   name: string;
//   imageUrl: string;
// }

export const Profile: React.FC = () => {
  const imagebg =
    "https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3538&q=80";
  return (
    <>
      <Box maxW="100%" mx="auto" height={"400px"} bgImage={`url(${imagebg})`}>
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-end"
          height="100%"
        >
          <Flex align="left" my={4}>
            <Avatar
              size="2xl"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </Flex>
          <Heading size={"lg"} ml={4}>
            {/* {name} name */}
            Michael Jones
          </Heading>
        </Flex>
      </Box>

      <Stack direction={["column", "row"]} spacing="24px">
        <Box
          maxW="900px"
          maxH="400px"
          border="2px"
          borderColor="gray.200"
          borderRadius={10}
          mb={20}
          mt={10}
        >
          <Heading>About Mickael</Heading>
          Michael Phelps is a legendary American swimmer widely regarded as one
          of the greatest athletes in Olympic history. Born on June 30, 1985, in
          Baltimore, Maryland, he quickly rose to prominence as a swimming
          prodigy from a young age. His unparalleled dedication to the sport,
          combined with his exceptional talent and work ethic, set the stage for
          an extraordinary career that has left an indelible mark on the world
          of swimming. Phelps made his Olympic debut at the age of 15 during the
          2000 Sydney Olympics, where he showed glimpses of his immense
          potential. However, it was in the 2004 Athens Olympics that he truly
          emerged as a force to be reckoned with, securing six gold medals and
          two bronze medals, a remarkable achievement for any athlete.
        </Box>
        <Box
          maxW="900px"
          maxH="400px"
          border="2px"
          borderColor="gray.200"
          borderRadius={10}
          mb={20}
          mt={10}
        >
          bdabdgorgnopergnomepogmopergmeropgmäemero
        </Box>
      </Stack>
      <VStack spacing={4} align="stretch">
        <Box
          width="800px"
          height="400px"
          border="2px"
          borderColor="gray.200"
          borderRadius={10}
          mb={20}
        >
          <Heading size={"lg"}>Sponsors</Heading>
          {/* Content of the first box */}
        </Box>
        <Box
          width="800px"
          height="400px"
          border="2px"
          borderColor="gray.200"
          borderRadius={10}
          mb={15}
        >
          {/* Content of the second box */}
          <Heading size={"lg"}>Medals</Heading>
        </Box>
        <Box h="40px" bg="pink.100">
          3
        </Box>
      </VStack>
    </>
  );
};
