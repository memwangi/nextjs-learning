import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { VStack, Text, Heading, Link } from "@chakra-ui/react";
import { sanityClient, urlFor } from "../lib/sanity";
import { AlbumCard } from "../lib/Components/album";

const albumsQuery = `*[_type=="album"]{
	_id,
	name,
	about,
	releaseDate,
	"cover": cover.asset -> url
  }`;

export const Home: NextPage = ({
	albums,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const data = [...albums]
	return (
		<VStack height="100vh" bg="gray.100" justify="center" alignItems="center">
			<Heading>
				{data.length}
			</Heading>
			<AlbumCard
					name={data[0].name}
					cover={data[0].cover}
					description={data[0].description}
				/>;
			{data.map((album) => {
				<AlbumCard
					name={album.name}
					cover={album.cover}
					description={album.description}
				/>;
			})};
		</VStack>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const albums = await sanityClient.fetch(albumsQuery);

	return {
		props: {
			albums,
		},
	};
};

export default Home;
