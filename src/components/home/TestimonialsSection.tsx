import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    content:
      "Working with this professional was a game-changer for our business. Their attention to detail and creative approach helped us completely transform our digital presence.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    content:
      "I was blown away by the quality of work and the level of communication throughout our project. The final result exceeded our expectations and has received countless compliments.",
    author: "Michael Chen",
    position: "Marketing Director, Innovate Co.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    content:
      "An exceptional talent who brings both technical expertise and creative vision to every project. Their work has significantly improved our user engagement and conversion rates.",
    author: "Emily Rodriguez",
    position: "Product Manager, DesignHub",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-primary-50 dark:bg-primary-900/30 py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg">Client Testimonials</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Hear what clients have to say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-card text-card-foreground p-8 md:p-12 rounded-xl shadow-lg"
          >
            <div className="absolute -top-6 left-8 text-accent">
              <Quote className="h-12 w-12" />
            </div>
            <blockquote className="text-xl md:text-2xl font-serif italic mb-8 pt-6">
              "{testimonials[currentIndex].content}"
            </blockquote>
            <div className="flex items-center">
              <Avatar className="h-12 w-12 border-2 border-accent">
                <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                <AvatarFallback>{testimonials[currentIndex].author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <div className="font-medium">{testimonials[currentIndex].author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].position}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-accent/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;