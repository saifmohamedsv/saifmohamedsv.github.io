import slugify from "slugify";
import Link from "./ui/Link";

const Tags = ({ tags }: { tags: string[] }): JSX.Element | null => {
  if (!tags?.length) {
    return null;
  }

  return (
    <ul className="flex flex-col gap-6">
      <h2>Tags</h2>
      <div className="animated-list flex flex-wrap gap-3">
        {tags?.map((tag: string) => (
          <li key={tag} className="transition-opacity">
            <Link
              href={`/blog/tag/${slugify(tag, { lower: true })}`}
              className="whitespace-nowrap rounded-lg bg-secondary px-4 py-2 text-sm text-primary "
            >
              {tag}
            </Link>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Tags;
