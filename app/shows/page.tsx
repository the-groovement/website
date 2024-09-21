"use client";

import EventList from "@/components/GroovecalSections/EventList";
import useDebounce from "@/hooks/useDebounce";
import { getEvents, searchEvents } from "@/lib/sanity/client";
import { Search, X } from "lucide-react";
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Groovecal() {
  const POSTS_PER_PAGE = 12;
  const [visibleEvents, setVisibleEvents] = useState(POSTS_PER_PAGE);
  const [events, setEvents] = useState<any>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 600);
  const [startTime, setStartTime] = useState<string | undefined>();
  const [endTime, setEndTime] = useState<string | undefined>();
  const [hasMore, setHasMore] = useState(true);
  const [initialEvents, setInitialEvents] = useState<any>([]);
  const [hasMoreInitial, setHasMoreInitial] = useState(true);

  useEffect(() => {
    const getInitialEvents = async () => {
      const fetchedEvents = await getEvents(0, POSTS_PER_PAGE + 1);
      setEvents(fetchedEvents.slice(0, POSTS_PER_PAGE));
      setInitialEvents(fetchedEvents.slice(0, POSTS_PER_PAGE));
      setIsLoaded(true);
      setIsSearchLoading(false);
      if (fetchedEvents.length <= POSTS_PER_PAGE) {
        setHasMore(false);
        setHasMoreInitial(false);
      } else {
        setHasMore(true);
        setHasMoreInitial(true);
      }
    };
    getInitialEvents();
  }, []);

  const getSearchedEvents = async () => {
    if (isLoaded) {
      setIsSearchLoading(true);
      setEvents([]);
      let start;
      let end;
      if (startTime) {
        const startTimeISO = new Date(startTime).toISOString();
        start = moment.utc(startTimeISO).add(5, "hours").format();
      }
      if (endTime) {
        const endTimeISO = new Date(endTime).toISOString();
        end = moment
          .utc(endTimeISO)
          .add(28, "hours")
          .add(59, "minutes")
          .format();
      }
      const events = debouncedSearchText
        ? await searchEvents(
            debouncedSearchText,
            start ? start : "",
            end ? end : "",
            0,
            POSTS_PER_PAGE + 1
          )
        : initialEvents.length > 0
        ? initialEvents
        : await getEvents(0, POSTS_PER_PAGE + 1);
      setVisibleEvents(POSTS_PER_PAGE);
      setEvents(events.slice(0, POSTS_PER_PAGE));
      setIsSearchLoading(false);
      if (!debouncedSearchText) {
        setHasMore(hasMoreInitial);
      } else if (events.length <= POSTS_PER_PAGE) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    }
  };

  const handleShowMore = async () => {
    if (hasMore) {
      setIsSearchLoading(true);
      let start;
      let end;
      if (startTime) {
        const startTimeISO = new Date(startTime).toISOString();
        start = moment.utc(startTimeISO).add(5, "hours").format();
      }
      if (endTime) {
        const endTimeISO = new Date(endTime).toISOString();
        end = moment
          .utc(endTimeISO)
          .add(28, "hours")
          .add(59, "minutes")
          .format();
      }
      const events = await searchEvents(
        debouncedSearchText,
        start ? start : "",
        end ? end : "",
        0,
        POSTS_PER_PAGE + 1
      );
      setEvents((prevEvents: any) => [
        ...prevEvents,
        ...events.slice(0, POSTS_PER_PAGE),
      ]);

      setVisibleEvents(
        (prevVisibleEvents) => prevVisibleEvents + POSTS_PER_PAGE
      );

      setHasMore(events.length > POSTS_PER_PAGE);
      setIsSearchLoading(false);
    }
  };

  const clearFilters = async () => {
    setStartTime(undefined);
    setEndTime(undefined);
    setSearchText("");
    initialEvents.length > 0
      ? setEvents(initialEvents)
      : setEvents(await getEvents(0, POSTS_PER_PAGE + 1));
    setHasMore(hasMoreInitial);
  };

  return (
    <div>
      <section>
        <div className="flex flex-col mt-2 sm:mt-8 mb-16">
          <p
            className="text-[40px] sm:text-7xl mb-4 font-shrikhand"
            style={{ textShadow: "1px 1px 3px #3a2a3c" }}
          >
            shows
          </p>
          <p className="text-2xl sm:text-3xl mb-12">
            find the best shows. get tix.
          </p>
          <div className="flex flex-row items-center gap-4">
            <div className="w-full bg-white h-4 rounded-2xl py-8 items-center flex max-lg:hidden border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]">
              <input
                className="py-3 rounded-tl-3xl rounded-bl-3xl w-full px-6 focus:outline-none text-gray-500 placeholder-gray-500"
                placeholder="enter artist, venue, or location"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
              <DatePicker
                selected={startTime ? new Date(startTime) : undefined}
                onChange={(date) =>
                  setStartTime(date ? date?.toISOString() : "")
                }
                className="px-6 border-l py-3 text-gray-500 placeholder-gray-500 w-80 focus:outline-none drop-shadow-none"
                dateFormat="yyyy-MM-dd"
                placeholderText="start date"
                locale="en"
                popperPlacement="bottom-start"
              />
              <DatePicker
                selected={endTime ? new Date(endTime) : undefined}
                onChange={(date) => setEndTime(date ? date?.toISOString() : "")}
                className="px-6 border-l py-3 text-gray-500 placeholder-gray-500 w-80 focus:outline-none drop-shadow-none rounded-r-xl"
                dateFormat="yyyy-MM-dd"
                placeholderText="end date"
                locale="en"
                popperPlacement="bottom-start"
              />
              <button
                className="bg-groove1 h-4 rounded-2xl py-6 px-4 mr-2 border flex items-center justify-center whitespace-nowrap hover:font-semibold hover:bg-opacity-80"
                onClick={getSearchedEvents}
              >
                <Search className="text-white" />
              </button>
            </div>
          </div>
          {searchText || endTime || startTime ? (
            <button
              onClick={clearFilters}
              className="ml-auto mt-4 flex flex-row items-center gap-1 hover:opacity-80 max-lg:hidden"
            >
              <X className="h-4 w-4" />
              <div>clear filters</div>
            </button>
          ) : (
            <button className="ml-auto mt-4 flex flex-row items-center gap-1 hover:opacity-80 opacity-0 max-lg:hidden">
              .
            </button>
          )}
          <div className="w-full h-32 bg-white rounded-2xl flex flex-col justify-between px-2 lg:hidden border-groove1 border drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]">
            <div className="h-1/2 flex flex-row py-3 items-center">
              <input
                className="py-3 rounded-tl-3xl px-3 focus:outline-none text-gray-500 placeholder-gray-500 w-full text-sm "
                placeholder="search for artist, venue, or location"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
              <button
                className="bg-groove1 h-4 rounded-2xl py-5 px-3 mr-2 border flex items-center justify-center whitespace-nowrap hover:font-semibold hover:bg-opacity-80"
                onClick={getSearchedEvents}
              >
                <Search className="text-white w-5 h-5" />
              </button>
            </div>
            <div className="h-1/2 flex flex-row py-3 border-t text-sm w-full gap-3 justify-start">
              <div className="flex-1">
                <DatePicker
                  selected={startTime ? new Date(startTime) : undefined}
                  onChange={(date) =>
                    setStartTime(date ? date?.toISOString() : "")
                  }
                  className="w-full px-6 py-3 text-gray-500 placeholder-gray-500 focus:outline-none"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="start date"
                  locale="en"
                  popperPlacement="top-end"
                />
              </div>
              <div className="flex-1">
                <DatePicker
                  selected={endTime ? new Date(endTime) : undefined}
                  onChange={(date) =>
                    setEndTime(date ? date?.toISOString() : "")
                  }
                  className="w-full px-6 border-l py-3 text-gray-500 placeholder-gray-500 focus:outline-none"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="end date"
                  locale="en"
                  popperPlacement="top-end"
                />
              </div>
            </div>
          </div>
          {searchText || endTime || startTime ? (
            <button
              onClick={clearFilters}
              className="ml-auto mt-4 flex flex-row items-center gap-1 hover:opacity-80 lg:hidden"
            >
              <X className="h-4 w-4" />
              <div>clear filters</div>
            </button>
          ) : (
            <button className="ml-auto mt-4 flex flex-row items-center gap-1 hover:opacity-80 opacity-0 lg:hidden">
              .
            </button>
          )}
        </div>
      </section>
      <EventList
        handleShowMore={handleShowMore}
        isLoaded={isLoaded}
        hasMore={hasMore}
        events={events}
        isSearchLoading={isSearchLoading}
      />
    </div>
  );
}
