import createImageUrlBuilder from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({
  projectId: "887gnfj7",
  dataset: "production",
});

export const urlForImage = (source) => {
  if (!source || !source.asset) return;
  const dimensions = source?.asset?._ref.split("-")[2];

  const [width, height] = dimensions.split("x").map((num) => parseInt(num, 10));

  const url = imageBuilder
    .image(source)
    .auto("format")
    .width(Math.min(width, "2000"))
    .url();

  return {
    src: url,
    width: width,
    height: height,
  };
};
