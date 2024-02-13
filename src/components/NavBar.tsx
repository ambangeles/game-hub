import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";

export const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} alt="logo" boxSize="60px" />
            <Text fontSize="2xl" fontWeight="bold">
                Navbar
            </Text>
        </HStack>
    );
};
