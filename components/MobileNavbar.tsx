"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuIcon from "./Icons/MenuIcon";
import CloseIcon from "./Icons/CloseIcon";
import CalendarIcon from "./Icons/CalendarIcon";
import LocationIcon from "./Icons/LocationIcon";
import MusicIcon from "./Icons/MusicIcon";
import {
  BookOpenText,
  HeartIcon,
  MessageCircleQuestionIcon,
} from "lucide-react";

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
  {
    navTitle: "about",
    link: "/about",
  },
  {
    navTitle: "FAQs",
    link: "/faqs",
  },
  {
    navTitle: "our team",
    link: "/groovefam",
  },
  {
    navTitle: "join us",
    link: "/signup",
  },
];

export default function MobileNavbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };
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
      case "FAQs":
        return <MessageCircleQuestionIcon />;
      case "our team":
        return <HeartIcon />;
      case "join us":
        return <MusicIcon />;
      default:
        return null; // Return null or a default icon if no matching case is found
    }
  };
  return (
    <div className="bg-groove1 fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial="closed"
        className="w-full z-20 top-0 left-0 lg:hidden px-4"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        <div className="flex flex-wrap py-3 items-center justify-between">
          <motion.h1 variants={hideNavItemsVariant}>
            <div className="relative h-[50px] w-[225px]">
              <Link href="/">
                <Image
                  fill={true}
                  className="object-center object-cover"
                  src="/logo.png"
                  alt="logo"
                  sizes="100%"
                />
              </Link>
            </div>
          </motion.h1>

          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
            className="hover:cursor-pointer font-semibold"
          >
            <MenuIcon />
          </motion.div>
          <motion.div
            variants={mobileMenuVariant}
            className="w-full bg-groove1 items-center h-[100vh] top-0 left-0 absolute z-40 flex flex-col p-4"
            style={{
              backgroundColor: "#3a2a3c",
              height: "100vh",
            }}
          >
            <motion.button
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}
              className="text-white focus:ring-0 flex flex-row justify-between"
              style={{ width: "100%" }}
            >
              <div className="relative h-[50px] w-[225px]">
                <Image
                  fill={true}
                  className="object-center object-cover"
                  src="/logo.png"
                  alt="logo"
                  sizes="100%"
                />
              </div>
              <CloseIcon />
            </motion.button>
            <motion.ul
              variants={ulVariant}
              style={{ marginTop: "auto", marginBottom: "auto", width: "100%" }}
            >
              {NAV_ITEMS.map((navItem, index) => (
                <motion.li whileTap={{ scale: 0.95 }} key={index}>
                  <motion.div
                    variants={liVariant}
                    className="text-white text-left font-semibold text-3xl"
                    style={{ marginBottom: "32px" }}
                  >
                    {navItem.navTitle === "map" ? (
                      <a
                        className="flex items-center gap-2"
                        href={navItem.link}
                        onClick={() => setMobileNavOpen(false)}
                        target="_blank"
                      >
                        {getIconComponent(navItem.navTitle)}
                        {navItem.navTitle}
                      </a>
                    ) : (
                      <Link
                        className="flex items-center gap-2"
                        href={navItem.link}
                        onClick={() => setMobileNavOpen(false)}
                      >
                        {getIconComponent(navItem.navTitle)}
                        {navItem.navTitle}
                      </Link>
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              variants={fadeInVariant}
              className="mt-auto"
              style={{ marginTop: "auto", width: "100%" }}
            >
              <h5 className="text-white text-left text-sm">
                boogie@thegroovement.co
              </h5>
            </motion.div>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
