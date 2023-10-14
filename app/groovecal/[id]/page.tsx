import { getEventBySlug, getPaginatedEvents } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default async function GroovecalEvent({
  params,
}: {
  params: { id: string };
}) {
  const EVENTS_PER_PAGE = 4;
  const recommendedEvents = await getPaginatedEvents(0, EVENTS_PER_PAGE);
  const event = await getEventBySlug(params.id);
  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <section>
      <div className="flex flex-col mt-12">
        <div className="flex flex-col">
          <p className="mb-4">New York • groovecal</p>
          <p className="text-4xl md:text-5xl lg:text-6xl mb-8 font-bold">
            {event.eventName}
          </p>
        </div>
        <div className="flex flex-row justify-between mb-8 md:mb-12">
          <div className="flex flex-col flex-1 mr-16">
            <p className="mb-4">Venue</p>
            <p className="text-lg md:text-3xl mb-2 font-semibold underline">
              {event.eventName}
            </p>
            <p className="text-sm md:text-lg">{event.venueAddress}</p>
          </div>
          <div className="flex flex-col flex-1">
            <p className="mb-4">Date</p>
            <p className="text-lg md:text-3xl mb-2 font-semibold underline">
              {formatDate(event.startTime)}
            </p>
            <p className="text-sm md:text-lg">{formatDate(event.endTime)}</p>
          </div>
          <div className="flex flex-col flex-1 max-md:hidden">
            <p className="mb-4">Promoter</p>
            <p className="text-lg md:text-3xl font-semibold underline">
              {event.promoter}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:hidden mb-12">
          <p className="mb-4">Promoter</p>
          <p className="text-lg font-semibold underline">{event.promoter}</p>
        </div>
        <div className="flex flex-row items-center justify-between py-2 rounded-lg px-4 mb-16 md:mb-20 md:w-1/2 w-full bg-white border-groove1 border drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]">
          <p className="text-xl font-semibold ">{`$${event.ticketPrice}`}</p>
          <Link
            href={event.ticketPurchaseURL}
            className="text-sm bg-green-300 px-4 py-3 rounded-2xl font-semibold"
          >
            BUY NOW
          </Link>
        </div>
        <div>
          <div className="flex flex-row justify-between md:text-4xl mb-8 items-center">
            <p className="text-3xl md:text-4xl font-bold">LINEUP</p>
            {/* <button className="text-sm border border-black px-4 py-3 rounded-3xl shadow-md">
              add to calendar
            </button> */}
          </div>
          <div className="mb-8 md:mb-12">
            <p className="text-3xl md:text-4xl font-bold">{event.lineup}</p>
          </div>

          <div className="flex flex-col md:flex-row h-full mb-12">
            <div className="flex-1 md:mr-16 max-md:mb-12">
              <PortableText value={event.body} />
            </div>
            <Image
              src={urlForImage(event.eventImage) || ""}
              className="object-contain rounded-2xl mb-auto max-md:mx-auto"
              alt="poster"
              width={450}
              height={450}
            />
          </div>
        </div>
        <div className="flex flex-col mb-12 gap-8">
          <p className="text-2xl font-semibold">recommended events</p>
          <div className="w-full md:h-full flex flex-col md:flex-row gap-4">
            {recommendedEvents.map((event: any, index: number) => (
              <div
                className="h-full flex flex-row md:flex-col md:w-1/4"
                key={index}
              >
                <div className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square">
                  <Link href={`/groovecal/${event.slug.current}`}>
                    <Image
                      fill={true}
                      className="object-center object-cover rounded-2xl"
                      src={urlForImage(event.eventImage) || ""}
                      alt={"home"}
                    />
                  </Link>
                </div>
                <div className="max-md:ml-6 w-3/4">
                  <Link href={`/groovecal/${event.slug.current}`}>
                    <p className="text-2xl md:mt-4 mb-2 font-semibold">
                      {event.eventName}
                    </p>
                  </Link>
                  <p className="text-xl">{event.lineup}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
