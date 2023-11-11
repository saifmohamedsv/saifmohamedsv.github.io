import Image from "next/image";
import { notFound } from "next/navigation";

import Link from "@/components/ui/Link";
import { client } from "@/sanity/client";
import { Project } from "@/types/project";
import { urlFor } from "@/sanity/image-builder";

export async function generateStaticParams() {
  const projects = await client.fetch<Project[]>(`*[_type == "works"]`);

  return projects.map((project: Project) => ({
    _id: project._id.toString(),
  }));
}

export default async function Project({ params }: { params: { _id: string } }) {
  const { _id } = params;
  const project = await getData(_id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex animate-in flex-col gap-3">
          <div className="flex gap-3 text-secondary">
            <p>{project.yearCreated}</p>
            {project.projectLink && (
              <>
                <span>&middot;</span>
                <Link href={project.projectLink} className="hover:text-primary">
                  Visit Project
                </Link>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
            {project.title}
          </h1>
          <p
            className="animate-in text-lg leading-tight text-secondary md:text-xl"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {project.description}
          </p>
        </div>

        <div className="h-12" />

        <Image
          src={urlFor(project.imgUrl).url()}
          alt="COVID-19 Dashboard"
          width={2580}
          height={1691}
        />
      </article>

      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <div className="flex flex-wrap gap-3 ">
            {project.tags.map((tag: string) => (
              <div
                key={tag}
                className="whitespace-nowrap rounded-lg bg-secondary px-4 py-1.5 text-sm text-secondary"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2>Contact</h2>
          <p className="max-w-lg text-secondary">
            Need more project details, or interested in working together? Reach
            out to me directly at{" "}
            <a
              href="mailto:saifmohamed.dev@gmail.com"
              className="text-primary underline"
            >
              saifmohamed.dev@gmail.com
            </a>
            . I&apos;d be happy to connect!{" "}
          </p>
        </div>

        <Link href="/projects" className="text-primary underline">
          ← All Projects
        </Link>
      </div>

      <div />
    </div>
  );
}

async function getData(postId: string) {
  const response = await client.fetch<Project[]>(
    `*[_type == "works" && _id == "${postId}"]`,
  );
  return response[0];
}
