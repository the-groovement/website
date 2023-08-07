import Image from "next/image";

const PLACEHOLDER = [
  {
    title: "Obssessed with the life that could've ",
    category: "groovers",
    date: "aug 9 2023",
    author: "Jane Doe",
    preview:
      "This is the beginning of the article that would exist with a real article dalkfja lskdjfa lskdj f",
    image: "/home.png",
  },
  {
    title: "Obssessed with the life that could've been",
    category: "artists",
    date: "aug 9 2023",
    author: "Bob Smith",
    preview:
      "This is the beginning of the article that would exist with a real article dalkfja lskdjfa lskdj f",
    image: "/tester.png",
  },
  {
    title: "Obssessed with the life that could've been",
    category: "venues",
    date: "aug 9 2023",
    author: "Tom Brad",
    preview:
      "This is the beginning of the article that would exist with a real article dalkfja lskdjfa lskdj f",
    image: "/venue.png",
  },
  {
    title: "Obssessed with the life that could've been",
    category: "venues",
    date: "aug 9 2023",
    author: "Joe Jackson",
    preview: "This is the beginning of the article that would exist",
    image: "/vinyl.png",
  },
];

export default function ArticleListWithSearch() {
  return (
    <section>
      <div className="flex md:flex-row flex-col justify-between md:items-center mb-8">
        <div className="flex flex-row gap-8 border-b py-2 border-black md:w-2/3 lg:w-3/4 max-md:mb-4">
          <p className="font-semibold">view all</p>
          <p>artists</p>
          <p>venues</p>
          <p>groovers</p>
          <p>groovemail</p>
        </div>
        <div>
          <select className="flex-1 rounded-md py-2 px-8 border border-black focus:outline-none bg-white bg-opacity-80">
            <option value="">most recent</option>
          </select>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 max-md:w-full max-md:flex max-md:flex-col gap-8 mb-8">
        {/* <div className="w-full md:h-full flex flex-col md:flex-row gap-4"> */}
        {PLACEHOLDER.map((item, index) => (
          <div className="h-full flex flex-row md:flex-col" key={index}>
            <div className="relative h-32 w-32 md:h-64 md:w-full">
              <Image
                fill={true}
                className="object-center object-cover rounded-2xl"
                src={item.image}
                alt={"home"}
              />
            </div>
            <div className="max-md:ml-6 w-3/4 flex flex-col gap-2">
              <p className="text-sm md:mt-4 font-semibold text-purple-700">
                <span className="mr-2">{item.category}</span>{" "}
                <span className="text-black">•</span>{" "}
                <span className="ml-2 text-black font-normal">{item.date}</span>
              </p>
              <p className="text-xl font-semibold">{item.title}</p>
              <p className="font-light line-clamp-2">{item.preview}</p>
              <p className="text-sm font-semibold">{item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
