
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blogs: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-[180px] md:pt-[200px]">
            {/* Hero */}
            <section className="bg-mountain-blue py-20 md:py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-oswald font-black uppercase mb-4 md:mb-6 tracking-tighter leading-tight">
                        MARMOT <span className="text-golden-yellow">STORIES</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto uppercase tracking-wider font-oswald">
                        Guides, Tips & Adventures from the high Himalayas
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 md:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {BLOG_POSTS.map((post) => (
                            <Link key={post.id} to={`/blog/${post.id}`} className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col">
                                <div className="h-56 sm:h-64 overflow-hidden relative">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-mountain-blue text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <div className="flex items-center text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 md:mb-4">
                                        <span>{post.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>By {post.author}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-oswald font-black text-mountain-blue mb-3 md:mb-4 uppercase leading-tight group-hover:text-tibetan-red transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-slate-600 font-light mb-6 md:mb-8 flex-1 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <button className="flex items-center text-mountain-blue font-black uppercase text-[9px] md:text-[10px] tracking-widest group/btn hover:text-tibetan-red transition-colors">
                                        READ FULL STORY
                                        <span className="ml-2 transform group-hover/btn:translate-x-2 transition-transform">→</span>
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Placeholder */}
            <section className="py-16 md:py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-slate-50 p-8 sm:p-12 md:p-16 lg:p-20 rounded-2xl md:rounded-[3rem] border border-slate-200">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-oswald font-black text-mountain-blue uppercase mb-4 md:mb-6">Join the Convoy</h2>
                        <p className="text-slate-600 mb-8 md:mb-10 text-base md:text-lg max-w-2xl mx-auto">Subscribe to get seasonal pass updates and exclusive early-bird expedition slots.</p>
                        <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white border-2 border-slate-200 rounded-xl md:rounded-2xl px-6 md:px-8 py-3 md:py-4 text-sm md:text-base focus:ring-2 focus:ring-mountain-blue/30 focus:border-mountain-blue outline-none transition-all"
                            />
                            <button className="bg-mountain-blue text-white px-8 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl font-black uppercase text-xs md:text-sm tracking-widest hover:bg-tibetan-red transition-all duration-300 shadow-lg hover:shadow-xl">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
