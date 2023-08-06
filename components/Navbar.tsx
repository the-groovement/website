import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  {
    navTitle: "groovecal",
    link: "/groovecal",
  },
  {
    navTitle: "grooveguide",
    link: "/grooveguide",
  },
  {
    navTitle: "groovemap",
    link: "/groovemap",
  },
  {
    navTitle: "groovemail",
    link: "/groovemail",
  },
];

export default function Navbar() {
  return (
    <nav className="w-full z-20 top-0 left-0 max-sm:hidden">
      <div className="flex flex-wrap py-4 gap-8">
        <Link href="/" className="flex">
          {/* <p className="self-center text-3xl font-bold whitespace-nowrap mr-6 mb-2">
            the groovement
          </p> */}
          <div className="relative h-[54px] w-[244px]">
            <Image
              fill={true}
              className="object-center object-cover"
              src="/logo.png"
              alt="logo"
            />
          </div>
          {/* <Image
            width={280}
            height={280}
            src="/logo.png"
            alt="logo"
            className="mt-1"
          /> */}
        </Link>
        {NAV_ITEMS.map((navItem, index) => (
          <Link href={navItem.link} className="flex" key={index}>
            <p className="self-center text-lg whitespace-nowrap font-semibold">
              {navItem.navTitle}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
