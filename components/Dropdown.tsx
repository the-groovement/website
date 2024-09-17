"use client";

import { PortableText } from "@portabletext/react";
import { useState } from "react";

interface DropdownProps {
  faqs: any[];
}

export default function Dropdown({ faqs }: DropdownProps) {
  const [dropdownTitle, setDropdownTitle] = useState("");
  return (
    <>
      {faqs.map((item: any, index) => (
        <div key={index} className={`bg-groove2 mx-auto flex flex-col`}>
          <div
            className={`bg-groove2 flex flex-col py-6 flex-grow border-t border-groove1 hover:font-semibold hover:cursor-pointer text-seiblue ${
              index === faqs.length - 1 && "border-b"
            }`}
            onClick={() =>
              setDropdownTitle(dropdownTitle !== item.title ? item.title : "")
            }
          >
            <p
              className={`${
                dropdownTitle === item.title && "font-semibold"
              } text-xl sm:text-2xl`}
            >
              {item.title}
            </p>
            <div
              style={{
                maxHeight: dropdownTitle === item.title ? "1000px" : "0",
                opacity: dropdownTitle === item.title ? 1 : 0,
                overflow: "hidden",
                transition:
                  "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
                display: "block",
                fontWeight: "normal",
              }}
            >
              <PortableText value={item.answer} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
