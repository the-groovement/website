import Image from "next/image";
import Link from "next/link";

export default function MapSpotifyEmailSection() {
  return (
    <section>
      <div className="pb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Link
            href="https://www.google.com/maps/d/viewer?mid=1ZcNuDKiNxyAdpnEy_i3IqRIbLCYEC7M8&ll=40.7290605124509%2C-73.92850645&z=11"
            className="flex max-md:h-64 p-4 rounded-2xl md:w-1/2 relative"
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={"/tester.png"}
              alt={"test"}
              sizes="100%"
            />
            <div className="mt-auto relative">
              <button className="text-xl font-semibold bg-white py-4 px-6 rounded-2xl">
                explore the groovemap <span className="font-light">→</span>
              </button>
            </div>
          </Link>
          <div className="md:w-1/2 flex flex-col">
            <iframe
              style={{ borderRadius: "16px" }}
              src="https://open.spotify.com/embed/playlist/7qW5qseZ006ocSKYwiLF9P?utm_source=generator&theme=0"
              width="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="md:h-[352px] h-[152px]"
            />
          </div>
        </div>
        {/* <div className="flex flex-col h-[352px] rounded-2xl bg-groove1 border border-groove1 drop-shadow-[8px_8px_0px_rgba(58,42,60,1)] relative mt-24">
          <Image
            fill={true}
            className="object-center object-cover rounded-2xl"
            src={"/vinyl.png"}
            alt={"vinyl"}
          />

          <div className="flex flex-col items-center justify-center relative flex-1 mb-12">
            <p className="text-white text-4xl mb-8">join the groovement</p>
            <div className="flex flex-row gap-3">
              <input
                className="text-white border-2 border-gray-300 p-2 focus:outline-none rounded-2xl bg-transparent placeholder-white backdrop-filter backdrop-blur-md pl-4"
                placeholder="your name"
              />
              <input
                className="text-white border-2 border-gray-300 p-2 focus:outline-none rounded-2xl bg-transparent placeholder-white backdrop-filter backdrop-blur-md pl-4"
                placeholder="your email"
              />
              <button className="bg-white py-2 px-6 rounded-2xl whitespace-nowrap max-md:hidden">
                submit
              </button>
            </div>
            <button className="bg-white py-2 px-6 rounded-2xl whitespace-nowrap mt-8 md:hidden">
              submit
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
