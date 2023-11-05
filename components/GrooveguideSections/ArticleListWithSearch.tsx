"use client";

import { getPaginatedPosts } from "@/lib/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import { paginatedCategoryQuery, paginatedquery } from "@/lib/sanity/groq";
import { fetcher } from "@/lib/sanity/client";
import useSWR from "swr";
import ChevronLeftIcon from "../Icons/ChevronLeftIcon";
import ChevronRightIcon from "../Icons/ChevronRightIcon";
import SkeletonImg from "../SkeletonImg";

type ArticleListWithSearch = {
  initialPosts: any;
};

export default function ArticleListWithSearch({
  initialPosts,
}: ArticleListWithSearch) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const category = searchParams.get("category");
  const pageIndex = page ? parseInt(page) : 1;
  const POSTS_PER_PAGE = 6;

  const [isLoading, setIsLoading] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  const query = category ? paginatedCategoryQuery : paginatedquery;
  const paramsForQuery = category
    ? {
        categoryId: category,
        start: (pageIndex - 1) * POSTS_PER_PAGE,
        end: pageIndex * POSTS_PER_PAGE,
      }
    : {
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
  } = useSWR([query, paramsForQuery], fetcher, {
    fallbackData: initialPosts,
    onSuccess: () => {
      setIsLoading(false);
    },
  });

  useEffect(() => {
    setIsFirstPage(posts === null ? false : pageIndex < 2);
  }, [pageIndex]);

  useEffect(() => {
    setIsLastPage(posts === null ? true : posts.length < POSTS_PER_PAGE);
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
          <button
            className={`font-semibold max-sm:text-xs ${
              category === null ? "text-purple-700" : "text-slate-500"
            }`}
            onClick={() => router.push("/grooveguide?page=1")}
          >
            view all
          </button>
          <button
            className={`font-semibold max-sm:text-xs ${
              category === "artists" ? "text-purple-700" : "text-slate-500"
            }`}
            onClick={() => router.push("/grooveguide?page=1&category=artists")}
          >
            artists
          </button>
          <button
            className={`font-semibold max-sm:text-xs ${
              category === "venues" ? "text-purple-700" : "text-slate-500"
            }`}
            onClick={() => router.push("/grooveguide?page=1&category=venues")}
          >
            venues
          </button>
          <button
            className={`font-semibold max-sm:text-xs ${
              category === "groovers" ? "text-purple-700" : "text-slate-500"
            }`}
            onClick={() => router.push("/grooveguide?page=1&category=groovers")}
          >
            groovers
          </button>
          <button
            className={`font-semibold max-sm:text-xs ${
              category === "groovemail" ? "text-purple-700" : "text-slate-500"
            }`}
            onClick={() =>
              router.push("/grooveguide?page=1&category=groovemail")
            }
          >
            groovemail
          </button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 max-md:w-full max-md:flex max-md:flex-col gap-8 mb-8">
        {!isLoading && !isValidating ? (
          posts?.map((post: any, index: number) => (
            <div className="h-full flex flex-row md:flex-col" key={index}>
              <Link
                href={`/grooveguide/${post.slug.current}`}
                key={index}
                className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square"
              >
                <Image
                  fill={true}
                  className="object-center object-cover rounded-2xl"
                  src={urlForImage(post.mainImage) || ""}
                  alt={"home"}
                />
              </Link>
              <div className="max-md:ml-6 flex flex-col gap-2">
                <p className="text-sm md:mt-4 font-semibold text-purple-700">
                  {post.categories && (
                    <>
                      <Link
                        href={`/grooveguide?page=1&category=${post.categories[0].title}`}
                      >
                        <span className="mr-2">{post.categories[0].title}</span>{" "}
                      </Link>
                      <span className="mr-2">•</span>{" "}
                    </>
                  )}
                  <span className="font-normal">
                    {formatDate(post.publishedAt)}
                  </span>
                </p>
                <Link
                  href={`/grooveguide/${post.slug.current}`}
                  key={index}
                  className="flex flex-col gap-2"
                >
                  <p className="text-xl font-semibold">{post.title}</p>
                  <div className="font-light line-clamp-2">
                    <PortableText value={post.body} />
                  </div>
                  <p className="text-sm font-semibold">{post.author.name}</p>
                </Link>
              </div>
            </div>
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
