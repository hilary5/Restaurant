import {
  Box,
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

const SignUp = () => {
  const [input, setInput] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const isError = input === "";
  const isErrorPassword = password === "";
  const isErrorFirstName = firstName === "";
  const isErrorLastName = lastName === "";
  return (
    <Box padding={{ base: "10px", sm: "20px" }}>
      <Card
        maxWidth="450px"
        margin="auto"
        padding={2}
        maxH="auto"
        marginTop={{ base: "50px" }}
      >
        <form>
          <Text as="b" fontSize="2xl" ml="8px">
            Sign Up
          </Text>
          <FormControl isInvalid={isErrorFirstName} isRequired my={4}>
            <FormLabel>FirstName</FormLabel>
            <Input
              type="text"
              value={"" || firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="FirstName"
            />
            {!isErrorFirstName ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>FirstName is Required </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isErrorLastName} isRequired my={4}>
            <FormLabel>LastName</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="LastName"
            />
            {!isErrorLastName ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>LastName is Required </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isError} isRequired my={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Joe@email.com"
            />
            {!isError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl maxW="250px" my={4}>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select country">
              <option>United Arab Emirates</option>
              <option>United states</option>
              <option>England</option>
              <option>France</option>
              <option>Nigeria</option>
              <option>Israel</option>
              <option>Spain</option>
              <option>Italy</option>
              <option>Mongola</option>
              <option>Australia</option>
            </Select>
          </FormControl>
          <FormControl as="fieldset" my={6}>
            <FormLabel as="legend">Gender</FormLabel>
            <RadioGroup defaultValue="Itachi">
              <HStack spacing="24px">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>

          <FormControl isInvalid={isErrorPassword} isRequired my={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              id="password"
            />
            {!isErrorPassword ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
          </FormControl>
          <Button colorScheme="orange" m={2}>
            Sign up
          </Button>
          <Text
            textDecoration="underline"
            color="orange"
            cursor="pointer"
            display="inline-block"
            as={ReactRouterLink}
            to="/Sign-in"
          >
            Sign in
          </Text>
        </form>
      </Card>
    </Box>
  );
};

export default SignUp;
