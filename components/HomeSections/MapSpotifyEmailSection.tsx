export default function MapSpotifyEmailSection() {
  return (
    <section>
      <div className="flex flex-row gap-8 py-12">
        <div
          className="flex bg-cover bg-center rounded-2xl w-1/2 bg-white border border-black shadow drop-shadow-[-8px_8px_0px_rgba(0,0,0,1)]"
          style={{
            backgroundImage:
              "url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/07/11/brooklyn-manhattan-bridge.jpg')",
          }}
        >
          <div className="ml-auto">
            <button className="text-2xl font-semibold bg-white py-4 px-6 rounded-bl-2xl">
              explore the groovemap <span className="font-light">→</span>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-8">
          <iframe
            style={{ borderRadius: "16px" }}
            src="https://open.spotify.com/embed/playlist/7qW5qseZ006ocSKYwiLF9P?utm_source=generator&theme=0"
            width="100%"
            height="352px"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <div
            className="flex flex-col h-[176px] rounded-2xl bg-cover bg-center bg-white border border-black shadow drop-shadow-[-8px_8px_0px_rgba(0,0,0,1)]"
            style={{
              backgroundImage:
                "url('https://journalhotels.com/wp-content/uploads/2016/09/765341-disc-dj-mixer-music-record-retro-sound-vinyl.jpg')",
            }}
          >
            <div className="mx-auto mt-4">
              <p className="text-white text-3xl font-semibold">join us</p>
            </div>
            <div className="flex flex-row items-center justify-center flex-1 gap-3 mb-10">
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
