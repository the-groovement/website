import Link from "next/link";

export default function TopOfPageSection() {
  return (
    <section>
      <div className="flex flex-col h-[calc(100vh-76px)] pb-12">
        <div className="mt-2">
          <p className="text-8xl italic font-semibold gradient-text pb-2 inline pr-1">
            what's groovin'?
          </p>
        </div>

        <div className="flex flex-row h-full">
          <div
            className="flex bg-cover bg-center text-lg rounded-2xl flex-grow mt-16 mr-8 p-4"
            style={{
              backgroundImage:
                "url('https://www.thegroovement.nyc/wp-content/uploads/2023/07/sunflower-bean-featured-photo-1024x657.jpg')",
            }}
          >
            <div className="mt-auto max-w-sm">
              <p className="bg-white p-4 text-3xl md:text-4xl rounded-2xl">
                Sunflower Bean debuts in Brooklyn, New York
              </p>
            </div>
          </div>
          <div className="flex flex-col w-72 justify-between">
            <div className="flex flex-col bg-cover bg-center rounded-2xl bg-gradient-to-t from-red-300  via-yellow-100 to-yellow-200 px-6 justify-between h-64">
              <div className="mt-8 justify-between">
                <p className="text-md border inline border-black p-2 rounded-2xl">
                  • top picks
                </p>
              </div>
              <div>
                <p className="text-2xl line-clamp-3 max-w-[80%]">
                  The Revivalists, Band of Horses, The Heavy Heavy
                </p>
              </div>
              <div className="mb-4 ml-auto whitespace-nowrap">
                <Link href="/" className="rounded-3xl underline text-sm">
                  see more
                </Link>
              </div>
            </div>
            <div
              className="flex bg-cover bg-center rounded-2xl flex-grow mt-8"
              style={{
                backgroundImage:
                  "url('https://www.thegroovement.nyc/wp-content/uploads/2022/12/Sultan-Room.jpg')",
              }}
            >
              <div className="mt-auto mb-4 mx-auto">
                <button className="bg-white py-4 px-6 font-semibold rounded-3xl whitespace-nowrap">
                  more venues <span className="font-light">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
