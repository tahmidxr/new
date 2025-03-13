
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Graphic Designer. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#about" className="text-sm text-gray-500 hover:text-gray-800">About</a></li>
                <li><a href="#skills" className="text-sm text-gray-500 hover:text-gray-800">Skills</a></li>
                <li><a href="#work" className="text-sm text-gray-500 hover:text-gray-800">Work</a></li>
                <li><a href="#contact" className="text-sm text-gray-500 hover:text-gray-800">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
