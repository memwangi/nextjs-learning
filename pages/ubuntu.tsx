import { ChakraProvider, VStack, Heading } from "@chakra-ui/react"

export const Ubuntu = () => {
	return (
        <ChakraProvider>
            <VStack height={"lg"} bg="gray.100" justify="center" alignItems="center">
                <Heading size="lg" fontWeight="bold">
                    Gradatim Ferociter
                </Heading>

            </VStack>

        </ChakraProvider>
    );
};

export default Ubuntu;
