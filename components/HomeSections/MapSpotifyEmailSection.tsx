import { getPlaylist } from "@/lib/sanity/client";

export default async function MapSpotifyEmailSection() {
  const playlistUrl = await getPlaylist();
  const fallbackUrl =
    playlistUrl?.spotify_playlist_url === undefined
      ? "https://open.spotify.com/embed/playlist/7qW5qseZ006ocSKYwiLF9P"
      : playlistUrl?.spotify_playlist_url;
  return (
    <section>
      <div className="pb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col">
            <iframe
              style={{ borderRadius: "16px" }}
              src={`${fallbackUrl}?utm_source=generator&theme=0`}
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

export const dynamic = "force-dynamic";
