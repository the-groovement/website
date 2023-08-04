import Image from "next/image";

export default function MapSpotifyEmailSection() {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-8 py-12">
        <div className="flex max-md:h-64 rounded-2xl md:w-1/2 bg-black border border-black shadow drop-shadow-[-8px_8px_0px_rgba(0,0,0,1)] relative">
          <Image
            fill={true}
            className="object-center object-cover rounded-2xl"
            src={"/tester.png"}
            alt={"test"}
          />
          <div className="ml-auto relative">
            <button className="text-2xl font-semibold bg-white py-4 px-6 rounded-bl-2xl rounded-tr-2xl">
              explore the groovemap <span className="font-light">→</span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-8">
          <iframe
            style={{ borderRadius: "16px" }}
            src="https://open.spotify.com/embed/playlist/7qW5qseZ006ocSKYwiLF9P?utm_source=generator&theme=0"
            width="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="md:h-[352px] h-[152px]"
          />
          <div className="flex flex-col h-[176px] rounded-2xl bg-black border border-black shadow drop-shadow-[-8px_8px_0px_rgba(0,0,0,1)] relative">
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={"/vinyl.png"}
              alt={"vinyl"}
            />
            <div className="mx-auto mt-4 relative">
              <p className="text-white text-3xl font-semibold">join us</p>
            </div>
            <div className="flex flex-row items-center justify-center flex-1 gap-3 mb-10 relative">
              <input
                className="text-white border-2 border-gray-300 p-2 focus:outline-none rounded-3xl bg-transparent placeholder-white backdrop-filter backdrop-blur-md pl-4"
                placeholder="your name"
              />
              <input
                className="text-white border-2 border-gray-300 p-2 focus:outline-none rounded-3xl bg-transparent placeholder-white backdrop-filter backdrop-blur-md pl-4"
                placeholder="your email"
              />
              <button className="bg-white py-2 px-3 font-semibold rounded-3xl whitespace-nowrap">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
