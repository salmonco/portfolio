import * as xml2js from "xml2js";

export const getVelogPosts = async (username: string, limit: number = 3) => {
  try {
    const rssUrl = `https://api.velog.io/rss/@${username}`;
    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Velog RSS feed: ${response.statusText}`);
    }

    const xmlText = await response.text();
    const parser = new xml2js.Parser({ explicitArray: false });
    const result = await parser.parseStringPromise(xmlText);

    const items = result?.rss?.channel?.item || [];

    // Map RSS items to a similar structure as VelogPost
    const posts = items
      .map((item: any) => {
        const descriptionHtml = item.description || "";
        const imgMatch = descriptionHtml.match(/<img[^>]+src="([^">]+)"/);
        const thumbnailUrl = imgMatch ? imgMatch[1] : null;

        return {
          id: item.guid?._ || item.link, // Use guid or link as id
          title: item.title || "No Title",
          url_slug: item.link.split("/").pop() || "", // Extract slug from link
          shortDescription:
            descriptionHtml.replace(/<[^>]*>?/gm, "") ||
            "No description available.", // Strip HTML tags
          thumbnail: thumbnailUrl, // Extract thumbnail from description
          released_at: item.pubDate,
          updated_at: item.pubDate, // RSS doesn't usually have updated_at, use pubDate
          likes: 0, // RSS doesn't have likes count
          comments_count: 0, // RSS doesn't have comments count
          user: {
            username: username,
            profile: {
              display_name: username,
              thumbnail: null,
            },
          },
          tags: [], // RSS doesn't have tags in this format
        };
      })
      .slice(0, limit); // Apply limit client-side

    return posts;
  } catch (error) {
    console.error("Error fetching Velog RSS posts:", error);
    return [];
  }
};
