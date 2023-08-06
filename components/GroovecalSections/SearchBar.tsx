export default function SearchBar() {
  return (
    <section>
      <div className="flex flex-col mt-12 mb-20">
        <div className="mb-12">
          <p className="text-5xl sm:text-7xl mb-2">explore. discover.</p>
          <p className="font-semibold text-5xl sm:text-7xl">groovecal.</p>
        </div>
        <div className="w-full bg-white h-4 rounded-3xl py-8 shadow-md items-center flex max-lg:hidden mt-8">
          <input
            className="py-3 rounded-tl-3xl rounded-bl-3xl w-1/3 px-6 focus:outline-none text-gray-500 placeholder-gray-500"
            placeholder="search by name or type"
          />
          <input
            className="px-6 border-l py-3 text-gray-500  w-1/5 focus:outline-none"
            type="date"
          />
          <input
            className="px-6 border-l py-3 text-gray-500  w-1/5 placeholder-gray-500 focus:outline-none"
            placeholder="location"
          />
          <input
            className="px-6 border-l py-3 text-gray-500  flex-1 placeholder-gray-500 focus:outline-none"
            placeholder="type of event"
          />
          <button className="bg-green-300 py-3 px-4 rounded-3xl mr-6">
            search
          </button>
        </div>
        <div className="w-full h-32 bg-white rounded-3xl shadow-md flex flex-col justify-between px-2 mt-8 lg:hidden">
          <div className="h-1/2 flex flex-row py-3">
            <input
              className="py-3 rounded-tl-3xl px-4 focus:outline-none text-gray-500 placeholder-gray-500 w-1/2"
              placeholder="search by name or type"
            />
            <input
              className="px-6 border-l py-3 text-gray-500 w-1/2 rounded-tr-3xl "
              type="date"
            />
          </div>
          <div className="h-1/2 flex flex-row py-3 border-t">
            <input
              className="py-3 rounded-bl-3xl px-4 focus:outline-none text-gray-500 placeholder-gray-500 w-[45%]"
              placeholder="location"
            />
            <input
              className="py-3 px-6 focus:outline-none border-l text-gray-500 placeholder-gray-500 w-[45%]"
              placeholder="type of event"
            />
            <div className="py-3 bg-white rounded-br-3xl items-center flex flex-1">
              <button className="bg-green-300 py-3 px-4 mx-5 rounded-3xl">
                search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
