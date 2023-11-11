import Image from "next/image";
import Link from "@/components/ui/Link";
import { allPosts } from ".contentlayer/generated";

import PostList from "./blog/components/ui/PostList";
import Stats from "@/components/Stats";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Avatar from "@/public/avatar.png";

export default async function Home() {
  const data = await getData();
  const posts = data
    .sort(
      (a: any, b: any) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
    )
    .filter((_: any, i: any) => i < 3);
  console.log(data);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Saif Mohamed
          </h1>
          <p className="animate-in text-secondary" style={{ "--index": 1 } as React.CSSProperties}>
            I write code and do martial arts.
          </p>
        </div>

        <div
          className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={Avatar}
            width={85}
            height={85}
            alt="avatar"
            className="rounded-full bg-contain"
          />
          <Stats />
        </div>

        <p
          className="max-w-lg animate-in text-primary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Hi, I&apos;m Saif Mohamed, a software engineer who loves building cool things with code.
          In addition to coding, I also mentor junior developers to be better and be job-ready.
        </p>

        <ul
          className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <li className="transition-opacity">
            <Link
              href="mailto:saifmohamed.dev@gmail.com"
              className="flex items-center gap-2 no-underline"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>Email me</span>
            </Link>
          </li>
          <li className="transition-opacity">
            <Link href="/links" className="flex items-center gap-2 no-underline">
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>More ways to connect</span>
            </Link>
          </li>
        </ul>
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <h2 className="text-secondary">Latest Posts</h2>
        <PostList posts={posts} />
        <Link
          href="/blog"
          className="text-secondary underline underline-offset-4 hover:text-primary"
        >
          See All
        </Link>
      </div>
    </div>
  );
}

export async function getData() {
  const response = await fetch("https://dev.to/api/articles/me/published", {
    headers: {
      "api-key": process.env.NEXT_PUBLIC_DEVTO_API_KEY as string,
      accept: "application/vnd.forem.api-v1+json",
    },
    method: "GET",
  });

  return await response.json();
}
