import { getGroovefam } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const backgroundColors = [
  "bg-grooveBrandColor1",
  "bg-grooveBrandColor2",
  "bg-grooveBrandColor3",
  "bg-grooveBrandColor4",
];

export default async function Groovefam() {
  const groovefam = await getGroovefam();
  return (
    <div>
      <section>
        <div className="flex flex-col pb-8 md:pb-12 mt-2 sm:mt-8">
          <p
            className="text-[40px] sm:text-7xl mb-4 font-shrikhand"
            style={{ textShadow: "1px 1px 3px #3a2a3c" }}
          >
            groovefam
          </p>
          <p className="text-2xl sm:text-3xl">meet our team</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {groovefam.map((member: any, index: number) => {
            return (
              <div
                key={member._id}
                className={`p-4 rounded-lg shadow-md border-groove1 border`}
              >
                <div className="relative h-[300px] w-[300px] mx-auto mb-4">
                  <Image
                    fill={true}
                    className="object-center object-cover rounded-lg"
                    src={urlForImage(member?.image) ?? ""}
                    alt="logo"
                    sizes="100%"
                  />
                </div>
                <div className="text-lg mb-4">{member.name}</div>
                <PortableText value={member.bio} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
