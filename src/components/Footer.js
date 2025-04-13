import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  HStack,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="brand.dark" color="brand.light" py={16} id="contact">
      <Container maxW="container.lg">
        <VStack spacing={6} textAlign="center">
          <Heading size="lg" color="brand.accent">
            Let’s Connect
          </Heading>

          <Text fontSize="lg" maxW="2xl">
            I'm always open to discussing new ideas, collaborating on innovative projects, or exploring exciting opportunities in the tech world.
          </Text>

          <Text fontSize="md">
            Email:{" "}
            <Link
              href="mailto:prernapreyshi.21@gmail.com"
              color="brand.accent"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
            >
              prernapreyshi.21@gmail.com
            </Link>
          </Text>

          <HStack spacing={6} pt={4}>
            <Link href="https://github.com/prernapreyshi" isExternal>
              <IconButton
                icon={<FaGithub />}
                aria-label="GitHub"
                variant="ghost"
                fontSize="xl"
                color="brand.accent"
                _hover={{ bg: "brand.light", color: "brand.dark" }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/prerna-preyshi-1b8327256/" isExternal>
              <IconButton
                icon={<FaLinkedin />}
                aria-label="LinkedIn"
                variant="ghost"
                fontSize="xl"
                color="brand.accent"
                _hover={{ bg: "brand.light", color: "brand.dark" }}
              />
            </Link>
            <Link href="mailto:prernapreyshi.21@gmail.com" isExternal>
              <IconButton
                icon={<FaEnvelope />}
                aria-label="Email"
                variant="ghost"
                fontSize="xl"
                color="brand.accent"
                _hover={{ bg: "brand.light", color: "brand.dark" }}
              />
            </Link>
          </HStack>

          <Divider borderColor="brand.light" opacity={0.3} pt={8} />

        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
