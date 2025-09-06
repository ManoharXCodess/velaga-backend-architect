import React from 'react';
import { Github, Linkedin, Mail, Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-accent/10">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Sai Manohar Velaga
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Java Backend Developer passionate about building scalable solutions 
                and contributing to impactful projects.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>saimanohar.velaga007@gmail.com</div>
                <div>+91 81428 18119</div>
                <div>India</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:saimanohar.velaga007@gmail.com"
              className="p-3 text-accent hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/saimanohar" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-accent hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/SaiManohar-007" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-accent hover:text-secondary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://codechef.com/users/saimanohar" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-accent hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Code className="w-5 h-5" />
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-accent/10 pt-8 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center">
              © {currentYear} Sai Manohar Velaga. Made with 
              <Heart className="w-4 h-4 mx-1 text-primary" fill="currentColor" />
              and passion for backend development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;