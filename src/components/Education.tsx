import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      specialization: "Computer Science specialized in AI-ML",
      institution: "Kakinada Institute Of Engineering And Technology",
      duration: "Feb 2021 – May 2024",
      gpa: "7.23/10.0",
      type: "Undergraduate",
      subjects: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        "Machine Learning",
        "Artificial Intelligence",
        "Web Technologies",
        "Computer Networks"
      ]
    },
    {
      degree: "Intermediate Education",
      specialization: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Akhil Junior College",
      duration: "June 2018 – March 2020",
      gpa: "9.12/10.0",
      type: "Higher Secondary",
      subjects: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "English",
        "Computer Science"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Academic foundation in computer science and software development
          </p>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-accent"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div 
                  key={edu.degree}
                  className="relative flex items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-glow-orange z-10"></div>

                  {/* Content Card */}
                  <div className="ml-20 bg-card/30 backdrop-blur-sm rounded-2xl border border-accent/10 p-8 hover:border-secondary/30 transition-all duration-500 hover:transform hover:scale-[1.02] group w-full">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-gradient-surface rounded-lg mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                            <GraduationCap className="w-6 h-6 text-secondary" />
                          </div>
                          <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {edu.type}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        
                        <p className="text-lg text-primary font-semibold mb-3">
                          {edu.specialization}
                        </p>

                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-accent" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-accent" />
                            {edu.duration}
                          </div>
                        </div>
                      </div>

                      {/* GPA Badge */}
                      <div className="mt-4 lg:mt-0">
                        <div className="bg-gradient-surface p-4 rounded-xl text-center border border-secondary/20">
                          <div className="text-2xl font-bold text-secondary mb-1">{edu.gpa}</div>
                          <div className="text-xs text-muted-foreground">CGPA</div>
                        </div>
                      </div>
                    </div>

                    {/* Key Subjects */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Key Subjects:
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {edu.subjects.map((subject, subjectIndex) => (
                          <div 
                            key={subject}
                            className="text-sm text-muted-foreground bg-card/50 px-3 py-2 rounded-lg border border-accent/10 hover:border-secondary/30 transition-colors duration-300"
                          >
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievement Highlight */}
                    {index === 0 && (
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <div className="flex items-center text-primary mb-2">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="font-semibold">Specialization Achievement</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Specialized in AI-ML with focus on machine learning algorithms, 
                          artificial intelligence concepts, and modern software development practices.
                        </p>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                        <div className="flex items-center text-secondary mb-2">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="font-semibold">Academic Excellence</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Achieved outstanding academic performance with strong foundation in 
                          mathematics and sciences, building analytical and problem-solving skills.
                        </p>
                      </div>
                    )}

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Summary */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="text-center p-8 bg-card/20 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-4">4 Years</div>
              <div className="text-lg font-semibold text-foreground mb-2">Computer Science</div>
              <div className="text-sm text-muted-foreground">
                Comprehensive education in software development, algorithms, and AI/ML
              </div>
            </div>
            
            <div className="text-center p-8 bg-card/20 rounded-2xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
              <div className="text-4xl font-bold text-secondary mb-4">8.18</div>
              <div className="text-lg font-semibold text-foreground mb-2">Average CGPA</div>
              <div className="text-sm text-muted-foreground">
                Consistent academic performance across all educational levels
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;