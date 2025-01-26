"use client";

import Link from "next/link";
import Image from "next/image";
import MailIcon from "./Icons/MailIcon";
import CalendarIcon from "./Icons/CalendarIcon";
import SearchIcon from "./Icons/SearchIcon";
import LocationIcon from "./Icons/LocationIcon";
import MusicIcon from "./Icons/MusicIcon";
import {
  BookOpenText,
  HeartIcon,
  MessageCircleQuestionIcon,
  MoreHorizontalIcon,
  Music,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  {
    navTitle: "shows",
    link: "/shows",
  },
  {
    navTitle: "guide",
    link: "/grooveguide",
  },
  {
    navTitle: "map",
    link: "https://www.google.com/maps/d/u/0/viewer?mid=1jLgTu7q-gl39b-cAHvxcbHOYREPPxus&ll=40.72895644211003%2C-73.97565958737697&z=13",
  },
];

export default function Navbar() {
  const getIconComponent = (navTitle: string) => {
    switch (navTitle) {
      case "shows":
        return <CalendarIcon />;
      case "guide":
        return <BookOpenText size={24} className="text-white" />;
      case "map":
        return <LocationIcon />;
      case "about":
        return <MusicIcon />;
      default:
        return null; // Return null or a default icon if no matching case is found
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-groove1 fixed top-0 left-0 right-0 z-50">
      <nav className="bg-groove1 max-w-screen-xl mx-auto z-20 top-0 left-0 right-0 max-lg:hidden justify-between flex flex-row items-center px-4">
        <div className="flex flex-wrap py-3 gap-8 items-center">
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
            navItem.navTitle === "map" ? (
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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2"
            >
              <MoreHorizontalIcon className="text-white" />
              <p className="self-center text-lg whitespace-nowrap text-white">
                more
              </p>
            </button>

            {isOpen && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex flex-row items-center gap-2">
                      <Music />
                      about
                    </button>
                  </Link>
                  <Link href="/faqs" onClick={() => setIsOpen(false)}>
                    <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex flex-row items-center gap-2">
                      <MessageCircleQuestionIcon />
                      FAQs
                    </button>
                  </Link>
                  <Link href="/groovefam" onClick={() => setIsOpen(false)}>
                    <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex flex-row items-center gap-2">
                      <HeartIcon />
                      our team
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <Link href="/signup">
          <button className="bg-white rounded-3xl h-12 w-32 border border-groove1 drop-shadow-[6px_6px_0px_rgba(58,42,60,1)] whitespace-nowrap hover:font-semibold">
            join us
          </button>
        </Link>
      </nav>
    </div>
  );
}
