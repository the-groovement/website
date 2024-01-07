import EventList from "@/components/GroovecalSections/EventList";
import SearchBar from "@/components/GroovecalSections/SearchBar";
import { getPaginatedEvents } from "@/lib/sanity/client";

export default async function Groovecal() {
  const EVENTS_PER_PAGE = 6;
  const events = await getPaginatedEvents(0, EVENTS_PER_PAGE);
  return (
    <div>
      <SearchBar />
      <EventList initialEvents={events} />
    </div>
  );
}
