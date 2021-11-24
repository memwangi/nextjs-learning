import {
	createClient,
	createPreviewSubscriptionHook,
	createImageUrlBuilder,
	createPortableTextComponent,
} from "next-sanity";

const config = {
	projectId: "r81wauv1",
	dataset: "production",
	apiVersion: "2021-11-24",
	useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
});
