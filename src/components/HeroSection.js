import React from "react";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Box
      as="section"
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="brand.dark"
      px={6}
      py={12}
    >
      <Stack spacing={6} textAlign="center" maxW="3xl">
        <Heading fontSize={{ base: "3xl", md: "5xl" }} color="brand.light">
          Hi, I am <Text as="span" color="brand.accent">Prerna Preyshi</Text>
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} color="brand.light">
          A passionate Frontend Developer crafting clean and dynamic web experiences using React, JavaScript, and modern tech.
        </Text>
        <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify="center">
          <Button
            as="a"
            href="/Resume.pdf" // Corrected path (no /public prefix needed)
            download
            bg="brand.accent"
            color="white"
            _hover={{ bg: "brand.accentLight" }}
            leftIcon={<FaDownload />}
          >
            Download Resume
          </Button>
          
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroSection;
