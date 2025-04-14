"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WindowProps } from "@/types";

export const WindowsXPWindow: React.FC<WindowProps> = ({
  title,
  icon,
  id,
  initialX = 50,
  initialY = 50,
  initialWidth = 500,
  initialHeight = 400,
  isActive = false,
  isMinimized = false,
  content,
  onMinimize,
  onMaximize,
  onClose,
  onActivate,  // Add a new prop for activating the window
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: initialWidth, height: initialHeight });
  const [isMaximized, setIsMaximized] = useState(false);
  const [previousState, setPreviousState] = useState({ 
    x: initialX, 
    y: initialY, 
    width: initialWidth, 
    height: initialHeight 
  });

  useEffect(() => {
    // Handle window resizing for maximized state
    function handleResize() {
      if (isMaximized) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight - 30 // Account for taskbar
        });
        setPosition({ x: 0, y: 0 });
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMaximized]);

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isMaximized) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const onDrag = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const handleMinimize = () => {
    if (onMinimize) {
      onMinimize();
    }
  };

  const handleMaximize = () => {
    if (isMaximized) {
      // Restore to previous size
      setDimensions({
        width: previousState.width,
        height: previousState.height
      });
      setPosition({
        x: previousState.x,
        y: previousState.y
      });
      setIsMaximized(false);
    } else {
      // Save current state
      setPreviousState({
        x: position.x,
        y: position.y,
        width: dimensions.width,
        height: dimensions.height
      });
      
      // Maximize
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight - 30 // Account for taskbar
      });
      setPosition({ x: 0, y: 0 });
      setIsMaximized(true);
    }
    
    if (onMaximize) {
      onMaximize();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  if (isMinimized) return null;

  return (
    <div
      id={id}
      className="absolute border border-[#0A246A] rounded-t-md shadow-md bg-white overflow-hidden"
      style={{
        left: position.x,
        top: position.y,
        width: dimensions.width,
        height: dimensions.height,
        zIndex: isActive ? 100 : 10,
      }}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onClick={() => onActivate && onActivate(id)}  // Add onClick handler to activate the window
    >
      <div
        className={`flex justify-between items-center px-2 py-1 text-white text-xs font-bold ${
          isActive 
            ? "bg-gradient-to-b from-[#0A246A] to-[#3A6EA5]" 
            : "bg-gradient-to-b from-[#7F97AE] to-[#B5C7DE]"
        }`}
        onMouseDown={startDrag}
      >
        <div className="flex items-center">
          <Image src={icon} alt="" width={16} height={16} className="mr-2 inline-block" />
          <span>{title}</span>
        </div>
        <div className="flex space-x-1">
          <button 
            className="w-[16px] h-[14px] bg-[#D9D4C8] border border-[#888888] rounded hover:bg-[#E3E1D3] flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              handleMinimize();
            }}
          >
            <div className="w-[8px] h-[2px] bg-black"></div>
          </button>
          <button 
            className="w-[16px] h-[14px] bg-[#D9D4C8] border border-[#888888] rounded hover:bg-[#E3E1D3] flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              handleMaximize();
            }}
          >
            <div className={`${isMaximized ? "w-[6px] h-[6px] border-t-2 border-l-2 border-r-0 border-b-0" : "w-[8px] h-[8px]"} border border-black`}></div>
          </button>
          <button 
            className="w-[16px] h-[14px] bg-[#D9D4C8] border border-[#888888] rounded hover:bg-[#E3E1D3] flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          >
            <div className="text-black font-bold text-xs leading-none">×</div>
          </button>
        </div>
      </div>
      <div className="p-2 overflow-auto text-black" style={{ height: `calc(100% - 24px)` }}>
        {content}
      </div>
    </div>
  );
};