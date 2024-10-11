export default {
  name: "event",
  title: "Event",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: "eventName",
      title: "Event name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "eventName",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featured",
      title: "Mark as Featured",
      type: "boolean",
    },
    {
      name: "homePageTitle",
      title: "Home Page Title",
      type: "string",
    },
    {
      name: "venue",
      title: "Venue",
      type: "reference",
      to: { type: "venue" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "startTime",
      title: "Start Time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "endTime",
      title: "End Time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "promoter",
      title: "Promoter",
      type: "string",
    },
    {
      name: "ticketPurchaseURL",
      title: "Ticket purchase URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "eventImage",
      title: "Event image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "age",
      title: "Age",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "genre",
      title: "Genre",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lineup",
      title: "Lineup",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "eventImage",
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     });
  //   },
  // },
};
