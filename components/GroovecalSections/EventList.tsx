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
import LoaderSpinner from "../LoaderSpinner";

type EventListProps = {
  visibleEvents: number;
  setVisibleEvents: React.Dispatch<React.SetStateAction<number>>;
  events: any;
  isSearchLoading: boolean;
};

export default function EventList({
  visibleEvents,
  setVisibleEvents,
  events,
  isSearchLoading,
}: EventListProps) {
  const [isGridView, setIsGridView] = useState(false);

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
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/New_York",
      hour12: true,
    };

    const formattedDate1 = date1.toLocaleString("en-US", options1);
    const formattedDate2 = date2.toLocaleString("en-US", options1);

    const formattedDate3 = date1.toLocaleString("en-US", options2);
    const formattedDate4 = date2.toLocaleString("en-US", options2);

    const result1 = formattedDate1;
    const result2 = formattedDate2;
    const result3 = formattedDate3;
    const result4 = formattedDate4;
    console.log(result1, result2, result3, result4);

    return [result1, result2, result3, result4];
  }

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

  const handleShowMore = () => {
    setVisibleEvents((prevVisibleEvents) => prevVisibleEvents + 12);
  };

  return (
    <section>
      <div className="mb-4 flex flex-row font-semibold max-sm:hidden">
        <button
          className={
            isGridView
              ? "bg-white py-2 px-3 border hover:opacity-80"
              : "bg-slate-200 border-t-blue-500 border-t-[3px] py-2 px-3 border"
          }
          onClick={() => setIsGridView(false)}
        >
          List View
        </button>
        <button
          className={
            isGridView
              ? "bg-slate-200 border-t-blue-500 border-t-[3px] py-2 px-3 border"
              : "bg-white py-2 px-3 border hover:opacity-80"
          }
          onClick={() => setIsGridView(true)}
        >
          Grid View
        </button>
      </div>
      <div className="mb-12">
        {events.length > 0 ? (
          <div
            className={
              !isGridView
                ? "w-full flex flex-col"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            }
          >
            {events
              .slice(0, Math.min(visibleEvents, events.length))
              .map((event: any, index: number) => {
                const currentStartTime = formatDate(event.startTime);
                const showTime = previousStartTime !== currentStartTime;

                // Update the previousStartTime for comparison in the next iteration
                previousStartTime = currentStartTime;
                return !isGridView ? (
                  <div key={index}>
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
                        {event.venue?.images?.[0] && (
                          <Link href={`/groovecal/${event.slug.current}`}>
                            <Image
                              fill={true}
                              className="object-center object-cover rounded-2xl"
                              src={urlForImage(event.venue?.images?.[0]) ?? ""}
                              alt={"home"}
                              sizes="100%"
                            />
                          </Link>
                        )}
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
                          {formatDateTime(event.startTime, event.endTime)?.[0]}{" "}
                          - {formatDateTime(event.startTime, event.endTime)[1]}
                        </p>
                      </div>
                    </div>
                  </div>
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
                      {urlForImage(event.venue?.images?.[0]) && (
                        <Link href={`/groovecal/${event.slug.current}`}>
                          <Image
                            fill={true}
                            className="object-center object-cover rounded-2xl"
                            src={urlForImage(event.venue?.images?.[0]) || ""}
                            alt={"home"}
                            sizes="100%"
                          />
                        </Link>
                      )}
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
                        {
                          formatDateTime(event.startTime, event.endTime)[
                            isGridView ? 2 : 0
                          ]
                        }{" "}
                        -{" "}
                        {
                          formatDateTime(event.startTime, event.endTime)[
                            isGridView ? 3 : 1
                          ]
                        }
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="flex justify-center mt-8">
            {!isSearchLoading && events.length === 0 ? (
              "No results found"
            ) : (
              <LoaderSpinner />
            )}
          </div>
        )}
      </div>
      <div className="my-10 flex items-center justify-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {visibleEvents < events.length && (
            <button
              onClick={handleShowMore}
              className="relative inline-flex items-center gap-1 rounded-md bg-groove1 px-3 py-2 pl-4 text-sm font-medium text-white focus:z-20 disabled:pointer-events-none disabled:opacity-40 "
            >
              Show more
            </button>
          )}
        </nav>
      </div>
    </section>
  );
}
