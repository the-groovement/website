import ArticleListWithSearch from "@/components/GrooveguideSections/ArticleListWithSearch";
import LandingArticle from "@/components/GrooveguideSections/LandingArticle";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Grooveguide() {
  return (
    <div>
      <LandingArticle />
      <ArticleListWithSearch />
    </div>
  );
}
