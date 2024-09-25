"use client";

import { getCategoryPosts, searchPosts } from "@/lib/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
// import useDebounce from "@/hooks/useDebounce";
import LoaderSpinner from "../LoaderSpinner";
import { Search, X } from "lucide-react";

export default function ArticleListWithSearch() {
  const POSTS_PER_PAGE = 12;
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const category = searchParams.get("category");
  const pageIndex = page ? parseInt(page) : 1;
  const [searchText, setSearchText] = useState("");
  // const searchText = useDebounce(searchText, 600);
  const [posts, setPosts] = useState<any>([]);
  const [initialPosts, setInitialPosts] = useState<any>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(true);
  const [visibleEvents, setVisibleEvents] = useState(POSTS_PER_PAGE);
  const [hasMore, setHasMore] = useState(true);
  const [hasMoreInitial, setHasMoreInitial] = useState(true);

  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const getInitialPosts = async () => {
      const fetchedPosts = await getCategoryPosts(
        category,
        visibleEvents - POSTS_PER_PAGE,
        visibleEvents + 1
      );
      setPosts(fetchedPosts.slice(0, POSTS_PER_PAGE));
      setInitialPosts(fetchedPosts.slice(0, POSTS_PER_PAGE));
      setIsLoaded(true);
      setIsSearchLoading(false);

      if (fetchedPosts.length <= POSTS_PER_PAGE) {
        setHasMore(false);
        setHasMoreInitial(false);
      } else {
        setHasMore(true);
        setHasMoreInitial(true);
      }
    };
    getInitialPosts();
  }, []);

  const getSearchedEvents = async () => {
    if (isLoaded) {
      setIsSearchLoading(true);
      setPosts([]);
      setVisibleEvents(POSTS_PER_PAGE);
      const fetchedPosts = searchText
        ? await searchPosts(searchText, category, 0, POSTS_PER_PAGE + 1)
        : initialPosts.length > 0 && category === null
        ? initialPosts
        : await getCategoryPosts(category, 0, POSTS_PER_PAGE + 1);
      setVisibleEvents(POSTS_PER_PAGE);
      setPosts(fetchedPosts.slice(0, POSTS_PER_PAGE));
      setIsSearchLoading(false);
      if (category === null && !searchText) {
        setHasMore(hasMoreInitial);
      } else if (fetchedPosts.length <= POSTS_PER_PAGE) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    }
  };

  useEffect(() => {
    const handleGenreChange = async () => {
      if (category) {
        const fetchedPosts = await getCategoryPosts(
          category,
          0,
          POSTS_PER_PAGE + 1
        );
        setPosts(fetchedPosts);
        if (fetchedPosts.length <= POSTS_PER_PAGE) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      } else {
        initialPosts.length > 0
          ? setPosts(initialPosts)
          : setPosts(await getCategoryPosts(category, 0, POSTS_PER_PAGE + 1));
        setHasMore(hasMoreInitial);
      }
    };
    isLoaded && handleGenreChange();
  }, [category]);

  const handleShowMore = async () => {
    if (hasMore) {
      setIsSearchLoading(true);
      let fetchedPosts: any;
      if (!searchText) {
        fetchedPosts = await getCategoryPosts(
          category,
          visibleEvents,
          visibleEvents + POSTS_PER_PAGE + 1
        );
      } else {
        fetchedPosts = await searchPosts(
          searchText,
          category,
          visibleEvents,
          visibleEvents + POSTS_PER_PAGE + 1
        );
      }
      setPosts((prevPosts: any) => [
        ...prevPosts,
        ...fetchedPosts.slice(0, POSTS_PER_PAGE),
      ]);

      setVisibleEvents(
        (prevVisibleEvents) => prevVisibleEvents + POSTS_PER_PAGE
      );

      setHasMore(fetchedPosts.length > POSTS_PER_PAGE);
      setIsSearchLoading(false);
    }
  };

  const clearFilters = async () => {
    setSearchText("");
    initialPosts.length > 0
      ? setPosts(initialPosts)
      : setPosts(await getCategoryPosts(category, 0, POSTS_PER_PAGE + 1));
  };

  return (
    <section>
      <div className="w-full bg-white h-4 rounded-2xl py-8 items-center flex border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)] mb-4">
        <input
          className="py-3 rounded-tl-3xl rounded-bl-3xl w-full px-6 focus:outline-none text-gray-500 placeholder-gray-500"
          placeholder={`search ${category === null ? "grooveguide" : category}`}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getSearchedEvents();
            }
          }}
        />
        <button
          className="bg-groove1 h-4 rounded-2xl py-6 px-4 mr-2 border flex items-center justify-center whitespace-nowrap hover:font-semibold hover:bg-opacity-80"
          onClick={getSearchedEvents}
        >
          <Search className="text-white" />
        </button>
      </div>
      {searchText ? (
        <button
          onClick={clearFilters}
          className="ml-auto mt-4 flex flex-row items-center gap-1 hover:opacity-80 mb-12"
        >
          <X className="h-4 w-4" />
          <div>clear filters</div>
        </button>
      ) : (
        <button className="ml-auto mt-4 flex flex-row items-center gap-1 hover:opacity-80 opacity-0 mb-12">
          .
        </button>
      )}
      <div className="flex md:flex-row flex-col justify-between md:items-center mb-8">
        <div className="flex flex-row gap-8 border-b py-2 border-slate-500 w-full max-md:mb-4 px-1 flex-wrap">
          <button
            className={`font-semibold max-sm:text-xs ${
              category === null ? "text-purple-700" : "text-slate-500"
            }`}
            onClick={() => router.push("/grooveguide")}
          >
            view all
          </button>
          <button
            className={`font-semibold max-sm:text-xs ${
              category === "artists" ? "text-purple-700" : "text-slate-500"
            }`}
            onClick={() => router.push("/grooveguide?category=artists")}
          >
            artists
          </button>
          <button
            className={`font-semibold max-sm:text-xs ${
              category === "venues" ? "text-purple-700" : "text-slate-500"
            }`}
            onClick={() => router.push("/grooveguide?category=venues")}
          >
            venues
          </button>
          <button
            className={`font-semibold max-sm:text-xs ${
              category === "groovers" ? "text-purple-700" : "text-slate-500"
            }`}
            onClick={() => router.push("/grooveguide?category=groovers")}
          >
            groovers
          </button>
          <button
            className={`font-semibold max-sm:text-xs ${
              category === "more" ? "text-purple-700" : "text-slate-500"
            }`}
            onClick={() => router.push("/grooveguide?category=more")}
          >
            more
          </button>
        </div>
      </div>
      {posts.length > 0 && (
        <div className="md:grid md:grid-cols-3 max-md:w-full max-md:flex max-md:flex-col gap-8 mb-8">
          {posts
            ?.slice(0, Math.min(visibleEvents, posts.length))
            .map((post: any, index: number) => (
              <div className="h-full flex flex-row md:flex-col" key={index}>
                <Link
                  href={`/grooveguide/${post.slug.current}`}
                  key={index}
                  className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square"
                >
                  <div className="relative max-md:h-[80%] h-full max-md:aspect-square flex my-auto">
                    <Image
                      fill={true}
                      className="object-center object-cover rounded-2xl"
                      src={urlForImage(post.images?.[0]) ?? ""}
                      alt={"home"}
                      sizes="100%"
                    />
                  </div>
                </Link>
                <div className="max-md:ml-6 flex flex-col gap-2 w-full overflow-hidden">
                  <p className="text-sm md:mt-4 font-semibold text-purple-700">
                    {post.categories && (
                      <>
                        <Link
                          href={`/grooveguide?page=1&category=${post.categories?.[0].title}`}
                        >
                          <span className="mr-2">
                            {post.categories?.[0].title}
                          </span>
                        </Link>
                        <span className="mr-2">•</span>
                      </>
                    )}
                    <span className="font-normal">
                      {formatDate(post.publishedAt)}
                    </span>
                  </p>
                  <div key={index} className="flex flex-col gap-2 w-full">
                    <Link href={`/grooveguide/${post.slug.current}`}>
                      <p className="text-xl font-semibold">{post.title}</p>
                    </Link>

                    <div className="font-light line-clamp-2 w-full max-w-full overflow-hidden text-ellipsis break-words">
                      <PortableText value={post.body} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
      <div className="flex justify-center">
        {posts.length === 0 && isLoaded && !isSearchLoading ? (
          "No results found"
        ) : isSearchLoading || !isLoaded ? (
          <LoaderSpinner />
        ) : (
          <></>
        )}
      </div>
      <div className="mt-2 mb-8 flex items-center justify-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {hasMore && isLoaded && !isSearchLoading && (
            <button
              onClick={handleShowMore}
              className="relative inline-flex items-center gap-1 rounded-md bg-groove1 px-3 py-2 pl-4 text-sm font-medium text-white focus:z-20 disabled:pointer-events-none disabled:opacity-40 "
            >
              Show more
            </button>
          )}
        </nav>
      </div>
    </section>
  );
}
