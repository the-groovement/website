import { groq } from "next-sanity";

// Get all posts
export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  _id,
  _createdAt,
  publishedAt,
  mainImage {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
  featured,
  excerpt,
  slug,
  title,
  author-> {
    _id,
    image,
    slug,
    name
  },
  categories[]->,
}
`;
// Get all posts with 0..limit
export const limitquery = groq`
*[_type == "post"] | order(_createdAt desc) [0..$limit] {
  ...,
  author->,
  categories[]->
}
`;

export const limitFeaturedquery = groq`
*[_type == "post" && featured == true] | order(_createdAt desc) [$start...$end] {
  ...,
  author->,
  categories[]->
}
`;

export const limitNonFeaturedquery = groq`
*[_type == "post" && (!defined(featured) || !featured)] | order(_createdAt desc) [$start...$end] {
  ...,
  author->,
  categories[]->
}
`;

export const eventsPaginatedQuery = groq`
*[_type == "event"] | order(startTime desc) [$start...$end] {
  ...
}
`;

export const paginatedCategoryQuery = groq`
*[_type == "post" && $categoryId in categories[]->slug.current]  | order(_createdAt desc) [$start...$end] {
  ...,
  author->,
  photographer->,
  categories[]->
}
`;

// [(($pageIndex - 1) * 10)...$pageIndex * 10]{
// Get subsequent paginated posts
export const paginatedquery = groq`
*[_type == "post"] | order(_createdAt desc) [$start...$end] {
  ...,
  author->,
  photographer->,
  categories[]->
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
  author->,
  categories[]->,
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0 ] | order(publishedAt desc, _createdAt desc) [0...5] {
    title,
    slug,
    "date": coalesce(publishedAt,_createdAt),
    "image": mainImage
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
*[_type == "post" && $slug match author->slug.current ] {
  ...,
  author->,
  categories[]->,
}
`;

// Get Posts by Category
export const postsbycatquery = groq`
*[_type == "post" && $slug in categories[]->slug.current ] {
  ...,
  author->,
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
  mainImage,
  author->,
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

// get everything from sanity
// to test connection
export const getAll = groq`*[]`;
