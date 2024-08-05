import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import {
  getPaginatedCategoryPosts,
  getRecentFeaturedPosts,
} from "@/lib/sanity/client";
import { ArrowRight, CalendarDaysIcon, TicketIcon } from "lucide-react";

export default async function TopOfPageSection() {
  const sanityData = await getRecentFeaturedPosts(0, 1);
  const featuredArticle = await getPaginatedCategoryPosts("venues", 0, 1);
  return (
    <section>
      <div className="flex flex-col h-[calc(100svh-84px)] pb-8">
        <div className="mt-2 sm:mt-2">
          <p
            className="text-[40px] sm:text-6xl md:text-7xl lg:text-8xl sm:inline font-shrikhand"
            style={{ textShadow: "1px 1px 3px #3a2a3c" }}
          >
            what's groovin'
          </p>
          <p className="text-3xl mt-2">your guide to the best shows & vibes</p>
        </div>
        <div className="flex flex-row h-full">
          <Link
            className="flex text-lg rounded-2xl flex-grow mt-4 sm:mt-8 sm:mr-8 bg-groove1 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)] relative"
            href={`/grooveguide/${sanityData?.[0].slug.current}`}
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={urlForImage(sanityData?.[0].images?.[0]) ?? ""}
              alt={"home"}
              sizes="100%"
            />
            <div className="w-full flex flex-col justify-between">
              <div className="m-4 bg-orange-400 text-groove1 w-fit text-sm px-2 py-1 font-sans font-bold rounded-lg mb-2 tracking-normal relative flex flex-row items-center gap-2">
                <CalendarDaysIcon className="text-groove1" />
                MARK YOUR CALENDAR
              </div>
              <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6 font-sans text-lg text-white rounded-2xl mt-auto relative">
                <div className="bg-white text-groove1 w-fit text-sm px-2 py-1 font-sans font-bold rounded-2xl mb-2 tracking-normal">
                  SHOWS
                </div>
                <div className="text-2xl md:text-4xl rounded-2xl tracking-wider text-white font-shrikhand">
                  {sanityData?.[0].title}
                </div>
                <div className="flex flex-row justify-between items-center font-sans text-lg md:text-2xl">
                  <div className="w-fit flex flex-row items-center gap-3">
                    <p>
                      Wed April 17{" "}
                      <span className="font-thin">@ Brooklyn Bowl</span>
                    </p>
                    <TicketIcon />
                  </div>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </Link>
          <div className="flex flex-col w-96 justify-between max-sm:hidden mt-4 gap-8">
            <Link
              href="/shows"
              className="flex flex-col bg-cover bg-center rounded-2xl justify-between h-full border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]"
            >
              <Image
                fill={true}
                className="object-center object-cover rounded-2xl"
                src={urlForImage(sanityData?.[0].images?.[0]) ?? ""}
                alt={"home"}
                sizes="100%"
              />
              <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6 font-sans text-lg text-white rounded-2xl mt-auto w-full relative">
                <div className="bg-orange-500 text-white w-fit text-sm px-2 py-1 font-sans font-bold rounded-2xl mb-2 tracking-normal">
                  ARTISTS
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p>Sunflower Bean debuts in Brooklyn, New York</p>
                  <ArrowRight />
                </div>
              </div>
            </Link>
            <Link
              href="/shows"
              className="flex flex-col bg-cover bg-center rounded-2xl justify-between h-full border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]"
            >
              <Image
                fill={true}
                className="object-center object-cover rounded-2xl"
                src={urlForImage(sanityData?.[0].images?.[0]) ?? ""}
                alt={"home"}
                sizes="100%"
              />
              <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6 font-sans text-lg text-white rounded-2xl mt-auto w-full relative">
                <div className="bg-purple-500 text-white w-fit text-sm px-2 py-1 font-sans font-bold rounded-2xl mb-2 tracking-normal">
                  VENUES
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p>Sunflower Bean debuts in Brooklyn, New York</p>
                  <ArrowRight />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
