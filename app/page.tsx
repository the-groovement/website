import BlogCamSection from "@/components/HomeSections/BlogCamSection";
import MapSpotifyEmailSection from "@/components/HomeSections/MapSpotifyEmailSection";
import TopOfPageSection from "@/components/HomeSections/TopOfPageSection";
import { getHomePageData } from "@/lib/sanity/client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const data = await getHomePageData();
  const getRandomIndex = (length: number) => Math.floor(Math.random() * length);
  const venueIndex = getRandomIndex(data?.featuredVenue?.length);
  const artistIndex = getRandomIndex(data?.featuredArtists?.length);
  return (
    <div>
      <TopOfPageSection
        eventPost={data?.events?.[0]}
        artistPost={data?.featuredArtists?.[artistIndex]}
        venuePost={data?.featuredVenue?.[venueIndex]}
      />
      <BlogCamSection
        artistPost={data?.featuredArtists?.[artistIndex]}
        venuePost={data?.featuredVenue?.[venueIndex]}
      />
      <MapSpotifyEmailSection />
    </div>
  );
}
