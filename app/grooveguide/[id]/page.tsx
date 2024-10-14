import { getPaginatedPosts, getPostBySlug } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { PortableText as PortableTextClamp } from "@portabletext/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Article({ params }: { params: { id: string } }) {
  const POSTS_PER_PAGE = 4;
  const recommendedPosts = await getPaginatedPosts(0, POSTS_PER_PAGE + 1);
  const currentPost = await getPostBySlug(params.id);
  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <section>
      <div>
        <div className="flex flex-col mt-8">
          <div className="mb-2 text-purple-700">
            <Link
              href={`/grooveguide?page=1&category=${currentPost.categories?.[0].title}`}
            >
              {currentPost.categories?.[0].title}
            </Link>
          </div>
          {currentPost.titleLink ? (
            <Link
              href={currentPost.titleLink}
              className="text-3xl md:text-4xl lg:text-5xl font-bold line-clamp-3 lg:line-clamp-2 pb-1"
            >
              {currentPost.title}
            </Link>
          ) : (
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold line-clamp-3 lg:line-clamp-2 pb-1">
              {currentPost.title}
            </p>
          )}
          <div className="flex flex-row flex-wrap gap-8 sm:gap-16 mt-8 border-b border-black pb-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">published</p>
              <p>{formatDate(currentPost.publishedAt)}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">author</p>
              <a
                className={
                  currentPost.authors?.[0]?.instagram_or_website
                    ? "underline hover:text-blue-400"
                    : ""
                }
                href={currentPost.authors?.[0]?.instagram_or_website}
                target="_blank"
              >
                {currentPost.authors?.[0].name}
              </a>
            </div>
            {currentPost.photographers && (
              <div className="flex flex-col gap-1">
                <p className="font-semibold">photographer</p>
                <a
                  className={
                    currentPost.photographers?.[0]?.instagram_or_website
                      ? "underline hover:text-blue-400"
                      : ""
                  }
                  href={currentPost.photographers?.[0]?.instagram_or_website}
                  target="_blank"
                >
                  {currentPost.photographers?.[0].name}
                </a>
              </div>
            )}
          </div>
          <div className="flex flex-row mt-8 border-b border-black">
            <div className="flex flex-col xl:w-2/3 mb-8 max-lg:w-full">
              {currentPost.images && (
                <div className="relative">
                  <Carousel>
                    <CarouselContent>
                      {Array.from({ length: currentPost.images.length }).map(
                        (_, index) => (
                          <CarouselItem key={index}>
                            <div
                              className="flex text-lg relative mb-4 lg:mb-8"
                              style={{
                                aspectRatio: 16 / 9,
                              }}
                            >
                              {urlForImage(currentPost.images?.[index]) && (
                                <Image
                                  fill={true}
                                  className="object-center object-cover"
                                  src={
                                    urlForImage(currentPost.images?.[index]) ??
                                    ""
                                  }
                                  alt={"home"}
                                  sizes="100%"
                                />
                              )}
                            </div>
                          </CarouselItem>
                        )
                      )}
                    </CarouselContent>
                    {currentPost.images.length > 1 && (
                      <div className="flex justify-center mt-4">
                        <CarouselPrevious />
                        <CarouselNext />
                      </div>
                    )}
                  </Carousel>
                </div>
              )}
              <PortableText value={currentPost.body} />
              <Image
                className="mt-4"
                width={50}
                height={50}
                src="/groovestamp.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="flex flex-col mb-12 gap-8 mt-8">
            <p className="text-2xl font-semibold">recent posts</p>
            <div className="md:grid md:grid-cols-4 max-md:w-full max-md:flex max-md:flex-col gap-8 mb-8">
              {recommendedPosts
                .filter((post: any) => post._id !== currentPost._id)
                .slice(0, 4)
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

                        <div className="font-light line-clamp-2">
                          <PortableTextClamp value={post.body} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
