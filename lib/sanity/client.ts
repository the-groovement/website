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
  eventsPaginatedQuery,
  singleEventQuery,
  paginatedCategoryQuery,
  singleVenueQuery,
  eventsSearchQuery,
  eventsQuery,
  eventsSearchQueryNoEndTime,
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
    const data = await client.fetch(getAll, { next: { revalidate: 1 } });
    if (!data || !data.length) {
      console.error(
        "Sanity returns empty array. Are you sure the dataset is public?"
      );
    }
  }
})();

export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postquery, { next: { revalidate: 1 } })) || [];
  }
  return [];
}

export async function getEventBySlug(slug: string) {
  if (client) {
    const event = await client.fetch(singleEventQuery, {
      slug,
      next: { revalidate: 1 },
    });

    if (event && event.venue && event.venue._ref) {
      const venue = await client.fetch(singleVenueQuery, {
        id: event.venue._ref,
        next: { revalidate: 1 },
      });
      const combinedData = { ...event, venue };
      return combinedData;
    }

    return event || {};
  }

  return {};
}

export async function getPostBySlug(slug: string) {
  if (client) {
    return (
      (await client.fetch(singlequery, { slug, next: { revalidate: 1 } })) || {}
    );
  }
  return {};
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs: string[] =
      (await client.fetch(pathquery, { next: { revalidate: 1 } })) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}
// Author
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs: string[] =
      (await client.fetch(authorsquery, { next: { revalidate: 1 } })) || [];
    return slugs.map((slug) => ({ author: slug }));
  }
  return [];
}

export async function getAuthorPostsBySlug(slug: string) {
  if (client) {
    return (
      (await client.fetch(postsbyauthorquery, {
        slug,
        next: { revalidate: 1 },
      })) || {}
    );
  }
  return {};
}

export async function getAllAuthors() {
  if (client) {
    return (
      (await client.fetch(allauthorsquery, { next: { revalidate: 1 } })) || []
    );
  }
  return [];
}

// Category

export async function getAllCategories() {
  if (client) {
    const slugs: string[] = (await client.fetch(catpathquery)) || [];
    return slugs.map((slug) => ({ category: slug, next: { revalidate: 1 } }));
  }
  return [];
}

export async function getPostsByCategory(slug: string) {
  if (client) {
    return (
      (await client.fetch(postsbycatquery, {
        slug,
        next: { revalidate: 1 },
      })) || {}
    );
  }
  return {};
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(catquery, { next: { revalidate: 1 } })) || [];
  }
  return [];
}

export async function searchEvents(
  searchInput: string,
  startTime: string,
  endTime: string
) {
  const currentTime = new Date().toISOString();
  const futureDate = new Date("9999-12-31T23:59:59").toISOString();

  if (client) {
    const events = !endTime
      ? await client.fetch(eventsSearchQueryNoEndTime, {
          searchInput: `*${searchInput}*`,
          startTime: startTime ? startTime : currentTime,
        })
      : await client.fetch(eventsSearchQuery, {
          searchInput: `*${searchInput}*`,
          startTime: startTime ? startTime : currentTime,
          endTime: endTime,
        });

    if (events && events.length > 0) {
      // Fetch venues for each event
      const eventsWithVenues = await Promise.all(
        events.map(async (event: any) => {
          if (event.venue && event.venue._ref) {
            const venue = await client.fetch(singleVenueQuery, {
              id: event.venue._ref,
            });

            // Combine event and venue data
            return { ...event, venue };
          }

          return event;
        })
      );

      return eventsWithVenues;
    }

    return events || [];
  }

  return [];
}

export async function getEvents() {
  if (client) {
    const events = await client.fetch(eventsQuery, {
      next: { revalidate: 1 },
    });

    if (events && events.length > 0) {
      // Fetch venues for each event
      const eventsWithVenues = await Promise.all(
        events.map(async (event: any) => {
          if (event.venue && event.venue._ref) {
            const venue = await client.fetch(singleVenueQuery, {
              id: event.venue._ref,
              next: { revalidate: 1 },
            });

            // Combine event and venue data
            return { ...event, venue };
          }

          return event;
        })
      );

      return eventsWithVenues;
    }

    return events || {};
  }

  return {};
}

export async function getPaginatedEvents(start: number, end: number) {
  if (client) {
    const events = await client.fetch(eventsPaginatedQuery, {
      start: start,
      end: end,
      next: { revalidate: 1 },
    });

    if (events && events.length > 0) {
      // Fetch venues for each event
      const eventsWithVenues = await Promise.all(
        events.map(async (event: any) => {
          if (event.venue && event.venue._ref) {
            const venue = await client.fetch(singleVenueQuery, {
              id: event.venue._ref,
              next: { revalidate: 1 },
            });

            // Combine event and venue data
            return { ...event, venue };
          }

          return event;
        })
      );

      return eventsWithVenues;
    }

    return events || {};
  }

  return {};
}

export async function getPaginatedPosts(start: number, end: number) {
  if (client) {
    return (
      (await client.fetch(paginatedquery, {
        start: start,
        end: end,
        next: { revalidate: 1 },
      })) || {}
    );
  }
  return {};
}

export async function getPaginatedCategoryPosts(
  categoryId: string,
  start: number,
  end: number
) {
  if (client) {
    return (
      (await client.fetch(paginatedCategoryQuery, {
        categoryId: categoryId,
        start: start,
        end: end,
        next: { revalidate: 1 },
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
        next: { revalidate: 1 },
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
        next: { revalidate: 1 },
      })) || {}
    );
  }
  return {};
}
