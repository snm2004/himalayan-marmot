
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blogs: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero */}
            <section className="bg-mountain-blue py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-oswald font-black uppercase mb-6 tracking-tighter">
                        MARMOT <span className="text-golden-yellow">STORIES</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-80 max-w-2xl mx-auto uppercase tracking-widest font-oswald">
                        Guides, Tips & Adventures from the high Himalayas
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {BLOG_POSTS.map((post) => (
                            <article key={post.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group flex flex-col">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                    <div className="absolute top-6 left-6 bg-mountain-blue text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                        <span>{post.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>By {post.author}</span>
                                    </div>
                                    <h3 className="text-2xl font-oswald font-black text-mountain-blue mb-4 uppercase leading-tight group-hover:text-tibetan-red transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 font-light mb-8 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <button className="flex items-center text-mountain-blue font-black uppercase text-[10px] tracking-widest group/btn">
                                        READ FULL STORY
                                        <span className="ml-2 transform group-hover/btn:translate-x-2 transition-transform">→</span>
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Placeholder */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-slate-50 p-12 md:p-20 rounded-[3rem] border border-slate-100">
                        <h2 className="text-3xl md:text-5xl font-oswald font-black text-mountain-blue uppercase mb-6">Join the Convoy</h2>
                        <p className="text-slate-500 mb-10 text-lg">Subscribe to get seasonal pass updates and exclusive early-bird expedition slots.</p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white border border-slate-200 rounded-2xl px-8 py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all"
                            />
                            <button className="bg-mountain-blue text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-tibetan-red transition-all shadow-xl">
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
