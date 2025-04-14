"use client";

import React from 'react';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';
import { WindowsState } from '@/types';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  openWindow: (windowId: keyof WindowsState) => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onClose, openWindow }) => {
  if (!isOpen) return null;
  
  // Function to handle external navigation without using window directly
  const handleExternalNavigation = (url: string) => {
    // Using this approach avoids the hydration mismatch
    window.location.href = url;
  };
  
  return (
    <div 
      className="absolute bottom-[30px] left-0 z-20 w-[320px] border border-[#0A246A] shadow-lg bg-[#ECE9D8]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-12 bg-gradient-to-b from-[#235AD1] to-[#4591D6] px-2 py-1 flex items-center">
        <div className="bg-[#4579ca] h-10 w-10 flex items-center justify-center rounded-full border-2 border-white">
          <Image src={ICONS.USER} alt="User" width={32} height={32} className="rounded-full" />
        </div>
        <div className="text-white font-bold ml-2 text-lg">
          Portfolio User
        </div>
      </div>
      
      <div className="flex h-[400px]">
        <div className="w-[40px] bg-[#D3CDBF] h-full">
          {/* Left sidebar */}
        </div>
        
        <div className="flex-1 p-1">
          <div 
            className="menu-item flex items-center p-1 hover:bg-[#316AC5] hover:text-white cursor-pointer"
            onClick={() => {
              openWindow("about");
              onClose();
            }}
          >
            <Image src={ICONS.MY_COMPUTER} alt="About" width={24} height={24} className="mr-2" />
            <div>
              <div className="font-bold text-sm">About Me</div>
              <div className="text-xs">View my profile</div>
            </div>
          </div>
          
          <div 
            className="menu-item flex items-center p-1 hover:bg-[#316AC5] hover:text-white cursor-pointer"
            onClick={() => {
              openWindow("projects");
              onClose();
            }}
          >
            <Image src={ICONS.FOLDER} alt="Projects" width={24} height={24} className="mr-2" />
            <div>
              <div className="font-bold text-sm">My Projects</div>
              <div className="text-xs">View my work</div>
            </div>
          </div>
          
          <div 
            className="menu-item flex items-center p-1 hover:bg-[#316AC5] hover:text-white cursor-pointer"
            onClick={() => {
              openWindow("skills");
              onClose();
            }}
          >
            <Image src={ICONS.NOTEPAD} alt="Skills" width={24} height={24} className="mr-2" />
            <div>
              <div className="font-bold text-sm">Skills</div>
              <div className="text-xs">View my skillset</div>
            </div>
          </div>
          
          <div 
            className="menu-item flex items-center p-1 hover:bg-[#316AC5] hover:text-white cursor-pointer"
            onClick={() => {
              openWindow("contact");
              onClose();
            }}
          >
            <Image src={ICONS.MSN} alt="Contact" width={24} height={24} className="mr-2" />
            <div>
              <div className="font-bold text-sm">Contact Me</div>
              <div className="text-xs">Send me a message</div>
            </div>
          </div>
          
          <div 
            className="menu-item flex items-center p-1 hover:bg-[#316AC5] hover:text-white cursor-pointer"
            onClick={() => {
              openWindow("resume");
              onClose();
            }}
          >
            <Image src={ICONS.RESUME} alt="Resume" width={24} height={24} className="mr-2" />
            <div>
              <div className="font-bold text-sm">Resume</div>
              <div className="text-xs">View my professional resume</div>
            </div>
          </div>
          
          <div className="border-t border-[#C5C2B8] my-2"></div>
          
          <div className="menu-item flex items-center p-1 hover:bg-[#316AC5] hover:text-white cursor-pointer">
            <Image src={ICONS.SYSTEM} alt="Settings" width={24} height={24} className="mr-2" />
            <div>
              <div className="font-bold text-sm">Settings</div>
              <div className="text-xs">Configure portfolio</div>
            </div>
          </div>
          
          <div className="border-t border-[#C5C2B8] my-2"></div>
          
          <div 
            className="menu-item flex items-center p-1 hover:bg-[#316AC5] hover:text-white cursor-pointer"
            onClick={() => handleExternalNavigation('https://github.com')}
          >
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">
              X
            </div>
            <div>
              <div className="font-bold text-sm">Turn Off Portfolio</div>
              <div className="text-xs">Exit the experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};