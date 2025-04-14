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
import { StartMenu } from "@/components/windows-xp/StartMenu";
import { ResumeContent } from "@/components/windows-xp/ResumeContent";
import { WorkExperienceContent } from "@/components/windows-xp/WorkExperienceContent";

export default function Home() {
  const [windows, setWindows] = useState<WindowsState>({
    about: false,
    projects: false,
    contact: false,
    skills: false,
    resume: false,  // Added resume window state
    minimized: {
      about: false,
      projects: false,
      contact: false,
      skills: false,
      resume: false,  // Added resume minimized state
    }
  });

  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  // Update time only on the client side to prevent hydration mismatch
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString());
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

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundImage: `url(${ICONS.MY_PHOTU})`, backgroundSize: 'cover' }}
    >
      {/* Desktop Icons */}
      <div className="p-4 grid grid-cols-1 gap-4">
        <DesktopIcon
          icon={ICONS.MY_COMPUTER}
          label="About Me"
          onClick={() => openWindow("about")}
        />
        <DesktopIcon
          icon={ICONS.FOLDER}
          label="Projects"
          onClick={() => openWindow("projects")}
        />
        <DesktopIcon
          icon={ICONS.NOTEPAD}
          label="Skills"
          onClick={() => openWindow("skills")}
        />
        <DesktopIcon
          icon={ICONS.MSN}
          label="Contact"
          onClick={() => openWindow("contact")}
        />
        <DesktopIcon
          icon={ICONS.RESUME}
          label="Resume"
          onClick={() => openWindow("resume")}
        />
      </div>

      {/* Windows */}
      {windows.about && (
        <WindowsXPWindow
          title="About Me"
          icon={ICONS.MY_COMPUTER}
          id="about-window"
          initialX={100}
          initialY={50}
          isActive={activeWindow === "about"}
          isMinimized={windows.minimized.about}
          content={<AboutContent />}
          onMinimize={() => minimizeWindow("about")}
          onMaximize={() => maximizeWindow("about")}
          onClose={() => closeWindow("about")}
          onActivate={() => setActiveWindow("about")}
        />
      )}
      
      {windows.projects && (
        <WindowsXPWindow
          title="Projects"
          icon={ICONS.FOLDER}
          id="projects-window"
          initialX={150}
          initialY={100}
          isActive={activeWindow === "projects"}
          isMinimized={windows.minimized.projects}
          content={<ProjectsContent />}
          onMinimize={() => minimizeWindow("projects")}
          onMaximize={() => maximizeWindow("projects")}
          onClose={() => closeWindow("projects")}
          onActivate={() => setActiveWindow("projects")}
        />
      )}
      
      {windows.skills && (
        <WindowsXPWindow
          title="Skills"
          icon={ICONS.NOTEPAD}
          id="skills-window"
          initialX={200}
          initialY={150}
          isActive={activeWindow === "skills"}
          isMinimized={windows.minimized.skills}
          content={<SkillsContent />}
          onMinimize={() => minimizeWindow("skills")}
          onMaximize={() => maximizeWindow("skills")}
          onClose={() => closeWindow("skills")}
          onActivate={() => setActiveWindow("skills")}
        />
      )}
      
      {windows.contact && (
        <WindowsXPWindow
          title="Contact Me"
          icon={ICONS.MSN}
          id="contact-window"
          initialX={250}
          initialY={200}
          isActive={activeWindow === "contact"}
          isMinimized={windows.minimized.contact}
          content={<ContactContent />}
          onMinimize={() => minimizeWindow("contact")}
          onMaximize={() => maximizeWindow("contact")}
          onClose={() => closeWindow("contact")}
          onActivate={() => setActiveWindow("contact")}
        />
      )}
      
      {windows.resume && (
        <WindowsXPWindow
          title="Resume"
          icon={ICONS.RESUME}
          id="resume-window"
          initialX={300}
          initialY={150}
          initialWidth={620}
          initialHeight={550}
          isActive={activeWindow === "resume"}
          isMinimized={windows.minimized.resume}
          content={<ResumeContent />}
          onMinimize={() => minimizeWindow("resume")}
          onMaximize={() => maximizeWindow("resume")}
          onClose={() => closeWindow("resume")}
          onActivate={() => setActiveWindow("resume")}
        />
      )}

      {/* Start Menu */}
      <StartMenu 
        isOpen={startMenuOpen} 
        onClose={() => setStartMenuOpen(false)} 
        openWindow={openWindow}
      />

      {/* Windows XP Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 p-0.5 z-10 bg-[#0F5DD5] flex items-center shadow-[0_-1px_3px_rgba(0,0,0,0.3)]">
        <button 
          className={`bg-[#4C9E56] text-white font-bold py-0.5 px-2.5 h-6 ml-0.5 rounded flex items-center hover:bg-[#65B467] ${startMenuOpen ? 'bg-[#65B467]' : ''}`}
          onClick={toggleStartMenu}
        >
          <Image src={ICONS.STARTLOGO} alt="Start" width={20} height={20} className="mr-1 inline-block align-middle" />
          <span className="text-sm">Start</span>
        </button>
        
        <div className="flex flex-1 mx-2">
          {windows.about && (
            <button 
              className={`mx-0.5 flex items-center px-2 py-0.5 min-w-[120px] ${
                windows.minimized.about
                  ? "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
                  : activeWindow === "about" 
                    ? "bg-[#3A6EA5] text-white" 
                    : "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
              } rounded`}
              onClick={() => windows.minimized.about ? restoreWindow("about") : setActiveWindow("about")}
            >
              <Image src={ICONS.MY_COMPUTER} alt="About" width={16} height={16} className="mr-1" />
              <span className="text-xs">About Me</span>
            </button>
          )}
          
          {windows.projects && (
            <button 
              className={`mx-0.5 flex items-center px-2 py-0.5 min-w-[120px] ${
                windows.minimized.projects
                  ? "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
                  : activeWindow === "projects" 
                    ? "bg-[#3A6EA5] text-white" 
                    : "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
              } rounded`}
              onClick={() => windows.minimized.projects ? restoreWindow("projects") : setActiveWindow("projects")}
            >
              <Image src={ICONS.FOLDER} alt="Projects" width={16} height={16} className="mr-1" />
              <span className="text-xs">Projects</span>
            </button>
          )}
          
          {windows.skills && (
            <button 
              className={`mx-0.5 flex items-center px-2 py-0.5 min-w-[120px] ${
                windows.minimized.skills
                  ? "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
                  : activeWindow === "skills" 
                    ? "bg-[#3A6EA5] text-white" 
                    : "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
              } rounded`}
              onClick={() => windows.minimized.skills ? restoreWindow("skills") : setActiveWindow("skills")}
            >
              <Image src={ICONS.NOTEPAD} alt="Skills" width={16} height={16} className="mr-1" />
              <span className="text-xs">Skills</span>
            </button>
          )}
          
          {windows.contact && (
            <button 
              className={`mx-0.5 flex items-center px-2 py-0.5 min-w-[120px] ${
                windows.minimized.contact
                  ? "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
                  : activeWindow === "contact" 
                    ? "bg-[#3A6EA5] text-white" 
                    : "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
              } rounded`}
              onClick={() => windows.minimized.contact ? restoreWindow("contact") : setActiveWindow("contact")}
            >
              <Image src={ICONS.MSN} alt="Contact" width={16} height={16} className="mr-1" />
              <span className="text-xs">Contact</span>
            </button>
          )}
          
          {windows.resume && (
            <button 
              className={`mx-0.5 flex items-center px-2 py-0.5 min-w-[120px] ${
                windows.minimized.resume
                  ? "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
                  : activeWindow === "resume" 
                    ? "bg-[#3A6EA5] text-white" 
                    : "bg-[#D9D4C8] text-black hover:bg-[#E3E1D3]"
              } rounded`}
              onClick={() => windows.minimized.resume ? restoreWindow("resume") : setActiveWindow("resume")}
            >
              <Image src={ICONS.RESUME} alt="Resume" width={16} height={16} className="mr-1" />
              <span className="text-xs">Resume</span>
            </button>
          )}
        </div>
        
        <div className="min-w-[80px] text-center text-white text-xs bg-[#0F5DD5]">
          {currentTime}
        </div>
      </div>
    </div>
  );
}
