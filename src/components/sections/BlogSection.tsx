import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-[38px] font-bold text-brand-primary mb-4">
              Insights, Trends, And Tips From Industry Experts
            </h2>
            <p className="text-text-secondary max-w-xl">
              Stay informed with the latest solar energy news, tips, and industry insights.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline underline-offset-4 mt-4 md:mt-0"
          >
            View all articles
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article className="bg-white rounded-3xl shadow-card overflow-hidden group hover:shadow-floating transition-shadow h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-xs font-medium text-brand-primary px-3 py-1.5 rounded-full">
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-medium text-brand-accent mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-brand-primary mb-3 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary group-hover:gap-3 transition-all">
                    Read more
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
