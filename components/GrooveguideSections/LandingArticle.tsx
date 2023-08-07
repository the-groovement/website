import Image from "next/image";

export default function LandingArticle() {
  return (
    <section>
      <div className="flex flex-col pb-12 mt-8">
        {/* <p className="text-5xl sm:text-7xl mb-2">news. interviews.</p> */}
        <p className="font-semibold text-5xl sm:text-7xl mb-6">grooveguide</p>
        <p className="text-2xl sm:text-3xl mb-12">
          the latest news, interviews, & insights.
        </p>
        <div
          className="relative w-full"
          style={{
            aspectRatio: 16 / 9,
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
    </section>
  );
}
