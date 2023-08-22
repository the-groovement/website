const API_URL = process.env.WORDPRESS_API_URL as string;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getHomePagePosts() {
  const data = await fetchAPI(
    `
      query AllPosts {
        posts(first: 7) {
          nodes {
            author {
              node {
                name
              }
            }
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            id
          }
        }
      }
    `
  );
  return data.posts.nodes;
}

export async function getPostById(id: string) {
  const query = `
    query GetPostById($postId: ID!) {
      post(id: $postId) {
        author {
          node {
            name
          }
        }
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
        date
      }
    }
  `;

  const response = await fetchAPI(query, { variables: { postId: id } });
  return response.post;
}
