import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MapSpotifyEmailSection() {
  return (
    <section>
      <div className="pb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Link
            className="flex max-md:h-64 rounded-2xl md:w-1/2 relative"
            href="https://www.google.com/maps/d/viewer?mid=1ZcNuDKiNxyAdpnEy_i3IqRIbLCYEC7M8&ll=40.7290605124509%2C-73.92850645&z=11"
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={"/tester.png"}
              alt={"test"}
              sizes="100%"
            />
            <div className="bg-gradient-to-t from-groove1 via-groove1/90 to-transparent py-4 px-6 font-sans text-lg text-white rounded-2xl mt-auto w-full relative">
              <div className="flex flex-row justify-between items-center">
                <div className="text-xl md:text-2xl rounded-2xl tracking-wider text-white font-shrikhand">
                  Explore the groovemap
                </div>
                <ArrowRight />
              </div>
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
      </div>
    </section>
  );
}
