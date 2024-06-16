import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const OrderListModal = () => {
  return (
    <>
      <Box
        width="100%"
        paddingX={{ sm: "10%", lg: "14%" }}
        marginTop={{ base: "40px", lg: "73px" }}
        display="inline-block"
        alignContent="center"
        alignSelf="center"
      >
        <Heading
          as="h2"
          size="md"
          textAlign="center"
          marginBottom="40px"
          marginTop="30px"
        >
          Order through one of the following delevery service today
        </Heading>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 6 }} spacing={5}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box justifyContent="center" cursor="pointer">
              <Text display="inline" as="b" fontSize="lg">
                Uber
              </Text>
              <Text display="inline" color="green" as="b" fontSize="lg">
                Eats
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="red"
            cursor="pointer"
          >
            <Text as="b" fontSize="lg">
              Doordash
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <Text as="b" fontSize="lg">
              Postmates
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="red"
            cursor="pointer"
          >
            <Text as="b" fontSize="lg">
              Rappi
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="red"
            cursor="pointer"
          >
            <Text as="b" fontSize="lg">
              Grubhub
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="blue"
            cursor="pointer"
          >
            <Text as="b" fontSize="lg">
              learni
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default OrderListModal;
