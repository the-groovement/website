import { getRecentFeaturedPostsNonArtist } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCamSectionProps {
  artistPost: any;
  venuePost: any;
}

export default async function BlogCamSection({
  artistPost,
  venuePost,
}: BlogCamSectionProps) {
  const sanityData = await getRecentFeaturedPostsNonArtist(0, 6);
  const filteredSanityData = sanityData.filter(
    (post: any) => post.slug.current !== artistPost.slug.current
  );
  return (
    <section>
      <div className="pb-8">
        <div className="flex flex-col justify-between sm:hidden gap-8 mb-8">
          <Link
            href={`/grooveguide/${artistPost.slug.current}`}
            className="flex flex-col bg-groove1 bg-cover bg-center rounded-2xl justify-between h-72 border border-groove1 relative"
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={urlForImage(artistPost.images?.[0]) ?? ""}
              alt={"home"}
              sizes="100%"
            />
            <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6  text-lg text-white rounded-2xl mt-auto w-full relative">
              <div className="bg-grooveBrandColor1 text-white w-fit text-sm px-2 py-1  font-bold rounded-2xl mb-2 tracking-normal">
                ARTISTS
              </div>
              <div className="flex flex-row justify-between items-center">
                <p>{artistPost.titleLink ?? artistPost.title}</p>
                <ArrowRight />
              </div>
            </div>
          </Link>
          <Link
            href={`/venue/${venuePost.slug.current}`}
            className="flex flex-col bg-cover bg-groove1 bg-center rounded-2xl justify-between h-72 border border-groove1 relative"
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={urlForImage(venuePost.images?.[0]) ?? ""}
              alt={"home"}
              sizes="100%"
            />
            <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6  text-lg text-white rounded-2xl mt-auto w-full relative">
              <div className="bg-grooveBrandColor2 text-white w-fit text-sm px-2 py-1  font-bold rounded-2xl mb-2 tracking-normal">
                VENUES
              </div>
              <div className="flex flex-row justify-between items-center">
                <p>{venuePost.titleLink}</p>
                <ArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-row max-md:hidden mb-8">
          <p className="lg:text-5xl text-4xl font-semibold w-1/2">
            from the groovemap
          </p>
          <p className="lg:text-5xl text-4xl font-semibold w-1/2 ml-8">
            {sanityData.length === 1 ? "today's story" : "popular stories"}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <p className="text-3xl font-semibold md:hidden">from the groovemap</p>
          <Link
            className="flex rounded-2xl md:w-1/2 relative h-96"
            href="https://www.google.com/maps/d/u/0/viewer?ll=40.698560100000066%2C-73.97774&z=18&mid=1jLgTu7q-gl39b-cAHvxcbHOYREPPxus"
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={"/groovemap.png"}
              alt={"map"}
              sizes="100%"
            />
            <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6  text-lg text-white rounded-b-2xl mt-auto w-full relative">
              <div className="flex flex-row justify-between items-center">
                <div className="text-xl md:text-2xl rounded-b-2xl tracking-wider text-white font-shrikhand">
                  Explore the map
                </div>
                <ArrowRight />
              </div>
            </div>
          </Link>
          <p className="text-3xl font-semibold md:hidden">
            {sanityData.length === 1 ? "today's story" : "popular stories"}
          </p>
          <div className="md:w-1/2 flex flex-col">
            {filteredSanityData.slice(0, 3).map((post: any, index: number) => (
              <Link
                href={`/grooveguide/${post.slug.current}`}
                className={`flex-grow h-36 md:h-full flex flex-row border-b border-black ${
                  index === 0 && "border-t"
                }`}
                key={index}
              >
                <div className="w-3/4 mt-4 md:mt-1 lg:mt-4">
                  <p className="text-xl lg:text-2xl font-medium max-w-sm mb-2">
                    {post.titleLink ?? post.title}
                  </p>
                  <p className="text-lg font-light">{post.authors?.[0].name}</p>
                </div>
                <div className="relative ml-auto h-[80%] aspect-square flex my-auto">
                  <Image
                    fill={true}
                    className="object-center object-cover rounded-2xl"
                    src={urlForImage(post.images?.[0]) ?? ""}
                    alt={"home"}
                    sizes="100%"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-8 gap-8">
          <p className="text-3xl font-semibold">about the groovement</p>
          <div className="w-full md:h-full flex flex-col md:flex-row gap-8">
            <Link
              href={`/groovecode`}
              className="h-full flex flex-row md:flex-col md:w-1/3 w-full"
            >
              <div className="relative h-32 w-64 md:h-64 md:w-full max-sm:aspect-square">
                <Image
                  fill={true}
                  className="object-center object-contain pl-4 rounded-2xl border border-groove1"
                  src={"/groove-code.png"}
                  alt={"home"}
                  sizes="100%"
                />
              </div>
              <div className="max-md:ml-6 max-md:w-3/4">
                <p className="text-xl md:mt-4 mb-2 font-semibold">groovecode</p>
                <p className="text-lg md:mt-4 mb-2">
                  Aka the way we groove. Our community supports each other to
                  maintain a safe and groovy environment for all. Read on for a
                  sense of our ethos.
                </p>
              </div>
            </Link>
            <Link
              href={`/faqs`}
              className="h-full flex flex-row md:flex-col md:w-1/3"
            >
              <div className="relative h-32 w-64 md:h-64 md:w-full max-sm:aspect-square">
                <Image
                  fill={true}
                  className="object-center object-contain rounded-2xl border border-groove1"
                  src={"/groovestamp.png"}
                  alt={"home"}
                  sizes="100%"
                />
              </div>
              <div className="max-md:ml-6 max-md:w-3/4">
                <p className="text-xl md:mt-4 mb-2 font-semibold">FAQs</p>
                <p className="text-lg md:mt-4 mb-2">
                  Discover more about the groovement by exploring our frequently
                  asked questions.
                </p>
              </div>
            </Link>
            <Link
              href={`/groovefam`}
              className="h-full flex flex-row md:flex-col md:w-1/3"
            >
              <div className="relative h-32 w-64 md:h-64 md:w-full max-sm:aspect-square">
                <Image
                  fill={true}
                  className="object-center object-contain rounded-2xl border border-groove1"
                  src={"/groovefam.png"}
                  alt={"home"}
                  sizes="100%"
                />
              </div>
              <div className="max-md:ml-6 max-md:w-3/4">
                <p className="text-xl md:mt-4 mb-2 font-semibold">groovefam</p>
                <p className="text-lg md:mt-4 mb-2">
                  Meet the team who puts the groove in groovement: our founders,
                  writers, photographers, content creators and contributors.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
