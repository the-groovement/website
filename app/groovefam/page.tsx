import ArticleListWithSearch from "@/components/GrooveguideSections/ArticleListWithSearch";
import LandingArticle from "@/components/GrooveguideSections/LandingArticle";
import { getPaginatedPosts } from "@/lib/sanity/client";

export default async function Groovefam() {
  const POSTS_PER_PAGE = 6;
  const posts = await getPaginatedPosts(0, POSTS_PER_PAGE);
  return (
    <div>
      <section>
        <div className="flex flex-col pb-8 md:pb-12 mt-2 sm:mt-8">
          <p
            className="text-[40px] sm:text-7xl mb-4 font-shrikhand"
            style={{ textShadow: "1px 1px 3px #3a2a3c" }}
          >
            groovefam
          </p>
          <p className="text-2xl sm:text-3xl">
            meet our writers and photographers
          </p>
        </div>
      </section>
    </div>
  );
}
