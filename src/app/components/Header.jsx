"use client";

import {
  IconButton,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillMoonStarsFill, BsCloudSun } from "react-icons/bs";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const IconMode = useColorModeValue(BsFillMoonStarsFill, BsCloudSun);
  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`flex justify-between p-4 py-2 backdrop-blur-lg ${
          colorMode === "light" ? "bg-[#ffffff50]" : "bg-[#1A202C50]"
        }`}
      >
        <IconButton as="a" href="/" variant="ghost" boxSize={50}>
          <Image
            alt="logo"
            src="/assets/logo.svg"
            w={40}
            h={40}
            className={colorMode === "light" && "invert"}
          />
        </IconButton>
        <IconButton
          onClick={toggleColorMode}
          icon={<IconMode size={30} />}
          variant="ghost"
          boxSize={50}
        />
      </nav>
    </header>
  );
};

export default Header;
