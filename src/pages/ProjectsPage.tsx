import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Github, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with a focus on user experience and performance.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
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
    category: "Web Development",
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
    category: "Web Development",
    link: "/projects/3",
    github: "https://github.com",
    liveDemo: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "A fitness tracking application with personalized workout plans and progress tracking.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1287&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "Health API"],
    category: "Mobile Development",
    link: "/projects/4",
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    description: "An online reservation system for restaurants with table management and customer notifications.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Express", "MongoDB", "Twilio API"],
    category: "Web Development",
    link: "/projects/5",
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    id: 6,
    title: "Brand Identity Design",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1374&auto=format&fit=crop",
    tags: ["Branding", "Logo Design", "Typography", "Color Theory"],
    category: "Design",
    link: "/projects/6",
    liveDemo: "https://example.com",
  },
  {
    id: 7,
    title: "Smart Home Dashboard",
    description: "A dashboard interface for controlling and monitoring smart home devices.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "IoT", "WebSockets", "Chart.js"],
    category: "Web Development",
    link: "/projects/7",
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    id: 8,
    title: "Travel Photography Portfolio",
    description: "A visual showcase of travel photography with location mapping and storytelling elements.",
    image: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?q=80&w=1292&auto=format&fit=crop",
    tags: ["Gatsby", "GraphQL", "Mapbox", "Netlify CMS"],
    category: "Design",
    link: "/projects/8",
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    id: 9,
    title: "Educational Platform",
    description: "An online learning platform with course management, video lessons, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop",
    tags: ["Next.js", "Django", "PostgreSQL", "AWS"],
    category: "Web Development",
    link: "/projects/9",
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
];

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...new Set(projects.map((project) => project.category))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24">
      <section className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="heading-xl mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of work across various disciplines and technologies
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full md:w-auto"
          >
            <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 lg:flex">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="heading-md mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-medium">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="font-medium">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <h3 className="heading-sm mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
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
        )}
      </section>
    </div>
  );
};

export default ProjectsPage;