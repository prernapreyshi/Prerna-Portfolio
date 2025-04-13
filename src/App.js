// src/App.js
import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme"; // ✅ Make sure this is a valid exported object

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { Element } from "react-scroll"; // ✅ Clean direct import

// ✅ Error boundary to gracefully catch any rendering issues
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box textAlign="center" mt={20} fontSize="xl" color="red.400">
          Something went wrong. Please try again later.
        </Box>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <Box bg="brand.dark" color="white" pt="16">
          <Navbar />

          {/* Scrollable Sections */}
          <Element name="home">
            <HeroSection />
          </Element>

          <Element name="aboutme">
            <AboutMe />
          </Element>

          <Element name="services">
            <Services />
          </Element>

          <Element name="projects">
            <Projects />
          </Element>

          <Element name="contact">
            <Footer />
          </Element>
        </Box>
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
