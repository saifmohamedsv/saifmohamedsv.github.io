import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Halo from "@/components/ui/Halo";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image-builder";
import { Project } from "@/types/project";

export const metadata: Metadata = {
  title: "Projects | Saif Mohamed",
  description: "Here are some of the projects I've worked on.",
};

export default async function Blog(props: any) {
  const data = await getData();

  // Sorting by created data
  const projects = data.sort(
    (a, b) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime(),
  );

  return (
    <div className="mx-auto max-w-[700px]">
      <div className="flex flex-col gap-16 md:gap-24 ">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Projects
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Here are some of the projects I&apos;ve worked on.
            </p>
          </div>
        </div>
        <ul
          className="animated-list flex animate-in flex-col"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {projects
            .sort(
              (a, b) =>
                new Date(b._createdAt).getTime() -
                new Date(a._createdAt).getTime(),
            )
            .map((project, i) => (
              <li
                key={project.title}
                className={clsx(
                  "flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6",
                )}
              >
                <Link
                  href={`/projects/${project._id}`}
                  className="aspect-video w-full select-none overflow-clip rounded-lg border border-secondary bg-tertiary md:w-2/5"
                >
                  <Halo strength={10}>
                    <Image
                      src={urlFor(project.imgUrl).url()}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="h-full w-full "
                    />
                  </Halo>
                </Link>
                <div className="w-full space-y-2 md:w-3/5">
                  <div>
                    <Link
                      href={`/projects/${project._id}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {project.title}
                    </Link>
                    <time className="text-secondary">
                      {" "}
                      · {project.yearCreated}
                    </time>
                  </div>

                  <p className="line-clamp-3 text-tertiary">
                    {project.description}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

async function getData() {
  return await client.fetch<Project[]>(`*[_type == "works"]`);
}
