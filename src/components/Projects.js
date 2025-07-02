// src/components/Projects.js
import React from "react"; // ✅ Ensure this is present
import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "ShareMyRide",
    description:
      "A ride-sharing platform built using React, Express.js, MongoDB, and Google Maps API. Offers real-time ride requests, authentication, and dynamic UI.",
    link: "https://github.com/prernapreyshi/ShareMyRide",
  },
  {
    title: "Weather Forecasting Website",
    description:
      "A responsive weather app built with JavaScript, HTML, and CSS. Integrates a weather API to display live temperature, humidity, wind speed, and forecasts.",
    link: "https://github.com/prernapreyshi/Weather-Forecast",
  },
  {
    title: "Coffee Cafe E-Commerce Website",
    description:
      "An e-commerce website for a coffee shop built with React. Features product browsing, UI/UX-focused design, and responsive layout for mobile and desktop.",
    link: "https://github.com/prernapreyshi/coffee_cafe",
  },
  {
    title: "DreamDestina",
    description:
      "Created a responsive travel guide website that helps users discover popular attractions in various destinations, offering personalized exploration through filters and intuitive design.",
    link: "https://github.com/prernapreyshi/DreamDestina",
  },
];

const Projects = () => {
  return (
    <Box id="projects" bg="brand.beige" color="brand.dark" px={6} py={16}>
      <Heading textAlign="center" mb={12}>
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} maxW="6xl" mx="auto">
        {projects.map((project) => (
          <VStack
            key={project.title}
            align="start"
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            spacing={4}
            _hover={{ transform: "scale(1.03)", transition: "0.3s ease" }}
          >
            <Text fontSize="xl" fontWeight="bold">
              {project.title}
            </Text>
            <Text fontSize="md">{project.description}</Text>
            <Link
              href={project.link}
              isExternal
              color="brand.accent"
              fontWeight="medium"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Icon as={FaGithub} /> View on GitHub
            </Link>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
