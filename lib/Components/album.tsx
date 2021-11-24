import { VStack, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export type AlbumProps = {
	name: string;
	cover?: string;
	description?: string;
}

export const AlbumCard = ({ name, cover, description }: AlbumProps) => {
	return (
		<VStack borderRadius="md" p={4} boxShadow="base">
            <Box bg="gray.200" boxSize="150px">
				<Image
					src={cover? cover: "No Image"}
					alt="Picture of the author"
					width={500}
					height={500}
				/>
			</Box>
			<Text alignSelf="flex-start" fontSize="xl" fontWeight="semibold" color="black.600">{name}</Text>
			<Text>{description}</Text>
		</VStack>
	);
};

export default AlbumCard;
