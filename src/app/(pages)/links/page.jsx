import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { datas, sosialMedia } from "@/app/libs/datas";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export const metadata = {
  title: "Aldiipratama | Links",
  description: "page Links in my Portfolio",
  icons: {
    icon: "/assets/img/favicon.ico",
    apple: "/assets/img/apple-touch-icon.png",
    other: [
      {
        url: "/assets/img/favicon-16x16.png",
        rel: "icon",
      },
      {
        rel: "icon",
        url: "/assets/img/favicon-32x32.png",
      },
      {
        rel: "icon",
        url: "/assets/img/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        url: "/assets/img/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "assets/img/site.webmanifest",
};

const page = () => {
  return (
    <>
      <Header />
      <Container p={0} as='main'>
        <VStack>
          <Image alt="bg-hero " src="/assets/img/bg-hero.png" w="full" />
          <Box textAlign="left" px={4} w="full">
            <Heading>Link Me!</Heading>
            <Text>Find Me in Sosial Media 😎</Text>
          </Box>
          <ButtonGroup px={4} w="full">
            <Button
              as={Link}
              target="_blank"
              variant="outline"
              href={datas.website.link}
            >
              {datas.website.title}
            </Button>
            <Button
              as={Link}
              target="_blank"
              variant="outline"
              href={sosialMedia[4].link}
            >
              {sosialMedia[4].title}
            </Button>
          </ButtonGroup>
          <Box w="full" px={4}>
            <Heading fontSize="xl">Sosial Media</Heading>
            <ButtonGroup w="full" mt={2}>
              <Button
                as={Link}
                target="_blank"
                variant="outline"
                href={sosialMedia[0].link}
              >
                {sosialMedia[0].title}
              </Button>
              <Button
                as={Link}
                target="_blank"
                variant="outline"
                href={sosialMedia[1].link}
              >
                {sosialMedia[1].title}
              </Button>
              <Button
                as={Link}
                target="_blank"
                variant="outline"
                href={sosialMedia[2].link}
              >
                {sosialMedia[2].title}
              </Button>
              <Button
                as={Link}
                target="_blank"
                variant="outline"
                href={sosialMedia[3].link}
              >
                {sosialMedia[3].title}
              </Button>
            </ButtonGroup>
          </Box>
          <Box w="full" px={4}>
            <Heading fontSize="xl">Code</Heading>
            <ButtonGroup w="full" mt={2}>
              <Button
                as={Link}
                target="_blank"
                variant="outline"
                href={datas.replit.link}
              >
                {datas.replit.title}
              </Button>
              <Button
                as={Link}
                target="_blank"
                variant="outline"
                href={sosialMedia[2].link}
              >
                {sosialMedia[2].title}
              </Button>
            </ButtonGroup>
          </Box>
          <Box w="full" px={4}>
            <Heading fontSize="xl">Publication</Heading>
            <ButtonGroup w="full" mt={2}>
              <Button
                as={Link}
                variant="outline"
                target="_blank"
                href={datas.frontendMentor.link}
              >
                {datas.frontendMentor.title}
              </Button>
            </ButtonGroup>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default page;
