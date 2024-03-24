import CalendarButton from "@/components/CalendarButton";
import { getEventBySlug, getPaginatedEvents } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default async function GroovecalEvent({
  params,
}: {
  params: { id: string };
}) {
  const EVENTS_PER_PAGE = 4;
  const recommendedEvents = await getPaginatedEvents(0, EVENTS_PER_PAGE + 1);
  const currentEvent = await getEventBySlug(params.id);

  function formatDateTime(dateString1: string, dateString2: string) {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    const options1: Intl.DateTimeFormatOptions = {
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      timeZone: "America/New_York",
      hour12: true,
    };

    const options2: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "America/New_York",
      hour12: true,
    };

    const formattedDate1 = date1.toLocaleString("en-US", options1);
    const formattedDate2 = date2.toLocaleString("en-US", options1);

    const formattedDate3 = date1.toLocaleString("en-US", options2);

    const result1 = formattedDate3;
    const result2 = formattedDate1;
    const result3 = formattedDate2;

    return [result1, result2, result3];
  }
  const times = formatDateTime(currentEvent.startTime, currentEvent.endTime);

  //Calendar button times
  const startDate = new Date(currentEvent.startTime);
  const endDate = new Date(currentEvent.endTime);
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "America/New_York",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedStartDate = startDate.toISOString().slice(0, 10);
  const formattedStartTime = startDate
    .toLocaleTimeString("en-US", options)
    .slice(0, 5);
  const formattedEndDate = endDate.toISOString().slice(0, 10);
  const formattedEndTime = endDate
    .toLocaleTimeString("en-US", options)
    .slice(0, 5);

  return (
    <section>
      <div className="flex flex-col mt-12">
        <div className="flex flex-col">
          <p className="mb-4">New York • groovecal</p>
          <p
            className={
              currentEvent.lineup
                ? "text-4xl md:text-5xl lg:text-6xl mb-2 font-bold"
                : "text-4xl md:text-5xl lg:text-6xl mb-8 font-bold"
            }
          >
            {currentEvent.eventName}
          </p>
          {currentEvent.lineup && (
            <p className="text-2xl md:text-3xl lg:text-4xl mb-8 font-bold">
              LINEUP: {currentEvent.lineup}
            </p>
          )}
        </div>
        <div className="flex flex-row justify-between mb-8 md:mb-12">
          <div className="flex flex-col flex-1 mr-16">
            <div className="mb-4">Venue</div>
            <Link
              href={`/venue/${currentEvent.venue.slug.current}`}
              className="text-lg md:text-3xl mb-2 font-semibold underline"
            >
              {currentEvent.venue.name}
            </Link>
            {currentEvent.venue.googlemaps ? (
              <a
                href={currentEvent.venue.googlemaps}
                target="_blank"
                className="text-sm md:text-lg hover:text-blue-400 underline"
              >
                {currentEvent.venue.address}
              </a>
            ) : (
              <p className="text-sm md:text-lg">{currentEvent.venue.address}</p>
            )}
          </div>
          <div className="flex flex-col flex-1">
            <p className="mb-4">Date</p>
            <p className="text-lg md:text-3xl mb-2 font-semibold underline">
              {times[0]}
            </p>
            <p className="text-sm md:text-lg">{`${times[1]} - ${times[2]}`}</p>
          </div>
          {currentEvent.promoter && (
            <div className="flex flex-col flex-1 max-md:hidden">
              <p className="mb-4">Promoter</p>
              <p className="text-lg md:text-3xl font-semibold underline">
                {currentEvent.promoter}
              </p>
            </div>
          )}
        </div>
        {currentEvent.promoter && (
          <div className="flex flex-col md:hidden mb-12">
            <p className="mb-4">Promoter</p>
            <p className="text-lg font-semibold underline">
              {currentEvent.promoter}
            </p>
          </div>
        )}
        <div className="flex flex-row gap-12">
          <Link href={currentEvent.ticketPurchaseURL} className="mb-16">
            <button className="bg-green-300 rounded-3xl h-12 w-32 border border-groove1 drop-shadow-[6px_6px_0px_rgba(58,42,60,1)] whitespace-nowrap hover:font-semibold">
              buy tix
            </button>
          </Link>
          <CalendarButton
            startDate={formattedStartDate}
            startTime={formattedStartTime}
            endDate={formattedEndDate}
            endTime={formattedEndTime}
          />
        </div>
        <div className="flex flex-col mb-12 gap-8">
          <p className="text-2xl font-semibold">recommended shows</p>
          <div className="w-full md:h-full flex flex-col md:flex-row gap-4">
            {recommendedEvents
              .filter((event: any) => event._id !== currentEvent._id)
              .slice(0, 4)
              .map((event: any, index: number) => (
                <div
                  className="h-full flex flex-row md:flex-col md:w-1/4"
                  key={index}
                >
                  <div className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square">
                    <Link href={`/groovecal/${event.slug.current}`}>
                      <Image
                        fill={true}
                        className="object-center object-cover rounded-2xl"
                        src={urlForImage(event.venue.images[0]) || ""}
                        alt={event.venue?.alt || "Image of venue"}
                        sizes="100%"
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
