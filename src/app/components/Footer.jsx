"use client";

import { HStack, IconButton, Link, Text, VStack } from "@chakra-ui/react";
import { sosialMedia } from "../libs/datas";

const Footer = () => {
  return (
    <VStack py={4}>
      <HStack>
        {sosialMedia.map((sosmed, id) => (
          <IconButton
            as={Link}
            href={sosmed.link}
            variant="ghost"
            key={id}
            icon={sosmed.icon}
          />
        ))}
      </HStack>
      <Text>Aldi Pratama &copy; 2023</Text>
    </VStack>
  );
};

export default Footer;
