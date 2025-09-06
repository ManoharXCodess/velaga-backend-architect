import React from 'react';
import { Code, Database, Server, Settings, Terminal, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 90, color: "primary" },
        { name: "JavaScript", level: 75, color: "secondary" }
      ]
    },
    {
      title: "Frameworks & Libraries", 
      icon: Server,
      skills: [
        { name: "Spring Boot", level: 85, color: "primary" },
        { name: "Hibernate", level: 80, color: "secondary" }
      ]
    },
    {
      title: "Web Technologies",
      icon: Terminal,
      skills: [
        { name: "RESTful APIs", level: 88, color: "primary" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "SQL", level: 82, color: "secondary" }
      ]
    },
    {
      title: "Developer Tools",
      icon: Settings,
      skills: [
        { name: "Git", level: 85, color: "primary" },
        { name: "GitHub", level: 85, color: "primary" },
        { name: "Postman", level: 90, color: "secondary" },
        { name: "IntelliJ", level: 88, color: "accent" }
      ]
    },
    {
      title: "Other Skills",
      icon: GitBranch,
      skills: [
        { name: "Data Structures & Algorithms", level: 80, color: "primary" },
        { name: "Responsive Design", level: 75, color: "secondary" },
        { name: "Linux", level: 70, color: "accent" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary-bg/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Backend development expertise with modern technologies
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-accent/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-surface rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Skill Bar */}
                      <div className="h-2 bg-accent/20 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            skill.color === 'primary' ? 'bg-primary' :
                            skill.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                          }`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card/20 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">Java 8</div>
              <div className="text-sm text-muted-foreground">Features & Lambda</div>
            </div>
            <div className="text-center p-6 bg-card/20 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
              <div className="text-3xl font-bold text-secondary mb-2">OOP</div>
              <div className="text-sm text-muted-foreground">Design Principles</div>
            </div>
            <div className="text-center p-6 bg-card/20 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">Clean Code</div>
              <div className="text-sm text-muted-foreground">Best Practices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;