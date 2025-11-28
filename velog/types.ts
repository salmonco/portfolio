export interface VelogPost {
    id: string;
    title: string;
    url_slug: string;
    shortDescription: string;
    thumbnail: string | null; // Not directly available in RSS, set to null in parser
    released_at: string;
    updated_at: string; // Using pubDate for both
    likes: number; // Defaulted to 0 in parser
    comments_count: number; // Defaulted to 0 in parser
    user: {
      username: string;
      profile: {
        display_name: string;
        thumbnail: string | null; // Not directly available in RSS, set to null in parser
      };
    };
    tags: {
      name: string;
    }[]; // Defaulted to empty array in parser
  }