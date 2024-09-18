import { groq } from "next-sanity";

// Get all posts
export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  _id,
  _createdAt,
  publishedAt,
  images[]->
  featured,
  excerpt,
  slug,
  title,
  authors[]->,
  categories[]->,
}
`;
// Get all posts with 0..limit
export const limitquery = groq`
*[_type == "post"] | order(publishedAt desc) [0..$limit] {
  ...,
  authors[]->,
  categories[]->
}
`;

export const venueQuery = groq`
*[_type == "venue" && _id in $refs] {
  name,
  address,
  images,
  googlemaps,
  phone,
  accessoride,
  venue_post,
  _id
}
`;

export const singleVenueQuery = groq`
*[_type == "venue" && _id == $id][0] {
  ...,
}
`;

export const limitFeaturedquery = groq`
*[_type == "post" && featured == true] | order(publishedAt desc) [$start...$end] {
  ...,
  authors[]->,
  categories[]->
}
`;

export const limitFeaturedArtistsquery = groq`
*[_type == "post" && featured == true && "artists" in categories[] -> slug.current] | order(publishedAt desc) [$start...$end] {
  ...,
  authors[]->,
  categories[]->
}
`;

export const limitFeaturedQueryNonArtist = groq`
  *[_type == "post" && featured == true && !("artists" in categories[]->slug.current)] | order(publishedAt desc) [$start...$end] {
    ...,
    authors[]->,
    categories[]->
  }
`;


export const limitNonFeaturedquery = groq`
*[_type == "post" && (!defined(featured) || !featured)] | order(publishedAt desc) [$start...$end] {
  ...,
  authors[]->,
  categories[]->
}
`;

const currentTime = new Date().toISOString();

export const eventsQuery = groq`
*[_type == "event" && startTime >= "${currentTime}"] | order(startTime asc) {
  ...
}
`;

export const eventsPaginatedQuery = groq`
*[_type == "event" && startTime >= "${currentTime}" && featured == $featured] | order(startTime asc) [$start...$end] {
  ...
}
`;

export const eventsGenrePaginatedQuery = (genreArray) => {
  const genreConditions = genreArray
    .map((genre) => `genre match "*${genre}*"`)
    .join(" || ");

  return groq`
  *[_type == "event" && startTime >= "${currentTime}" && (${genreConditions})] | order(startTime asc) [$start...$end] {
    ...
  }
  `;
};


export const eventsSearchQueryNoEndTime = groq`
  *[_type == "event" && (
    eventName match $searchInput ||
    venue->name match $searchInput
  ) && $startTime <= startTime] | order(startTime asc) {
    ...,
    venue-> {
      ...,
    }
  }
`;

export const eventsSearchQuery = groq`
  *[_type == "event" && (
    eventName match $searchInput ||
    venue->name match $searchInput
  ) && startTime <= $endTime && $startTime <= startTime] | order(startTime asc) {
    ...,
    venue-> {
      ...,
    }
  }
`;

export const paginatedCategoryQuery = groq`
*[_type == "post" && $categoryId in categories[]->slug.current]  | order(publishedAt desc) [$start...$end] {
  ...,
  authors[]->,
  photographer->,
  categories[]->
}
`;

// [(($pageIndex - 1) * 10)...$pageIndex * 10]{
// Get subsequent paginated posts
export const paginatedquery = groq`
*[_type == "post"] | order(publishedAt desc) [$start...$end] {
  ...,
  authors[]->,
  photographer->,
  categories[]->
}
`;

export const postsQuery = groq`
*[_type == "post"] | order(publishedAt desc) {
  ...,
  authors[]->,
  photographer->,
  categories[]->
}
`;

export const playlistQuery = groq`
*[_type == "playlist"][0]{
  spotify_playlist_url
}
`

// Single Event
export const featuredVenueQuery = groq`
  *[_type == "venue" && featured == true] {
    ...,
    intro[],
    history[],
    ada[],
    ticket_vendor,
    capacity,
    security_check,
    credit_cards,
    contactless_payment,
    coat_check,
    wifi,
    bar,
    food,
    "map_recs": map_recs[]{
      ...,
      "info": info[]{
        ...,
        children[]{
          ...
        }
      }
    }
  }
`;


// Single Event
export const singleVenueQueryBySlug = groq`
*[_type == "venue" && slug.current == $slug][0] {
  ...,
  intro[],
  history[],
  ada[],
  ticket_vendor,
  capacity,
  security_check,
  credit_cards,
  contactless_payment,
  coat_check,
  wifi,
  bar,
  food,
  "map_recs": map_recs[]{
    ...,
    "info": info[]{
      ...,
      children[]{
        ...
      }
    }
  }
}
`;

// Single Event
export const singleEventQuery = groq`
*[_type == "event" && slug.current == $slug][0] {
  ...,
}
`;

// Single Post
export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  },
  photographers[]->,
  authors[]->,
  categories[]->,
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0 ] | order(publishedAt desc, _createdAt desc) [0...5] {
    title,
    slug,
    "date": coalesce(publishedAt,_createdAt),
  },
}
`;

// Paths for generateStaticParams
export const pathquery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
export const catpathquery = groq`
*[_type == "category" && defined(slug.current)][].slug.current
`;
export const authorsquery = groq`
*[_type == "author" && defined(slug.current)][].slug.current
`;

// Get Posts by Authors
export const postsbyauthorquery = groq`
*[_type == "post" && $slug match authors[]->slug.current ] {
  ...,
  authors[]->,
  categories[]->,
}
`;

// Get Posts by Category
export const postsbycatquery = groq`
*[_type == "post" && $slug in categories[]->slug.current ] {
  ...,
  authors[]->,
  categories[]->,
}
`;

// Get top 5 categories
export const catquery = groq`*[_type == "category"] {
  ...,
  "count": count(*[_type == "post" && references(^._id)])
} | order(count desc) [0...5]`;

export const eventSearchQuery = groq`*[_type == "event" && _score > 0]
| score(eventName match $query || venueName match $query || startTime match $query)
| order(_score desc)
{
  ...
}`;

export const searchquery = groq`*[_type == "post" && _score > 0]
| score(title match $query || excerpt match $query || pt::text(body) match $query)
| order(_score desc)
{
  _score,
  _id,
  _createdAt,
  images[]->,
  authors[]->,
  categories[]->,
  title,
  slug
}`;

// Get all Authors
export const allauthorsquery = groq`
*[_type == "author"] {
 ...,
 'slug': slug.current,
}
`;

export const allgroovefamauthors = groq`
*[_type == "author" && groovefam == true] {
  name,
  bio,
  image,
  groovefam
}
`;

export const allgroovefamphotographers = groq`
*[_type == "photographer" && groovefam == true] {
  name,
  bio,
  image,
  groovefam
}
`;

export const aboutPage = groq`
*[_type == "about"][0] {
  mission,
  values,
  originStory
}
`

export const faqs = groq`
*[_type == "faqs"][0] {
  questions[]{
    title,
    answer
  }
}
`

// get everything from sanity
// to test connection
export const getAll = groq`*[]`;
