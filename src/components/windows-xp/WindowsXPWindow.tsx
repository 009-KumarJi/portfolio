"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { WindowProps } from "@/types";
import { playSoundEffects } from "@/constants/sounds";

export const WindowsXPWindow: React.FC<WindowProps & { isMobile?: boolean }> = ({
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
  onActivate,
  isMobile = false,
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
  const [isMobileDragging, setIsMobileDragging] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const touchStartPos = useRef<{ x: number, y: number } | null>(null);

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
      
      // Only adjust window position if it goes off-screen after resize
      if (!isMaximized) {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        
        if (position.x > maxX || position.y > maxY) {
          setPosition({
            x: Math.min(position.x, maxX),
            y: Math.min(position.y, maxY)
          });
        }
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMaximized, position]);

  // Set initial mobile dimensions only at mount, preserving desktop sizes otherwise
  useEffect(() => {
    if (isMobile) {
      setDimensions({
        width: Math.min(initialWidth, window.innerWidth * 0.95),
        height: Math.min(initialHeight, window.innerHeight * 0.7)
      });
      
      // For mobile, set initial position to center
      // Only set position on initial render, not after dragging
      if (!isMobileDragging && position.x === initialX && position.y === initialY) {
        setPosition({
          x: Math.max(0, (window.innerWidth - initialWidth) / 2),
          y: Math.max(0, window.innerHeight * 0.1)
        });
      }
    }
  }, [isMobile, initialWidth, initialHeight, initialX, initialY, position.x, position.y]);

  // Handle touch events for mobile dragging
  useEffect(() => {
    const headerElement = windowRef.current?.querySelector('.window-header');
    
    const handleTouchStart = (e: TouchEvent) => {
      if (isMaximized) return;
      if (onActivate) onActivate(id);

      const touch = e.touches[0];
      touchStartPos.current = { x: touch.clientX, y: touch.clientY };
      setIsMobileDragging(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMobileDragging || !touchStartPos.current) return;
      
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartPos.current.x;
      const deltaY = touch.clientY - touchStartPos.current.y;
      
      setPosition(prev => {
        // Calculate new position with the delta from the current touch position
        const newX = prev.x + deltaX;
        const newY = prev.y + deltaY;
        
        // Prevent dragging window off-screen
        const maxX = Math.max(0, window.innerWidth - dimensions.width * 0.2);
        const maxY = Math.max(0, window.innerHeight - dimensions.height * 0.2);
        
        return {
          x: Math.max(0 - dimensions.width * 0.2, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        };
      });
      
      // Update the touch start position for the next move event
      touchStartPos.current = { x: touch.clientX, y: touch.clientY };
      
      // Prevent page scrolling while dragging
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      // Important: Don't reset position on touch end
      setIsMobileDragging(false);
      touchStartPos.current = null;
    };

    if (headerElement && isMobile) {
      headerElement.addEventListener('touchstart', handleTouchStart as EventListener);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (headerElement && isMobile) {
        headerElement.removeEventListener('touchstart', handleTouchStart as EventListener);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [id, isMobile, isMobileDragging, dimensions, isMaximized, onActivate]);

  const startDrag = (e: React.MouseEvent) => {
    if (isMobile) return; // Use touch events for mobile instead
    
    e.preventDefault();
    if (!isMaximized) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
      
      if (onActivate) {
        onActivate(id);
      }
    }
  };

  const onDrag = (e: React.MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // Prevent dragging window off-screen
      const maxX = Math.max(0, window.innerWidth - dimensions.width * 0.2);
      const maxY = Math.max(0, window.innerHeight - dimensions.height * 0.2);
      
      setPosition({
        x: Math.max(0 - dimensions.width * 0.2, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      });
    }
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSoundEffects.minimize();
    if (onMinimize) {
      onMinimize();
    }
  };

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    
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
      playSoundEffects.minimize();
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
      playSoundEffects.maximize();
    }
    
    if (onMaximize) {
      onMaximize();
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSoundEffects.closeWindow();
    if (onClose) {
      onClose();
    }
  };

  if (isMinimized) return null;

  // Use dynamic position that considers both desktop and mobile positioning
  const windowPosition = {
    left: position.x,
    top: position.y
  };

  return (
    <div
      id={id}
      ref={windowRef}
      className="absolute border border-[#0A246A] rounded-t-md shadow-md bg-white overflow-hidden"
      style={{
        left: windowPosition.left,
        top: windowPosition.top,
        width: dimensions.width,
        height: dimensions.height,
        zIndex: isActive ? 100 : 10,
        maxHeight: isMobile ? window.innerHeight - 40 : undefined,
      }}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onClick={() => onActivate && onActivate(id)}
    >
      <div
        className={`window-header flex justify-between items-center px-2 py-1 text-white text-xs font-bold ${
          isActive 
            ? "bg-gradient-to-b from-[#0A246A] to-[#3A6EA5]" 
            : "bg-gradient-to-b from-[#7F97AE] to-[#B5C7DE]"
        }`}
        onMouseDown={startDrag}
        onDoubleClick={handleMaximize}
      >
        <div className="flex items-center">
          <Image src={icon} alt="" width={16} height={16} className="mr-2 inline-block" />
          <span>{title}</span>
        </div>
        <div className="flex space-x-1">
          <button 
            className="w-[16px] h-[14px] bg-[#D9D4C8] border border-[#888888] rounded hover:bg-[#E3E1D3] flex items-center justify-center"
            onClick={handleMinimize}
          >
            <div className="w-[8px] h-[2px] bg-black"></div>
          </button>
          <button 
            className="w-[16px] h-[14px] bg-[#D9D4C8] border border-[#888888] rounded hover:bg-[#E3E1D3] flex items-center justify-center"
            onClick={handleMaximize}
          >
            <div className={`${isMaximized ? "w-[6px] h-[6px] border-t-2 border-l-2 border-r-0 border-b-0" : "w-[8px] h-[8px]"} border border-black`}></div>
          </button>
          <button 
            className="w-[16px] h-[14px] bg-[#D9D4C8] border border-[#888888] rounded hover:bg-[#E3E1D3] flex items-center justify-center"
            onClick={handleClose}
          >
            <div className="text-black font-bold text-xs leading-none">×</div>
          </button>
        </div>
      </div>
      <div 
        className="p-2 overflow-auto text-black" 
        style={{ 
          height: `calc(100% - 24px)`,
          overscrollBehavior: 'contain' 
        }}
      >
        {content}
      </div>
    </div>
  );
};