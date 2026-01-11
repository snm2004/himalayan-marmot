import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS_DETAILED } from '../constants';
import { REMAINING_BLOG_POSTS } from '../blog-content-remaining';
import { BLOG_POSTS_PART2 } from '../blog-content-part2';
import { BLOG_POSTS_PART3 } from '../blog-content-part3';

// Combine all blog posts
const ALL_BLOG_POSTS = [
  ...BLOG_POSTS_DETAILED,
  ...REMAINING_BLOG_POSTS,
  ...BLOG_POSTS_PART2,
  ...BLOG_POSTS_PART3
];

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = ALL_BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 pt-[180px] md:pt-[200px] pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-oswald font-black text-mountain-blue mb-4">Blog Post Not Found</h1>
          <Link to="/blogs" className="text-tibetan-red hover:underline font-bold">
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-[180px] md:pt-[200px] pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/blogs" 
          className="inline-flex items-center text-mountain-blue hover:text-tibetan-red font-bold mb-8 transition-colors"
        >
          <span className="mr-2">←</span> Back to All Blogs
        </Link>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 bg-mountain-blue text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
            {post.category}
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center text-sm text-slate-500 mb-6 flex-wrap gap-4">
          <span className="font-bold">{post.date}</span>
          <span>•</span>
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-oswald font-black text-mountain-blue mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-slate-600 mb-12 leading-relaxed border-l-4 border-golden-yellow pl-6 italic">
          {post.excerpt}
        </p>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.map((section, index) => (
            <div key={index} className="mb-12">
              {section.heading && (
                <h2 className="text-3xl font-oswald font-bold text-mountain-blue mb-6 mt-8">
                  {section.heading}
                </h2>
              )}
              
              {section.paragraphs && section.paragraphs.map((para, pIndex) => (
                <p key={pIndex} className="text-slate-700 leading-relaxed mb-4 text-lg">
                  {para}
                </p>
              ))}

              {section.list && (
                <ul className="list-disc list-inside space-y-3 mb-6 text-slate-700">
                  {section.list.map((item, lIndex) => (
                    <li key={lIndex} className="text-lg leading-relaxed">
                      <strong className="text-mountain-blue">{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              )}

              {section.tips && (
                <div className="bg-golden-yellow/10 border-l-4 border-golden-yellow p-6 rounded-r-lg mb-6">
                  <h3 className="text-xl font-oswald font-bold text-mountain-blue mb-4">
                    💡 Pro Tips
                  </h3>
                  <ul className="space-y-2">
                    {section.tips.map((tip, tIndex) => (
                      <li key={tIndex} className="text-slate-700 leading-relaxed">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.warning && (
                <div className="bg-tibetan-red/10 border-l-4 border-tibetan-red p-6 rounded-r-lg mb-6">
                  <h3 className="text-xl font-oswald font-bold text-tibetan-red mb-4">
                    ⚠️ Important Warning
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{section.warning}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-mountain-blue to-slate-800 text-white p-8 md:p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-oswald font-bold mb-4">Ready to Experience This Adventure?</h3>
          <p className="text-lg mb-8 opacity-90">Join us on an unforgettable journey through the Himalayas</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/tours" 
              className="bg-golden-yellow text-mountain-blue px-8 py-4 rounded-full font-bold hover:bg-white transition-colors"
            >
              View All Tours
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-mountain-blue transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-oswald font-bold text-mountain-blue mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALL_BLOG_POSTS
              .filter(p => p.category === post.category && p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-oswald font-bold text-mountain-blue group-hover:text-tibetan-red transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;