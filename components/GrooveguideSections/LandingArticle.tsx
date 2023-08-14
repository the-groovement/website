import Image from "next/image";
import Link from "next/link";

export default function LandingArticle() {
  return (
    <section>
      <div className="flex flex-col pb-8 md:pb-12 mt-8">
        <p className="font-semibold text-5xl sm:text-7xl mb-6">grooveguide</p>
        <p className="text-2xl sm:text-3xl mb-12">
          the latest news, interviews, & insights.
        </p>
        <Link href="/grooveguide/1">
          <div
            className="flex text-lg rounded-2xl flex-grow p-4 bg-black border border-black drop-shadow-[-8px_8px_0px_rgba(0,0,0,1)] relative"
            style={{
              aspectRatio: 16 / 9,
            }}
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={"/home.png"}
              alt={"home"}
            />
            <div className="flex flex-col mt-auto relative bg-white p-4 rounded-2xl gap-2 max-md:hidden">
              <p className="text-3xl md:text-3xl lg:text-4xl line-clamp-2">
                Sunflower Bean debuts in Brooklyn, New York
              </p>
              <p className="line-clamp-2 font-light">
                This is the preview of the article that is given here lakjsd
                flkajs dlkfja lskjalskjf
              </p>
              <p className="text-sm font-semibold">
                <span className="mr-1">Jane Doe</span>{" "}
                <span className="text-black">•</span>{" "}
                <span className="ml-1 text-black font-normal">Aug 9, 2023</span>
              </p>
            </div>
          </div>
        </Link>

        <div className="flex flex-col rounded-2xl gap-4 mt-8 md:hidden">
          <p className="text-3xl md:text-4xl line-clamp-2">
            Sunflower Bean debuts in Brooklyn, New York
          </p>
          <p className="line-clamp-2 font-light">
            This is the preview of the article that is given here lakjsd flkajs
            dlkfja lskjalskjf
          </p>
          <p className="text-sm font-semibold">
            <span className="mr-1">Jane Doe</span>{" "}
            <span className="text-black">•</span>{" "}
            <span className="ml-1 text-black font-normal">Aug 9, 2023</span>
          </p>
        </div>
      </div>
    </section>
  );
}
