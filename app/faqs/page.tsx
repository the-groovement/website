import Dropdown from "@/components/Dropdown";
import { getFaqs } from "@/lib/sanity/client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Faqs() {
  const faqsData = await getFaqs();
  console.log(faqsData?.questions);
  return (
    <section>
      <div className="mb-12">
        <p className="text-[40px] sm:text-7xl mb-4 font-shrikhand mt-2 sm:mt-8">
          FAQs
        </p>
        <Dropdown faqs={faqsData?.questions} />
      </div>
    </section>
  );
}
