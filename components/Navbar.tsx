import Link from "next/link";
import Image from "next/image";
import MailIcon from "./Icons/MailIcon";
import CalendarIcon from "./Icons/CalendarIcon";
import SearchIcon from "./Icons/SearchIcon";
import LocationIcon from "./Icons/LocationIcon";
import MusicIcon from "./Icons/MusicIcon";

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
  const getIconComponent = (navTitle: string) => {
    switch (navTitle) {
      case "groovecal":
        return <CalendarIcon />;
      case "grooveguide":
        return <SearchIcon />;
      case "groovemap":
        return <LocationIcon />;
      case "about":
        return <MusicIcon />;
      default:
        return null; // Return null or a default icon if no matching case is found
    }
  };
  return (
    <div className="bg-groove1 fixed top-0 left-0 right-0 z-50">
      <nav className="bg-groove1 max-w-screen-xl mx-auto z-20 top-0 left-0 right-0 max-lg:hidden justify-between flex flex-row items-center px-4">
        <div className="flex flex-wrap py-3 gap-8">
          <Link href="/" className="flex">
            <div className="relative h-[50px] w-[225px]">
              <Image
                fill={true}
                className="object-center object-cover transition-transform hover:scale-95 hover:translate-y-1"
                src="/logo.png"
                alt="logo"
                sizes="100%"
              />
            </div>
          </Link>
          {NAV_ITEMS.map((navItem, index) =>
            navItem.navTitle === "groovemap" ? (
              <a
                href={navItem.link}
                className="flex items-center gap-2"
                key={index}
                target="_blank"
              >
                {getIconComponent(navItem.navTitle)}
                <p className="self-center text-lg whitespace-nowrap text-white">
                  {navItem.navTitle}
                </p>
              </a>
            ) : (
              <Link
                href={navItem.link}
                className="flex items-center gap-2"
                key={index}
              >
                {getIconComponent(navItem.navTitle)}
                <p className="self-center text-lg whitespace-nowrap text-white">
                  {navItem.navTitle}
                </p>
              </Link>
            )
          )}
        </div>
        <Link href="/signup">
          <div className="bg-white py-3 px-6 font-semibold rounded-2xl whitespace-nowrap">
            join us
          </div>
        </Link>
      </nav>
    </div>
  );
}
