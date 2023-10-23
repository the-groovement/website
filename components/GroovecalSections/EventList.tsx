"use client";

import { eventsPaginatedQuery } from "@/lib/sanity/groq";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { fetcher } from "@/lib/sanity/client";
import useSWR from "swr";
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
  const category = searchParams.get("category");
  const pageIndex = page ? parseInt(page) : 1;
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const EVENTS_PER_PAGE = 6;
  const query = category ? eventsPaginatedQuery : eventsPaginatedQuery;
  const paramsForQuery = category
    ? {
        start: (pageIndex - 1) * EVENTS_PER_PAGE,
        end: pageIndex * EVENTS_PER_PAGE,
      }
    : {
        start: (pageIndex - 1) * EVENTS_PER_PAGE,
        end: pageIndex * EVENTS_PER_PAGE,
      };
  const {
    data: events,
    error,
    isValidating,
  } = useSWR([query, paramsForQuery], fetcher, {
    fallbackData: initialEvents,
    onSuccess: () => {
      setIsLoading(false);
    },
  });

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
  return (
    <section>
      <div className="mb-12">
        <div className="w-full flex flex-col">
          {events && !isLoading && !isValidating ? (
            events.map((event: any, index: number) => {
              const currentStartTime = formatDate(event.startTime);
              const showTime = previousStartTime !== currentStartTime;

              // Update the previousStartTime for comparison in the next iteration
              previousStartTime = currentStartTime;
              return (
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
                          src={urlForImage(event.eventImage) || ""}
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
                      <p className="font-light">{event.venueName}</p>
                    </div>
                  </div>
                </>
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
