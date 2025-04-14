"use client";

import Image from "next/image";
import { DesktopIconProps } from "@/types";

export const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onClick }) => {
  return (
    <div 
      className="w-[75px] text-center m-[5px] flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <Image 
        src={icon} 
        alt={label} 
        width={32} 
        height={32} 
        className="mb-1"
      />
      <span 
        className="text-white text-shadow text-xs max-w-[70px] break-words text-center"
        style={{ textShadow: '1px 1px 1px black' }}
      >
        {label}
      </span>
    </div>
  );
};