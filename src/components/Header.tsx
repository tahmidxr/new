
import React from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6">
      <div className="container flex justify-between items-center">
        <div>
          <h1 className="text-xl font-mono font-bold">Portfolio</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="text-sm hover:underline">About</a></li>
            <li><a href="#skills" className="text-sm hover:underline">Skills</a></li>
            <li><a href="#work" className="text-sm hover:underline">Work</a></li>
            <li><a href="#contact" className="text-sm hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
