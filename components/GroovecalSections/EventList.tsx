"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { getPaginatedEvents } from "@/lib/sanity/client";
import { useEffect, useState } from "react";
import ChevronLeftIcon from "../Icons/ChevronLeftIcon";
import ChevronRightIcon from "../Icons/ChevronRightIcon";
import SkeletonImg from "../SkeletonImg";
import { urlForImage } from "@/lib/sanity/image";

type EventListProps = {
  initialEvents: any;
};

export default function EventList({ initialEvents }: EventListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pageIndex = page ? parseInt(page) : 1;
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [events, setEvents] = useState(initialEvents);
  const EVENTS_PER_PAGE = 6;

  function formatDateTime(dateString1: string) {
    const date1 = new Date(dateString1);

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
    const formattedDate3 = date1.toLocaleString("en-US", options2);

    return [formattedDate1, formattedDate3];
  }

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const events = await getPaginatedEvents(
        (pageIndex - 1) * EVENTS_PER_PAGE,
        pageIndex * EVENTS_PER_PAGE
      );
      setEvents(events);
      setIsLoading(false);
    };
    getData();
  }, [pageIndex]);

  useEffect(() => {
    setIsFirstPage(pageIndex < 2);
  }, [pageIndex]);

  useEffect(() => {
    setIsLastPage(events.length < EVENTS_PER_PAGE);
  }, [events]);

  const handleNextPage = () => {
    router.push(`/groovecal?page=${pageIndex + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/groovecal?page=${pageIndex - 1}`);
  };

  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };
  let previousStartTime = "";

  const handleGridViewChange = () => {
    setIsGridView(!isGridView);
  };

  // const mappedEvents = events?.map((event: any) => {
  //   const matchingVenue = venues?.find(
  //     (venue: any) => venue._id === event.venue._ref
  //   );
  //   return { ...event, venueData: matchingVenue };
  // });

  // console.log(mappedEvents);

  return (
    <section>
      <div className="mb-4 flex flex-row font-semibold gap-[6px]">
        Grid View
        <input
          type="checkbox"
          checked={isGridView}
          onChange={handleGridViewChange}
        />
      </div>
      <div className="mb-12">
        <div
          className={
            !isGridView
              ? "w-full flex flex-col"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          }
        >
          {events && !isLoading ? (
            events.map((event: any, index: number) => {
              const currentStartTime = formatDate(event.startTime);
              const showTime = previousStartTime !== currentStartTime;

              // Update the previousStartTime for comparison in the next iteration
              previousStartTime = currentStartTime;
              return !isGridView ? (
                <>
                  {showTime && (
                    <p className="uppercase text-3xl mb-8">
                      {formatDate(event.startTime)}
                    </p>
                  )}
                  <div
                    className="h-full flex sm:flex-row flex-col mb-8"
                    key={index}
                  >
                    <div
                      className="relative h-40 w-64 max-sm:w-full max-sm:h-full"
                      style={{
                        aspectRatio: 256 / 160,
                      }}
                    >
                      <Link href={`/groovecal/${event.slug.current}`}>
                        <Image
                          fill={true}
                          className="object-center object-cover rounded-2xl"
                          src={urlForImage(event.venue?.images[0]) || ""}
                          alt={"home"}
                        />
                      </Link>
                    </div>
                    <div className="sm:ml-6 flex flex-col gap-3 max-sm:mt-4">
                      <Link href={`/groovecal/${event.slug.current}`}>
                        <p className="text-2xl font-semibold">
                          {event.eventName}
                        </p>
                      </Link>
                      <p className="text-xl ">{event.lineup}</p>
                      <p className="font-light">{event.venue?.name}</p>
                      <p className="font-light">
                        {formatDateTime(event.startTime)}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="h-full flex flex-col mb-8 col-span-1"
                  key={index}
                >
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: 256 / 160,
                    }}
                  >
                    <Link href={`/groovecal/${event.slug.current}`}>
                      <Image
                        fill={true}
                        className="object-center object-cover rounded-2xl"
                        src={urlForImage(event.venue?.images[0]) || ""}
                        alt={"home"}
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3 mt-4">
                    <Link href={`/groovecal/${event.slug.current}`}>
                      <p className="text-2xl font-semibold">
                        {event.eventName}
                      </p>
                    </Link>
                    <p className="text-xl">{event.lineup}</p>
                    <p className="font-light">{event.venue?.name}</p>
                    <p className="font-light">
                      {formatDateTime(event.startTime)}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              {new Array(1).fill(null).map((item, index) => (
                <div key={index} className="w-1/2">
                  <SkeletonImg />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="my-10 flex items-center justify-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            disabled={isFirstPage}
            onClick={handlePrevPage}
            className="relative inline-flex items-center gap-1 rounded-l-md bg-groove1 px-3 py-2 pr-4 text-sm font-medium text-white focus:z-20 disabled:pointer-events-none disabled:opacity-40 "
          >
            <ChevronLeftIcon aria-hidden="true" />
            <span>Previous</span>
          </button>
          <button
            onClick={handleNextPage}
            disabled={isLastPage}
            className="relative inline-flex items-center gap-1 rounded-r-md bg-groove1 px-3 py-2 pl-4 text-sm font-medium text-white focus:z-20 disabled:pointer-events-none disabled:opacity-40 "
          >
            <span>Next</span>
            <ChevronRightIcon aria-hidden="true" />
          </button>
        </nav>
      </div>
    </section>
  );
}
