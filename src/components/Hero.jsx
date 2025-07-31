import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.jpg';
import resume from '../assets/PrernaPreyshi_Resume.pdf';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-secondary rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-large animate-scale-in">
                <img 
                  src={profileAvatar} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            <span className="block text-3xl md:text-4xl font-medium text-muted-foreground mb-2">
              Hello, I'm
            </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Prerna Preyshi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack developer crafting beautiful, 
            user-centered digital experiences with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToProjects}
              className="group"
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <a 
              href={resume}
              download="PrernaPreyshi_Resume.pdf"
              className="group"
            >
              <Button variant="outline" size="lg" className="group">
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/prernapreyshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary-light transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href="https://www.linkedin.com/in/prerna-preyshi-1b8327256/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary-light transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
