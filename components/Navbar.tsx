import Link from "next/link";

const NAV_ITEMS = [
  {
    navTitle: "groovecal",
  },
  {
    navTitle: "grooveguide",
  },
  {
    navTitle: "groovemap",
  },
  {
    navTitle: "groovemail",
  },
];

export default function Navbar() {
  return (
    <nav className="w-full z-20 top-0 left-0 max-sm:hidden">
      <div className="flex flex-wrap py-4 gap-8">
        <Link href="/" className="flex">
          <p className="self-center text-3xl font-bold whitespace-nowrap mr-6 mb-2">
            the groovement
          </p>
        </Link>
        {NAV_ITEMS.map((navItem, index) => (
          <Link href="/" className="flex" key={index}>
            <p className="self-center text-md whitespace-nowrap">
              {navItem.navTitle}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
