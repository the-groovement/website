export default {
  name: "post",
  title: "Post",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "titleLink",
      title: "Title Hyperlink",
      type: "url",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      description:
        "The excerpt is used in blog feeds, and also for search results",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "authors",
      title: "Author(s)",
      type: "array",
      of: [{ type: "reference", to: { type: "author" } }],
    },
    {
      name: "photographers",
      title: "Photographer(s)",
      type: "array",
      of: [{ type: "reference", to: { type: "photographer" } }],
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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "featured",
      title: "Mark as Featured",
      type: "boolean",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "authors",
      author: "author.0",
      images: "images",
      image: "images.0",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
