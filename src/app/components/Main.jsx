"use client";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { portfolio, skills } from "../libs/datas";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const Main = () => {
  return (
    <Container as="main" maxW="2xl">
      <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="full">
        <TabList rounded="full" w={300} mt={2}>
          <Tab
            w="full"
            roundedRight={0}
            roundedLeft="full"
            border="2px"
            borderColor="#BEE3F8"
          >
            Portfolio
          </Tab>
          <Tab
            w="full"
            roundedLeft={0}
            roundedRight="full"
            border="2px"
            borderColor="#BEE3F8"
          >
            Skills
          </Tab>
        </TabList>
        <TabPanels w="full">
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {portfolio.map((data, id) => (
                <Card key={id}>
                  <Image
                    src={data.image}
                    alt="Green double couch with wooden legs"
                    objectFit="cover"
                    roundedTop="md"
                    w="full"
                    h="full"
                  />
                  <CardBody p={0}>
                    <Stack mt="2" spacing="3">
                      <Heading size="md">{data.title}</Heading>
                      <Text noOfLines={3} px={2}>
                        {data.desc}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider mt={2} />
                  <CardFooter>
                    <ButtonGroup spacing="2" mx="auto">
                      <Button
                        as={Link}
                        href={data.link}
                        target="_blank"
                        rightIcon={<LiaExternalLinkAltSolid />}
                      >
                        Visit Page
                      </Button>
                      {/* <Button variant="ghost">Read More</Button> */}
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
              {skills.map((data, id) => (
                <Card key={id}>
                  <CardBody>
                    <Flex direction="column">
                      <Heading fontSize="md" mb={3}>
                        {data.title}
                      </Heading>
                      <Flex
                        gap={2}
                        alignItems="center"
                        justify={{ base: "center", md: "flex-start" }}
                        wrap="wrap"
                      >
                        {data.icons.map((icon, id) => (
                          <Link
                            key={id}
                            href={icon.link}
                            aria-label="html"
                            target="_blank"
                          >
                            <IconButton icon={icon.el} />
                          </Link>
                        ))}
                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Main;
