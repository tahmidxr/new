
import React from 'react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 animate-gradient-x z-0"></div>
      <div className="container flex justify-between items-center relative z-10">
        <div>
          <h1 className="text-xl font-mono font-bold">Tahmid Shahriar</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['About', 'Skills', 'Work', 'Contact'].map((item) => (
              <li key={item} className="relative group">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm group-hover:text-primary transition-colors duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
