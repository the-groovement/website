import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import {
  getPaginatedCategoryPosts,
  getRecentFeaturedPosts,
} from "@/lib/sanity/client";

export default async function TopOfPageSection() {
  const sanityData = await getRecentFeaturedPosts(0, 1);
  const featuredArticle = await getPaginatedCategoryPosts("venues", 0, 1);
  return (
    <section>
      <div className="flex flex-col h-[calc(100vh-84px)] pb-8">
        <div className="mt-2 sm:mt-8">
          <p
            className="text-[40px] sm:text-6xl md:text-7xl lg:text-8xl sm:inline font-shrikhand"
            style={{ textShadow: "1px 1px 3px #3a2a3c" }}
          >
            what's groovin'
          </p>
          <p className="text-3xl mt-2">your guide to the best shows & vibes</p>
        </div>
        <div className="flex flex-row h-full">
          <Link
            className="flex text-lg rounded-2xl flex-grow mt-4 sm:mt-8 sm:mr-8 p-4 bg-groove1 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)] relative"
            href={`/grooveguide/${sanityData[0].slug.current}`}
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={urlForImage(sanityData[0].mainImage) || ""}
              alt={"home"}
            />
            <div className="mt-auto max-w-sm relative">
              <p className="bg-white p-4 text-2xl md:text-4xl rounded-2xl font-semi">
                {sanityData[0].title}
              </p>
            </div>
          </Link>
          <div className="flex flex-col w-72 justify-between max-sm:hidden mt-4">
            <Link
              href="/groovecal"
              className="flex flex-col bg-cover bg-center rounded-2xl bg-gradient-to-t from-red-300  via-yellow-100 to-yellow-200 px-6 justify-between h-64 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]"
            >
              <div className="mt-8 justify-between">
                <p className="inline text-2xl font-bold underline">
                  groovecal top picks
                </p>
              </div>
              <div>
                <p className="text-xl line-clamp-3 max-w-[80%]">
                  The Revivalists, Band of Horses, The Heavy Heavy
                </p>
              </div>
              <div className="mb-4 whitespace-nowrap">
                <p className=" text-sm font-semibold">find shows + get tix</p>
              </div>
            </Link>
            <Link
              href="/grooveguide?page=1&category=venues"
              className="flex rounded-2xl flex-grow mt-8 bg-groove1 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)] relative p-4"
            >
              <Image
                fill={true}
                className="object-center object-cover rounded-2xl"
                src={"/venue.png"}
                alt={"venue"}
              />
              <div className="mt-auto relative">
                <div className="bg-white py-4 px-6 font-semibold rounded-2xl whitespace-nowrap">
                  explore venues <span className="font-light">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
