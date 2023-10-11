import {
  postquery,
  limitquery,
  paginatedquery,
  singlequery,
  pathquery,
  allauthorsquery,
  authorsquery,
  postsbyauthorquery,
  postsbycatquery,
  catpathquery,
  catquery,
  getAll,
  searchquery,
  limitFeaturedquery,
  limitNonFeaturedquery,
} from "./groq";
import { createClient } from "next-sanity";

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = createClient({
  projectId: "887gnfj7",
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: true,
});

export const fetcher = async ([query, params]: [string, any]) => {
  return client ? client.fetch(query, params) : [];
};

(async () => {
  if (client) {
    const data = await client.fetch(getAll);
    if (!data || !data.length) {
      console.error(
        "Sanity returns empty array. Are you sure the dataset is public?"
      );
    }
  }
})();

export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postquery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug: string) {
  if (client) {
    return (await client.fetch(singlequery, { slug })) || {};
  }
  return {};
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs: string[] = (await client.fetch(pathquery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}
// Author
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs: string[] = (await client.fetch(authorsquery)) || [];
    return slugs.map((slug) => ({ author: slug }));
  }
  return [];
}

export async function getAuthorPostsBySlug(slug: string) {
  if (client) {
    return (await client.fetch(postsbyauthorquery, { slug })) || {};
  }
  return {};
}

export async function getAllAuthors() {
  if (client) {
    return (await client.fetch(allauthorsquery)) || [];
  }
  return [];
}

// Category

export async function getAllCategories() {
  if (client) {
    const slugs: string[] = (await client.fetch(catpathquery)) || [];
    return slugs.map((slug) => ({ category: slug }));
  }
  return [];
}

export async function getPostsByCategory(slug: string) {
  if (client) {
    return (await client.fetch(postsbycatquery, { slug })) || {};
  }
  return {};
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(catquery)) || [];
  }
  return [];
}

export async function getPaginatedPosts(start: number, end: number) {
  if (client) {
    return (
      (await client.fetch(paginatedquery, {
        start: start,
        end: end,
      })) || {}
    );
  }
  return {};
}

export async function getRecentFeaturedPosts(start: number, end: number) {
  if (client) {
    return (
      (await client.fetch(limitFeaturedquery, {
        start: start,
        end: end,
      })) || {}
    );
  }
  return {};
}

export async function getRecentNonFeaturedPosts(start: number, end: number) {
  if (client) {
    return (
      (await client.fetch(limitNonFeaturedquery, {
        start: start,
        end: end,
      })) || {}
    );
  }
  return {};
}
