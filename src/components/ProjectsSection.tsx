
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Starr's Online Closet",
    description: "A modern, responsive fashion website designed to showcase stylish products inspired by Instagram fashion trends.",
    image: "/Online Closet.jpg",
    github: "https://github.com/HopeHlwempu/Starr-s-Online-Closet",
    demo: "https://hopehlwempu.github.io/Starr-s-Online-Closet/",
    technologies: ["HTML", "Bootstrap", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Nike Inventory Management System",
    description: "A Python-based console application designed to simplify warehouse inventory management. It allows users to efficiently add, update, and retrieve information such as product details, costs, and quantities.",
    image: "/Nike Inventory Management.jpg",
    github: "https://github.com/HopeHlwempu/Nike-Warehouse-OOP",
    technologies: ["Python", "Object Orientation Programming", "SQL"],
  },
  {
    id: 3,
    title: "My first project",
    description: "A vibrant and creative online portfolio designed to showcase my journey as a software developer, my technical skills, and contact information",
    image: "/Website.jpg",
    github: "https://github.com/HopeHlwempu/Starr-s-Vibrant-Webpage",
    demo: "https://hopehlwempu.github.io/Starr-s-Vibrant-Webpage/",
    technologies: ["HTML", "CSS"],
  },
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-hope-softGray py-20">
      <div className="section-container">
        <h2 className="section-title font-serif">My Projects <span className="ml-2">✨</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my favorite projects that showcase my skills and passion for creating
          beautiful, functional applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`card-hover overflow-hidden border border-border/50 ${
                hoveredIndex === index ? 'shadow-glow' : 'shadow-soft'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              
              <CardHeader>
                <CardTitle className="font-serif text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="bg-white/50 text-xs tech-badge"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="bg-white/50 text-xs tech-badge">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-1"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                  </a>
                )}
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-auto"
                  >
                    <Button 
                      size="sm" 
                      className="gap-1 bg-hope-magenta hover:bg-hope-magenta/80"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="https://github.com/HopeHlwempu" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-hope-pink hover:bg-hope-pink/10">
              <Github className="mr-2 h-4 w-4" /> See More on my GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
