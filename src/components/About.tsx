import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center md:justify-start animate-slide-in-left">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-surface rounded-2xl p-1">
                  <div className="w-full h-full bg-secondary-bg rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">SM</span>
                      </div>
                      <p className="text-accent font-mono">Backend Developer</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Highly motivated <span className="text-primary font-semibold">Computer Science and Engineering</span> graduate 
                  skilled in <span className="text-secondary font-semibold">Java</span>, <span className="text-primary font-semibold">Spring Boot</span>, 
                  and <span className="text-secondary font-semibold">Hibernate</span>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Proficient in <span className="text-primary font-semibold">Java 8 features</span>, 
                  <span className="text-secondary font-semibold"> RESTful APIs</span>, and writing clean, efficient code with 
                  <span className="text-accent font-semibold"> Object-Oriented Programming</span> principles.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Seeking a <span className="text-primary font-semibold">Java Developer</span> role to build 
                  <span className="text-secondary font-semibold"> scalable solutions</span> and contribute to 
                  <span className="text-accent font-semibold"> impactful projects</span>.
                </p>

                {/* Highlight Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-accent/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">7.23</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">2+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 p-6 bg-card/50 rounded-xl border border-accent/10">
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <span className="w-20 text-accent">Email:</span>
                      <span className="font-mono text-sm">saimanohar.velaga007@gmail.com</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <span className="w-20 text-accent">Phone:</span>
                      <span className="font-mono text-sm">+91 81428 18119</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <span className="w-20 text-accent">Location:</span>
                      <span className="text-sm">India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;