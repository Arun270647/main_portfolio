import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// 1. Import your static image from the assets folder
import projectImage from '../assets/image_c53cb8.jpg';

const StaticProjectCard = ({ Title, Description, Link }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
      <div className="relative">
        {/* 2. Use the imported image in the src attribute */}
        <img
          src={projectImage}
          alt={Title || 'Static Project'}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
          View Project
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
        </a>
      </div>
    </div>
  );
};

export default StaticProjectCard;