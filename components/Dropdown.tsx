"use client";

import { useState } from "react";

const PLACEHOLDER = [
  {
    title: "What is the groovement?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I sign up for the groovement?",
    content: (
      <p className="mt-4 font-normal">
        the groovement community is free to join. Follow us on instagram and
        sign up for our groovemail newsletter to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I support the groovement?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "What is the groovecal?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I add a show to the groovecal?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I sell tickets?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I download the groovecal to my calendar?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "I’m an artist/band – how do I get on the groovecal?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "What is the groovemap?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I use the groovemap?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "What is groovetracks?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "What is groovemail?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "I’m signed up but not receiving groovemail. How do I fix this?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "What is the grooveguide?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "What is the groovecam?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I get my concert vid featured on the groovecam?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "What is the grooveshop?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How did the groovement start?/ Who started the groovement?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I join the groovement team?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title:
      "I’m a photographer or writer who wants to shoot for/write for the groovement. How do I get in touch?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I partner with the groovement?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I contact the groovement for general inquiries?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I contact the groovement for press inquiries?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "Is there a mobile app?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I find the groovement on social media?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "Where is the groovement located?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I get the groovement to come to my city?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
  {
    title: "How much does it cost to join the groovement?",
    content: (
      <p className="mt-4 font-normal">
        The groovement is a community for all lovers of live music. We believe
        in supporting artists, venues, and the local community by sharing in the
        magic of live music together. On our platform, you can find new artists
        coming to NYC on our groovecal, get bar and restaurant recommendations
        around venues on our groovemap to plan your night out, connect with
        other groovers attending the same show at our pregames, sell/buy tickets
        between fellow groovers through our Instagram, listen to new artists
        coming to your city in our groovetracks playlists, amplify your concert
        experience with our grooveguide, and signup for groovemail, our
        newsletter, to stay in the know.
      </p>
    ),
  },
];

export default function Dropdown() {
  const [dropdownTitle, setDropdownTitle] = useState("");
  return (
    <>
      {PLACEHOLDER.map((item, index) => (
        <div key={index} className={`bg-white mx-auto flex flex-col h-full`}>
          <div
            className={`bg-white flex flex-col py-6 font-sans flex-grow border-t border-black hover:font-semibold hover:cursor-pointer text-seiblue ${
              index === PLACEHOLDER.length - 1 && "border-b"
            }`}
            onClick={() =>
              setDropdownTitle(dropdownTitle !== item.title ? item.title : "")
            }
          >
            <p className={`${dropdownTitle === item.title && "font-semibold"}`}>
              {item.title}
            </p>
            {dropdownTitle === item.title && item.content}
          </div>
        </div>
      ))}
    </>
  );
}
