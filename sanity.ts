import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "a6cevqo4",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-01-12",
};
export const sanityClient = createClient(config);

/*image builder*/
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);
