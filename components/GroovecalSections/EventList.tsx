import Image from "next/image";

const PLACEHOLDER = [
  {
    title: "The Jungle Giants",
    artist: "The Jungle Giants",
    location: "Sultan Room",
    image: "/home.png",
  },
  {
    title: "Tiki Disco",
    artist: "Eli Escobar",
    location: "Knockdown Center",
    image: "/tester.png",
  },
  {
    title: "Mister Sunday",
    artist: "Justin Carter",
    location: "Nowadays",
    image: "/venue.png",
  },
  {
    title: "Resolute All Night Long",
    artist: "Gene on Earth",
    location: "H0l0",
    image: "/vinyl.png",
  },
];

export default function EventList() {
  return (
    <section>
      <div className="mb-12">
        <p className="uppercase text-3xl mb-8">MON, 7 AUG</p>
        <div className="w-full flex flex-col gap-10">
          {PLACEHOLDER.map((item, index) => (
            <div className="h-full flex flex-row" key={index}>
              <div className="relative h-40 w-64">
                <Image
                  fill={true}
                  className="object-center object-cover rounded-2xl"
                  src={item.image}
                  alt={"home"}
                />
              </div>
              <div className="ml-6 flex flex-col gap-3">
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-xl ">{item.artist}</p>
                <p className="text-md font-light">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
