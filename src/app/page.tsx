"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ICONS } from "@/constants/icons";
import { WindowsState } from "@/types";
import { WindowsXPWindow } from "@/components/windows-xp/WindowsXPWindow";
import { DesktopIcon } from "@/components/windows-xp/DesktopIcon";
import { AboutContent } from "@/components/windows-xp/AboutContent";
import { ProjectsContent } from "@/components/windows-xp/ProjectsContent";
import { SkillsContent } from "@/components/windows-xp/SkillsContent";
import { ContactContent } from "@/components/windows-xp/ContactContent";
import { ResumeContent } from "@/components/windows-xp/ResumeContent";
import { WorkExperienceContent } from "@/components/windows-xp/WorkExperienceContent";
import dynamic from 'next/dynamic';
import { StartMenu } from "@/components/windows-xp/StartMenu";

// Use dynamic import with ssr: false to prevent hydration mismatch
const Portfolio = dynamic(() => Promise.resolve(PortfolioContent), {
  ssr: false
});

function PortfolioContent() {
  const [windows, setWindows] = useState<WindowsState>({
    about: false,
    projects: false,
    contact: false,
    skills: false,
    resume: false,
    workExperience: false,
    minimized: {
      about: false,
      projects: false,
      contact: false,
      skills: false,
      resume: false,
      workExperience: false,
    }
  });

  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if on mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update time
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    };
    
    // Initial update
    updateTime();
    
    // Update time every second
    const timer = setInterval(updateTime, 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []);

  // Close start menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (startMenuOpen) {
        setStartMenuOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [startMenuOpen]);

  // Helper function to get window positions based on device type
  const getWindowPosition = (windowId: string) => {
    // For desktop, use predefined positions
    const desktopPositions = {
      about: { x: 50, y: 50 },
      projects: { x: 80, y: 80 },
      skills: { x: 110, y: 110 },
      contact: { x: 140, y: 140 },
      resume: { x: 90, y: 90 },
      workExperience: { x: 120, y: 120 }
    };
    
    // Default desktop values
    const defaultValues = {
      initialX: desktopPositions[windowId as keyof typeof desktopPositions]?.x || 50,
      initialY: desktopPositions[windowId as keyof typeof desktopPositions]?.y || 50,
      initialWidth: windowId === 'resume' || windowId === 'workExperience' ? 620 : 500,
      initialHeight: windowId === 'resume' || windowId === 'workExperience' ? 500 : 400
    };
    
    // For mobile devices, return modified values
    if (isMobile) {
      return {
        initialX: defaultValues.initialX,
        initialY: defaultValues.initialY,
        initialWidth: Math.min(window.innerWidth * 0.95, defaultValues.initialWidth),
        initialHeight: Math.min(window.innerHeight * 0.7, defaultValues.initialHeight)
      };
    }
    
    // Otherwise return desktop values
    return defaultValues;
  };

  const openWindow = (windowId: keyof Omit<WindowsState, 'minimized'>) => {
    setWindows(prev => ({
      ...prev,
      [windowId]: true,
      minimized: {
        ...prev.minimized,
        [windowId]: false
      }
    }));
    setActiveWindow(windowId);
    setStartMenuOpen(false); // Close start menu when opening a window
  };

  const minimizeWindow = (windowId: keyof Omit<WindowsState, 'minimized'>) => {
    setWindows(prev => ({
      ...prev,
      minimized: {
        ...prev.minimized,
        [windowId]: true
      }
    }));
    
    // If this window was active, find another window to make active
    if (activeWindow === windowId) {
      const activeWindows = Object.entries(windows)
        .filter(([key, isOpen]) => key !== 'minimized' && isOpen && key !== windowId && !windows.minimized[key as keyof Omit<WindowsState, 'minimized'>])
        .map(([key]) => key);
      
      if (activeWindows.length > 0) {
        setActiveWindow(activeWindows[0] as keyof Omit<WindowsState, 'minimized'>);
      } else {
        setActiveWindow(null);
      }
    }
  };

  const maximizeWindow = (windowId: keyof Omit<WindowsState, 'minimized'>) => {
    // Maximizing a window also makes it the active window
    setActiveWindow(windowId);
  };

  const closeWindow = (windowId: keyof Omit<WindowsState, 'minimized'>) => {
    setWindows(prev => ({
      ...prev,
      [windowId]: false,
      minimized: {
        ...prev.minimized,
        [windowId]: false
      }
    }));
    
    // If this window was active, find another window to make active
    if (activeWindow === windowId) {
      const activeWindows = Object.entries(windows)
        .filter(([key, isOpen]) => key !== 'minimized' && isOpen && key !== windowId && !windows.minimized[key as keyof Omit<WindowsState, 'minimized'>])
        .map(([key]) => key);
      
      if (activeWindows.length > 0) {
        setActiveWindow(activeWindows[0] as keyof Omit<WindowsState, 'minimized'>);
      } else {
        setActiveWindow(null);
      }
    }
  };

  const restoreWindow = (windowId: keyof Omit<WindowsState, 'minimized'>) => {
    setWindows(prev => ({
      ...prev,
      minimized: {
        ...prev.minimized,
        [windowId]: false
      }
    }));
    setActiveWindow(windowId);
  };

  const toggleStartMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the global click handler from closing the menu immediately
    setStartMenuOpen(!startMenuOpen);
  };

  // Function to render taskbar buttons
  const renderTaskbarButton = (
    windowId: keyof Omit<WindowsState, 'minimized'>,
    icon: string,
    label: string
  ) => {
    if (!windows[windowId]) return null;
    
    return (
      <button 
        className={`mx-0.5 flex items-center px-2 py-0.5 ${
          isMobile ? 'min-w-[40px] md:min-w-[120px]' : 'min-w-[120px]'
        } ${
          windows.minimized[windowId]
            ? "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
            : activeWindow === windowId 
              ? "bg-[#3A6EA5] text-white" 
              : "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
        } rounded`}
        onClick={() => windows.minimized[windowId] ? restoreWindow(windowId) : setActiveWindow(windowId)}
      >
        <Image src={icon} alt={label} width={16} height={16} className="mr-1" />
        <span className={`text-xs truncate ${isMobile ? 'hidden md:inline' : ''}`}>{label}</span>
      </button>
    );
  };

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundImage: `url(${isMobile ? ICONS.MY_MOB_PHOTU : ICONS.MY_PHOTU})`, backgroundSize: 'cover' }}
    >
      {/* Desktop Icons */}
      <div className={`p-4 ${isMobile ? 'grid grid-cols-3 gap-2 md:grid-cols-1 md:gap-4' : 'grid grid-cols-1 gap-4'}`}>
        <DesktopIcon
          icon={ICONS.MY_COMPUTER}
          label="About Me"
          onClick={() => openWindow("about")}
          isMobile={isMobile}
        />
        <DesktopIcon
          icon={ICONS.FOLDER}
          label="Projects"
          onClick={() => openWindow("projects")}
          isMobile={isMobile}
        />
        <DesktopIcon
          icon={ICONS.NOTEPAD}
          label="Skills"
          onClick={() => openWindow("skills")}
          isMobile={isMobile}
        />
        <DesktopIcon
          icon={ICONS.MSN}
          label="Contact"
          onClick={() => openWindow("contact")}
          isMobile={isMobile}
        />
        <DesktopIcon
          icon={ICONS.RESUME}
          label="Resume"
          onClick={() => openWindow("resume")}
          isMobile={isMobile}
        />
        <DesktopIcon
          icon={ICONS.WORK_EXP}
          label="Work Experience"
          onClick={() => openWindow("workExperience")}
          isMobile={isMobile}
        />
      </div>

      {/* Windows */}
      {windows.about && (
        <WindowsXPWindow
          title="About Me"
          icon={ICONS.MY_COMPUTER}
          id="about-window"
          initialX={getWindowPosition('about').initialX}
          initialY={getWindowPosition('about').initialY}
          initialWidth={getWindowPosition('about').initialWidth}
          initialHeight={getWindowPosition('about').initialHeight}
          isActive={activeWindow === "about"}
          isMinimized={windows.minimized.about}
          content={<AboutContent />}
          onMinimize={() => minimizeWindow("about")}
          onMaximize={() => maximizeWindow("about")}
          onClose={() => closeWindow("about")}
          onActivate={() => setActiveWindow("about")}
          isMobile={isMobile}
        />
      )}
      
      {windows.projects && (
        <WindowsXPWindow
          title="Projects"
          icon={ICONS.FOLDER}
          id="projects-window"
          initialX={getWindowPosition('projects').initialX}
          initialY={getWindowPosition('projects').initialY}
          initialWidth={getWindowPosition('projects').initialWidth}
          initialHeight={getWindowPosition('projects').initialHeight}
          isActive={activeWindow === "projects"}
          isMinimized={windows.minimized.projects}
          content={<ProjectsContent />}
          onMinimize={() => minimizeWindow("projects")}
          onMaximize={() => maximizeWindow("projects")}
          onClose={() => closeWindow("projects")}
          onActivate={() => setActiveWindow("projects")}
          isMobile={isMobile}
        />
      )}
      
      {windows.skills && (
        <WindowsXPWindow
          title="Skills"
          icon={ICONS.NOTEPAD}
          id="skills-window"
          initialX={getWindowPosition('skills').initialX}
          initialY={getWindowPosition('skills').initialY}
          initialWidth={getWindowPosition('skills').initialWidth}
          initialHeight={getWindowPosition('skills').initialHeight}
          isActive={activeWindow === "skills"}
          isMinimized={windows.minimized.skills}
          content={<SkillsContent />}
          onMinimize={() => minimizeWindow("skills")}
          onMaximize={() => maximizeWindow("skills")}
          onClose={() => closeWindow("skills")}
          onActivate={() => setActiveWindow("skills")}
          isMobile={isMobile}
        />
      )}
      
      {windows.contact && (
        <WindowsXPWindow
          title="Contact Me"
          icon={ICONS.MSN}
          id="contact-window"
          initialX={getWindowPosition('contact').initialX}
          initialY={getWindowPosition('contact').initialY}
          initialWidth={getWindowPosition('contact').initialWidth}
          initialHeight={getWindowPosition('contact').initialHeight}
          isActive={activeWindow === "contact"}
          isMinimized={windows.minimized.contact}
          content={<ContactContent />}
          onMinimize={() => minimizeWindow("contact")}
          onMaximize={() => maximizeWindow("contact")}
          onClose={() => closeWindow("contact")}
          onActivate={() => setActiveWindow("contact")}
          isMobile={isMobile}
        />
      )}
      
      {windows.resume && (
        <WindowsXPWindow
          title="Resume"
          icon={ICONS.RESUME}
          id="resume-window"
          initialX={getWindowPosition('resume').initialX}
          initialY={getWindowPosition('resume').initialY}
          initialWidth={getWindowPosition('resume').initialWidth}
          initialHeight={getWindowPosition('resume').initialHeight}
          isActive={activeWindow === "resume"}
          isMinimized={windows.minimized.resume}
          content={<ResumeContent />}
          onMinimize={() => minimizeWindow("resume")}
          onMaximize={() => maximizeWindow("resume")}
          onClose={() => closeWindow("resume")}
          onActivate={() => setActiveWindow("resume")}
          isMobile={isMobile}
        />
      )}

      {windows.workExperience && (
        <WindowsXPWindow
          title="Work Experience"
          icon={ICONS.WORK_EXP}
          id="workExperience-window"
          initialX={getWindowPosition('workExperience').initialX}
          initialY={getWindowPosition('workExperience').initialY}
          initialWidth={getWindowPosition('workExperience').initialWidth}
          initialHeight={getWindowPosition('workExperience').initialHeight}
          isActive={activeWindow === "workExperience"}
          isMinimized={windows.minimized.workExperience}
          content={<WorkExperienceContent />}
          onMinimize={() => minimizeWindow("workExperience")}
          onMaximize={() => maximizeWindow("workExperience")}
          onClose={() => closeWindow("workExperience")}
          onActivate={() => setActiveWindow("workExperience")}
          isMobile={isMobile}
        />
      )}

      {/* Start Menu */}
      <StartMenu 
        isOpen={startMenuOpen} 
        onClose={() => setStartMenuOpen(false)} 
        openWindow={openWindow}
        isMobile={isMobile}
      />

      {/* Windows XP Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 p-0.5 z-10 bg-[#0F5DD5] flex items-center shadow-[0_-1px_3px_rgba(0,0,0,0.3)]">
        <button 
          className={`bg-[#4C9E56] text-white font-bold py-0.5 px-2.5 h-6 ml-0.5 rounded flex items-center hover:bg-[#65B467] ${startMenuOpen ? 'bg-[#65B467]' : ''}`}
          onClick={toggleStartMenu}
        >
          <Image src={ICONS.STARTLOGO} alt="Start" width={20} height={20} className="mr-1 inline-block align-middle" />
          <span className={`text-sm ${isMobile ? 'hidden md:inline' : ''}`}>Start</span>
        </button>
        
        <div className="flex flex-1 mx-2 overflow-x-auto scrollbar-hide">
          {renderTaskbarButton("about", ICONS.MY_COMPUTER, "About Me")}
          {renderTaskbarButton("projects", ICONS.FOLDER, "Projects")}
          {renderTaskbarButton("skills", ICONS.NOTEPAD, "Skills")}
          {renderTaskbarButton("contact", ICONS.MSN, "Contact")}
          {renderTaskbarButton("resume", ICONS.RESUME, "Resume")}
          {renderTaskbarButton("workExperience", ICONS.WORK_EXP, "Work Experience")}
        </div>
        
        <div className={`${isMobile ? 'min-w-[40px] md:min-w-[80px]' : 'min-w-[80px]'} text-center text-white text-xs bg-[#0F5DD5]`}>
          {currentTime}
        </div>
      </div>
    </div>
  );
}

// Simple export for the main page
export default function Home() {
  return <Portfolio />;
}
