"use client";

import React from 'react';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';

export const ContactContent: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-[#0A246A] mb-4">Contact Me</h2>
      <hr className="mb-4 border-[#D9D4C8]" />
      
      <div className="mb-4 flex items-center space-x-2">
        <Image src={ICONS.MAIL} alt="mail" width={20} height={20} />
        <a 
          href="mailto:krishna902kumar@gmail.com" 
          className="text-[#0A246A] text-sm underline hover:text-blue-700"
          onClick={()=>{}}
        >
          krishna902kumar@gmail.com
        </a>
      </div>

      <div className="mb-4 flex items-center space-x-2">
        <Image src={ICONS.PHONE} alt="phone" width={20} height={20} />
        <a 
          href="tel:+919755296678" 
          className="text-[#0A246A] text-sm underline hover:text-blue-700"
          onClick={()=>{}}
        >
          +91 97552 96678
        </a>
      </div>

      <div className="mb-4 flex items-center space-x-2">
        <Image src={ICONS.WHATSAPP} alt="whatsapp" width={20} height={20} />
        <a 
          href="https://wa.me/919755296678" 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={()=>{}}
          className="text-[#0A246A] text-sm underline hover:text-green-600"
        >
          Chat on WhatsApp
        </a>
      </div>

      <div className="mb-4 flex items-center space-x-2">
        <Image src={ICONS.INSTA} alt="instagram" width={20} height={20} />
        <a 
          href="https://instagram.com/krishhnaa.k" // replace with your actual Instagram handle
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={()=>{}}
          className="text-[#0A246A] text-sm underline hover:text-pink-600"
        >
          Follow on Instagram
        </a>
      </div>
    </div>
  );
};
