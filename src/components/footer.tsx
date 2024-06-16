import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareThreads,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <Box padding={3} marginTop="100px" bg="orange.100">
      <Flex justify="space-evenly" align="center" maxW="350px" m="auto">
        <Icon as={FaSquareThreads} w={8} h={8} />
        <Icon as={FaSquareFacebook} color="blue" w={8} h={8} />
        <Icon as={FaTwitter} color="dodgerblue" w={8} h={8} />
        <Icon as={FaInstagram} color="pink.500" w={8} h={8} />
      </Flex>
      <Box marginTop={5}>
        <Text opacity={0.8} textAlign="center">
          Copyright @ 2024
        </Text>
        <Text opacity={0.9} textAlign="center">
          Zugerd
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
