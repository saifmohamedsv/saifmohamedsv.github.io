import { Metadata } from "next";
import NewsletterSignupForm from "./components/ui/NewsletterSignupForm";
import PostList from "./components/ui/PostList";

export const metadata: Metadata = {
  title: "Blog | Saif Mohamed",
  description:
    "This is Saif Mohamed's Blog, Talks about frontend development and web technologies",
};

export default async function Blog() {
  const data = await getData();
  const posts = data.sort(
    (a: any, b: any) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  );

  console.log(posts[0]);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {posts.length} posts about code, design, more ...
          </p>
        </div>
      </div>
      <div
        className="animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <PostList posts={posts} />
      </div>
      <div
        className="animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <NewsletterSignupForm />
      </div>
    </div>
  );
}

async function getData() {
  const response = await fetch("https://dev.to/api/articles/me/published", {
    headers: {
      "api-key": process.env.NEXT_PUBLIC_DEVTO_API_KEY as string,
      accept: "application/vnd.forem.api-v1+json",
    },
    method: "GET",
    next: {
      revalidate: 60,
    },
  });

  return await response.json();
}
