import InstagramIcon from "@/components/Icons/InstagramIcon";
import { getHomePagePosts, getPostById } from "@/lib/api";
import { getPaginatedPosts, getPostBySlug } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";

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
  console.log(currentPost.authors?.[0]?.instagram_or_website);
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
                                  urlForImage(currentPost.images?.[index]) ?? ""
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
                  <div className="max-sm:hidden">
                    {currentPost.images.length > 2 && (
                      <>
                        <CarouselPrevious />
                        <CarouselNext />
                      </>
                    )}
                  </div>
                </Carousel>
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
            <div className="w-full md:h-full flex flex-col md:flex-row gap-4">
              {recommendedPosts
                .filter((post: any) => post._id !== currentPost._id)
                .slice(0, 4)
                .map((post: any, index: number) => (
                  <div
                    className="h-full flex flex-row md:flex-col md:w-1/4"
                    key={index}
                  >
                    <div className="relative h-32 w-32 md:h-64 md:w-full max-sm:aspect-square">
                      <Link href={`/grooveguide/${post.slug.current}`}>
                        <Image
                          fill={true}
                          className="object-center object-cover rounded-2xl"
                          src={urlForImage(post.images?.[0]) ?? ""}
                          alt={"home"}
                          sizes="100%"
                        />
                      </Link>
                    </div>
                    <div className="max-md:ml-6 w-3/4">
                      <Link href={`/grooveguide/${post.slug.current}`}>
                        <p className="text-xl md:mt-4 mb-2 font-semibold">
                          {post.title}
                        </p>
                      </Link>
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
