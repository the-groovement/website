import ArticleListWithSearch from "@/components/GrooveguideSections/ArticleListWithSearch";
import LandingArticle from "@/components/GrooveguideSections/LandingArticle";
import { getPaginatedPosts } from "@/lib/sanity/client";

export default async function Grooveguide() {
  const posts = await getPaginatedPosts(0, 6);
  return (
    <div>
      <LandingArticle />
      <ArticleListWithSearch initialPosts={posts} />
    </div>
  );
}
