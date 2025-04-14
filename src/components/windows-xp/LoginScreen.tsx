"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';
import { SOUNDS, playSound } from '@/constants/sounds';

interface LoginScreenProps {
  onLogin: () => void;
  userName: string;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, userName }) => {
  const [loading, setLoading] = useState(false);
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

  const handleLogin = () => {
    if (loading) return;
    
    setLoading(true);
    // Play logon sound
    playSound(SOUNDS.LOGON);
    
    // Simulate loading/authentication
    setTimeout(() => {
      onLogin();
    }, 1500);
  };

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0054E3 0%, #7DB9FF 100%)',
      }}
    >
      {/* Windows XP Logo */}
      <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <Image 
          src={ICONS.STARTLOGO} 
          alt="Windows XP" 
          width={isMobile ? 120 : 180} 
          height={isMobile ? 40 : 60} 
        />
      </div>
      
      <div className="absolute text-white text-center left-1/2 transform -translate-x-1/2 top-1/3">
        <p className="pt-4 text-lg md:text-xl">To begin, click me</p>
      </div>
      
      {/* User Profile */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div 
          className={`
            relative overflow-hidden rounded-md border-2 border-white shadow-lg
            h-24 w-24 md:h-32 md:w-32 cursor-pointer hover:border-yellow-200 hover:shadow-xl
            transition-all duration-200 ${loading ? 'opacity-70' : ''}
          `}
          onClick={handleLogin}
        >
          <Image 
            src={ICONS.MY_SQ_PHOTU} 
            alt={userName}
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="mt-3 text-lg md:text-xl font-semibold text-white">{userName}</h2>
      </div>

      {/* Turn off computer button */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex items-center justify-between p-2 text-white">
          <div className="flex items-center space-x-2 p-1">
            <div className="bg-red-600 rounded-full w-4 h-4 md:w-5 md:h-5"></div>
            <span className="text-sm md:text-base">Turn off computer</span>
          </div>
          
          <div className="text-xs md:text-sm text-right pr-2">
            <p>After you log on, you can add or change accounts.</p>
            <p>Just go to Control Panel and click User Accounts.</p>
          </div>
        </div>
      </div>
      
      {/* Loading indicator */}
      {loading && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p>Logging in...</p>
        </div>
      )}
    </div>
  );
};