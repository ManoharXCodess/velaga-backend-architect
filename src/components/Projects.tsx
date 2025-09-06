import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Server, Database, Shield, Search, BookOpen, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "IRCTC Ticket Booking App",
      description: "A comprehensive Java-based backend application for railway ticket booking system with secure authentication and booking management.",
      longDescription: "Developed using JSON Jackson for data serialization and bcrypt for secure password hashing. Features include secure user login/sign-up, train search between locations, seat availability display, seat booking, and ticket retrieval.",
      tech: ["Java", "JSON Jackson", "bcrypt", "Java 8", "OOP"],
      features: [
        "Secure user authentication with bcrypt",
        "Train search and filtering",
        "Real-time seat availability",
        "Booking management system",
        "Ticket generation and retrieval"
      ],
      icon: Server,
      github: "#",
      demo: "#"
    },
    {
      title: "XQuiz Application",
      description: "Interactive quiz application with multiple-choice questions, automatic evaluation, and scoring system built with Java.",
      longDescription: "A quiz application that allows creating quizzes with multiple questions. Each question has multiple choices with one correct answer. Displays quizzes to users, evaluates responses, and provides scores.",
      tech: ["Java", "OOP", "Collections", "Data Structures"],
      features: [
        "Create custom quizzes",
        "Multiple choice questions",
        "Automatic evaluation system",
        "Score calculation and display",
        "User-friendly interface"
      ],
      icon: BookOpen,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Backend solutions that demonstrate scalable architecture and clean code
          </p>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Card */}
                <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-accent/10 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-[1.02] h-full">
                  {/* Card Header */}
                  <div className="p-8 border-b border-accent/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-4 bg-gradient-surface rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                        <project.icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="ghost" size="sm" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Body - Hidden content that shows on hover */}
                  <div className="p-8">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Project Actions */}
                      <div className="flex space-x-4">
                        <Button variant="default" size="sm" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Additional Projects CTA */}
          <div className="text-center mt-16">
            <div className="p-8 bg-card/20 rounded-2xl border border-accent/10 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">More Projects</h3>
              <p className="text-muted-foreground mb-6">
                Explore additional projects and contributions on my GitHub profile
              </p>
              <Button variant="outline" className="w-full">
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;