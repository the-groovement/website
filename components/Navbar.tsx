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
    link: "https://www.google.com/maps/d/viewer?mid=1ZcNuDKiNxyAdpnEy_i3IqRIbLCYEC7M8&ll=40.7290605124509%2C-73.92850645&z=11",
  },
  {
    navTitle: "about",
    link: "/about",
  },
];

export default function Navbar() {
  return (
    <nav className="w-full z-20 top-0 left-0 max-lg:hidden justify-between flex flex-row items-center">
      <div className="flex flex-wrap py-4 gap-8">
        <Link href="/" className="flex">
          <div className="relative h-[54px] w-[244px]">
            <Image
              fill={true}
              className="object-center object-cover transition-transform hover:scale-95 hover:translate-y-1"
              src="/logo.png"
              alt="logo"
            />
          </div>
        </Link>
        {NAV_ITEMS.map((navItem, index) => (
          <Link href={navItem.link} className="flex" key={index}>
            <p className="self-center text-lg whitespace-nowrap hover:font-semibold">
              {navItem.navTitle}
            </p>
          </Link>
        ))}
      </div>
      <Link href="/signup">
        <button className="bg-groove3 rounded-3xl h-12 w-32 border border-groove1 drop-shadow-[6px_6px_0px_rgba(58,42,60,1)] whitespace-nowrap hover:font-semibold transition-transform hover:scale-95 hover:translate-y-1">
          join us
        </button>
      </Link>
    </nav>
  );
}
