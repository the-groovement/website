export default {
  name: "faqs",
  title: "FAQs",
  type: "document",
  fields: [
    {
      name: "questions",
      title: "Questions",
      type: "array",
      of: [
        {
          title: "FAQ Item",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
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
    },
  ],
};
