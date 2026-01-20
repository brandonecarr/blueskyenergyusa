import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Blog | BlueSky Energy",
  description: "Solar energy insights, tips, and industry news from BlueSky Energy experts.",
};

export default function BlogPage() {
  return (
    <>
      <main>
        {/* Hero Section with Header */}
        <section className="relative bg-brand-primary">
          <Header />
          <div className="pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Solar Energy Insights
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Expert guides, industry trends, and practical tips to help you make informed decisions about solar energy for your home or business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Featured Post */}
            <Link href={`/blog/${blogPosts[0].slug}`} className="block mb-12">
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-card overflow-hidden group hover:shadow-floating transition-shadow">
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-brand-accent">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-xs text-text-muted">•</span>
                    <span className="text-xs text-text-muted">
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">
                      {blogPosts[0].readTime}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            {/* All Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <article className="bg-white rounded-3xl shadow-card overflow-hidden group hover:shadow-floating transition-shadow h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-white/90 backdrop-blur-sm text-xs font-medium text-brand-primary px-3 py-1.5 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
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

        {/* CTA Section */}
        <section className="py-16 bg-brand-primary">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get a free consultation and see how much you could save with solar energy.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 h-12 px-8 bg-white text-brand-primary rounded-full font-semibold hover:bg-white/95 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
