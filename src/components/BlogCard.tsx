import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

export function BlogCard({
  title,
  excerpt,
  image,
  category,
  date,
  slug,
}: BlogCardProps) {
  return (
    <article className="blog-card group">
      <Link to={`/blog/${slug}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="mb-2">
              {category}
            </Badge>
            <time className="text-sm text-muted-foreground">{date}</time>
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground">{excerpt}</p>
          <div className="mt-4 flex items-center text-sm text-primary">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}