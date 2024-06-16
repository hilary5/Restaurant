import {
  Box,
  Card,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { RiDrinks2Line } from "react-icons/ri";
import { FaBowlFood } from "react-icons/fa6";
import { MdBreakfastDining } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Menu = () => {
  return (
    <>
      <Box
        width="100%"
        paddingX={{ sm: "10%", lg: "0%" }}
        marginTop={{ base: "40px", lg: "73px" }}
        display="inline-block"
        alignContent="center"
        alignSelf="center"
      >
        <Heading as="h3" size="md" textAlign="center" marginY={"50px"}>
          Browse our menu
        </Heading>
        <Box marginX="50px">
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 4 }} spacing={5}>
            <Card
              align={"center"}
              cursor="pointer"
              overflow="hidden"
              paddingTop="10px"
            >
              <Square
                bg="#FFD580"
                size="150px"
                borderRadius="xl"
                marginBottom="20px"
              >
                <Icon
                  as={MdBreakfastDining}
                  w={14}
                  height={14}
                  color={"orangered"}
                />
              </Square>
              <Text size="md" as="b">
                Breakfast
              </Text>
              <Text size="md" textAlign="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                earum.
              </Text>
              <Tag
                size="lg"
                key="lg"
                borderRadius="full"
                bg="white"
                color="orange"
                marginY="10px"
              >
                <TagLabel as="b">Browse Category</TagLabel>
                <ChevronRightIcon />
              </Tag>
            </Card>
            <Card
              align={"center"}
              cursor="pointer"
              overflow="hidden"
              paddingTop="10px"
            >
              <Square
                bg="#FFD580"
                size="150px"
                borderRadius="xl"
                marginBottom="20px"
              >
                <Icon as={FaBowlFood} w={14} height={14} color={"orangered"} />
              </Square>
              <Text size="md" as="b">
                Main Dishes
              </Text>
              <Text size="md" textAlign="center">
                Ratione a, non reprehenderit architecto nulla accusantium
                necessitatibus sed impedit!
              </Text>
              <Tag
                size="lg"
                key="lg"
                borderRadius="full"
                bg="white"
                color="orange"
                marginY="10px"
              >
                <TagLabel as="b">Browse Category</TagLabel>
                <ChevronRightIcon />
              </Tag>
            </Card>
            <Card
              align={"center"}
              cursor="pointer"
              overflow="hidden"
              paddingTop="10px"
            >
              <Square
                bg="#FFD580"
                size="150px"
                borderRadius="xl"
                marginBottom="20px"
              >
                <Icon
                  as={RiDrinks2Line}
                  w={14}
                  height={14}
                  color={"orangered"}
                />
              </Square>
              <Text size="md" as="b">
                Drinks
              </Text>
              <Text size="md" textAlign="center">
                Ratione a, non reprehenderit architecto nulla accusantium
                necessitatibus sed impedit!
              </Text>
              <Tag
                size="lg"
                key="lg"
                borderRadius="full"
                bg="white"
                color="orange"
                marginY="10px"
              >
                <TagLabel as="b">Browse Category</TagLabel>
                <ChevronRightIcon />
              </Tag>
            </Card>
            <Card
              align={"center"}
              cursor="pointer"
              overflow="hidden"
              paddingTop="10px"
            >
              <Square
                bg="#FFD580"
                size="150px"
                borderRadius="xl"
                marginBottom="20px"
              >
                <Icon as={LuDessert} w={14} height={14} color={"orangered"} />
              </Square>
              <Text size="md" as="b">
                Dessert
              </Text>
              <Text size="md" textAlign="center">
                Ratione a, non reprehenderit architecto nulla accusantium
                necessitatibus sed impedit!
              </Text>
              <Tag
                size="lg"
                key="lg"
                borderRadius="full"
                bg="white"
                color="orange"
                marginY="10px"
              >
                <TagLabel as="b">Browse Category</TagLabel>
                <ChevronRightIcon />
              </Tag>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Menu;
