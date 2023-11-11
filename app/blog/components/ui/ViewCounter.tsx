"use client";

import FlipNumber from "@/components/FlipNumber";

export default function ViewCounter({ comments_count }: { comments_count: number }) {
  return (
    <span>
      <FlipNumber>{comments_count}</FlipNumber> comments
    </span>
  );
}
