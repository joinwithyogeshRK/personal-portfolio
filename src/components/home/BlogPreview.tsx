import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar1 as Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
{
  id: 1,
  title: "The Future of Web Development: Trends to Watch in 2023",
  excerpt:
  "Explore the emerging technologies and methodologies that are shaping the future of web development.",
  date: "June 15, 2023",
  image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1470&auto=format&fit=crop",
  category: "Web Development"
},
{
  id: 2,
  title: "Designing for Accessibility: A Comprehensive Guide",
  excerpt:
  "Learn how to create inclusive digital experiences that work for everyone, regardless of ability.",
  date: "May 22, 2023",
  image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop",
  category: "UI/UX Design"
},
{
  id: 3,
  title: "Optimizing Website Performance: Speed Matters",
  excerpt:
  "Discover techniques and best practices to improve your website's loading speed and overall performance.",
  date: "April 10, 2023",
  image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop",
  category: "Performance"
}];


const BlogPreview = () => {
  return (
    <section className="section-container py-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="heading-lg">Latest Insights</h2>
          <p className="text-muted-foreground text-lg mt-2 max-w-2xl">
            Thoughts, ideas, and insights on design, development, and digital
            trends
          </p>
        </div>
        <Link to="/blog">
          <Button variant="outline" className="mt-4 md:mt-0 group">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) =>
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}>

            <Card className="overflow-hidden h-full card-hover border-0 shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />

              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="heading-sm mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-accent font-medium hover:underline">

                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>);

};

export default BlogPreview;