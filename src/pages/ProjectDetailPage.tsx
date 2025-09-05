import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar1 as Calendar, ExternalLink, Github, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Sample project data
const projects = [
{
  id: "1",
  title: "E-Commerce Platform",
  description: "A modern e-commerce platform with a focus on user experience and performance.",
  longDescription: "This comprehensive e-commerce solution was built to provide a seamless shopping experience across all devices. The platform includes product management, user authentication, shopping cart functionality, payment processing with Stripe, and order management.\n\nThe frontend was developed using React with Redux for state management, while the backend uses Node.js with Express and MongoDB. The application features responsive design, optimized performance, and accessibility considerations throughout.",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
  gallery: [
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=1436&auto=format&fit=crop"],

  tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express", "Responsive Design"],
  category: "Web Development",
  client: "RetailTech Inc.",
  date: "January 2023",
  role: "Full Stack Developer",
  github: "https://github.com",
  liveDemo: "https://example.com",
  featured: true,
  challenges: "One of the main challenges was implementing a real-time inventory management system that could handle high traffic during sales events. Additionally, ensuring a seamless checkout process across different payment methods required careful integration and testing.",
  solutions: "We implemented a caching strategy using Redis to handle inventory updates efficiently. For the checkout process, we created a modular payment system that could easily adapt to different payment providers while maintaining a consistent user experience."
},
{
  id: "2",
  title: "Portfolio Website",
  description: "A creative portfolio website for a digital artist showcasing their work.",
  longDescription: "This portfolio website was designed to showcase a digital artist's work in an immersive and interactive way. The site features a custom-built gallery with advanced filtering options, smooth animations, and a content management system for easy updates.\n\nBuilt with Next.js for optimal performance and SEO, the site utilizes Sanity CMS for content management, allowing the client to easily update their portfolio. Framer Motion was used to create engaging animations that enhance the user experience without compromising performance.",
  image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1455&auto=format&fit=crop",
  gallery: [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1464&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1471&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1290&auto=format&fit=crop"],

  tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Responsive Design", "Animation", "SEO"],
  category: "Web Development",
  client: "Alex Rivera, Digital Artist",
  date: "March 2023",
  role: "Frontend Developer & Designer",
  github: "https://github.com",
  liveDemo: "https://example.com",
  featured: true,
  challenges: "Creating a visually striking design that highlighted the artist's work without overshadowing it was a delicate balance. Additionally, optimizing the loading of high-resolution images while maintaining performance was crucial.",
  solutions: "We implemented a minimalist design with thoughtful animations that draw attention to the artwork. For image optimization, we utilized Next.js image optimization features along with a progressive loading strategy to ensure a smooth experience even on slower connections."
},
{
  id: "3",
  title: "Task Management App",
  description: "A productivity app for managing tasks, projects, and team collaboration.",
  longDescription: "This task management application was developed to streamline team collaboration and project management. The app includes features such as task creation and assignment, project organization, deadline tracking, file sharing, and real-time updates.\n\nBuilt with Vue.js and Firebase, the application offers real-time synchronization across devices, offline functionality, and push notifications. The interface was designed with a focus on usability and efficiency, allowing users to quickly navigate between different views and access the information they need.",
  image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a4?q=80&w=1469&auto=format&fit=crop",
  gallery: [
  "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1322&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop"],

  tags: ["Vue.js", "Firebase", "Tailwind CSS", "PWA", "Real-time Database", "Authentication", "Cloud Functions"],
  category: "Web Development",
  client: "ProductivePro",
  date: "May 2023",
  role: "Frontend Developer",
  github: "https://github.com",
  liveDemo: "https://example.com",
  featured: true,
  challenges: "Implementing a flexible permission system that could accommodate different team structures and roles was complex. Additionally, ensuring that the real-time updates were efficient and didn't overwhelm users with notifications was a UX challenge.",
  solutions: "We designed a granular permission system with customizable roles and project-specific settings. For notifications, we implemented a smart notification system that groups related updates and allows users to customize their notification preferences."
}];


const ProjectDetailPage = () => {
  const { id } = useParams<{id: string;}>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen pt-24">
      <section className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>

          <Link
            to="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">

            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h1 className="heading-xl mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) =>
                <Badge key={tag} variant="secondary" className="font-medium">
                    {tag}
                  </Badge>
                )}
              </div>
              <div className="flex flex-wrap gap-4">
                {project.github &&
                <Button asChild>
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer">

                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                }
                {project.liveDemo &&
                <Button variant="outline" asChild>
                    <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer">

                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                }
              </div>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
              <h3 className="heading-sm mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Client</div>
                  <div className="font-medium">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Date</div>
                  <div className="font-medium flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {project.date}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Role</div>
                  <div className="font-medium">{project.role}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Category</div>
                  <div className="font-medium flex items-center">
                    <Tag className="mr-2 h-4 w-4" />
                    {project.category}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg" />

          </div>

          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="challenges">Challenges & Solutions</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {project.longDescription.split("\n\n").map((paragraph, index) =>
                <p key={index}>{paragraph}</p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="challenges">
              <div className="space-y-8">
                <div>
                  <h3 className="heading-md mb-4">Challenges</h3>
                  <p className="text-lg">{project.challenges}</p>
                </div>
                <Separator />
                <div>
                  <h3 className="heading-md mb-4">Solutions</h3>
                  <p className="text-lg">{project.solutions}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="gallery">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((image, index) =>
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}>

                    <img
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md" />

                  </motion.div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16">
            <h3 className="heading-md mb-8">More Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.
              filter((p) => p.id !== id).
              slice(0, 3).
              map((relatedProject) =>
              <Link
                key={relatedProject.id}
                to={`/projects/${relatedProject.id}`}
                className="group">

                    <div className="relative h-48 overflow-hidden rounded-lg mb-3">
                      <img
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h4 className="font-medium text-lg group-hover:text-accent transition-colors">
                      {relatedProject.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {relatedProject.category}
                    </p>
                  </Link>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </div>);

};

export default ProjectDetailPage;