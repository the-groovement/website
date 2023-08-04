import BlogCamSection from "@/components/HomeSections/BlogCamSection";
import MapSpotifyEmailSection from "@/components/HomeSections/MapSpotifyEmailSection";
import TopOfPageSection from "@/components/HomeSections/TopOfPageSection";

export default async function Home() {
  return (
    <div>
      <TopOfPageSection />
      <BlogCamSection />
      <MapSpotifyEmailSection />
    </div>
  );
}
