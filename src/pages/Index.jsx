import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Apple Orchard
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Experience the joy of picking fresh apples straight from our orchard.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/apple-orchard.jpg" alt="Apple Orchard" borderRadius="md" />
        </Box>
        <Flex direction="column" align="center" justify="center" mt={4}>
          <Button colorScheme="teal" size="lg" mb={4}>
            Book a Visit
          </Button>
          <Button colorScheme="teal" size="lg">
            Learn More
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;