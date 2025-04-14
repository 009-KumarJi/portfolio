"use client";

import React from 'react';

export const WorkExperienceContent: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-[#0A246A] mb-4">Work Experience</h2>
      <hr className="mb-4 border-[#D9D4C8]" />
      
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <h3 className="font-bold text-sm">Packaged App Developer Associate Intern</h3>
          <span className="text-xs">Feb 2025 - June 2025</span>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-sm">Accenture India</p>
          <p className="text-sm">Bengaluru, India</p>
        </div>
        <p className="text-sm mb-2">Working on enterprise software solutions and developing application packages for clients.</p>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <h3 className="font-bold text-sm">Full Stack Developer Intern</h3>
          <span className="text-xs">Aug 2024 - Dec 2024</span>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-sm">Envint Global</p>
          <p className="text-sm">Remote</p>
        </div>
        <ul className="list-disc pl-5 text-sm mb-2">
          <li>Developed a backend base for a new project from scratch, enabling future expansion.</li>
          <li>Implemented JWT-based authentication and integrated role-based access control (RBAC) for secure data access.</li>
          <li>Collaborated with front-end developers to ensure seamless integration of UI components with backend APIs.</li>
        </ul>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <h3 className="font-bold text-sm">JAMstack Developer Intern</h3>
          <span className="text-xs">Jun 2024 - Jul 2024</span>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-sm">WeFrameTech</p>
          <p className="text-sm">Remote</p>
        </div>
        <ul className="list-disc pl-5 text-sm mb-2">
          <li>Worked with headless CMS (Directus, MedusaJS) to optimize site performance and functionality.</li>
          <li>Enhanced content management integration through API-driven architecture with Node.js.</li>
          <li>Implemented modern web development practices focused on JavaScript, APIs, and Markup.</li>
        </ul>
      </div>
      
      <div className="border-t border-[#D9D4C8] pt-4 mt-4">
        <p className="text-sm italic">
          For more details about my work experience, please refer to my complete resume or connect with me on LinkedIn.
        </p>
      </div>
    </div>
  );
};