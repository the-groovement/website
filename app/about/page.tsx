import { getAboutPage } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function About() {
  const aboutPageData = await getAboutPage();
  return (
    <section>
      <div className="mb-12">
        <p className="text-[40px] sm:text-7xl mb-4 font-shrikhand mt-2 sm:mt-8">
          about
        </p>
        <div className="flex flex-col gap-8 mb-16">
          <div>
            <p className="text-3xl sm:text-4xl font-bold mb-4">our mission</p>
            <div className="text-xl sm:text-2xl">
              <PortableText value={aboutPageData?.mission} />
            </div>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold mb-4">our values</p>
            <div className="flex flex-col md:flex-row justify-between max-md:gap-4">
              <div className="flex flex-row items-center gap-4">
                <Image
                  width={50}
                  height={50}
                  src="/groovestamp.png"
                  alt="logo"
                />
                <p className="text-xl sm:text-2xl">
                  {aboutPageData?.values?.[0]}
                </p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    width={50}
                    height={50}
                    src="/groovestamp.png"
                    alt="logo"
                  />
                  <div className="text-xl sm:text-2xl">
                    {aboutPageData?.values?.[1]}
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    width={50}
                    height={50}
                    src="/groovestamp.png"
                    alt="logo"
                  />
                  <div className="text-xl sm:text-2xl">
                    {aboutPageData?.values?.[2]}
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    width={50}
                    height={50}
                    src="/groovestamp.png"
                    alt="logo"
                  />
                  <div className="text-xl sm:text-2xl">
                    {aboutPageData?.values?.[3]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold mb-4">origin story</p>
            <div className="text-xl sm:text-2xl">
              <PortableText value={aboutPageData?.originStory} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
