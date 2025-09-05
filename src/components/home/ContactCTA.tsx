import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-container text-center"
      >
        <h2 className="heading-xl mb-6 max-w-3xl mx-auto">
          Ready to Bring Your <span className="gradient-text">Vision</span> to Life?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let's collaborate to create something amazing together. Reach out to
          discuss your project, ideas, or just to say hello.
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent-700 text-white"
          asChild
        >
          <Link to="/contact">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default ContactCTA;