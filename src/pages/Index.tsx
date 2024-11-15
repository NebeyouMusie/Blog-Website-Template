import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const featuredPosts = [
  {
    title: "The Future of Web Development",
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Technology",
    date: "Mar 16, 2024",
    slug: "future-of-web-development",
  },
  {
    title: "Mastering Modern Design Principles",
    excerpt:
      "Learn the essential principles of modern design and how to apply them effectively.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Design",
    date: "Mar 15, 2024",
    slug: "mastering-modern-design",
  },
  {
    title: "The Art of Storytelling",
    excerpt:
      "Discover how to craft compelling narratives that engage and inspire your audience.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Writing",
    date: "Mar 14, 2024",
    slug: "art-of-storytelling",
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section className="container py-16">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
            Featured Posts
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;