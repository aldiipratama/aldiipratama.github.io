"use client";

import {
  Image,
  Container,
  Avatar,
  Box,
  useColorModeValue,
  VStack,
  Text,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import { MdOutlineWork, MdDateRange } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { FaBirthdayCake } from "react-icons/fa";
import Link from "next/link";
import Gambar from "next/image";

const Hero = () => {
  const borderColor = useColorModeValue("border-black", "border-white");
  return (
    <Container p={0} as="section">
      <VStack>
        <Image alt="bg-hero " src="/assets/img/bg-hero.png" w="full" />
        <Box
          boxSize={150}
          className={`border-4 ${borderColor} rounded-full`}
          mt={{ base: "-10", md: "-14" }}
        >
          <Avatar
            size="xl"
            name="aldiipratama"
            src="/assets/img/profile.jpg"
            w="full"
            h="full"
          />
        </Box>
        <Heading as="h1" fontSize="4xl">
          Aldi Pratama
        </Heading>
        <Heading fontSize="lg">Coffe, Music, and Books.</Heading>
        <Text>&quot;I like climbing, but i&apos;m not climber&quot;</Text>
        <HStack>
          <Button
            leftIcon={<MdOutlineWork />}
            isDisabled={true}
            variant="ghost"
            size={{ base: "xs", md: "lg" }}
          >
            Student
          </Button>
          <Button
            as={Link}
            leftIcon={<LuLink />}
            variant="link"
            href="/links"
            className="hover:text-blue-500"
            size={{ base: "xs", md: "lg" }}
          >
            /links
          </Button>
          <Button
            leftIcon={<FaBirthdayCake />}
            isDisabled={true}
            variant="ghost"
            size={{ base: "xs", md: "lg" }}
          >
            August, 1st
          </Button>
          <Button
            leftIcon={<MdDateRange />}
            size={{ base: "xs", md: "lg" }}
            isDisabled={true}
            variant="ghost"
          >
            Joined 2022
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Hero;
