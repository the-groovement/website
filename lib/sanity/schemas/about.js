export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "mission",
      title: "Mission",
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
      name: "values",
      title: "Values",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "originStory",
      title: "Origin Story",
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
};
