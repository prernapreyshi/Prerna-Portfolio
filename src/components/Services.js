// src/components/Services.js
import React from "react"; // ✅ Make sure this is included!
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Icon,
  VStack,
} from "@chakra-ui/react";
import {
  FaCode,
  FaMobileAlt,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const services = [
  {
    title: "UI/UX Design",
    description: "Clean, modern interfaces designed with user-centric principles.",
    icon: MdDesignServices,
  },
  {
    title: "Frontend Development",
    description: "Pixel-perfect websites using HTML, CSS, and JavaScript.",
    icon: FaCode,
  },
  {
    title: "React App Development",
    description: "Interactive and performant single-page apps with React.",
    icon: FaReact,
  },
  {
    title: "Responsive Web Design",
    description: "Fully responsive layouts for all screen sizes.",
    icon: FaMobileAlt,
  },
  {
    title: "MERN Stack Development",
    description: "Building full-stack apps using MongoDB, Express.js, React, and Node.js.",
    icon: FaDatabase,
  },
];

const Services = () => {
  return (
    <Box id="services" bg="brand.light" color="brand.dark" py={16} px={6}>
      <Heading textAlign="center" mb={12}>
        My Services
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        maxW="6xl"
        mx="auto"
      >
        {services.map((service) => (
          <VStack
            key={service.title}
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            align="start"
            spacing={4}
            _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
          >
            <Icon as={service.icon} boxSize={8} color="brand.accent" />
            <Text fontSize="xl" fontWeight="bold">
              {service.title}
            </Text>
            <Text fontSize="md">{service.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;
