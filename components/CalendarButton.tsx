"use client";

import { atcb_action } from "add-to-calendar-button";

interface CalendarButtonProps {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

export default function CalendarButton({
  startDate,
  startTime,
  endDate,
  endTime,
}: CalendarButtonProps) {
  const config: any = {
    name: "Add to Calendar Button",
    startDate: startDate,
    startTime: startTime,
    endDate: endDate,
    endTime: endTime,
    options: ["Apple", "Google", "iCal"],
    timeZone: "America/New_York",
  };
  const button = document.getElementById("my-default-button");
  return (
    <button
      id="my-default-button"
      className="bg-white rounded-3xl h-12 w-32 border border-groove1 drop-shadow-[6px_6px_0px_rgba(58,42,60,1)] whitespace-nowrap hover:font-semibold"
      onClick={() => atcb_action(config, button || undefined)}
    >
      add to cal
    </button>
  );
}
