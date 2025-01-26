"use client";
import Link from "next/link";
import InstagramIcon from "./Icons/InstagramIcon";
import MailIcon from "./Icons/MailIcon";
import SpotifyIcon from "./Icons/SpotifyIcon";
import Image from "next/image";
import TiktokIcon from "./Icons/TikTokIcon";
import { FormEvent, useState } from "react";
import jsonp from "jsonp";

const NAV_ITEMS = [
  {
    navTitle: "shows",
    url: "/shows",
  },
  {
    navTitle: "guide",
    url: "/grooveguide",
  },
  {
    navTitle: "map",
    url: "https://www.google.com/maps/d/u/0/viewer?mid=1jLgTu7q-gl39b-cAHvxcbHOYREPPxus&ll=40.72895644211003%2C-73.97565958737697&z=13",
  },
  {
    navTitle: "newsletter",
    url: "/signup",
  },
  {
    navTitle: "groovefam",
    url: "/groovefam",
  },
  {
    navTitle: "about",
    url: "/about",
  },
];

const OTHER = [
  {
    navTitle: "partner with us",
    url: "https://forms.gle/8uzVJFMc46xz4DH96",
  },
  {
    navTitle: "join our team",
    url: "mailto:boogie@thegroovement.co",
  },
  {
    navTitle: "media requests",
    url: "/",
  },
];

export default function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const url =
      "https://nyc.us5.list-manage.com/subscribe/post?u=0741a65a0158b3ad4a80a59d6&amp;id=a1bcf057b6&amp;f_id=00effeedf0";

    try {
      jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (err, data) => {
        if (err) {
          setErrorMessage("Something went wrong. Please try again.");
          return;
        }

        const { msg, result } = data;

        if (result === "success") {
          setIsSubscribed(true);
          setErrorMessage("");
        } else {
          // The message might include detailed error info from Mailchimp
          setErrorMessage(
            msg || "Failed to subscribe. Please check your email."
          );
        }
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="bg-groove1 h-[680px] md:h-[564px] pt-12 pb-16">
      <div className="max-w-screen-xl mx-auto px-4 justify-between h-full flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/2">
            <div className="relative h-[54px] w-[244px] mb-8">
              <Image
                fill={true}
                className="object-center object-cover"
                src="/logo.png"
                alt="logo"
                sizes="100%"
              />
            </div>
            <div className="gap-8 flex flex-row">
              <a href="https://instagram.com/thegroovement.nyc" target="_blank">
                <InstagramIcon />
              </a>

              <a
                href="https://open.spotify.com/user/ckqwqyjwjdcd6upfkv2puguvw"
                target="_blank"
              >
                <SpotifyIcon />
              </a>
              <Link href="/signup">
                <MailIcon />
              </Link>
              <a href="https://www.tiktok.com/@thegroovement" target="_blank">
                <TiktokIcon />
              </a>
            </div>
            <form onSubmit={onSubmit} className="mt-4 flex flex-row gap-2">
              <input
                type="email"
                name="email"
                placeholder="enter email"
                className="p-2 border border-gray-300 rounded-2xl"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-white rounded-2xl h-12 w-32 border border-groove1 drop-shadow-[6px_6px_0px_rgba(58,42,60,1)] whitespace-nowrap hover:font-semibold bg-grooveHover"
              >
                {isLoading ? "Subscribing..." : "join newsletter"}
              </button>
            </form>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            {isSubscribed && (
              <p className="text-green-500 mt-2">Subscribed successfully!</p>
            )}
          </div>
          <div className="flex flex-row md:w-1/2 justify-between max-md:my-12">
            <div className="flex flex-col gap-6 w-1/2">
              <p className="text-white text-2xl font-semibold">discover</p>
              {NAV_ITEMS.map((item, index) => (
                <Link href={item.url}>
                  <p className="text-white text-xl" key={index}>
                    {item.navTitle}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-6 w-1/2">
              <p className="text-white text-2xl font-semibold">get @ us</p>
              {OTHER.map((item, index) => (
                <Link href={item.url}>
                  <p className="text-white text-xl" key={index}>
                    {item.navTitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="ml-auto mb-2 flex flex-row gap-2">
            <Link href="/groovecode">
              <p className="text-white text-sm">groovecode </p>
            </Link>
            <p className="text-white text-sm">•</p>
            <Link href="/terms-conditions">
              <p className="text-white text-sm">terms & conditions</p>
            </Link>
          </div>
          <p className="pt-2 text-zinc-400 border-t border-zinc-600 text-sm">
            © the groovement, LLC. All rights reserved 2025
          </p>
        </div>
      </div>
    </div>
  );
}
