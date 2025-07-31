import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript', 'C/C++', 'MongoDB', 'HTML', 'CSS', 'SQL', 'React', 'TypeScript', 
    'Node.js', 'Java', 'PostgreSQL', 'Tailwind CSS', 'Next.js', 'AWS', 'REST APIs'
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: Heart,
      title: 'User-Centered',
      description: 'Putting user experience at the heart of every project'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Bio */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with experience creating 
              digital solutions that make a difference. I love turning complex problems 
              into simple, beautiful, and intuitive designs.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, reading books, and discovering new places.
            </p>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm hover:scale-105 transition-transform duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-primary-light">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
