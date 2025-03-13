
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[calc(100vh-76px)] flex flex-col justify-center">
      <div className="container max-w-4xl mx-auto px-4 py-20 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          hi, I'm Tahmid ..
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
          Currently working as a Graphic Designer and Social Media Expart..
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={scrollToContact}
            className="bg-black text-white hover:bg-gray-800 rounded-md"
          >
            Get in touch
          </Button>
          <a href="#work">
            <Button variant="outline" className="group">
              View my work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
