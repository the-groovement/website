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
      name: "titleLink",
      title: "Title To Show On Homepage",
      type: "string",
    },
    {
      name: "featured",
      title: "Mark as Featured",
      type: "boolean",
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
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
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
    {
      name: "intro",
      title: "Intro",
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
    {
      name: "history",
      title: "History",
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
    {
      name: "ada",
      title: "ADA",
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
    {
      name: "ticket_vendor",
      title: "Ticket Vendor",
      type: "string",
    },
    {
      name: "capacity",
      title: "Capacity",
      type: "string",
    },
    {
      name: "security_check",
      title: "Security Check",
      type: "boolean",
    },
    {
      name: "credit_cards",
      title: "Accepts Credit Cards",
      type: "boolean",
    },
    {
      name: "contactless_payment",
      title: "Accepts Contactless Payment",
      type: "boolean",
    },
    {
      name: "coat_check",
      title: "Coat Check",
      type: "boolean",
    },
    {
      name: "wifi",
      title: "Has WiFi",
      type: "boolean",
    },
    {
      name: "bar",
      title: "Has Full Bar",
      type: "boolean",
    },
    {
      name: "food",
      title: "Has Food",
      type: "boolean",
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
