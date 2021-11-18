import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { ChakraProvider, VStack, Heading, Link } from "@chakra-ui/react";
// import Link from "next/link";

interface Recipe {
	title: string;
}

export const Home: NextPage = ({
	data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const recipes: Recipe[] = data.recipes;
	return (
		<ChakraProvider>
			<VStack height={"lg"} bg="gray.100" justify="center" alignItems="center">
                <Link href="/posts/firstpost">
                    Open me...😋y
                </Link>
				
			</VStack>
		</ChakraProvider>
	);
};

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {
			data: {
				recipes: [{ title: "Pineapple Smoothie" }],
			},
		},
	};
};

export default Home;
