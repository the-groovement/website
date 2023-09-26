import Link from "next/link";
import Image from "next/image";
import { getHomePagePosts } from "@/lib/api";

export default async function TopOfPageSection() {
  const data = await getHomePagePosts();
  return (
    <section>
      <div className="flex flex-col h-[calc(100vh-84px)] pb-12">
        <div className="mt-2 sm:mt-8">
          <p className="text-[40px] sm:text-6xl md:text-7xl lg:text-8xl sm:inline font-shrikhand">
            what's groovin'
          </p>
        </div>
        <div className="flex flex-row h-full">
          <div className="flex text-lg rounded-2xl flex-grow mt-8 sm:mr-8 p-4 bg-groove1 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)] relative">
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={"/home.png"}
              alt={"home"}
            />
            <div className="mt-auto max-w-sm relative">
              <p className="bg-white p-4 text-2xl md:text-4xl rounded-2xl font-semi">
                Sunflower Bean debuts in Brooklyn, New York
              </p>
            </div>
          </div>
          <div className="flex flex-col w-72 justify-between max-sm:hidden mt-4">
            <div className="flex flex-col bg-cover bg-center rounded-2xl bg-gradient-to-t from-red-300  via-yellow-100 to-yellow-200 px-6 justify-between h-64 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)]">
              <div className="mt-8 justify-between">
                <p className="border inline border-black p-2 rounded-2xl">
                  • top picks
                </p>
              </div>
              <div>
                <p className="text-2xl line-clamp-3 max-w-[80%]">
                  The Revivalists, Band of Horses, The Heavy Heavy
                </p>
              </div>
              <div className="mb-4 ml-auto whitespace-nowrap">
                <Link href="/" className="rounded-3xl underline text-sm">
                  see more
                </Link>
              </div>
            </div>
            <div className="flex rounded-2xl flex-grow mt-8 bg-groove1 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)] relative p-4">
              <Image
                fill={true}
                className="object-center object-cover rounded-2xl"
                src={"/venue.png"}
                alt={"venue"}
              />
              <div className="mt-auto relative">
                <button className="bg-white py-4 px-6 font-semibold rounded-2xl whitespace-nowrap">
                  more venues <span className="font-light">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
