
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 font-mono">Contact</h2>
        
        <div className="md:flex gap-10 justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-xl mb-6">
              Interested in working together? Let's discuss your project.
            </p>
            <p className="text-gray-600 mb-8">
              I'm currently available for freelance work and exciting collaboration opportunities.
              Feel free to reach out!
            </p>
            <div className="flex items-center gap-1 mb-2">
              <Mail size={18} className="text-gray-600" />
              <a href="mailto:hello@designer.com" className="text-gray-800 hover:underline">hello@designer.com</a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <a href="mailto:hello@designer.com">
              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-md mb-4">
                Send me an email
              </Button>
            </a>
            
            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
