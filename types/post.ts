import { MDX as string } from "contentlayer/core";

export type Post = {
  id: string;

  type_of: string;
  title: string;
  description: string;
  published_at: string;
  updatedAt?: string | undefined;
  tags: string[];
  page_views_count: number;
  featured?: boolean | undefined;
  shortTitle?: string;

  slug: string;
  cover_image: string;
  og: string;
  comments_count: number;
  body_html: string;

  user: User;
};

type User = {
  name: string;
};
