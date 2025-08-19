"use client";

import React from 'react';

export const ResumeContent: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-[#0A246A] mb-4">Krishna Kumar</h2>
      <hr className="mb-4 border-[#D9D4C8]" />
      
      <div className="text-sm mb-4">
        <p className="mb-2">+919755296678 • <a href="mailto:krishna902kumar@gmail.com" className="text-blue-600 hover:underline">krishna902kumar@gmail.com</a></p>
        <p className="mb-2">
          <a href="https://linkedin.com/in/krishna-kumar-975b25186" className="text-blue-600 hover:underline">in/krishna-kumar-975b25186</a> • 
          <a href="https://github.com/009-KumarJi" className="text-blue-600 hover:underline ml-1">github/009-KumarJi</a> •
          <a href="https://portfolio-wheat-delta-67.vercel.app/" className="text-blue-600 hover:underline ml-1">Portfolio</a>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-bold text-[#0A246A]">EDUCATION</h3>
        <hr className="my-1 border-[#D9D4C8]" />
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-sm">Institute of Engineering & Technology, Devi Ahilya Vishwavidyalaya</p>
            <p className="text-sm">Indore, MP, India</p>
            <p className="text-sm">Bachelor of Engineering in Mechanical Engineering, CGPA - 7.49</p>
          </div>
          <div className="text-sm">Oct 2021 - May 2025</div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold text-[#0A246A]">SKILLS</h3>
        <hr className="my-1 border-[#D9D4C8]" />
        <p className="text-sm"><span className="font-semibold">Languages:</span> JAVA, Python, JavaScript, C++, HTML, CSS</p>
        <p className="text-sm"><span className="font-semibold">Frameworks:</span> Node.js, Spring Boot, Express.js, ReactJS, Material-UI</p>
        <p className="text-sm"><span className="font-semibold">Databases:</span> MySQL, PostgreSQL, MongoDB, Redis, AWS DynamoDB</p>
        <p className="text-sm"><span className="font-semibold">Tools:</span> Postman, Git, Docker</p>
        <p className="text-sm"><span className="font-semibold">Technologies:</span> REST API, Microservices, AWS</p>
      </div>

      <div className="mb-4">
        <h3 className="font-bold text-[#0A246A]">WORK EXPERIENCE</h3>
        <hr className="my-1 border-[#D9D4C8]" />
        
        <div className="mb-2">
          <div className="flex justify-between">
            <p className="font-semibold text-sm">Packaged App Developer Associate Intern</p>
            <p className="text-sm">Feb 2025 - June 2025</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">Accenture India</p>
            <p className="text-sm">Bengaluru, India</p>
          </div>
          <ul className="list-disc pl-5 text-sm">
            <li>Worked with Siemens Technomatix Plant Simulation leveraging SimTalk programming during the project phase.</li>
            <li>Utilized Python, AWS, and MySQL during the training period.</li>
          </ul>
        </div>
        
        <div className="mb-2">
          <div className="flex justify-between">
            <p className="font-semibold text-sm">Full Stack Developer Intern</p>
            <p className="text-sm">Aug 2024 - Dec 2024</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">Envint Global</p>
            <p className="text-sm">Remote</p>
          </div>
          <ul className="list-disc pl-5 text-sm">
            <li>Developed a backend base for a new project from scratch, enabling future expansion.</li>
            <li>Implemented JWT-based authentication and integrated role-based access control (RBAC) for secure data access.</li>
          </ul>
        </div>
        
        <div className="mb-2">
          <div className="flex justify-between">
            <p className="font-semibold text-sm">JAMstack Developer Intern</p>
            <p className="text-sm">Jun 2024 - Jul 2024</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">WeFrameTech</p>
            <p className="text-sm">Remote</p>
          </div>
          <ul className="list-disc pl-5 text-sm">
            <li>Worked with headless CMS (Directus, MedusaJS) to optimize site performance and functionality.</li>
            <li>Enhanced content management integration through API-driven architecture with Node.js.</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold text-[#0A246A]">PROJECTS</h3>
        <hr className="my-1 border-[#D9D4C8]" />
        <ul className="list-disc pl-5 text-sm">
          <li className="mb-1">
            <span className="font-semibold">NoviConnect-ChatApp</span> – A real-time chat application enabling seamless communication through features like group chat, user presence badges, and JWT authentication. <span className="font-semibold">Tech Stack:</span> ReactJS, Node.js, Express.js, MongoDB, Socket.IO.
            <a href="https://github.com/009-KumarJi/NoviConnect" className="text-blue-600 hover:underline ml-1">GitHub</a> |
            <a href="https://noviconnect-client.vercel.app/" className="text-blue-600 hover:underline ml-1">Demo</a>
          </li>
          <li className="mb-1">
            <span className="font-semibold">Inventory Management System</span> – Python-based system for inventory tracking with product management and user-friendly UI. <span className="font-semibold">Tech Stack:</span> Flask, MySQL, HTML, CSS.
            <a href="https://github.com/009-KumarJi/inventory-management" className="text-blue-600 hover:underline ml-1">GitHub</a>
          </li>
          <li>
            <span className="font-semibold">Article CMS</span> – Backend for managing articles with RBAC for roles like User, Moderator, and Admin. <span className="font-semibold">Tech Stack:</span> Node.js, Express.js, MongoDB, Cloudinary.
            <a href="https://www.github.com/009-KumarJi/article_cms" className="text-blue-600 hover:underline ml-1">GitHub</a>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold text-[#0A246A]">EXTRACURRICULAR ACTIVITIES</h3>
        <hr className="my-1 border-[#D9D4C8]" />
        <ul className="list-disc pl-5 text-sm">
          <li>Sponsorship Coordinator, FeedBox Club (Mar 2023 - Dec 2024)</li>
          <li>Coordinator, TEDxDAVV 2K23 and Invento - Tech Fest IET DAVV 2K23</li>
          <li>Technical Team Member, EWB-India, IET Student Chapter (Feb 2023 - Dec 2024)</li>
          <li>Smart India Hackathon - Selected for round 2</li>
          <li>Organizer - RAAS 2K24 - Garba Event IET DAVV</li>
          <li>Head coordinator - Sports Carnival ISC 2k24</li>
        </ul>
      </div>
      
    <div className="flex justify-end mt-4">
        <a href="/krishna_kumar_sde1.pdf" download>
          <button className="bg-[#D9D4C8] border border-[#888888] rounded px-3 py-1 text-xs hover:bg-[#E3E1D3]">
            Download PDF
          </button>
        </a>
      </div>
    </div>
  );
};