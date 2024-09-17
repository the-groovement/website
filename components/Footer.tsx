import Link from "next/link";
import InstagramIcon from "./Icons/InstagramIcon";
import MailIcon from "./Icons/MailIcon";
import SpotifyIcon from "./Icons/SpotifyIcon";
import Image from "next/image";
import TiktokIcon from "./Icons/TikTokIcon";

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
    url: "https://www.google.com/maps/d/viewer?mid=1ZcNuDKiNxyAdpnEy_i3IqRIbLCYEC7M8&ll=40.7290605124509%2C-73.92850645&z=11",
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
            © the groovement, LLC. All rights reserved 2023
          </p>
        </div>
      </div>
    </div>
  );
}
