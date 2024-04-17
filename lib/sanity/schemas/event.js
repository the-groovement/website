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
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "eventName",
        maxLength: 96,
      },
    },
    {
      name: "featured",
      title: "Mark as Featured",
      type: "boolean",
    },
    {
      name: "venue",
      title: "Venue",
      type: "reference",
      to: { type: "venue" },
    },
    {
      name: "startTime",
      title: "Start Time",
      type: "datetime",
    },
    {
      name: "endTime",
      title: "End Time",
      type: "datetime",
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
    },
    {
      name: "age",
      title: "Age",
      type: "string",
    },
    {
      name: "genre",
      title: "Genre",
      type: "string",
    },
    {
      name: "lineup",
      title: "Lineup",
      type: "string",
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
