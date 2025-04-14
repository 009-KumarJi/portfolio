"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ICONS } from "@/constants/icons";

export default function NotFound() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Check if on mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Update time
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };

    // Initial update
    updateTime();

    // Update time every second
    const timer = setInterval(updateTime, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []);

  // Play Windows XP error sound only after user interaction
  useEffect(() => {
    // Create a function to play sound that can be called after user interaction
    const playErrorSound = () => {
      try {
        const audio = new Audio("/sounds/Windows XP Error.mp3");
        audio.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
      } catch (error) {
        console.error("Error creating audio element:", error);
      }
    };

    // Add a one-time click listener to the document to play sound after first interaction
    const handleFirstInteraction = () => {
      playErrorSound();
      document.removeEventListener("click", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
    };
  }, []);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${isMobile ? ICONS.MY_MOB_PHOTU : ICONS.MY_PHOTU})`,
        backgroundSize: "cover",
      }}
    >
      {/* Error Window */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div
          className={`border border-[#0A246A] shadow-lg ${
            isMobile ? "w-[300px]" : "w-[400px]"
          }`}
        >
          {/* Window Title Bar */}
          <div className="h-8 bg-gradient-to-r from-[#0A246A] via-[#3A6EA5] to-[#0A246A] flex items-center justify-between px-2">
            <div className="flex items-center">
              <Image
                src={ICONS.SYSTEM}
                alt="Error"
                width={16}
                height={16}
                className="mr-1"
              />
              <div className="text-white font-semibold text-sm">
                Windows - Error
              </div>
            </div>
            <div className="flex space-x-1">
              <button className="w-6 h-6 flex items-center justify-center bg-[#C7CACB] hover:bg-[#E3E3E3] active:bg-[#ADADAD] border-t border-l border-[#FFFFFF] border-r border-b border-[#7E7E7E]">
                <span className="text-black mb-1">_</span>
              </button>
              <Link
                href="/"
                className="w-6 h-6 flex items-center justify-center bg-[#C7CACB] hover:bg-[#E3E3E3] active:bg-[#ADADAD] border-t border-l border-[#FFFFFF] border-r border-b border-[#7E7E7E]"
              >
                <span className="text-black font-bold">×</span>
              </Link>
            </div>
          </div>

          {/* Window Content */}
          <div className="bg-[#ECE9D8] p-4 flex flex-col items-center">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <Image
                  src="/assets/windows-xp-icons/System Properties.ico"
                  alt="Error Icon"
                  width={48}
                  height={48}
                  className="min-w-[48px]"
                  onError={(e) => {
                    // Fallback if icon doesn't load
                    e.currentTarget.src = "/assets/windows-xp-icons/File.ico";
                  }}
                />
              </div>
              <div>
                <h2 className="text-[#000000] font-bold mb-2">
                  404 - Page Not Found
                </h2>
                <p className="text-[#000000]">
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>
              </div>
            </div>

            <div className="w-full border-t border-[#C5C2B8] my-2"></div>

            <div className="flex justify-center mt-2">
              <Link
                href="/"
                className="px-4 py-1 bg-[#ECE9D8] text-black border border-[#919B9C] active:border-[#919B9C] hover:bg-[#F7F5EC] flex items-center justify-center"
              >
                <span>Return to Desktop</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Windows XP Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 p-0.5 z-10 bg-[#0F5DD5] flex items-center shadow-[0_-1px_3px_rgba(0,0,0,0.3)]">
        <Link
          href="/"
          className="bg-[#4C9E56] text-white font-bold py-0.5 px-2.5 h-6 ml-0.5 rounded flex items-center hover:bg-[#65B467]"
        >
          <Image
            src={ICONS.STARTLOGO}
            alt="Start"
            width={20}
            height={20}
            className="mr-1 inline-block align-middle"
          />
          <span className={`text-sm ${isMobile ? "hidden md:inline" : ""}`}>
            Start
          </span>
        </Link>

        <div className="flex flex-1 mx-2 overflow-x-auto scrollbar-hide">
          <button className="mx-0.5 flex items-center px-2 py-0.5 min-w-[120px] bg-[#3A6EA5] text-white rounded">
            <Image src={ICONS.SYSTEM} alt="Error" width={16} height={16} className="mr-1" />
            <span className={`text-xs truncate ${isMobile ? 'hidden md:inline' : ''}`}>404 Not Found</span>
          </button>
        </div>

        <div
          className={`${
            isMobile ? "min-w-[40px] md:min-w-[80px]" : "min-w-[80px]"
          } text-center text-white text-xs bg-[#0F5DD5]`}
        >
          {currentTime}
        </div>
      </div>
    </div>
  );
}