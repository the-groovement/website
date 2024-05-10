import {
  getRecentFeaturedPosts,
  getRecentNonFeaturedPosts,
} from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BlogCamSection() {
  const featuredPosts = await getRecentFeaturedPosts(1, 5);
  const sanityData = await getRecentFeaturedPosts(0, 1);
  // const nonFeaturedPosts = await getRecentNonFeaturedPosts(0, 3);
  return (
    <section>
      <div className="pb-8">
        <div className="flex flex-col justify-between sm:hidden gap-8 mb-8">
          <Link
            href="/groovecal"
            className="flex flex-col bg-cover bg-center rounded-2xl justify-between h-72 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]"
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={urlForImage(sanityData[0].images?.[0]) ?? ""}
              alt={"home"}
              sizes="100%"
            />
            <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6 font-sans text-lg text-white rounded-2xl mt-auto w-full relative">
              <div className="bg-orange-500 text-white w-fit text-sm px-2 py-1 font-sans font-bold rounded-2xl mb-2 tracking-normal">
                ARTISTS
              </div>
              <div className="flex flex-row justify-between items-center">
                <p>Sunflower Bean debuts in Brooklyn, New York</p>
                <ArrowRight />
              </div>
            </div>
          </Link>
          <Link
            href="/groovecal"
            className="flex flex-col bg-cover bg-center rounded-2xl justify-between h-72 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]"
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={urlForImage(sanityData[0].images?.[0]) ?? ""}
              alt={"home"}
              sizes="100%"
            />
            <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6 font-sans text-lg text-white rounded-2xl mt-auto w-full relative">
              <div className="bg-purple-500 text-white w-fit text-sm px-2 py-1 font-sans font-bold rounded-2xl mb-2 tracking-normal">
                VENUES
              </div>
              <div className="flex flex-row justify-between items-center">
                <p>Sunflower Bean debuts in Brooklyn, New York</p>
                <ArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-row max-md:hidden mb-8">
          <p className="lg:text-5xl text-4xl font-semibold w-1/2">
            from the groovecam
          </p>
          <p className="lg:text-5xl text-4xl font-semibold w-1/2 ml-8">
            popular stories
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <p className="text-3xl font-semibold md:hidden">from the groovecam</p>
          <div
            className="bg-black md:w-1/2 rounded-2xl"
            style={{ aspectRatio: 1 / 1 }}
          />
          <p className="text-3xl font-semibold md:hidden">popular stories</p>
          <div className="md:w-1/2 flex flex-col">
            {featuredPosts.map((post: any, index: number) => (
              <Link
                href={`/grooveguide/${post.slug.current}`}
                className={`flex-grow h-36 md:h-full flex flex-row border-b border-black ${
                  index === 0 && "border-t"
                }`}
                key={index}
              >
                <div className="w-3/4 mt-4 md:mt-1 lg:mt-4">
                  <p className="text-xl lg:text-2xl font-semibold max-w-sm mb-2">
                    {post.title}
                  </p>
                  <p className="text-lg font-light">{post.authors[0].name}</p>
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
              className="h-full flex flex-row md:flex-col md:w-1/3"
            >
              <div className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square">
                <Image
                  fill={true}
                  className="object-center object-cover rounded-2xl"
                  src={"/vinyl.png"}
                  alt={"home"}
                  sizes="100%"
                />
              </div>
              <div className="max-md:ml-6 max-md:w-3/4">
                <p className="text-xl md:mt-4 mb-2 font-semibold">groovecode</p>
                <p className="text-lg md:mt-4 mb-2">
                  Aka the way we groove. Our community supports each other to
                  maintain a safe and groovy environment for all. Read on for a
                  sense of our ethos
                </p>
              </div>
            </Link>
            <Link
              href={`/grooveguide`}
              className="h-full flex flex-row md:flex-col md:w-1/3"
            >
              <div className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square">
                <Image
                  fill={true}
                  className="object-center object-cover rounded-2xl"
                  src={"/vinyl.png"}
                  alt={"home"}
                  sizes="100%"
                />
              </div>
              <div className="max-md:ml-6 max-md:w-3/4">
                <p className="text-xl md:mt-4 mb-2 font-semibold">
                  grooveguide
                </p>
                <p className="text-lg md:mt-4 mb-2">
                  Our online magazine. Learn more about our favorite artists and
                  venues and amplify your concert experience with hot tips and
                  tricks.
                </p>
              </div>
            </Link>
            <Link
              href={`/groovefam`}
              className="h-full flex flex-row md:flex-col md:w-1/3"
            >
              <div className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square">
                <Image
                  fill={true}
                  className="object-center object-cover rounded-2xl"
                  src={"/vinyl.png"}
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
