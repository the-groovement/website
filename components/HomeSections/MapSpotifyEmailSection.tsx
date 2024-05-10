export default function MapSpotifyEmailSection() {
  return (
    <section>
      <div className="pb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col">
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
