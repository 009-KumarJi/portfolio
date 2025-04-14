"use client";

import React from 'react';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';

export const ProjectsContent: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-[#0A246A] mb-4">My Projects</h2>
      <hr className="mb-4 border-[#D9D4C8]" />
      
      <div className="mb-4">
        <div className="border border-[#0A246A] rounded-t-md shadow-md bg-white w-full">
          <div className="bg-gradient-to-b from-[#0A246A] to-[#3A6EA5] px-2 py-1 text-white text-xs font-bold flex items-center">
            <Image src={ICONS.FOLDER_OPEN} alt="" width={16} height={16} className="mr-2" />
            <div>NoviConnect - Real-time Chat App</div>
          </div>
          <div className="p-3 text-sm">
            <p className="mb-2">A real-time chat application enabling seamless communication through features like group chat, user presence badges, and JWT authentication.</p>
            <p className="mb-2"><span className="font-semibold">Tech Stack:</span> ReactJS, Node.js, Express.js, MongoDB, Socket.IO</p>
            <div className="flex justify-end space-x-2">
              <button 
                className="bg-[#D9D4C8] border border-[#888888] rounded px-3 py-1 text-xs hover:bg-[#E3E1D3]"
                onClick={() => window.open('https://github.com/009-KumarJi/NoviConnect', '_blank')}
              >
                GitHub Repository
              </button>
              <button className="bg-[#D9D4C8] border border-[#888888] rounded px-3 py-1 text-xs hover:bg-[#E3E1D3]">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="border border-[#0A246A] rounded-t-md shadow-md bg-white w-full">
          <div className="bg-gradient-to-b from-[#0A246A] to-[#3A6EA5] px-2 py-1 text-white text-xs font-bold flex items-center">
            <Image src={ICONS.FOLDER_OPEN} alt="" width={16} height={16} className="mr-2" />
            <div>Inventory Management System</div>
          </div>
          <div className="p-3 text-sm">
            <p className="mb-2">Python-based system for inventory tracking with product management and user-friendly UI.</p>
            <p className="mb-2"><span className="font-semibold">Tech Stack:</span> Flask, MySQL, HTML, CSS</p>
            <div className="flex justify-end">
              <button 
                className="bg-[#D9D4C8] border border-[#888888] rounded px-3 py-1 text-xs hover:bg-[#E3E1D3]"
                onClick={() => window.open('https://github.com/009-KumarJi/inventory-management', '_blank')}
              >
                GitHub Repository
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="border border-[#0A246A] rounded-t-md shadow-md bg-white w-full">
          <div className="bg-gradient-to-b from-[#0A246A] to-[#3A6EA5] px-2 py-1 text-white text-xs font-bold flex items-center">
            <Image src={ICONS.FOLDER_OPEN} alt="" width={16} height={16} className="mr-2" />
            <div>Article CMS</div>
          </div>
          <div className="p-3 text-sm">
            <p className="mb-2">Backend for managing articles with Role Based Access Control (RBAC) for roles like User, Moderator, and Admin.</p>
            <p className="mb-2"><span className="font-semibold">Tech Stack:</span> Node.js, Express.js, MongoDB, Cloudinary</p>
            <div className="flex justify-end">
              <button 
                className="bg-[#D9D4C8] border border-[#888888] rounded px-3 py-1 text-xs hover:bg-[#E3E1D3]"
                onClick={() => window.open('https://github.com/009-KumarJi/article_cms', '_blank')}
              >
                GitHub Repository
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="border border-[#0A246A] rounded-t-md shadow-md bg-white w-full">
          <div className="bg-gradient-to-b from-[#0A246A] to-[#3A6EA5] px-2 py-1 text-white text-xs font-bold flex items-center">
            <Image src={ICONS.FOLDER_OPEN} alt="" width={16} height={16} className="mr-2" />
            <div>Windows XP Portfolio</div>
          </div>
          <div className="p-3 text-sm">
            <p className="mb-2">A nostalgic portfolio website themed after Windows XP, featuring interactive windows and a realistic Windows XP interface.</p>
            <p className="mb-2"><span className="font-semibold">Tech Stack:</span> Next.js, React, TypeScript, Tailwind CSS</p>
            <div className="flex justify-end space-x-2">
              <button 
                className="bg-[#D9D4C8] border border-[#888888] rounded px-3 py-1 text-xs hover:bg-[#E3E1D3]"
              >
                Current Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};