import Section from "@/components/Section";
import Link from "@/components/ui/Link";
import { formatDate } from "@/lib/formatdate";
import { Post as PostType } from "@/types/post";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type PostProps = {
  post: PostType;
  mousePosition?: {
    x: number;
    y: number;
  };
};

export default function Post({ post, mousePosition }: PostProps) {
  const { published_at, title, cover_image, id } = post;
  console.log(post, "pooooost");

  // const publishDate = new Date(published_at);
  // const showNewBadge =
  //   Math.abs(new Date(publishDate).getTime() - new Date().getTime()) /
  //     (24 * 60 * 60 * 1000) <
  //   30;
  const imageHeight = 150;
  const imageWidth = 300;
  const imageOffset = 24;

  return (
    <li className="group py-3 transition-opacity">
      <div className="transition-opacity">
        {cover_image && mousePosition && (
          <motion.div
            animate={{
              top: mousePosition.y - imageHeight - imageOffset,
              left: mousePosition.x - imageWidth / 2,
            }}
            initial={false}
            transition={{ ease: "easeOut" }}
            style={{ width: imageWidth, height: imageHeight }}
            className="pointer-events-none absolute z-10 hidden overflow-hidden rounded bg-primary shadow-sm sm:group-hover:block"
          >
            <Image
              src={cover_image}
              alt={title}
              width={imageWidth}
              height={imageHeight}
            />
          </motion.div>
        )}
        <div className="flex items-center justify-between gap-6">
          <Section heading={formatDate(published_at)}>
            <Link href={`/blog/${id}`} className="font-medium leading-tight">
              {title}
            </Link>
          </Section>
          <div className="min-w-24 relative aspect-square h-24 w-24 drop-shadow-sm md:hidden">
            <Image
              src={cover_image}
              alt={title}
              fill
              className="rounded object-cover"
            />
          </div>
        </div>
      </div>
    </li>
  );
}
