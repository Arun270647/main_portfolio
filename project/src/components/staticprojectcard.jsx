import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// 1. Import your static image from the assets folder

const StaticProjectCard = ({ Title, Description, Link, Image, containImage, containerBg }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
      <div className={
        containImage
          ? `relative w-full h-56 overflow-hidden ${containerBg || 'bg-black'} flex items-center justify-center p-4`
          : "relative w-full h-56 overflow-hidden"
      }>
        {/* 2. Use the imported image in the src attribute */}
        <img
          src={Image || projectImage}
          alt={Title || 'Static Project'}
          className={
            containImage
              ? "w-full h-full object-contain transition-transform duration-500 scale-105 group-hover:scale-110"
              : "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          }
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{Title}</h3>
        <p className="text-slate-400 text-sm mb-4 h-16 overflow-hidden">
          {Description}
        </p>
        <a
          href={Link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-400 font-semibold transition-all group-hover:text-purple-300 group-hover:gap-3"
        >
          Live demo
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
        </a>
      </div>
    </div>
  );
};

export default StaticProjectCard;