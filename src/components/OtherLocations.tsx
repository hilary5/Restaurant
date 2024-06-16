import {
  Box,
  Card,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  Wrap,
} from "@chakra-ui/react";
import statue from "../assets/statue.png";
import fras from "../assets/fras.jpg";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const OtherLocations = () => {
  return (
    <>
      <Box
        width="100%"
        marginTop={{ base: "40px", lg: "73px" }}
        display="inline-block"
        alignContent="center"
        alignSelf="center"
      >
        <Heading as="h3" size="md" textAlign="center" marginY={"50px"}>
          Meet our other locations
        </Heading>
        <Box marginX={{ base: "0px", md: "50px" }}>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 1 }}>
            <Card
              align={"center"}
              cursor="pointer"
              overflow="hidden"
              paddingTop="10px"
              boxShadow="base"
            >
              <Stack direction={{ base: "column", md: "row" }} spacing={3}>
                <Image
                  src={statue}
                  objectFit="cover"
                  borderRadius="lg"
                  alignSelf={"center"}
                  maxW="350px"
                />
                <Stack divider={<StackDivider />} padding={3}>
                  <Box margin={{ md: "30px" }} paddingLeft="10px">
                    <Text
                      as="b"
                      fontSize={{ lg: "2xl" }}
                      margin={2}
                      color="orangered"
                    >
                      New York
                    </Text>
                    <Text fontSize={{ lg: "xl" }} margin={2}>
                      745 W, Prospect street jomoico, New york, NY 11432
                    </Text>
                  </Box>
                  <Box margin={{ md: "30px" }}>
                    <Wrap
                      align="center"
                      fontSize={{ sm: "md", md: "md" }}
                      margin={2}
                      paddingLeft="10px"
                    >
                      <PhoneIcon color="orangered" />
                      <Text>newyork@email.com</Text>
                    </Wrap>
                    <Wrap
                      align="center"
                      fontSize={{ sm: "md", md: "md" }}
                      margin={2}
                      paddingLeft="10px"
                    >
                      <EmailIcon color="orangered" />
                      <Text>+1 888 9999</Text>
                    </Wrap>
                  </Box>
                </Stack>
              </Stack>
            </Card>
            <Card
              align={"center"}
              cursor="pointer"
              overflow="hidden"
              marginTop="30px"
              boxShadow="base"
            >
              <Stack direction={{ base: "column", md: "row" }} spacing={3}>
                <Image
                  src={fras}
                  objectFit="cover"
                  borderRadius="lg"
                  alignSelf={"center"}
                  maxW="350px"
                />
                <Stack divider={<StackDivider />} padding={3}>
                  <Box margin={{ md: "30px" }} paddingLeft="10px">
                    <Text
                      as="b"
                      fontSize={{ lg: "2xl" }}
                      margin={2}
                      color="orangered"
                    >
                      San Francisco,CA
                    </Text>
                    <Text fontSize={{ lg: "xl" }} margin={2}>
                      7631 S. Manhattan St. Huntington park, San francisco
                    </Text>
                  </Box>
                  <Box margin={{ md: "30px" }}>
                    <Wrap
                      align="center"
                      fontSize={{ sm: "md", md: "md" }}
                      margin={2}
                      paddingLeft="10px"
                    >
                      <PhoneIcon color="orangered" />
                      <Text>sanfrascisco@code.com</Text>
                    </Wrap>
                    <Wrap
                      align="center"
                      fontSize={{ sm: "md", md: "md" }}
                      margin={2}
                      paddingLeft="10px"
                    >
                      <EmailIcon color="orangered" />
                      <Text>+1 999 0000</Text>
                    </Wrap>
                  </Box>
                </Stack>
              </Stack>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default OtherLocations;
