"use client";

import { getPaginatedPosts } from "@/lib/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formatDate } from "@/app/grooveguide/[id]/page";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import { paginatedquery } from "@/lib/sanity/groq";
import { fetcher } from "@/lib/sanity/client";
import useSWR from "swr";
import ChevronLeftIcon from "../Icons/ChevronLeftIcon";
import ChevronRightIcon from "../Icons/ChevronRightIcon";

type ArticleListWithSearch = {
  initialPosts: any;
};

export default function ArticleListWithSearch({
  initialPosts,
}: ArticleListWithSearch) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pageIndex = page ? parseInt(page) : 1;

  const POSTS_PER_PAGE = 6;

  const [isLoading, setIsLoading] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  // [(($pageIndex - 1) * 10)...$pageIndex * 10]{
  const paramsForQuery = {
    start: (pageIndex - 1) * POSTS_PER_PAGE,
    end: pageIndex * POSTS_PER_PAGE,
  };

  // const fetcher = (query, params) =>
  //   client && client.fetch(query, params);

  const {
    data: posts,
    error,
    isValidating,
  } = useSWR([paginatedquery, paramsForQuery], fetcher, {
    fallbackData: initialPosts,
    onSuccess: () => {
      setIsLoading(false);
    },
  });
  console.log(posts);

  useEffect(() => {
    setIsFirstPage(pageIndex < 2);
  }, [pageIndex]);

  useEffect(() => {
    setIsLastPage(posts.length < POSTS_PER_PAGE);
  }, [posts]);

  const handleNextPage = () => {
    router.push(`/grooveguide?page=${pageIndex + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/grooveguide?page=${pageIndex - 1}`);
  };
  return (
    <section>
      <div className="flex md:flex-row flex-col justify-between md:items-center mb-8">
        <div className="flex flex-row gap-8 border-b py-2 border-slate-500 md:w-2/3 lg:w-3/4 max-md:mb-4 max-md:justify-between px-1">
          <button className="font-semibold text-purple-700 max-sm:text-xs">
            view all
          </button>
          <button className="font-semibold text-slate-500 max-sm:text-xs">
            artists
          </button>
          <button className="font-semibold text-slate-500 max-sm:text-xs">
            venues
          </button>
          <button className="font-semibold text-slate-500 max-sm:text-xs">
            groovers
          </button>
          <button className="font-semibold text-slate-500 max-sm:text-xs">
            groovemail
          </button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 max-md:w-full max-md:flex max-md:flex-col gap-8 mb-8">
        {posts &&
          !isLoading &&
          !isValidating &&
          posts.map((post: any, index: number) => (
            <Link href="/grooveguide/1" key={index}>
              <div className="h-full flex flex-row md:flex-col" key={index}>
                <div className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square">
                  <Image
                    fill={true}
                    className="object-center object-cover rounded-2xl"
                    src={urlForImage(post.mainImage) || ""}
                    alt={"home"}
                  />
                </div>
                <div className="max-md:ml-6 w-3/4 flex flex-col gap-2">
                  <p className="text-sm md:mt-4 font-semibold text-purple-700">
                    <span className="mr-2">
                      {post.categories ? post.categories[0] : "test"}
                    </span>{" "}
                    <span className="">•</span>{" "}
                    <span className="ml-2  font-normal">
                      {formatDate(post.publishedAt)}
                    </span>
                  </p>
                  <p className="text-xl font-semibold">{post.title}</p>
                  <p className="font-light line-clamp-2">
                    <PortableText value={post.body} />
                  </p>
                  <p className="text-sm font-semibold">{post.author.name}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="my-10 flex items-center justify-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            disabled={isFirstPage}
            onClick={handlePrevPage}
            className="relative inline-flex items-center gap-1 rounded-l-md border bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
          >
            <ChevronLeftIcon aria-hidden="true" />
            <span>Previous</span>
          </button>
          <button
            onClick={handleNextPage}
            disabled={isLastPage}
            className="relative inline-flex items-center gap-1 rounded-r-md border bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
          >
            <span>Next</span>
            <ChevronRightIcon aria-hidden="true" />
          </button>
        </nav>
      </div>
    </section>
  );
}
