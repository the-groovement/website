import InstagramIcon from "./Icons/InstagramIcon";
import MailIcon from "./Icons/MailIcon";
import SpotifyIcon from "./Icons/SpotifyIcon";

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

const OTHER = [
  {
    navTitle: "partner with us",
  },
  {
    navTitle: "work with us",
  },
  {
    navTitle: "media requests",
  },
];

export default function Footer() {
  return (
    <div className="bg-black h=[640px] md:h-[564px] pt-12 pb-16">
      <div className="max-w-screen-xl mx-auto px-4 justify-between h-full flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/2">
            <p className="text-white text-3xl font-bold whitespace-nowrap mb-4">
              the groovement
            </p>
            <p className="text-white mb-12 max-w-md md:max-w-xs lg:max-w-md">
              your guide to the best concerts and venues across New York City
              and Brooklyn.
            </p>
            <div className="gap-8 flex flex-row">
              <InstagramIcon />
              <SpotifyIcon />
              <MailIcon />
            </div>
          </div>
          <div className="flex flex-row md:w-1/2 justify-between max-md:my-12">
            <div className="flex flex-col gap-6 w-1/2">
              <p className="text-white text-2xl font-semibold">discover</p>
              {NAV_ITEMS.map((item, index) => (
                <p className="text-white text-xl" key={index}>
                  {item.navTitle}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-6 w-1/2">
              <p className="text-white text-2xl font-semibold">get @ us</p>
              {OTHER.map((item, index) => (
                <p className="text-white text-xl" key={index}>
                  {item.navTitle}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="ml-auto mb-2 flex flex-row gap-2">
            <p className="text-white text-sm">groovecode </p>
            <p className="text-white text-sm">•</p>
            <p className="text-white text-sm">privacy</p>
            <p className="text-white text-sm">•</p>
            <p className="text-white text-sm">terms</p>
          </div>
          <p className="pt-2 text-zinc-500 border-t border-zinc-600 text-sm">
            © the groovement, LLC. All rights reserved 2023
          </p>
        </div>
      </div>
    </div>
  );
}
