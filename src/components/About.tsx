
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4 animate-slide-up">
        <h2 className="text-3xl font-semibold mb-6 font-mono">About</h2>
        <div className="space-y-6 text-gray-700">
          <p>
            I'm a passionate graphic designer with a keen eye for detail and a love for creating visually stunning designs.
            With several years of experience in the field, I've developed a versatile skill set that allows me to tackle
            various design challenges.
          </p>
          <p>
            My approach to design is centered around understanding the client's vision and transforming it into a visual
            reality that exceeds expectations. I believe that great design is not just about aesthetics, but also about
            effective communication and problem-solving.
          </p>
          <p>
            When I'm not designing, you can find me exploring new design trends, attending creative workshops, or seeking
            inspiration from the world around me. I'm constantly learning and evolving as a designer, always pushing the
            boundaries of my creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
