import { getVenueBySlug } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function GroovecalVenue({
  params,
}: {
  params: { id: string };
}) {
  const venue = await getVenueBySlug(params.id);

  return (
    <section>
      <div className="flex flex-col mt-12">
        <div className="flex flex-col">
          <p className="text-4xl md:text-5xl lg:text-6xl mb-2 font-bold">
            {venue.name}
          </p>
          <a
            href={venue.googlemaps}
            target="_blank"
            className="text-2xl md:text-3xl lg:text-4xl mb-8 font-bold hover:text-blue-400 underline"
          >
            {venue.address}
          </a>
        </div>
        <div className="flex flex-col lg:w-1/2 max-lg:w-full">
          <div
            className="flex text-lg rounded-2xl relative mb-4 lg:mb-8"
            style={{
              aspectRatio: 16 / 9,
            }}
          >
            <Image
              fill={true}
              className="object-center object-cover rounded-2xl"
              src={urlForImage(venue.images?.[0]) ?? ""}
              alt={"home"}
              sizes="100%"
            />
          </div>
        </div>
        <div className="mb-8">
          <PortableText value={venue.intro} />
        </div>
        <div className="flex flex-col mb-8 gap-2">
          <p className="text-2xl font-semibold">history</p>
          <div>
            <PortableText value={venue.history} />
          </div>
        </div>
        <div className="flex flex-col mb-8 gap-2">
          <p className="text-2xl font-semibold">on-site info</p>
          <div>This is on-site info</div>
        </div>
      </div>
    </section>
  );
}
