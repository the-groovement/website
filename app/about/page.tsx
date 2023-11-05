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
              To support artists, venues and the local community by sharing hte
              magic of live music together.
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
              What started out as two friends, a love for concerts, and a google
              doc…has now become a community for all lovers of live music:
              welcome to the groovement! We believe in supporting our favorite
              artists, venues, and local community by sharing in the magic of
              live music together.
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
