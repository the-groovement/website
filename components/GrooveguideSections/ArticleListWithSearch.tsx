"use client";

import { getPaginatedPosts } from "@/lib/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

  const paramsForQuery = {
    start: (pageIndex - 1) * POSTS_PER_PAGE,
    end: pageIndex * POSTS_PER_PAGE,
  };

  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

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
        <div className="flex flex-row gap-8 border-b py-2 border-slate-500 w-full max-md:mb-4 max-md:justify-between px-1">
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
        {posts && !isLoading && !isValidating ? (
          posts.map((post: any, index: number) => (
            <Link href={`/grooveguide/${post.slug.current}`} key={index}>
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
          ))
        ) : (
          <>
            {new Array(POSTS_PER_PAGE).fill(null).map((item, index) => (
              <div key={index}>
                <SkeletonImg />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="my-10 flex items-center justify-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            disabled={isFirstPage}
            onClick={handlePrevPage}
            className="relative inline-flex items-center gap-1 rounded-l-md bg-groove1 px-3 py-2 pr-4 text-sm font-medium text-white focus:z-20 disabled:pointer-events-none disabled:opacity-40 "
          >
            <ChevronLeftIcon aria-hidden="true" />
            <span>Previous</span>
          </button>
          <button
            onClick={handleNextPage}
            disabled={isLastPage}
            className="relative inline-flex items-center gap-1 rounded-r-md bg-groove1 px-3 py-2 pl-4 text-sm font-medium text-white focus:z-20 disabled:pointer-events-none disabled:opacity-40 "
          >
            <span>Next</span>
            <ChevronRightIcon aria-hidden="true" />
          </button>
        </nav>
      </div>
    </section>
  );
}

const SkeletonImg = () => {
  const style = `
   .dark svg#skeleton #colorbase {
      stop-color: #2d2d2d;
    }
    .dark svg#skeleton #colorhighlight {
      stop-color: #3d3d3d;
    }
`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      id="skeleton"
      aria-labelledby="loading-aria"
      viewBox="0 0 500 800"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        style={{ fill: 'url("#fill")' }}
      />
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="0" rx="2" ry="2" width="505" height="505" />
          <rect x="0" y="623" rx="0" ry="0" width="480" height="18" />
          <rect x="0" y="568" rx="0" ry="0" width="154" height="21" />
          <rect x="-10" y="433" rx="2" ry="2" width="365" height="1" />
          <rect x="60" y="756" rx="0" ry="0" width="164" height="27" />
          <rect x="277" y="763" rx="0" ry="0" width="179" height="14" />
          <circle cx="20" cy="769" r="18" />
          <circle cx="250" cy="770" r="4" />
          <rect x="0" y="664" rx="0" ry="0" width="365" height="18" />
          <rect x="0" y="705" rx="0" ry="0" width="193" height="18" />
        </clipPath>
        <linearGradient id="fill">
          <stop
            offset="0.599964"
            stopColor="#f0f0f0"
            stopOpacity="1"
            id="colorbase"
          >
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="1.59996"
            stopColor="#f7f7f7"
            stopOpacity="1"
            id="colorhighlight"
          >
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="2.59996"
            stopColor="#f0f0f0"
            stopOpacity="1"
            id="colorbase"
          >
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
