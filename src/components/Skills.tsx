
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => {
  const [visible, setVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className={cn(
            "progress-fill bg-black",
            visible ? "" : "w-0"
          )}
          style={{ width: visible ? `${percentage}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 font-mono">Skills</h2>
        
        <div className="max-w-2xl">
          <SkillBar name="Canva" percentage={70} />
          <SkillBar name="Adobe Illustrator" percentage={50} />
          <SkillBar name="Adobe Photoshop" percentage={50} />
          <SkillBar name="UI/UX Design" percentage={65} />
          <SkillBar name="Brand Identity" percentage={80} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
