
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Tahmid Shahriar. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav>
              <ul className="flex space-x-6">
                {['About', 'Skills', 'Work', 'Contact'].map((item) => (
                  <li key={item} className="relative group">
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-sm text-gray-500 group-hover:text-gray-800 transition-colors duration-300"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
