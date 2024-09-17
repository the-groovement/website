import ArticleListWithSearch from "@/components/GrooveguideSections/ArticleListWithSearch";
import LandingArticle from "@/components/GrooveguideSections/LandingArticle";
import { getPaginatedPosts } from "@/lib/sanity/client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Grooveguide() {
  const POSTS_PER_PAGE = 9;
  const posts = await getPaginatedPosts(0, POSTS_PER_PAGE);
  return (
    <div>
      <LandingArticle />
      <ArticleListWithSearch initialPosts={posts} />
    </div>
  );
}
