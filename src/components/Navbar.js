// src/components/Navbar.js
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

const links = ["Home", "About Me", "Services", "Projects", "Contact"];

const NavLink = ({ to, children }) => (
  <ChakraLink
    as={ScrollLink}
    to={to}
    smooth={true}
    duration={500}
    offset={-70}
    px={4}
    py={2}
    rounded="md"
    _hover={{ textDecoration: "none", bg: "brand.accent", color: "white" }}
    fontWeight="medium"
    cursor="pointer"
  >
    {children}
  </ChakraLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      bg={isSticky ? "brand.dark" : "transparent"}
      px={4}
      position="fixed"
      top={0}
      width="100%"
      zIndex={10}
      transition="background-color 0.3s ease"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" fontSize="xl" color="brand.accent">
          Prerna Preyshi
        </Box>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="brand.light"
        />
        <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <NavLink key={link} to={link.toLowerCase().replace(/\s/g, "")}>
              {link}
            </NavLink>
          ))}
        </HStack>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLink key={link} to={link.toLowerCase().replace(/\s/g, "")}>
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
