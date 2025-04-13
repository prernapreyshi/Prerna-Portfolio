import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Progress,
} from "@chakra-ui/react";

const skills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 85 },
  { name: "JavaScript", value: 90 },
  { name: "React.js", value: 88 },
  { name: "Express.js / MongoDB", value: 80 },
  { name: "Node.js", value: 75 },
];

const AboutMe = () => {
  return (
    <Box as="section" id="aboutme" bg="brand.beige" color="brand.dark" px={6} py={16}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={12}
        maxW="6xl"
        mx="auto"
      >
        <Image
          src="/profile.jpg"
          alt="Prerna Preyshi"
          borderRadius="full"
          boxSize={{ base: "200px", md: "250px" }}
          objectFit="cover"
          border="4px solid #D98324"
        />

        <Box flex={1}>
          <Heading mb={4}>About Me</Heading>
          <Text mb={6} fontSize="lg">
            I'm a dedicated Frontend Developer with a strong foundation in JavaScript, React.js, HTML, and CSS.
            I'm passionate about building user-centric digital experiences and contributing innovative solutions
            to dynamic teams. As a fresher, I'm eager to grow with a collaborative and future-focused organization.
          </Text>

          <Stack spacing={4}>
            {skills.map((skill) => (
              <Box key={skill.name}>
                <Text fontWeight="medium">{skill.name}</Text>
                <Progress
                  value={skill.value}
                  colorScheme="orange"
                  size="sm"
                  borderRadius="full"
                  bg="brand.light"
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutMe;
