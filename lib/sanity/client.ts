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
  singleVenueQueryBySlug,
  allgroovefamauthors,
  allgroovefamphotographers,
  eventsGenrePaginatedQuery,
  featuredVenueQuery,
  postsQuery,
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
    const data = await client.fetch(getAll, { cache: "no-store" });
    if (!data || !data.length) {
      console.error(
        "Sanity returns empty array. Are you sure the dataset is public?"
      );
    }
  }
})();

export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postquery, { cache: "no-store" })) || [];
  }
  return [];
}

export async function getEventBySlug(slug: string) {
  if (client) {
    const event = await client.fetch(singleEventQuery, {
      slug,
      cache: "no-store",
    });

    if (event && event.venue && event.venue._ref) {
      const venue = await client.fetch(singleVenueQuery, {
        id: event.venue._ref,
        cache: "no-store",
      });
      const combinedData = { ...event, venue };
      return combinedData;
    }

    return event || {};
  }

  return {};
}

export async function getFeaturedVenue() {
  if (client) {
    return (
      (await client.fetch(featuredVenueQuery, {
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}

export async function getVenueBySlug(slug: string) {
  if (client) {
    return (
      (await client.fetch(singleVenueQueryBySlug, {
        slug,
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}

export async function getPostBySlug(slug: string) {
  if (client) {
    return (
      (await client.fetch(singlequery, {
        slug,
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs: string[] =
      (await client.fetch(pathquery, { cache: "no-store" })) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}
// Author
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs: string[] =
      (await client.fetch(authorsquery, { cache: "no-store" })) || [];
    return slugs.map((slug) => ({ author: slug }));
  }
  return [];
}

// Author
export async function getGroovefam() {
  let groovefamAuthors = [];
  let groovefamPhotographers = [];

  if (client) {
    groovefamAuthors = await client.fetch(allgroovefamauthors, {
      cache: "no-store",
    });
    groovefamPhotographers = await client.fetch(allgroovefamphotographers, {
      cache: "no-store",
    });
  }
  // Add role field to groovefamAuthors and groovefamPhotographers
  const groovefamAuthorsWithRole = groovefamAuthors.map((author: any) => ({
    ...author,
    role: "Author",
  }));
  const groovefamPhotographersWithRole = groovefamPhotographers.map(
    (photographer: any) => ({ ...photographer, role: "Photographer" })
  );

  const groovefam = groovefamAuthorsWithRole.concat(
    groovefamPhotographersWithRole
  );
  const sortedGroovefam = groovefam.sort((a: any, b: any) =>
    a.name.localeCompare(b.name)
  );

  return groovefam;
}

export async function getAuthorPostsBySlug(slug: string) {
  if (client) {
    return (
      (await client.fetch(postsbyauthorquery, {
        slug,
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}

export async function getAllAuthors() {
  if (client) {
    return (await client.fetch(allauthorsquery, { cache: "no-store" })) || [];
  }
  return [];
}

// Category

export async function getAllCategories() {
  if (client) {
    const slugs: string[] = (await client.fetch(catpathquery)) || [];
    return slugs.map((slug) => ({ category: slug, cache: "no-store" }));
  }
  return [];
}

export async function getPostsByCategory(slug: string) {
  if (client) {
    return (
      (await client.fetch(postsbycatquery, {
        slug,
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(catquery, { cache: "no-store" })) || [];
  }
  return [];
}

export async function searchEvents(
  searchInput: string,
  startTime: string,
  endTime: string
) {
  const currentTime = new Date().toISOString();

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
      cache: "no-store",
    });

    if (events && events.length > 0) {
      // Fetch venues for each event
      const eventsWithVenues = await Promise.all(
        events.map(async (event: any) => {
          if (event.venue && event.venue._ref) {
            const venue = await client.fetch(singleVenueQuery, {
              id: event.venue._ref,
              cache: "no-store",
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

export async function getPaginatedEvents(
  start: number,
  end: number,
  genre?: string
) {
  if (client) {
    let events;
    if (genre) {
      events = await client.fetch(eventsGenrePaginatedQuery, {
        start: start,
        end: end,
        genre: genre,
        cache: "no-store",
      });
      console.log(events);
    } else {
      events = await client.fetch(eventsPaginatedQuery, {
        start: start,
        end: end,
        cache: "no-store",
      });
    }

    if (events && events.length > 0) {
      // Fetch venues for each event
      const eventsWithVenues = await Promise.all(
        events.map(async (event: any) => {
          if (event.venue && event.venue._ref) {
            const venue = await client.fetch(singleVenueQuery, {
              id: event.venue._ref,
              cache: "no-store",
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

export async function getPosts() {
  if (client) {
    return (
      (await client.fetch(postsQuery, {
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}

export async function getPaginatedPosts(start: number, end: number) {
  if (client) {
    return (
      (await client.fetch(paginatedquery, {
        start: start,
        end: end,
        cache: "no-store",
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
        cache: "no-store",
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
        cache: "no-store",
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
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}
