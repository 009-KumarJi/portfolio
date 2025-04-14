"use client";

import React from 'react';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';

export const SkillsContent: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-[#0A246A] mb-4">Skills</h2>
      <hr className="mb-4 border-[#D9D4C8]" />
      
      <div className="border border-[#0A246A] rounded-t-md shadow-md bg-white w-full mb-4">
        <div className="bg-gradient-to-b from-[#0A246A] to-[#3A6EA5] px-2 py-1 text-white text-xs font-bold flex items-center">
          <Image src={ICONS.NOTEPAD} alt="" width={16} height={16} className="mr-2" />
          <div>Languages</div>
        </div>
        <div className="p-3">
          <ul className="list-disc pl-6 text-sm">
            <li className="mb-1">JAVA</li>
            <li className="mb-1">Python</li>
            <li className="mb-1">JavaScript</li>
            <li className="mb-1">C++</li>
            <li className="mb-1">HTML</li>
            <li className="mb-1">CSS</li>
          </ul>
        </div>
      </div>
      
      <div className="border border-[#0A246A] rounded-t-md shadow-md bg-white w-full mb-4">
        <div className="bg-gradient-to-b from-[#0A246A] to-[#3A6EA5] px-2 py-1 text-white text-xs font-bold flex items-center">
          <Image src={ICONS.SYSTEM} alt="" width={16} height={16} className="mr-2" />
          <div>Frameworks</div>
        </div>
        <div className="p-3">
          <ul className="list-disc pl-6 text-sm">
            <li className="mb-1">Node.js</li>
            <li className="mb-1">Spring Boot</li>
            <li className="mb-1">Express.js</li>
            <li className="mb-1">ReactJS</li>
            <li className="mb-1">Material-UI</li>
          </ul>
        </div>
      </div>
      
      <div className="border border-[#0A246A] rounded-t-md shadow-md bg-white w-full mb-4">
        <div className="bg-gradient-to-b from-[#0A246A] to-[#3A6EA5] px-2 py-1 text-white text-xs font-bold flex items-center">
          <Image src={ICONS.FOLDER} alt="" width={16} height={16} className="mr-2" />
          <div>Databases</div>
        </div>
        <div className="p-3">
          <ul className="list-disc pl-6 text-sm">
            <li className="mb-1">MySQL</li>
            <li className="mb-1">PostgreSQL</li>
            <li className="mb-1">MongoDB</li>
            <li className="mb-1">Redis</li>
            <li className="mb-1">AWS DynamoDB</li>
          </ul>
        </div>
      </div>
      
      <div className="border border-[#0A246A] rounded-t-md shadow-md bg-white w-full mb-4">
        <div className="bg-gradient-to-b from-[#0A246A] to-[#3A6EA5] px-2 py-1 text-white text-xs font-bold flex items-center">
          <Image src={ICONS.USER} alt="" width={16} height={16} className="mr-2" />
          <div>Tools & Technologies</div>
        </div>
        <div className="p-3">
          <ul className="list-disc pl-6 text-sm">
            <li className="mb-1">Postman</li>
            <li className="mb-1">Git</li>
            <li className="mb-1">Docker</li>
            <li className="mb-1">REST API</li>
            <li className="mb-1">Microservices</li>
            <li className="mb-1">AWS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};