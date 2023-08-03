"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <motion.nav
      initial="closed"
      className="w-full z-20 top-0 left-0 sm:hidden"
      animate={mobileNavOpen ? "opened" : "closed"}
    >
      <div className="flex flex-wrap py-4 items-center justify-between">
        <motion.h1
          variants={hideNavItemsVariant}
          className="self-center text-2xl font-bold whitespace-nowrap mr-6 mb-1"
        >
          the groovement
        </motion.h1>
        <motion.div
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
          className="hover:cursor-pointer"
        >
          Menu
        </motion.div>
        <motion.div
          variants={mobileMenuVariant}
          className="w-full bg-black items-center h-[100vh] top-0 left-0 absolute z-40 flex flex-col p-4"
          style={{
            backgroundColor: "black",
            height: "100vh",
          }}
        >
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
            className="text-white"
            style={{ marginLeft: "auto" }}
          >
            Close
          </motion.button>
          <motion.ul
            variants={ulVariant}
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            {NAV_ITEMS.map((navItem, index) => (
              <motion.li whileTap={{ scale: 0.95 }} key={index}>
                <motion.div
                  variants={liVariant}
                  className="text-white text-center font-semibold text-3xl"
                  style={{ marginBottom: "24px" }}
                >
                  <Link href={"/test"}>{navItem.navTitle}</Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            variants={fadeInVariant}
            className="mt-auto"
            style={{ marginTop: "auto" }}
          >
            <h5 className="text-white text-center text-sm">+111 111 1111</h5>
            <h5 className="text-white text-center text-sm">
              boogie@thegroovement.co
            </h5>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
