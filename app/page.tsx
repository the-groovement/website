import BlogCamSection from "@/components/HomeSections/BlogCamSection";
import MapSpotifyEmailSection from "@/components/HomeSections/MapSpotifyEmailSection";
import TopOfPageSection from "@/components/HomeSections/TopOfPageSection";
import {
  getFeaturedVenue,
  getPaginatedEvents,
  getRecentFeaturedArtistPosts,
} from "@/lib/sanity/client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const artistData = await getRecentFeaturedArtistPosts(0, 3);
  const venueData = await getFeaturedVenue();
  const eventData = await getPaginatedEvents(0, 1);

  const getRandomIndex = (length: number) => Math.floor(Math.random() * length);
  const venueIndex = getRandomIndex(venueData.length);
  const artistIndex = getRandomIndex(artistData.length);
  return (
    <div>
      <TopOfPageSection
        eventPost={eventData?.[0]}
        artistPost={artistData?.[artistIndex]}
        venuePost={venueData?.[venueIndex]}
      />
      <BlogCamSection
        artistPost={artistData?.[artistIndex]}
        venuePost={venueData?.[venueIndex]}
      />
      <MapSpotifyEmailSection />
    </div>
  );
}
