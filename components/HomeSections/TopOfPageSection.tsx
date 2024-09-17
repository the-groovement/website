import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import { ArrowRight, CalendarDaysIcon, TicketIcon } from "lucide-react";

interface TopOfPageSectionProps {
  eventPost: any;
  artistPost: any;
  venuePost: any;
}

export default async function TopOfPageSection({
  eventPost,
  artistPost,
  venuePost,
}: TopOfPageSectionProps) {
  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <section>
      <div className="flex flex-col h-[calc(100svh-84px)] pb-8">
        <div className="mt-2 sm:mt-2">
          <p
            className="text-[40px] sm:text-7xl mb-4 font-shrikhand"
            style={{ textShadow: "1px 1px 3px #3a2a3c" }}
          >
            what's groovin'
          </p>
          <p className="text-2xl sm:text-3xl">
            your guide to the best shows & vibes
          </p>
        </div>
        <div className="flex flex-row h-full">
          <Link
            className="flex text-lg rounded-2xl flex-grow mt-4 sm:mt-8 sm:mr-8 border border-groove1 relative"
            href={`/shows/${eventPost.slug.current}`}
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={urlForImage(eventPost.venue.images?.[0]) ?? ""}
              alt={"home"}
              sizes="100%"
            />
            <div className="w-full flex flex-col justify-between">
              <div className="m-4 bg-grooveBrandColor3 text-groove1 w-fit text-sm px-2 py-1 font-sans font-bold rounded-lg mb-2 tracking-normal relative flex flex-row items-center gap-2">
                <CalendarDaysIcon className="text-groove1" />
                MARK YOUR CALENDAR
              </div>
              <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6 font-sans text-lg text-white rounded-2xl mt-auto relative">
                <div className="bg-grooveBrandColor3 text-groove1 w-fit text-sm px-2 py-1 font-sans font-bold rounded-2xl mb-2 tracking-normal">
                  SHOWS
                </div>
                <div className="text-2xl md:text-4xl rounded-2xl tracking-wider text-white font-shrikhand">
                  {eventPost.eventName}
                </div>
                <div className="flex flex-row justify-between items-center font-sans text-lg md:text-2xl">
                  <div className="w-fit flex flex-row items-center gap-3">
                    <p>
                      {formatDate(eventPost.startTime)}{" "}
                      <span className="font-thin">
                        @ {eventPost.venue.name}
                      </span>
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
              href={`/grooveguide/${artistPost.slug.current}`}
              className="flex flex-col bg-cover bg-center rounded-2xl justify-between h-full border border-groove1 relative"
            >
              <Image
                fill={true}
                className="object-center object-cover rounded-2xl"
                src={urlForImage(artistPost.images?.[0]) ?? ""}
                alt={"home"}
                sizes="100%"
              />
              <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6 font-sans text-lg text-white rounded-2xl mt-auto w-full relative">
                <div className="bg-grooveBrandColor1 text-white w-fit text-sm px-2 py-1 font-sans font-bold rounded-2xl mb-2 tracking-normal">
                  ARTISTS
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p>{artistPost.titleLink ?? artistPost.title}</p>
                  <ArrowRight />
                </div>
              </div>
            </Link>
            <Link
              href={`/venue/${venuePost.slug.current}`}
              className="flex flex-col bg-cover bg-center rounded-2xl justify-between h-full border border-groove1 relative"
            >
              <Image
                fill={true}
                className="object-center object-cover rounded-2xl"
                src={urlForImage(venuePost.images?.[0]) ?? ""}
                alt={"home"}
                sizes="100%"
              />
              <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6 font-sans text-lg text-white rounded-2xl mt-auto w-full relative">
                <div className="bg-grooveBrandColor2 text-white w-fit text-sm px-2 py-1 font-sans font-bold rounded-2xl mb-2 tracking-normal">
                  VENUES
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p>{venuePost.titleLink}</p>
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
