import Image from "next/image";

const PLACEHOLDER = [
  {
    title: "obssessed with the life that could've ",
    author: "jane doe",
  },
  {
    title: "obssessed with the life that could've been",
    author: "bob smith",
  },
  {
    title: "obssessed with the life that could've been",
    author: "tom brad",
  },
  {
    title: "obssessed with the life that could've been",
    author: "joe jackson",
  },
];

export default function BlogCamSection() {
  return (
    <section>
      <div className="py-12">
        <div className="flex flex-row max-md:hidden">
          <p className="lg:text-5xl text-4xl font-semibold w-1/2">
            from the groovecam
          </p>
          <p className="lg:text-5xl text-4xl font-semibold w-1/2 ml-8">
            popular stories
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <p className="text-5xl font-semibold md:hidden">from the groovecam</p>
          <div
            className="bg-black md:w-1/2 rounded-2xl"
            style={{ aspectRatio: 1 / 1 }}
          />
          <p className="text-5xl font-semibold md:hidden">popular stories</p>
          <div className="md:w-1/2 flex flex-col">
            {PLACEHOLDER.map((item, index) => (
              <div
                className={`flex-grow h-36 md:h-full flex flex-row border-b border-black ${
                  index === 0 && "border-t"
                }`}
                key={index}
              >
                <div className="w-3/4 mt-4 md:mt-1 lg:mt-4">
                  <p className="text-xl lg:text-2xl font-light max-w-sm mb-2">
                    {item.title}
                  </p>
                  <p className="text-lg font-semibold">{item.author}</p>
                </div>
                <div
                  className="relative ml-auto h-[80%] md:h-[84px] lg:h-[80%] mt-4 md:mt-1 lg:mt-4"
                  style={{
                    aspectRatio: 1 / 1,
                  }}
                >
                  <Image
                    fill={true}
                    className="object-center object-cover rounded-2xl"
                    src={"/home.png"}
                    alt={"home"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-8 gap-8">
          <p className="lg:text-2xl font-semibold w-1/2 ">
            more from grooveguide
          </p>
          <div className="bg-black w-full h-64"></div>
        </div>
      </div>
    </section>
  );
}
