import {
  Button,
  Card,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import burger from "../assets/burger.jpg";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";

const Modal = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
        spacing={1}
        padding={3}
        marginTop={{ base: "20px", lg: "50px", xl: "50px" }}
        marginX={{ lg: 8 }}
      >
        <Card padding={2} justifyContent="center" width="1fr">
          <Heading marginBottom={2} fontFamily="helvetica">
            The best place to eat
            {
              <Heading
                color="orange"
                display="inline-flex"
                paddingLeft="6px"
                fontFamily="Helvatica"
              >
                Burgers in LA.
              </Heading>
            }
          </Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            dolorem maxime, molestiae esse, laboriosam repudiandae neque
            ratione, voluptatibus iste consequatur cumque earum in. Non sunt,
            minima similique maiores cum aliquam!
          </Text>
          <Stack direction="row" spacing={4} marginY={5}>
            <Button
              leftIcon={<EmailIcon />}
              colorScheme="orange"
              variant="solid"
            >
              Email
            </Button>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="orange"
              variant="outline"
            >
              Call us
            </Button>
          </Stack>
        </Card>
        <Card
          alignItems="center"
          justifyContent="center"
          width="1fr"
          padding={{ sm: 5 }}
          paddingTop={{ base: 10, lg: 0, xl: 0 }}
        >
          <Image
            src={burger}
            alt="burger"
            maxWidth={{ sm: "300px", xl: "350px" }}
            objectFit="cover"
            borderRadius={10}
            boxShadow="xl"
          />
        </Card>
      </SimpleGrid>
    </>
  );
};

export default Modal;
