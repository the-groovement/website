export default function TopOfPageSection() {
  return (
    <section>
      <div className="flex flex-col h-[calc(100vh-76px)] pb-12">
        <p className="text-8xl italic font-semibold mt-8 gradient-text pb-4">
          what's groovin'?
        </p>
        <div className="flex flex-row h-full">
          <div className="flex bg-blue-300 text-lg rounded-2xl flex-grow mt-14 mr-8"></div>
          <div className="flex flex-col w-72 justify-between">
            <div className=" bg-red-300 text-lg rounded-2xl h-72"></div>
            <div className=" bg-green-300 text-lg rounded-2xl flex-grow mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
