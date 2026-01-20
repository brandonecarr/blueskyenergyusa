import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | BlueSky Energy",
    };
  }

  return {
    title: `${post.title} | BlueSky Energy Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <main>
        {/* Hero Image with Header */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Header />
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="relative -mt-16 z-10">
          <div className="max-w-[800px] mx-auto px-6">
            {/* Article Header */}
            <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 mb-8">
              {/* Back Link */}
              <div className="mb-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-primary transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back to Blog
                </Link>
              </div>

              {/* Category */}
              <span className="block text-xs font-medium text-brand-accent mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="bg-white rounded-3xl shadow-card p-8 md:p-12">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-brand-primary prose-headings:font-bold
                  prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-4
                  prose-li:text-text-secondary
                  prose-strong:text-brand-primary
                  prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline"
              >
                {post.content.split('\n').map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  if (trimmed.startsWith('# ')) {
                    return <h1 key={index}>{trimmed.slice(2)}</h1>;
                  }
                  if (trimmed.startsWith('## ')) {
                    return <h2 key={index}>{trimmed.slice(3)}</h2>;
                  }
                  if (trimmed.startsWith('### ')) {
                    return <h3 key={index}>{trimmed.slice(4)}</h3>;
                  }
                  if (trimmed.startsWith('- ')) {
                    return <li key={index}>{trimmed.slice(2)}</li>;
                  }
                  if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                    return <p key={index}><strong>{trimmed.slice(2, -2)}</strong></p>;
                  }

                  // Handle inline bold
                  const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
                  const formattedParts = parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  });

                  return <p key={index}>{formattedParts}</p>;
                })}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-brand-primary rounded-3xl p-8 md:p-12 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Go Solar?
              </h3>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Get a free consultation and personalized quote for your home or business.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 h-12 px-8 bg-white text-brand-primary rounded-full font-semibold hover:bg-white/95 transition-colors"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24 bg-surface-alt">
            <div className="max-w-[1200px] mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug}>
                    <article className="bg-white rounded-3xl shadow-card overflow-hidden group hover:shadow-floating transition-shadow h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-medium text-brand-accent mb-2 block">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold text-brand-primary mb-3 line-clamp-2 leading-snug">
                          {relatedPost.title}
                        </h3>
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
        )}
      </main>
      <Footer />
    </>
  );
}
