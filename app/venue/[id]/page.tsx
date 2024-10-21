import { getVenueBySlug } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import {
  Check,
  CreditCard,
  Martini,
  PersonStanding,
  ScanIcon,
  ShieldCheck,
  ShirtIcon,
  Utensils,
  Wifi,
  XIcon,
} from "lucide-react";
import Image from "next/image";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function GroovecalVenue({
  params,
}: {
  params: { id: string };
}) {
  const venue = await getVenueBySlug(params.id);
  return (
    <section>
      <div className="flex flex-col mt-12">
        <div className="flex flex-col mt-8">
          <p className="text-4xl md:text-5xl lg:text-6xl mb-2 font-bold">
            {venue.name}
          </p>
          <a
            href={venue.googlemaps}
            target="_blank"
            className="w-fit text-2xl md:text-3xl lg:text-4xl mb-8 font-bold hover:text-grooveHover underline"
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
        <div className="flex flex-col mb-8 gap-2">
          <p className="text-2xl font-semibold mb-2">quick facts</p>
          <div className="grid grid-cols-2 gap-8">
            {venue.capacity && (
              <div className="flex flex-row items-center gap-2">
                <PersonStanding />
                <div>{venue.capacity + " Person Capacity"}</div>
              </div>
            )}
            <div className="flex flex-row items-center gap-2">
              {venue.security_check ? <ShieldCheck /> : <XIcon />}
              <div>
                {venue.security_check ? "Security Check" : "No Security Check"}
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              {venue.credit_cards ? <CreditCard /> : <XIcon />}
              <div>
                {venue.credit_cards
                  ? "Accepts Credit Cards"
                  : "Does Not Accept Credit Cards"}
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              {venue.contactless_payment ? <ScanIcon /> : <XIcon />}
              <div>
                {venue.contactless_payment
                  ? "Accepts Contactless Payment"
                  : "Does Not Accept Contactless Payment"}
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              {venue.coat_check ? <ShirtIcon /> : <XIcon />}
              <div>{venue.coat_check ? "Coat Check" : "No Coat Check"}</div>
            </div>
            <div className="flex flex-row items-center gap-2">
              {venue.wifi ? <Wifi /> : <XIcon />}
              <div>{venue.wifi ? "Wifi" : "No Wifi"}</div>
            </div>
            <div className="flex flex-row items-center gap-2">
              {venue.bar ? <Martini /> : <XIcon />}
              <div>{venue.bar ? "Full Bar" : "No Full Bar"}</div>
            </div>
            <div className="flex flex-row items-center gap-2">
              {venue.food ? <Utensils /> : <XIcon />}
              <div>{venue.food ? "Food" : "No Food"}</div>
            </div>
            <div className="flex flex-row items-center gap-2">
              {venue.twenty_one ? <Check /> : <XIcon />}
              <div>{venue.twenty_one ? "21+" : "Not 21+"}</div>
            </div>
          </div>
        </div>
        {venue.intro && (
          <div className="flex flex-col mb-8 gap-2">
            <p className="text-2xl font-semibold">intro</p>
            <div>
              <PortableText value={venue.intro} />
            </div>
          </div>
        )}
        {venue.history && (
          <div className="flex flex-col mb-8 gap-2">
            <p className="text-2xl font-semibold">history</p>
            <div>
              <PortableText value={venue.history} />
            </div>
          </div>
        )}
        {venue.map_recs &&
          venue.map_recs.length > 0 &&
          venue.map_recs[0].name && (
            <div className="flex flex-col mb-8 gap-2">
              <p className="text-2xl font-semibold mb-2">map recs</p>
              <div>
                {venue.map_recs.map((rec: any) => (
                  <div key={rec._key} className="mb-4">
                    <div className="text-lg font-medium">{rec?.name}</div>
                    <a
                      href={rec?.googlemaps}
                      target="_blank"
                      className=" hover:text-grooveHover underline"
                    >
                      {rec?.address}
                    </a>
                    <div className="mt-2">
                      <PortableText value={rec?.info} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </section>
  );
}
