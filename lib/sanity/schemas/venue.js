export default {
  name: "venue",
  title: "Venue",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "titleLink",
      title: "Title To Show On Homepage",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "googlemaps",
      title: "Google Maps URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ticket_vendor",
      title: "Ticket Vendor",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "capacity",
      title: "Capacity",
      type: "string",
      validation: (Rule) => Rule.required(),
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
    {
      name: "twenty_one",
      title: "21+",
      type: "boolean",
    },
    {
      name: "map_recs",
      type: "array",
      title: "Map Recs",
      of: [
        {
          name: "map_rec",
          type: "object",
          title: "Map Rec",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "address",
              title: "Address",
              type: "string",
            },
            {
              name: "googlemaps",
              title: "Google Maps URL",
              type: "url",
            },
            {
              name: "info",
              title: "Info",
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
        },
      ],
      validation: (Rule) => Rule.required(),
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
