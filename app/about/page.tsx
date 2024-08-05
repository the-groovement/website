import Dropdown from "@/components/Dropdown";
import Image from "next/image";

export default function Grooveguide() {
  return (
    <section>
      <div className="mb-12">
        <p
          className="text-[40px] sm:text-7xl mb-4 font-shrikhand mt-2 sm:mt-8"
          style={{ textShadow: "1px 1px 3px #3a2a3c" }}
        >
          about
        </p>
        <div className="flex flex-col gap-8 mb-16">
          <div>
            <p className="text-3xl sm:text-4xl font-bold mb-4">our mission</p>
            <p className="text-xl sm:text-2xl">
              To make the magic of live music accessible to everyone by
              supporting fans, artists, venues, and the local community.
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold mb-4">our values</p>
            <div className="flex flex-col md:flex-row justify-between max-md:gap-4">
              <div className="flex flex-row items-center gap-4">
                <Image
                  width={50}
                  height={50}
                  src="/groovestamp.png"
                  alt="logo"
                />
                <p className="text-xl sm:text-2xl">connection</p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    width={50}
                    height={50}
                    src="/groovestamp.png"
                    alt="logo"
                  />
                  <p className="text-xl sm:text-2xl">empowerment</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    width={50}
                    height={50}
                    src="/groovestamp.png"
                    alt="logo"
                  />
                  <p className="text-xl sm:text-2xl">integrity</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    width={50}
                    height={50}
                    src="/groovestamp.png"
                    alt="logo"
                  />
                  <p className="text-xl sm:text-2xl">fun</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold mb-4">origin story</p>
            <p className="text-xl sm:text-2xl">
              <span className="italic">the groovement</span> traces its roots
              back to two friends, a shared love of live music, and a google
              doc. The two friends were having a hard time keeping track of all
              the upcoming shows in NYC, so the google doc was born. After
              sharing the doc with friends, who shared with their friends, it
              became a resource for locals and visitors alike to find shows,
              meet awesome people and share in the magic of live music together.
              <br />
              <br />
              Today, <span className="italic">the groovement</span> is a
              thriving community platform making live music accessible to all.
              As the trusted source for live music in NYC,{" "}
              <span className="italic">the groovement</span> handpicks the best
              shows, with the best vibes, for the best crowd. We believe in
              supporting the scene and use our platform, programs, and values to
              elevate artists, venues, photographers, writers, the local
              community, and the fan experience. Get your groove on with us!
            </p>
          </div>
        </div>
        <p
          className="text-[40px] sm:text-7xl mb-4 font-shrikhand mt-2 sm:mt-8"
          style={{ textShadow: "1px 1px 3px #3a2a3c" }}
        >
          FAQs
        </p>
        <Dropdown />
      </div>
    </section>
  );
}
