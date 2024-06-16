import {
  Box,
  Card,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { GiSelfLove } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { FaChartLine, FaTwitter } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";
import woman from "../assets/woman.webp";
import man from "../assets/man.webp";
import mann from "../assets/mann.webp";
import resize from "../assets/resize.jpg";

import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareThreads,
} from "react-icons/fa6";
import Footer from "./footer";

const AboutUs = () => {
  return (
    <Box mt={7}>
      <Box
        textAlign="center"
        maxW="600px"
        margin="auto"
        padding="10px"
        mb="50px"
      >
        <Text as="b" color="orange" my={1}>
          About Us
        </Text>
        <Heading my={1}>We Do Things Differently...</Heading>
        <Text my={3}>
          We focus on the details of everything we do. all to help businesses
          around the world focus on what is most important to them
        </Text>
      </Box>
      <Box w="100%" bgImage={resize} padding="10px">
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3 }}
          spacing={5}
          my={{ md: "25px" }}
        >
          <Card
            textAlign="center"
            bg="white"
            p={5}
            maxW="400px"
            margin="auto"
            opacity={0.8}
          >
            <Text as="b" color="orangered" my={1} fontSize="4xl">
              400+
            </Text>
            <Text my={1}>Projects Completed</Text>
            <Text my={3}>
              We focus on the details of everything we do. all to help
              businesses around the world focus on what is most important to
              them
            </Text>
          </Card>
          <Card
            textAlign="center"
            bg="white"
            p={5}
            maxW="400px"
            margin="auto"
            opacity={0.8}
          >
            <Text as="b" color="orangered" my={1} fontSize="4xl">
              600%
            </Text>
            <Text my={1}>Return on investment</Text>
            <Text my={3}>
              We focus on the details of everything we do. all to help
              businesses around the world focus on what is most important to
              them
            </Text>
          </Card>
          <Card
            textAlign="center"
            bg="white"
            p={5}
            maxW="400px"
            margin="auto"
            opacity={0.8}
          >
            <Text as="b" color="orangered" my={1} fontSize="4xl">
              10K
            </Text>
            <Text my={1}>Global downloads</Text>
            <Text my={3}>
              We focus on the details of everything we do. all to help
              businesses around the world focus on what is most important to
              them
            </Text>
          </Card>
        </SimpleGrid>
      </Box>
      <Box
        textAlign="center"
        maxW="600px"
        margin="auto"
        padding="10px"
        mt="80px"
      >
        <Text as="b" color="orange" my={1}>
          Our Values
        </Text>
        <Heading my={1}>
          We are ambitious and a smart team with a shared mission
        </Heading>
        <Text my={3}>
          We focus on the details of everything we do. all to help businesses
          around the world focus on what is most important to them
        </Text>
      </Box>
      <Box padding="10px">
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2 }}
          spacing={5}
          my={{ md: "25px" }}
          maxW="768px"
          margin="auto"
        >
          <Card
            textAlign="center"
            p={5}
            maxW="400px"
            margin="auto"
            align="center"
          >
            <Icon as={GiSelfLove} color="orangered" w="50px" h="50px" m={3} />
            <Text as="b" my={1}>
              Be execellent to each other
            </Text>
            <Text my={3}>
              No games, No bullshit. We rely on our peers to improve, Be open,
              honest and kind.
            </Text>
          </Card>
          <Card
            textAlign="center"
            p={5}
            maxW="400px"
            margin="auto"
            align="center"
          >
            <Icon as={IoMdContacts} color="orangered" w="50px" h="50px" m={3} />
            <Text as="b" my={1}>
              Care about our team
            </Text>
            <Text my={3}>
              Understand what matters to our employees. Give them what they need
              to do their best work
            </Text>
          </Card>
          <Card
            textAlign="center"
            p={5}
            maxW="400px"
            margin="auto"
            align="center"
          >
            <Icon as={FaChartLine} color="orangered" w="50px" h="50px" m={3} />
            <Text as="b" my={1}>
              Pride in what we do
            </Text>
            <Text my={3}>
              Value quality and integrity in everything we do. At all times. No
              exception
            </Text>
          </Card>
          <Card
            textAlign="center"
            p={5}
            maxW="400px"
            margin="auto"
            align="center"
          >
            <Icon
              as={FaRegSmileWink}
              color="orangered"
              w="50px"
              h="50px"
              m={3}
            />
            <Text as="b" my={1}>
              Pride in what we do
            </Text>
            <Text my={3}>
              Value quality and integrity in everything we do. At all times. No
              exception
            </Text>
          </Card>
        </SimpleGrid>
      </Box>
      <Box
        textAlign="center"
        maxW="600px"
        margin="auto"
        padding="10px"
        mt="80px"
      >
        <Text as="b" color="orange" my={1}>
          We're Hiring
        </Text>
        <Heading my={1}>Meet our team</Heading>
        <Text my={3}>
          Our philosophy is simple - hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work
        </Text>
      </Box>
      <Box padding="10px">
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3 }}
          spacing={5}
          my={{ md: "25px" }}
        >
          <Card
            textAlign="center"
            p={5}
            maxW="400px"
            margin="auto"
            align="center"
          >
            <Image
              src={woman}
              alt="olivia"
              borderRadius="full"
              boxSize="100px"
            />
            <Text as="b" my={1}>
              Olivia Rhye
            </Text>
            <Text color="orangered">Founder and Ceo</Text>
            <Text my={3}>
              Former co-founder of Opendoor. Early staff at Spotify and Clearbit
            </Text>
            <Box
              w="100%"
              display="inline-block"
              justifyContent="space-around"
              alignItems="center"
            >
              <Icon as={FaSquareThreads} w={5} h={5} m={1} />
              <Icon as={FaSquareFacebook} color="blue" w={5} h={5} m={1} />
              <Icon as={FaTwitter} color="dodgerblue" w={5} h={5} m={1} />
              <Icon as={FaInstagram} color="pink.500" w={5} h={5} m={1} />
            </Box>
          </Card>
          <Card
            textAlign="center"
            p={5}
            maxW="400px"
            margin="auto"
            align="center"
          >
            <Image src={man} alt="Baker" borderRadius="full" boxSize="100px" />
            <Text as="b" my={1}>
              Phoenix Baker
            </Text>
            <Text color="orangered">Engineering Manager</Text>
            <Text my={3}>
              Lead Engineering teams at figma, libs and protocol labs
            </Text>
            <Box
              w="100%"
              display="inline-block"
              justifyContent="space-around"
              alignItems="center"
            >
              <Icon as={FaSquareThreads} w={5} h={5} m={1} />
              <Icon as={FaSquareFacebook} color="blue" w={5} h={5} m={1} />
              <Icon as={FaTwitter} color="dodgerblue" w={5} h={5} m={1} />
              <Icon as={FaInstagram} color="pink.500" w={5} h={5} m={1} />
            </Box>
          </Card>
          <Card
            textAlign="center"
            p={5}
            maxW="400px"
            margin="auto"
            align="center"
          >
            <Image
              src={mann}
              alt="Steiner"
              borderRadius="full"
              boxSize="100px"
            />
            <Text as="b" my={1}>
              Steiner Caviro
            </Text>
            <Text color="orangered">Product Manager</Text>
            <Text my={3}>Former Pm for linear lamba school.</Text>
            <Box
              w="100%"
              display="inline-block"
              justifyContent="space-around"
              alignItems="center"
            >
              <Icon as={FaSquareThreads} w={5} h={5} m={1} />
              <Icon as={FaSquareFacebook} color="blue" w={5} h={5} m={1} />
              <Icon as={FaTwitter} color="dodgerblue" w={5} h={5} m={1} />
              <Icon as={FaInstagram} color="pink.500" w={5} h={5} m={1} />
            </Box>
          </Card>
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutUs;
