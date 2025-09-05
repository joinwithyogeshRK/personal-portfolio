import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with a focus on user experience and performance.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "/projects/1",
    github: "https://github.com",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A creative portfolio website for a digital artist showcasing their work.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1455&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    link: "/projects/2",
    github: "https://github.com",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects, and team collaboration.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a4?q=80&w=1469&auto=format&fit=crop",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "PWA"],
    link: "/projects/3",
    github: "https://github.com",
    liveDemo: "https://example.com",
    featured: true,
  },
];

const ProjectsShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group"
        >
          <Card className="overflow-hidden h-full card-hover border-0 shadow-md">
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View GitHub repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="heading-sm mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <Link
                to={project.link}
                className="inline-flex items-center text-accent font-medium hover:underline"
              >
                View Project
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsShowcase;