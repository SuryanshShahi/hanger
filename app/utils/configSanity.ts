import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "10qz46jv",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export const urlFor = (src: string) => builder.image(src);
