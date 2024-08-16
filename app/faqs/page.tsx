import Dropdown from "@/components/Dropdown";
import Image from "next/image";

export default function Faqs() {
  return (
    <section>
      <div className="mb-12">
        <p
          className="text-[40px] sm:text-7xl mb-4 font-shrikhand mt-2 sm:mt-8"
          style={{ textShadow: "1px 1px 3px #3a2a3c" }}
        >
          FAQs
        </p>
        <Dropdown />
      </div>
    </section>
  );
}
