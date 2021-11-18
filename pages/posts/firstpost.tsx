import { VStack, Center, Heading, ChakraProvider } from "@chakra-ui/react";

export const FirstPost = () => {

    
    return (
        <ChakraProvider>
            <Center width="100%" alignItems="center"  bg="gray.50">
            <Heading alignSelf="center">Codein Crazy</Heading>
            </Center>
        </ChakraProvider>
    
    )};


export default FirstPost;