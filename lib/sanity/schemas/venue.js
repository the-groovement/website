export default {
  name: "venue",
  title: "Venue",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "googlemaps",
      title: "Google Maps URL",
      type: "url",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "accessoride",
      title: "Accessoride URL",
      type: "url",
    },
    {
      name: "venue_post",
      title: "Venue Guide Post",
      type: "array",
      of: [{ type: "reference", to: { type: "post" } }],
    },
  ],
  preview: {
    select: {
      title: "name",
      images: "images",
      image: "images.0",
    },
  },
};
