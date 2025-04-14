"use client";

import Image from "next/image";
import { DesktopIconProps } from "@/types";

export const DesktopIcon: React.FC<DesktopIconProps & { isMobile?: boolean }> = ({ 
  icon, 
  label, 
  onClick,
  isMobile = false
}) => {
  return (
    <div 
      className={`flex flex-col items-start ${isMobile ? 'p-1' : 'p-2'} cursor-pointer hover:bg-black/10 rounded`}
      onClick={onClick}
    >
      <Image 
        src={icon} 
        alt={label} 
        width={isMobile ? 32 : 48} 
        height={isMobile ? 32 : 48} 
        className="mb-1" 
      />
      <div className={`text-left text-white text-shadow-sm ${isMobile ? 'text-xs' : 'text-sm'} max-w-[80px] break-words`}>
        {label}
      </div>
    </div>
  );
};