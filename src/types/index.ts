import { ReactNode } from 'react';

export interface WindowProps {
  title: string;
  icon: string;
  id: string;
  initialX?: number;
  initialY?: number;
  initialWidth?: number;
  initialHeight?: number;
  isActive?: boolean;
  isMinimized?: boolean;
  content: ReactNode;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  onActivate?: (id: string) => void; // Add this new prop
}

export interface DesktopIconProps {
  icon: string;
  label: string;
  onClick: () => void;
}

export interface WindowsState {
  about: boolean;
  projects: boolean;
  contact: boolean;
  skills: boolean;
  resume: boolean;
  workExp: boolean;  // Adding work experience window
  minimized: {
    about: boolean;
    projects: boolean;
    contact: boolean;
    skills: boolean;
    resume: boolean;
    workExp: boolean;  // Adding work experience to minimized state
  };
}