import InstagramIcon from "@/components/Icons/InstagramIcon";
import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER = [
  {
    title:
      "This is the title of the article lakjsdfl kasj dlfkjaja sdlkfjas ldkjfalskj",
    image: "/home.png",
    link: "/grooveguide/1",
  },
  {
    title: "Thsijdlfkajs dlfkjasl kdfjalskjdfalksjd flkajsd",
    image: "/tester.png",
    link: "/grooveguide/2",
  },
  {
    title: "Mister Sunday",
    image: "/venue.png",
    link: "/grooveguide/3",
  },
  {
    title: "Resolute All Night Long",
    image: "/vinyl.png",
    link: "/grooveguide/4",
  },
];

export default function Article() {
  return (
    <section>
      <div>
        <div className="flex flex-col mt-8">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold line-clamp-3 lg:line-clamp-2 pb-1">
            Stevie B-Zet, trance producer and Sven Väth collaborator, dies 62
          </p>
          <div className="flex flex-row gap-16 mt-8 border-b border-black pb-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">published</p>
              <p>Mon, 7 Aug 2023, 04:00</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">author</p>
              <p>Mon, 7 Aug 2023, 04:00</p>
            </div>
          </div>
          <div className="flex flex-row mt-8 border-b border-black ">
            <div className="flex flex-col gap-4 mr-8 max-lg:hidden">
              <p>share</p>
              <InstagramIcon />
              <InstagramIcon />
              <InstagramIcon />
            </div>
            <div className="flex flex-col lg:w-1/2 mb-8">
              <div
                className="flex text-lg rounded-2xl relative mb-4 lg:mb-8"
                style={{
                  aspectRatio: 16 / 9,
                }}
              >
                <Image
                  fill={true}
                  className="object-center object-cover rounded-2xl"
                  src={"/home.png"}
                  alt={"home"}
                />
              </div>
              <div className="flex flex-col gap-2 lg:hidden mb-8">
                <p>Share</p>
                <div className="flex flex-row">
                  <InstagramIcon />
                  <InstagramIcon />
                  <InstagramIcon />
                </div>
              </div>
              <div>
                <p>
                  Britzke's former collaborator, Ralf Hildenbeutel, broke the
                  news on Facebook last Wednesday, August 2nd. "I have no real
                  words and it's still a shock that Steffen, our Stevie B-Zet,
                  has passed away last Thursday," the post read. "When we met I
                  was 17. We've done and experienced so much together. We played
                  in the same band when I was still in school, then the
                  incredible Eye Q years, the Schallbau era and lots of film
                  scores together. My thoughts to his beloved ones."
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-12 gap-8 mt-8">
            <p className="text-2xl font-semibold">recent news</p>
            <div className="w-full md:h-full flex flex-col md:flex-row gap-4">
              {PLACEHOLDER.slice(0, 4).map((item, index) => (
                <div
                  className="h-full flex flex-row md:flex-col md:w-1/4"
                  key={index}
                >
                  <div className="relative h-32 w-32 md:h-64 md:w-full">
                    <Link href={item.link}>
                      <Image
                        fill={true}
                        className="object-center object-cover rounded-2xl"
                        src={item.image}
                        alt={"home"}
                      />
                    </Link>
                  </div>
                  <div className="max-md:ml-6 w-3/4">
                    <Link href={item.link}>
                      <p className="text-xl md:mt-4 mb-2 font-semibold">
                        {item.title}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
