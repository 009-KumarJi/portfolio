"use client";

import React from 'react';

export const AboutContent: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-[#0A246A] mb-4">About Me</h2>
      <hr className="mb-4 border-[#D9D4C8]" />
      <p className="mb-4 text-sm">
        Hello! I&apos;m Krishna Kumar, a passionate software developer and engineering student from IET DAVV, Indore.
        I&apos;m currently pursuing my Bachelor of Engineering degree with a focus on software development and web technologies.
      </p>
      <p className="mb-4 text-sm">
        I specialize in full-stack development with expertise in both front-end and back-end technologies.
        My technical journey includes working with React, Node.js, Express, MongoDB, and various other modern
        frameworks and tools.
      </p>
      <p className="mb-4 text-sm">
        Besides coding, I&apos;m actively involved in extracurricular activities including coordinating events like 
        TEDxDAVV, technical fests, and sports carnivals. I also contribute to the Engineers Without Borders India chapter
        at my university.
      </p>
      <p className="text-sm">
        I&apos;m passionate about building scalable and user-friendly applications that solve real-world problems.
        I&apos;m currently looking for opportunities to apply my skills in challenging environments where I can continue to grow.
      </p>
      <div className="flex justify-end mt-6">
      <a href="/krishna_kumar_sde1.pdf" download>
        <button 
          className="bg-[#D9D4C8] border border-[#888888] rounded px-3 py-1 text-xs hover:bg-[#E3E1D3]"
          onClick={() => {}}
        >
          Download Resume
        </button>
        </a>
      </div>
    </div>
  );
};