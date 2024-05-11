import { MDX as string } from "contentlayer/core";

export type Post = {
  id: string;
  type_of: string;
  title: string;
  description: string;
  published_at: string;
  published_timestamp: string;
  updatedAt: string;
  tags: string[];
  page_views_count: number | 0;
  featured: boolean;
  slug: string;
  cover_image: string;
  og?: string;
  comments_count: number;
  body_html: string;
  body_markdown: string;
  readable_publish_date?: string;
  user: User;
};

type User = {
  name: string;
};
