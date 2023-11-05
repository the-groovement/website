import {
  getRecentFeaturedPosts,
  getRecentNonFeaturedPosts,
} from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER = [
  {
    title: "obssessed with the life that could've ",
    author: "jane doe",
    image: "/home.png",
  },
  {
    title: "obssessed with the life that could've been",
    author: "bob smith",
    image: "/tester.png",
  },
  {
    title: "obssessed with the life that could've been",
    author: "tom brad",
    image: "/venue.png",
  },
  {
    title: "obssessed with the life that could've been",
    author: "joe jackson",
    image: "/vinyl.png",
  },
];

export default async function BlogCamSection() {
  const featuredPosts = await getRecentFeaturedPosts(1, 5);
  const nonFeaturedPosts = await getRecentNonFeaturedPosts(0, 3);
  return (
    <section>
      <div className="pb-8">
        <div className="flex flex-col justify-between sm:hidden">
          <Link
            href="/groovecal"
            className="flex flex-col bg-cover bg-center rounded-2xl bg-gradient-to-t from-red-300 via-yellow-100 to-yellow-200 px-6 justify-between h-52 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]"
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
            className="flex rounded-2xl flex-grow mt-8 bg-groove1 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)] relative p-4 h-52 mb-8"
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
                  <p className="text-lg font-light">{post.author.name}</p>
                </div>
                <div className="relative ml-auto h-[80%] aspect-square flex my-auto">
                  <Image
                    fill={true}
                    className="object-center object-cover rounded-2xl"
                    src={urlForImage(post.mainImage) || ""}
                    alt={"home"}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-8 gap-8">
          <p className="text-3xl font-semibold">more from the grooveguide</p>
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
                />
              </div>
              <div className="max-md:ml-6 w-3/4">
                <p className="text-xl md:mt-4 mb-2 font-semibold">groovecode</p>
              </div>
            </Link>
            <Link
              href={`/about`}
              className="h-full flex flex-row md:flex-col md:w-1/3"
            >
              <div className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square">
                <Image
                  fill={true}
                  className="object-center object-cover rounded-2xl"
                  src={"/vinyl.png"}
                  alt={"home"}
                />
              </div>
              <div className="max-md:ml-6 w-3/4">
                <p className="text-xl md:mt-4 mb-2 font-semibold">FAQs</p>
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
                />
              </div>
              <div className="max-md:ml-6 w-3/4">
                <p className="text-xl md:mt-4 mb-2 font-semibold">groovefam</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
