import {
  Heading, 
  Container,
  Box, 
  Flex, 
  Icon,
  Text,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  VisuallyHidden, 
  Button,
  Feature, 
  Stack, 
  Input
} from '@chakra-ui/react'
import * as React from 'react'
import MarketingLayout from '../layouts/MarketingLayout'
import TutorialPostPreview from '../components/shared/TutorialPreview';

function Heros(){
  const Feature = (props) => (
    <Flex alignItems="center" color={useColorModeValue(null, "white")}>
      <Icon
        boxSize={4}
        mr={1}
        color="green.600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      {props.children}
    </Flex>
  );
  return (
    <Box px={4} py={32} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: "left", md: "center" }}
        mx="auto"
      >
        <Heading
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold"}}
          color={useColorModeValue("gray.900", "gray.100")}
          lineHeight="shorter"
        >
          Tips and tutorials to take your game to the next level.
        </Heading>
        <Text
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        >
          We’re on a mission to provide players with unmatched skill. Learn strategies, tips, and more from the world's best coaches and pro players, and elevate your gameplay. Sign up for our newsletter to receive tutorial updates and more right to your inbox.
        </Text>
        <SimpleGrid
          as="form"
          w={{ base: "full", md: 7 / 12 }}
          columns={{ base: 1, lg: 6 }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
        >
          <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
            <VisuallyHidden>Your Email</VisuallyHidden>
            <Input
              mt={0}
              size="lg"
              type="email"
              placeholder="Enter your email..."
              required="true"
            />
          </GridItem>
          <Button
            as={GridItem}
            w="full"
            variant="solid"
            colSpan={{ base: "auto", lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="green"
            cursor="pointer"
          >
            Sign Me Up!
          </Button>
        </SimpleGrid>
        <Stack
          display="flex"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "start", md: "center" }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          fontSize="xs"
          color="gray.600"
        >
          <Feature>No spam, ever</Feature>
          <Feature>Hand picked tutorials</Feature>
          <Feature>Cancel anytime</Feature>
        </Stack>
      </Box>
    </Box>
  );
};


const TutorialsPageMain = () => {
  return (
    <MarketingLayout>
      <Container maxW="7xl">
        <Heros />
        <SimpleGrid mb="12" spacing="4" columns={{base: 1, sm: 2, lg: 4}}>
          <TutorialPostPreview />
          <TutorialPostPreview />
          <TutorialPostPreview />
          <TutorialPostPreview />
          <TutorialPostPreview />
          <TutorialPostPreview />
          <TutorialPostPreview />
          <TutorialPostPreview />
          <TutorialPostPreview />
          <TutorialPostPreview />
          <TutorialPostPreview />
          <TutorialPostPreview />
        </SimpleGrid>
        <Flex mb="12" justify="center">
          <Button colorScheme="green">See More</Button>
        </Flex>
      </Container>
    </MarketingLayout>
  )
}

export default TutorialsPageMain