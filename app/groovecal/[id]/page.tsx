import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER = [
  {
    title: "The Jungle Giants",
    artist: "The Jungle Giants",
    location: "Sultan Room",
    image: "/home.png",
    link: "/groovecal/1",
  },
  {
    title: "Tiki Discoa",
    artist: "Eli Escobar",
    location: "Knockdown Center",
    image: "/tester.png",
    link: "/groovecal/2",
  },
  {
    title: "Mister Sunday",
    artist: "Justin Carter",
    location: "Nowadays",
    image: "/venue.png",
    link: "/groovecal/3",
  },
  {
    title: "Resolute All Night Long",
    artist: "Gene on Earth",
    location: "H0l0",
    image: "/vinyl.png",
    link: "/groovecal/4",
  },
];

export default function GroovecalEvent() {
  return (
    <section>
      <div className="flex flex-col mt-12">
        <div className="flex flex-col">
          <p className="mb-4">New York • groovecal</p>
          <p className="text-4xl md:text-5xl lg:text-6xl mb-12 font-bold">
            Tiki Disco
          </p>
        </div>
        <div className="flex flex-row justify-between mb-8 md:mb-12">
          <div className="flex flex-col flex-1 mr-16">
            <p className="mb-4">Venue</p>
            <p className="text-lg md:text-3xl mb-2 font-semibold">
              Knockdown Center
            </p>
            <p className="text-sm md:text-lg">
              52-19 Flushing Ave, Queens, NY 11378
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <p className="mb-4">Date</p>
            <p className="text-lg md:text-3xl mb-2 font-semibold">6 Aug 2023</p>
            <p className="text-sm md:text-lg">15:00 - 19:00</p>
          </div>
          <div className="flex flex-col flex-1 max-md:hidden">
            <p className="mb-4">Promoter</p>
            <p className="text-lg md:text-3xl font-semibold">
              Knockdown Center
            </p>
          </div>
        </div>
        <div className="flex flex-col md:hidden mb-12">
          <p className="mb-4">Promoter</p>
          <p className="text-lg font-semibold">Knockdown Center</p>
        </div>
        <div className="flex flex-row items-center justify-between py-2 rounded-lg px-4 mb-16 md:mb-20 md:w-1/2 w-full border border-black bg-white drop-shadow-[-6px_6px_0px_rgba(0,0,0,1)]">
          <p className="text-xl font-semibold ">$25</p>
          <button className="text-sm bg-green-300 px-4 py-3 rounded-2xl font-semibold">
            BUY NOW
          </button>
        </div>
        <div>
          <div className="flex flex-row justify-between md:text-4xl mb-8 items-center">
            <p className="text-3xl md:text-4xl font-bold">LINEUP</p>
            {/* <button className="text-sm border border-black px-4 py-3 rounded-3xl shadow-md">
              add to calendar
            </button> */}
          </div>
          <div className="mb-8 md:mb-12">
            <p className="text-3xl md:text-4xl font-bold">Eli Escobar</p>
          </div>

          <div className="flex flex-col md:flex-row h-full mb-12">
            <div className="flex-1 md:mr-16 max-md:mb-12">
              <p>
                Share The House maestro Eli Escobar has truly dominated the
                electronic scene as one of the dance music greats. His iconic
                Boiler Room NYC sets and House, Disco and Italo blends take you
                on a journey through electronic music history.
                <br />
                <br /> We are excited for him to have an exclusive extended set
                in the Black Studio. In support is MIND the GAP, an Italian duo
                who are a mainstay in the London underground scene. Share The
                House maestro Eli Escobar has truly dominated the electronic
                scene as one of the dance music greats. His iconic Boiler Room
                NYC sets and House, Disco and Italo blends take you on a journey
                through electronic music history.
                <br />
                <br /> We are excited for him to have an exclusive extended set
                in the Black Studio. In support is MIND the GAP, an Italian duo
                who are a mainstay in the London underground scene. Share The
                House maestro Eli Escobar has truly dominated the electronic
                scene as one of the dance music greats. His iconic Boiler Room
                NYC sets and House, Disco and Italo blends take you on a journey
                through electronic music history.
                <br />
                <br /> We are excited for him to have an exclusive extended set
                in the Black Studio. In support is MIND the GAP, an Italian duo
                who are a mainstay in the London underground scene.
              </p>
            </div>
            <Image
              src="/poster.png"
              className="object-contain rounded-2xl mb-auto max-md:mx-auto"
              alt="poster"
              width={450}
              height={450}
            />
          </div>
        </div>
        <div className="flex flex-col mb-12 gap-8">
          <p className="text-2xl font-semibold">recommended events</p>
          <div className="w-full md:h-full flex flex-col md:flex-row gap-4">
            {PLACEHOLDER.slice(0, 4).map((item, index) => (
              <div
                className="h-full flex flex-row md:flex-col md:w-1/4"
                key={index}
              >
                <div className="relative h-32 w-32 md:h-64 md:w-full">
                  <Link href={item.link}>
                    <Image
                      fill={true}
                      className="object-center object-cover rounded-2xl"
                      src={item.image}
                      alt={"home"}
                    />
                  </Link>
                </div>
                <div className="max-md:ml-6 w-3/4">
                  <Link href={item.link}>
                    <p className="text-2xl md:mt-4 mb-2 font-semibold">
                      {item.title}
                    </p>
                  </Link>
                  <p className="text-xl">{item.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
