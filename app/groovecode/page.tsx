import Image from "next/image";

export default function Groovecode() {
  return (
    <section>
      <div className="mb-12">
        <p
          className="text-[40px] sm:text-7xl mb-4 font-shrikhand mt-2 sm:mt-8"
          style={{ textShadow: "1px 1px 3px #3a2a3c" }}
        >
          groovecode
        </p>
        <p className="text-xl sm:text-2xl mb-8">
          Aka the way we groove. Our community supports each other to maintain a
          safe and groovy environment for all. Read on for a sense of our ethos.
        </p>
        <div className="flex flex-col gap-8 mb-16">
          <div>
            <div className="flex flex-row items-center gap-4 mb-4">
              <Image width={50} height={50} src="/groovestamp.png" alt="logo" />
              <p className="text-3xl sm:text-4xl font-bold">bring the vibe</p>
            </div>
            <p className="text-xl sm:text-2xl">
              To support artists, venues and the local community by sharing hte
              magic of live music together.
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center gap-4 mb-4">
              <Image width={50} height={50} src="/groovestamp.png" alt="logo" />
              <p className="text-3xl sm:text-4xl font-bold">be the vibe</p>
            </div>
            <p className="text-xl sm:text-2xl">
              show respect to the artists, crowd, and venue staff. tip well.
              make friends. no hate, violence, or discrimination of any kind.
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center gap-4 mb-4">
              <Image width={50} height={50} src="/groovestamp.png" alt="logo" />
              <p className="text-3xl sm:text-4xl font-bold">check the vibe</p>
            </div>
            <p className="text-xl sm:text-2xl">
              be mindful of fellow groovers in the space. get help if you or
              anyone needs it. be sure you and your crew get home safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
