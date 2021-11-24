/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import { Box, Heading } from "@chakra-ui/layout";

export default {
	name: "album",
	title: "Album",
	type: "document",

	fields: [
		{
			name: "name",
			title: "Album Name",
			type: "string",
		},
		{
			title: "Release Date",
			name: "releaseDate",
			type: "date",
		},
		{
			name: "cover",
			title: "Album Cover",
			type: "image",
			option: {
				hotspot: true,
			},
		},
		{
			name: "song",
			title: "Song",
			type: "reference",
			to: [{ type: "song" }],
		},
		{
			name: "about",
			title: "About",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
		},
	],

	preview: {
		select: {
			title: "name",
			subtitle: "releaseDate",
			media: "cover",
		},
		prepare(selection) {
			const { title, subtitle, media } = selection;

			return {
				title: title,
				subtitle: subtitle,
				media: media,
			};
		},
	},
};
