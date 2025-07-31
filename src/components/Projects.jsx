import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.png';
import project6 from '@/assets/project-6.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce platform built with React and Node.js, featuring a dynamic product display, smooth cart management, and intuitive user experience.',
      image: project1,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for business intelligence. Built with Next.js and featuring real-time data visualization and interactive charts.',
      image: project2,
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Personal Blog',
      description: 'A clean, minimalist blog platform with markdown support, tag system, and SEO optimization. Built with modern web technologies.',
      image: project3,
      technologies: ['React', 'Tailwind', 'Markdown', 'CMS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'ShareMyRide',
      description: 'A simple, reliable ride-sharing platform connecting drivers and passengers in real-time. Built for convenience, trust, and seamless travel experiences.',
      image: project4,
      technologies: ['React', 'Tailwind', 'Node.js', 'API'],
      liveUrl: 'https://share-my-ride.vercel.app/',
      githubUrl: 'https://github.com/prernapreyshi/ShareMyRide'
    },
    {
      id: 5,
      title: 'CoffeeCafe',
      description: 'A sleek, responsive café storefront featuring curated brews and delightful treats, built with a modern UI and seamless navigation to enhance the online café experience.',
      image: project5,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://soft-sell-mu-two.vercel.app/',
      githubUrl: 'https://github.com/prernapreyshi/SoftSell'
    },
    {
      id: 6,
      title: 'SoftSell',
      description: 'A responsive, single-page marketing website designed for a fictional software resale startup showcasing the ability to quickly build a modern, visually appealing, and user-friendly web experience.',
      image: project6,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://coffee-cafe-six.vercel.app/',
      githubUrl: ''
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-2 py-1 hover:bg-primary-light transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="soft" size="sm" className="w-full justify-center">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full justify-center">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
