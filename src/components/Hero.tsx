import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Download, Mail, Linkedin, Code } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile-placeholder.jpg';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Designing Scalable Systems",
    "Building Reliable Backends", 
    "Crafting Efficient APIs"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full border-4 border-primary/30 p-1 bg-gradient-surface">
                <img 
                  src={profileImage} 
                  alt="Sai Manohar Velaga" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Sai Manohar Velaga
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-accent font-medium mb-6 animate-slide-in-left">
            Java Developer | Backend Engineer | Software Architect
          </h2>

          {/* Animated Tagline */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-lg md:text-xl text-muted-foreground font-mono animate-fade-in">
              "{taglines[currentTagline]}"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-in-right">
            <Button variant="hero" size="lg" className="group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              View Resume
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              GitHub Profile
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-6 animate-fade-in">
            <a 
              href="mailto:saimanohar.velaga007@gmail.com" 
              className="text-accent hover:text-primary transition-colors duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com/in/saimanohar" 
              className="text-accent hover:text-primary transition-colors duration-300 group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com/SaiManohar-007" 
              className="text-accent hover:text-primary transition-colors duration-300 group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://codechef.com/users/saimanohar" 
              className="text-accent hover:text-primary transition-colors duration-300 group"
            >
              <Code className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;