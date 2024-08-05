"use client";

import EventList from "@/components/GroovecalSections/EventList";
import useDebounce from "@/hooks/useDebounce";
import { getEvents, searchEvents } from "@/lib/sanity/client";
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Groovecal() {
  const [visibleEvents, setVisibleEvents] = useState(12);
  const [events, setEvents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 300);
  const [startTime, setStartTime] = useState<string | undefined>();
  const [endTime, setEndTime] = useState<string | undefined>();

  useEffect(() => {
    const getInitialEvents = async () => {
      setEvents(await getEvents());
      setIsLoaded(true);
      setIsSearchLoading(false);
    };
    getInitialEvents();
  }, []);

  useEffect(() => {
    const getSearchedEvents = async () => {
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
        console.log(endTimeISO);
        end = moment
          .utc(endTimeISO)
          .add(28, "hours")
          .add(59, "minutes")
          .format();
      }
      const events = await searchEvents(
        debouncedSearchText,
        start ? start : "",
        end ? end : ""
      );
      setVisibleEvents(12);
      setEvents(events);
      setIsSearchLoading(false);
    };
    isLoaded && getSearchedEvents();
  }, [debouncedSearchText, startTime, endTime]);

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
          <div className="w-full bg-white h-4 rounded-2xl py-8 items-center flex max-lg:hidden border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]">
            <input
              className="py-3 rounded-tl-3xl rounded-bl-3xl w-full px-6 focus:outline-none text-gray-500 placeholder-gray-500"
              placeholder="search for artist, venue, or location"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <DatePicker
              selected={startTime ? new Date(startTime) : undefined}
              onChange={(date) => setStartTime(date ? date?.toISOString() : "")}
              className="px-6 border-l py-3 text-gray-500 placeholder-gray-500 w-80 focus:outline-none drop-shadow-none"
              dateFormat="yyyy-MM-dd"
              placeholderText="start date"
              locale="en"
              popperPlacement="top-end"
            />
            <DatePicker
              selected={endTime ? new Date(endTime) : undefined}
              onChange={(date) => setEndTime(date ? date?.toISOString() : "")}
              className="px-6 border-l py-3 text-gray-500 placeholder-gray-500 w-80 focus:outline-none drop-shadow-none rounded-r-xl"
              dateFormat="yyyy-MM-dd"
              placeholderText="end date"
              locale="en"
              popperPlacement="top-end"
            />
          </div>
          <div className="w-full h-32 bg-white rounded-2xl flex flex-col justify-between px-2 lg:hidden border-groove1 border drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]">
            <div className="h-1/2 flex flex-row py-3">
              <input
                className="py-3 rounded-tl-3xl px-3 focus:outline-none text-gray-500 placeholder-gray-500 w-full text-sm "
                placeholder="search for artist, venue, or location"
                onChange={(e) => setSearchText(e.target.value)}
              />
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
        </div>
      </section>
      <EventList
        visibleEvents={visibleEvents}
        setVisibleEvents={setVisibleEvents}
        events={events}
        isSearchLoading={isSearchLoading}
      />
    </div>
  );
}
