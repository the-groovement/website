import {
  paginatedquery,
  singlequery,
  getAll,
  eventsPaginatedQuery,
  singleEventQuery,
  eventsSearchQuery,
  eventsQuery,
  eventsSearchQueryNoEndTime,
  singleVenueQueryBySlug,
  allgroovefamauthors,
  allgroovefamphotographers,
  eventsGenrePaginatedQuery,
  featuredVenueQuery,
  postsQuery,
  playlistQuery,
  limitFeaturedQueryNonArtist,
  aboutPage,
  faqs,
  categoryQuery,
  postsSearch,
  postsCategorySearch,
  combinedQuery,
  allVenuesQuery,
} from "./groq";
import { createClient } from "next-sanity";

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

export async function getEventBySlug(slug: string) {
  if (client) {
    const event = await client.fetch(singleEventQuery, {
      slug,
      cache: "no-store",
    });

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

export async function getPlaylist() {
  if (client) {
    return (
      (await client.fetch(playlistQuery, {
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

export async function searchEvents(
  searchInput: string,
  startTime: string,
  endTime: string,
  start: number,
  end: number
) {
  const currentTime = new Date().toISOString();

  if (client) {
    const events = !endTime
      ? await client.fetch(eventsSearchQueryNoEndTime, {
          searchInput: `*${searchInput}*`,
          startTime: startTime ? startTime : currentTime,
          start: start,
          end: end,
        })
      : await client.fetch(eventsSearchQuery, {
          searchInput: `*${searchInput}*`,
          startTime: startTime ? startTime : currentTime,
          endTime: endTime,
          start: start,
          end: end,
        });

    return events || [];
  }

  return [];
}

export async function getEvents(start: number, end: number) {
  if (client) {
    const events = await client.fetch(eventsQuery, {
      start: start,
      end: end,
      cache: "no-store",
    });

    return events || {};
  }

  return {};
}

export async function getHomePageData() {
  if (!client) {
    return {};
  }

  try {
    const data = await client.fetch(combinedQuery, {
      cache: "no-store",
    });

    return {
      featuredArtists: data.featuredArtists || [],
      featuredVenue: data.featuredVenue || {},
      events: data.events || [],
    };
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return {};
  }
}

export async function getAllVenues() {
  if (client) {
    return (
      (await client.fetch(allVenuesQuery, {
        cache: "no-store",
      })) || []
    );
  }
  return [];
}

export async function getPaginatedEvents(
  start: number,
  end: number,
  genreArray?: string[],
  featured?: boolean
) {
  if (client) {
    let events;
    if (genreArray) {
      events = await client.fetch(eventsGenrePaginatedQuery(genreArray), {
        start: start,
        end: end,
        genreArray: genreArray,
        cache: "no-store",
      });
    } else {
      events = await client.fetch(eventsPaginatedQuery, {
        start: start,
        end: end,
        featured: featured ?? false,
        cache: "no-store",
      });
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
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}

export async function getCategoryPosts(
  categoryId: string | null,
  start: number,
  end: number
) {
  if (client) {
    if (categoryId !== null) {
      return (
        (await client.fetch(categoryQuery, {
          categoryId: categoryId,
          start: start,
          end: end,
          cache: "no-store",
        })) || {}
      );
    } else {
      return (
        (await client.fetch(postsQuery, {
          start: start,
          end: end,
          cache: "no-store",
        })) || {}
      );
    }
  }
  return {};
}

export async function searchPosts(
  searchInput: string,
  categoryId: string | null,
  start: number,
  end: number
) {
  if (client) {
    if (categoryId !== null) {
      return (
        (await client.fetch(postsCategorySearch, {
          searchInput: `*${searchInput}*`,
          categoryId: categoryId,
          start: start,
          end: end,
          cache: "no-store",
        })) || {}
      );
    } else {
      return (
        (await client.fetch(postsSearch, {
          searchInput: `*${searchInput}*`,
          start: start,
          end: end,
          cache: "no-store",
        })) || {}
      );
    }
  }
  return {};
}

export async function getRecentFeaturedPostsNonArtist(
  start: number,
  end: number
) {
  if (client) {
    return (
      (await client.fetch(limitFeaturedQueryNonArtist, {
        start: start,
        end: end,
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}

export async function getAboutPage() {
  if (client) {
    return (
      (await client.fetch(aboutPage, {
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}

export async function getFaqs() {
  if (client) {
    return (
      (await client.fetch(faqs, {
        cache: "no-store",
      })) || {}
    );
  }
  return {};
}
