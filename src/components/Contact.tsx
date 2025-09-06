import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Download, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saimanohar.velaga007@gmail.com",
      href: "mailto:saimanohar.velaga007@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 81428 18119",
      href: "tel:+918142818119",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/saimanohar",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/SaiManohar-007",
      color: "secondary"
    },
    {
      icon: Code,
      label: "CodeChef",
      href: "https://codechef.com/users/saimanohar",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary-bg/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Ready to contribute to your next backend project. Let's discuss opportunities!
          </p>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-accent/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className={`p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 ${
                    contact.color === 'primary' ? 'bg-primary/20 text-primary' :
                    contact.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                    'bg-accent/20 text-accent'
                  }`}>
                    <contact.icon className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}

              {/* Resume Download */}
              <div className="mt-8">
                <Button variant="hero" size="lg" className="w-full group">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Message</h3>
              
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-accent/10 p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-secondary-bg/50 border border-accent/20 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-secondary-bg/50 border border-accent/20 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-secondary-bg/50 border border-accent/20 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Hi Manohar, I'd like to discuss..."
                    ></textarea>
                  </div>
                  
                  <Button variant="default" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center animate-fade-in">
            <h3 className="text-xl font-semibold text-foreground mb-6">Connect on Social Platforms</h3>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full border-2 transition-all duration-300 hover:scale-110 group ${
                    social.color === 'primary' ? 'border-primary/30 hover:border-primary hover:bg-primary/10' :
                    social.color === 'secondary' ? 'border-secondary/30 hover:border-secondary hover:bg-secondary/10' :
                    'border-accent/30 hover:border-accent hover:bg-accent/10'
                  }`}
                >
                  <social.icon className={`w-6 h-6 transition-colors duration-300 ${
                    social.color === 'primary' ? 'text-primary group-hover:text-primary' :
                    social.color === 'secondary' ? 'text-secondary group-hover:text-secondary' :
                    'text-accent group-hover:text-accent'
                  }`} />
                </a>
              ))}
            </div>
            
            <p className="text-muted-foreground mt-6 text-sm">
              Open to Java Developer opportunities and backend development projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;