import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AICTE AI-ML Internship",
      company: "Google",
      type: "Virtual",
      duration: "Jan 2024 – Mar 2024",
      description: "Participated in a comprehensive AI/ML virtual internship program offered by Google through AICTE, gaining a solid foundation in core machine learning concepts. Developed understanding of key terminologies and methodologies, which broadened my technical skill set beyond web development.",
      skills: ["Machine Learning", "AI Concepts", "Data Analysis", "Python", "TensorFlow"],
      certificateLink: "#",
      highlights: [
        "Comprehensive AI/ML fundamentals",
        "Core machine learning concepts",
        "Industry-standard methodologies",
        "Expanded technical skill set"
      ]
    },
    {
      title: "AI-Cloud Computing Internship",
      company: "Microsoft & Edunet",
      type: "Virtual", 
      duration: "Sep 2023 – Oct 2023",
      description: "Completed an AI-Cloud Computing internship with Microsoft and Edunet, learning essential basics. This broadened my technical skill set beyond web development, encompassing key terminologies and methodologies in AI/ML and cloud computing.",
      skills: ["Cloud Computing", "Azure", "AI Services", "Machine Learning", "DevOps"],
      certificateLink: "#",
      highlights: [
        "Cloud computing fundamentals",
        "Microsoft Azure platform",
        "AI/ML service integration",
        "Enterprise cloud solutions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary-bg/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Internships and learning experiences that shaped my technical journey
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title}
                  className="relative flex items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow-green z-10"></div>

                  {/* Content Card */}
                  <div className="ml-20 bg-card/30 backdrop-blur-sm rounded-2xl border border-accent/10 p-8 hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-[1.02] group w-full">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-secondary font-semibold mb-2">
                          <span>{exp.company}</span>
                          <span className="mx-2 text-accent">•</span>
                          <span className="text-accent text-sm">{exp.type}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Certificate Button */}
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        Certificate
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Highlights:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skill}
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${
                              skillIndex % 3 === 0 ? 'bg-primary/10 text-primary border-primary/20' :
                              skillIndex % 3 === 1 ? 'bg-secondary/10 text-secondary border-secondary/20' :
                              'bg-accent/10 text-accent border-accent/20'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="p-8 bg-card/20 rounded-2xl border border-accent/10 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ready for New Challenges</h3>
              <p className="text-muted-foreground mb-6">
                Seeking opportunities to apply my backend development skills in real-world projects
              </p>
              <Button variant="hero" className="w-full">
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;