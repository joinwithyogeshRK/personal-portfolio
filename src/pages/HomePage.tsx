import { motion } from "framer-motion";
import { ArrowRight, Code, Brush, Zap, Award, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/home/HeroSection";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import SkillsSection from "@/components/home/SkillsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactCTA from "@/components/home/ContactCTA";
import BlogPreview from "@/components/home/BlogPreview";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Projects Section */}
      <section className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="heading-lg gradient-text">Featured Projects</h2>
            <p className="text-muted-foreground text-lg mt-2 max-w-2xl">
              Explore a selection of my most impactful and innovative work
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline" className="mt-4 md:mt-0 group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <ProjectsShowcase />
      </section>
      
      {/* Services Section */}
      <section className="bg-primary-50 dark:bg-primary-900/30 py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg">Services & Expertise</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Specialized skills and services to bring your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code className="h-8 w-8" />}
              title="Web Development"
              description="Creating responsive, accessible, and performant websites using modern frameworks and best practices."
            />
            <ServiceCard 
              icon={<Brush className="h-8 w-8" />}
              title="UI/UX Design"
              description="Designing intuitive user interfaces and experiences that delight users and achieve business goals."
            />
            <ServiceCard 
              icon={<Zap className="h-8 w-8" />}
              title="Performance Optimization"
              description="Improving site speed, accessibility, and overall user experience through technical optimization."
            />
            <ServiceCard 
              icon={<Award className="h-8 w-8" />}
              title="Brand Identity"
              description="Developing cohesive brand identities that communicate your values and resonate with your audience."
            />
            <ServiceCard 
              icon={<Users className="h-8 w-8" />}
              title="Consultation"
              description="Strategic consulting to help businesses leverage technology effectively and achieve their goals."
            />
            <ServiceCard 
              icon={<ExternalLink className="h-8 w-8" />}
              title="Digital Strategy"
              description="Comprehensive digital strategies to enhance your online presence and drive meaningful results."
            />
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Blog Preview Section */}
      <BlogPreview />
      
      {/* Contact CTA Section */}
      <ContactCTA />
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-card text-card-foreground p-8 rounded-lg shadow-md card-hover"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-accent/10 p-3 rounded-full w-fit mb-6">
        <div className="text-accent">{icon}</div>
      </div>
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default HomePage;