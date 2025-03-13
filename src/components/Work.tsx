
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface WorkItemProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, description, imageUrl, index }) => {
  const [visible, setVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={itemRef}
      className={cn(
        "opacity-0 transform translate-y-8",
        visible && "opacity-100 translate-y-0 transition-all duration-700 ease-out",
        "mb-16 last:mb-0"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="md:flex items-start gap-8">
        <div className={cn(
          "md:w-1/2 mb-4 md:mb-0",
          isEven ? "md:order-1" : "md:order-2"
        )}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="rounded-lg w-full h-auto object-cover" 
            style={{maxHeight: "400px"}}
          />
        </div>
        <div className={cn(
          "md:w-1/2",
          isEven ? "md:order-2" : "md:order-1"
        )}>
          <h3 className="text-xl font-medium mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  const workItems = [
    {
      title: "Brand Identity Design",
      description: "Created a complete brand identity for a modern tech startup, including logo, color palette, typography, and brand guidelines.",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Digital Illustration Series",
      description: "Developed a series of digital illustrations for a marketing campaign that increased client engagement by 40%.",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Social Media Design Kit",
      description: "Designed a comprehensive social media kit with templates for posts, stories, and profile elements that maintained brand consistency.",
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Packaging Design",
      description: "Created eye-catching packaging design for a premium product line that helped increase product visibility and sales by 25%.",
      imageUrl: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Editorial Layout Design",
      description: "Designed a magazine layout with a focus on typography and visual hierarchy, creating an engaging reading experience.",
      imageUrl: "https://images.unsplash.com/photo-1594313398105-e7b47097c499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 font-mono">Recent Work</h2>
        <div>
          {workItems.map((item, index) => (
            <WorkItem 
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
