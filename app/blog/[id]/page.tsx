import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import Subscribe from "@/app/blog/components/ui/NewsletterSignupForm";
import ViewCounter from "@/app/blog/components/ui/ViewCounter";
import Tags from "@/components/Tags";
import Link from "@/components/ui/Link";
import { formatDate } from "lib/formatdate";

import { allPosts } from "@/.contentlayer/generated";
import Avatar from "@/public/avatar.png";
import { Post as PostType } from "@/types/post";
import MdxWrapper from "../components/ui/MdxWrapper";
type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const response = await fetch(`https://dev.to/api/articles/me/published`, {
    headers: {
      "api-key": process.env.NEXT_PUBLIC_DEVTO_API_KEY as string,
      accept: "application/vnd.forem.api-v1+json",
    },
  });

  const posts = await response.json();

  return posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post: PostType = await getData(params.id);

  if (!post) {
    throw new Error("Post not found");
  }

  const { title, published_at: publishedTime, description } = post;

  const metadata: Metadata = {
    title: `${title} | Saif Mohamed`,
    description,
    openGraph: {
      title: `${title} | Saif Mohamed`,
      description,
      type: "article",
      publishedTime,
      url: `https://saifmohamedsv.github.io/blog/${title}`,
    },
  };

  return metadata;
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;

  const post: PostType = await getData(id);

  if (!post) {
    notFound();
  }

  const postMarkdown = allPosts.find((p) => p._id === id)?.body.code;

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div
          className="flex animate-in flex-col gap-8"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <div className="max-w-xl space-y-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {post.title}
            </h1>
            <p className="text-lg leading-tight text-secondary md:text-xl">
              {post.description}
            </p>
          </div>

          <div className="flex max-w-none items-center gap-4">
            <Image
              src={Avatar}
              width={40}
              height={40}
              alt="avatar"
              className="rounded-full bg-secondary"
            />
            <div className="leading-tight">
              <p className="font-medium text-primary">{post.user.name}</p>
              <p className="text-secondary">
                <time dateTime={post.published_at}>
                  {formatDate(post.published_at)}
                </time>
                {" · "}
                <ViewCounter comments_count={post.page_views_count} />
              </p>
            </div>
          </div>
        </div>
        {post.cover_image && (
          <>
            <div className="h-8" />
            <Image
              src={post.cover_image}
              alt={`${post.title} post image`}
              width={700}
              height={350}
              className="-ml-6 w-[calc(100%+48px)] max-w-none animate-in md:rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)]"
              style={{ "--index": 2 } as React.CSSProperties}
              priority
              quality={100}
            />
          </>
        )}
        <div className="h-16" />
        <div
          className="prose prose-neutral animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <MdxWrapper code={allPosts[0].body.code} />
        </div>
      </article>

      <Tags tags={post.tags} />

      <Subscribe />

      <Link href="/blog">← All Blogs</Link>
    </div>
  );
}

async function getData(postId: string) {
  const response = await fetch(`https://dev.to/api/articles/${postId}`, {
    headers: {
      "api-key": process.env.NEXT_PUBLIC_DEVTO_API_KEY as string,
      accept: "application/vnd.forem.api-v1+json",
    },
  });

  return await response.json();
}
