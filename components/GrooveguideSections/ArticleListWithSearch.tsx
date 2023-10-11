"use client";

import { getPaginatedPosts } from "@/lib/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const PLACEHOLDER = [
  {
    title: "Obssessed with the life that could've ",
    category: "groovers",
    date: "Aug 9, 2023",
    author: "Jane Doe",
    preview:
      "This is the beginning of the article that would exist with a real article dalkfja lskdjfa lskdj f",
    image: "/home.png",
  },
  {
    title: "Obssessed with the life that could've been",
    category: "artists",
    date: "Aug 9, 2023",
    author: "Bob Smith",
    preview:
      "This is the beginning of the article that would exist with a real article dalkfja lskdjfa lskdj f",
    image: "/tester.png",
  },
  {
    title: "Obssessed with the life that could've been",
    category: "venues",
    date: "Aug 9, 2023",
    author: "Tom Brad",
    preview:
      "This is the beginning of the article that would exist with a real article dalkfja lskdjfa lskdj f",
    image: "/venue.png",
  },
  {
    title: "Obssessed with the life that could've been",
    category: "venues",
    date: "Aug 9, 2023",
    author: "Joe Jackson",
    preview: "This is the beginning of the article that would exist",
    image: "/vinyl.png",
  },
];
const POSTS_PER_PAGE = 6;

export default function ArticleListWithSearch() {
  const searchParams = useSearchParams();
  // const search = searchParams.get("search");
  useEffect(() => {
    async function fetchData() {
      await getPaginatedPosts(POSTS_PER_PAGE, POSTS_PER_PAGE);
    }
    fetchData();
  }, []);
  return (
    <section>
      <div className="flex md:flex-row flex-col justify-between md:items-center mb-8">
        <div className="flex flex-row gap-8 border-b py-2 border-slate-500 md:w-2/3 lg:w-3/4 max-md:mb-4 max-md:justify-between px-1">
          <button className="font-semibold text-purple-700">view all</button>
          <button className="font-semibold text-slate-500">artists</button>
          <button className="font-semibold text-slate-500">venues</button>
          <button className="font-semibold text-slate-500">groovers</button>
          <button className="font-semibold text-slate-500">groovemail</button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 max-md:w-full max-md:flex max-md:flex-col gap-8 mb-8">
        {PLACEHOLDER.map((item, index) => (
          <Link href="/grooveguide/1">
            <div className="h-full flex flex-row md:flex-col" key={index}>
              <div className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square">
                <Image
                  fill={true}
                  className="object-center object-cover rounded-2xl"
                  src={item.image}
                  alt={"home"}
                />
              </div>
              <div className="max-md:ml-6 w-3/4 flex flex-col gap-2">
                <p className="text-sm md:mt-4 font-semibold text-purple-700">
                  <span className="mr-2">{item.category}</span>{" "}
                  <span className="">•</span>{" "}
                  <span className="ml-2  font-normal">{item.date}</span>
                </p>
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="font-light line-clamp-2">{item.preview}</p>
                <p className="text-sm font-semibold">{item.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
