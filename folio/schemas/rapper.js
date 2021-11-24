
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "rapper",

	title: "Rapper",

	type: "document",

    fields: [
        {
            name: "name",
            title: "Artist's Name",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,

            }
        },
    
        {
            name: "discography",
            title: "Discography.",
            type: "reference",
            to: [{type: 'album'}]
        }
        
    ]
};
