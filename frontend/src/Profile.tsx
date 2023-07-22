import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Heading,
  Stack,
  VStack,
  Badge,
  Wrap,
  WrapItem,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
} from "@chakra-ui/react";

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
          <Flex align="left" my={4} ml={4}>
            <Avatar
              size="2xl"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Box ml="3">
              <Heading size={"lg"} ml={1}>
                Michael Jones
              </Heading>
              <Badge bgColor="#FF4E4E" ml={1}>
                Swimming
              </Badge>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <VStack mt={2} alignItems={"left"}>
        <Heading fontSize={20} alignContent={"left"} mt={5} mb={5}>
          Supported By
        </Heading>
        <Wrap>
          <WrapItem>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
            />
          </WrapItem>
          <WrapItem>
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          </WrapItem>
          <WrapItem>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
          </WrapItem>
          <WrapItem>
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </WrapItem>
          <WrapItem>
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          </WrapItem>
        </Wrap>
      </VStack>

      <Stack direction={["column", "row"]} spacing="24px">
        <Box
          maxW="900px"
          maxH="400px"
          border="2px"
          borderColor="gray.200"
          borderRadius={10}
          mb={20}
          mt={10}
          padding={3}
        >
          <Heading mt={2} mb={4}>
            About Mickael
          </Heading>
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
          ml={40}
          padding={3}
        >
          <Heading mt={2} mb={4}>
            How to Support
          </Heading>

          <p> 🏅 World Championship</p>
          <p>
            subsidize athlete’s flight tickets, accommodation, transportation
            and other necessary expenses
          </p>
          <Heading size={"sm"} mt={4} mb={3}>
            Fundraising budget : $5000
          </Heading>
          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Button mt={4} bgColor={"#FF4E4E"}>
            Become a Supporter
          </Button>
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
