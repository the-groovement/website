"use client";

import { useState } from "react";

export default function Dropdown() {
  const [dropdownTitle, setDropdownTitle] = useState("");
  return (
    <>
      {PLACEHOLDER.map((item, index) => (
        <div key={index} className={`bg-groove2 mx-auto flex flex-col`}>
          <div
            className={`bg-groove2 flex flex-col py-6 flex-grow border-t border-groove1 hover:font-semibold hover:cursor-pointer text-seiblue ${
              index === PLACEHOLDER.length - 1 && "border-b"
            }`}
            onClick={() =>
              setDropdownTitle(dropdownTitle !== item.title ? item.title : "")
            }
          >
            <p
              className={`${
                dropdownTitle === item.title && "font-semibold"
              } text-xl sm:text-2xl`}
            >
              {item.title}
            </p>
            <div
              style={{
                maxHeight: dropdownTitle === item.title ? "1000px" : "0",
                opacity: dropdownTitle === item.title ? 1 : 0,
                overflow: "hidden",
                transition:
                  "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
                display: "block",
              }}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const PLACEHOLDER = [
  {
    title: "What is the groovement?",
    content: (
      <p className="mt-4 font-normal text-lg">
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
      <p className="mt-4 font-normal text-lg">
        the groovement community is free to join. Follow us on instagram and
        sign up for our groovemail newsletter to stay in the know.
      </p>
    ),
  },
  {
    title: "How do I support the groovement?",
    content: (
      <p className="mt-4 font-normal text-lg">
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
      <p className="mt-4 font-normal text-lg">
        The groovecal is our shared calendar where you can see what artists are
        coming to your city and when! You can view the calendar in month, day or
        list format and search for artists in the search bar.
      </p>
    ),
  },
  {
    title: "How do I add a show to the groovecal?",
    content: (
      <p className="mt-4 font-normal text-lg">
        You can add a show by clicking the “add a show” button on the right hand
        side of the search bar in the month or list view of the groovecal.
        Clicking the add a show button will take you to the add a show form
        where you can enter the name of the artist, date/time of the show,
        venue, cost of tickets and a link to purchase tickets online. After
        adding the show details, click “submit show” at the bottom of the page
        to finish adding your show to the groovecal, and it will be added
        instantly.
      </p>
    ),
  },
  {
    title: "How do I buy tickets?",
    content: (
      <p className="mt-4 font-normal text-lg">
        On an individual show page, click the “Buy Tickets” button which will
        bring you to the show site or ticketing platform where you can purchase
        tickets.
      </p>
    ),
  },
  {
    title: "How do I sell tickets?",
    content: (
      <p className="mt-4 font-normal text-lg">
        DM us on instagram @thegroovement.nyc and we’ll do our best to help you
        sell your tickets. Please note that only facilitate face value ticket
        sales and are not responsible for any foul play (but we do have measures
        in place to protect buyers and sellers). Keep an eye on the “tix”
        highlights on our Instagram page for available tix.
      </p>
    ),
  },
  {
    title: "How do I download the groovecal to my calendar?",
    content: (
      <p className="mt-4 font-normal text-lg">
        On the month view or list view of the groovecal, scroll to the bottom
        and click the “subscribe to calendar” button to export the groovecal to
        your own personal calendar. On show pages, you have the option to export
        that show to your Google calendar, iCalendar, or Outlook calendar.
      </p>
    ),
  },
  {
    title: "I’m an artist/band – how do I get on the groovecal?",
    content: (
      <p className="mt-4 font-normal text-lg">
        Click the “add a show” button to the right hand side of the search bar
        on the list view or the month view of the groovecal. Add your show
        details to the show form (date/time, venue, ticket price, link to buy
        tickets, etc.) and hit the “submit show” button.
      </p>
    ),
  },
  {
    title: "What is the groovemap?",
    content: (
      <p className="mt-4 font-normal text-lg">
        The groovemap is a google map where you can easily see all the venues in
        the city and find recommendations for bars, restaurants, and after hours
        spots near the venues so you can plan your night out. We also host pre
        and post show meet ups at selected bars, keep an eye on our Instagram
        and groovemail for upcoming events.
      </p>
    ),
  },
  {
    title: "How do I use the groovemap?",
    content: (
      <p className="mt-4 font-normal text-lg">
        Ahead of your next show, search or zoom in on the groovemap to find the
        venue. Around the venue (purple musical note icon), you will see
        recommendations for restaurants (teal fork & knife icon), bars (yellow
        martini/beer glass icon), and after hours spots (green dancer icon) near
        the venue so you can find the best spots to hit up and after your show.
      </p>
    ),
  },
  {
    title: "What is groovetracks?",
    content: (
      <p className="mt-4 font-normal text-lg">
        groovetracks are our shared Spotify playlists. We make playlists for
        each month featuring the artists coming to your city. Discover new
        artists coming to your city by checking out groovetracks playlists.
      </p>
    ),
  },
  {
    title: "What is groovemail?",
    content: (
      <p className="mt-4 font-normal text-lg">
        groovemail is our email newsletters and communications to groovers. We
        send information about upcoming shows and events, reviews of
        shows/venues, and platform announcements and updates. Please click here
        to sign up to start receiving groovemail.
      </p>
    ),
  },
  {
    title: "I’m signed up but not receiving groovemail. How do I fix this?",
    content: (
      <p className="mt-4 font-normal text-lg">
        If you can’t find groovemail in your inbox there’s a few troubleshooting
        steps you can take:
      </p>
    ),
  },
  {
    title: "What is the grooveguide?",
    content: (
      <p className="mt-4 font-normal text-lg">
        The grooveguide is where you can find all of our resources and content.
        From FAQs and the groovecode, to venue reviews, artist and groover
        interviews, and hot concert tips and tricks. Check out the grooveguide
        for all the info you need to ensure a great time at your next show. If
        you’re interested in contributing to the grooveguide, see the forms in
        the link in our Instagram bio. If you’re interested in being featured,
        please email media@thegroovement.co
      </p>
    ),
  },
  {
    title: "What is the groovecam?",
    content: (
      <p className="mt-4 font-normal text-lg">
        The groovecam is our Instagram where we feature concert vids submitted
        by fellow groovers. Check our story and highlights to tune in.
      </p>
    ),
  },
  {
    title: "How do I get my concert vid featured on the groovecam?",
    content: (
      <p className="mt-4 font-normal text-lg">
        Tag @thegroovement.nyc in your Instagram stories and posts or DM us your
        concert videos to get featured.
      </p>
    ),
  },
  {
    title: "What is the grooveshop?",
    content: (
      <p className="mt-4 font-normal text-lg">
        The grooveshop is our online store where you can buy groovement merch to
        spice up your wardrobe and rep the groovement.
      </p>
    ),
  },
  {
    title: "How did the groovement start?/ Who started the groovement?",
    content: (
      <p className="mt-4 font-normal text-lg">
        The groovement started with two friends who share a passion for live
        music. To keep track of the shows they wanted to go to, they created a
        shared doc where they tracked upcoming shows. They added their friends
        to the doc, who added their friends, who added their friends, and pretty
        soon, a crew of concert lovers across nyc was using the doc to find
        shows and cool people to go with. While live music was on pause during
        2020, we took feedback from the community and launched thegroovement.nyc
        in 2021, a new platform for all lovers of live music.
      </p>
    ),
  },
  {
    title: "How do I join the groovement team?",
    content: (
      <p className="mt-4 font-normal text-lg">
        Email us! boogie@thegroovement.co
      </p>
    ),
  },
  {
    title:
      "I’m a photographer or writer who wants to shoot for/write for the groovement. How do I get in touch?",
    content: (
      <p className="mt-4 font-normal text-lg">
        Photogs, fill out this form. Writers, fill out this form.
      </p>
    ),
  },
  {
    title: "How do I partner with the groovement?",
    content: (
      <p className="mt-4 font-normal text-lg">
        We’d love to collab! Please fill out this form, and we’ll get in touch.
      </p>
    ),
  },
  {
    title: "How do I contact the groovement for general inquiries?",
    content: (
      <p className="mt-4 font-normal text-lg">
        You can email us boogie@thegroovement.nyc or DM us on instagram
        @thegroovement.nyc
      </p>
    ),
  },
  {
    title: "How do I contact the groovement for press inquiries?",
    content: (
      <p className="mt-4 font-normal text-lg">
        Please email us at media@thegroovement.co
      </p>
    ),
  },
  {
    title: "Is there a mobile app?",
    content: <p className="mt-4 font-normal text-lg">Not yet 😉</p>,
  },
  {
    title: "How do I find the groovement on social media?",
    content: (
      <p className="mt-4 font-normal text-lg">
        On instagram, we’re @thegroovement.co. On tiktok, we’re thegroovement.
      </p>
    ),
  },
  {
    title: "Where is the groovement located?",
    content: (
      <p className="mt-4 font-normal text-lg">
        Currently we’re in New York City, and we have plans to expand the
        groovement across the globe!
      </p>
    ),
  },
  {
    title: "How do I get the groovement to come to my city?",
    content: (
      <p className="mt-4 font-normal text-lg">
        We’re expanding across the U.S.! Email boogie@thegroovement.co to let us
        know which city we should launch next.
      </p>
    ),
  },
  {
    title: "How much does it cost to join the groovement?",
    content: (
      <p className="mt-4 font-normal text-lg">
        Currently, the groovement is free to join.
      </p>
    ),
  },
];
