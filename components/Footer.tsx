import Link from "next/link";
import InstagramIcon from "./Icons/InstagramIcon";
import MailIcon from "./Icons/MailIcon";
import SpotifyIcon from "./Icons/SpotifyIcon";
import Image from "next/image";

const NAV_ITEMS = [
  {
    navTitle: "groovecal",
    url: "/groovecal",
  },
  {
    navTitle: "grooveguide",
    url: "/grooveguide",
  },
  {
    navTitle: "groovemap",
    url: "https://www.google.com/maps/d/viewer?mid=1ZcNuDKiNxyAdpnEy_i3IqRIbLCYEC7M8&ll=40.7290605124509%2C-73.92850645&z=11",
  },
  {
    navTitle: "groovemail",
    url: "mailto:boogie@thegroovement.co",
  },
];

const OTHER = [
  {
    navTitle: "partner with us",
    url: "/",
  },
  {
    navTitle: "join the groovefam",
    url: "/",
  },
  {
    navTitle: "media requests",
    url: "/",
  },
];

export default function Footer() {
  return (
    <div className="bg-groove1 h-[640px] md:h-[564px] pt-12 pb-16">
      <div className="max-w-screen-xl mx-auto px-4 justify-between h-full flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/2">
            <div className="relative h-[54px] w-[244px] mb-8">
              <Image
                fill={true}
                className="object-center object-cover"
                src="/logo.png"
                alt="logo"
              />
            </div>
            {/* <p className="text-white mb-12 max-w-md md:max-w-xs lg:max-w-md">
              your guide to the best concerts and venues across New York City
              and Brooklyn.
            </p> */}
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
              <a href="mailto:boogie@thegroovement.co">
                <MailIcon />
              </a>
            </div>
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
            <Link href="/">
              <p className="text-white text-sm">groovecode </p>
            </Link>
            <Link href="/">
              <p className="text-white text-sm">•</p>
            </Link>
            <Link href="/">
              <p className="text-white text-sm">privacy</p>
            </Link>
            <p className="text-white text-sm">•</p>
            <Link href="/">
              <p className="text-white text-sm">terms</p>
            </Link>
          </div>
          <p className="pt-2 text-zinc-400 border-t border-zinc-600 text-sm">
            © the groovement, LLC. All rights reserved 2023
          </p>
        </div>
      </div>
    </div>
  );
}
