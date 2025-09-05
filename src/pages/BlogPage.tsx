import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar1 as Calendar, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample blog posts data
const blogPosts = [
{
  id: 1,
  title: "The Future of Web Development: Trends to Watch in 2023",
  excerpt:
  "Explore the emerging technologies and methodologies that are shaping the future of web development.",
  content:
  "The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. In this article, we'll explore the key trends that are set to shape the future of web development in 2023 and beyond.\n\nFrom the rise of WebAssembly and Edge Computing to the continued evolution of JavaScript frameworks and the growing importance of accessibility, we'll dive into the technologies and practices that forward-thinking developers should be paying attention to.\n\nWe'll also discuss how AI and machine learning are being integrated into web development workflows, the impact of Web3 technologies, and the increasing focus on performance optimization and user experience.",
  date: "June 15, 2023",
  image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1470&auto=format&fit=crop",
  category: "Web Development",
  tags: ["JavaScript", "WebAssembly", "Edge Computing", "Web3", "AI"],
  author: {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
},
{
  id: 2,
  title: "Designing for Accessibility: A Comprehensive Guide",
  excerpt:
  "Learn how to create inclusive digital experiences that work for everyone, regardless of ability.",
  content:
  "Accessibility is not just a checkbox to tick off—it's a fundamental aspect of creating digital experiences that are truly inclusive. In this comprehensive guide, we'll explore the principles, practices, and tools that can help you design and develop more accessible websites and applications.\n\nWe'll cover the Web Content Accessibility Guidelines (WCAG) and how to apply them to your projects, common accessibility issues and how to address them, and the importance of testing with real users who have disabilities.\n\nYou'll also learn about the business case for accessibility, including legal considerations, market reach, and the benefits for all users, not just those with disabilities.",
  date: "May 22, 2023",
  image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop",
  category: "UI/UX Design",
  tags: ["Accessibility", "WCAG", "Inclusive Design", "User Testing", "Screen Readers"],
  author: {
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
},
{
  id: 3,
  title: "Optimizing Website Performance: Speed Matters",
  excerpt:
  "Discover techniques and best practices to improve your website's loading speed and overall performance.",
  content:
  "In today's fast-paced digital world, users expect websites to load quickly and perform smoothly. A delay of just a few seconds can lead to increased bounce rates and lost conversions. In this article, we'll explore the importance of website performance and provide practical techniques to optimize your site's speed.\n\nWe'll cover key performance metrics like First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS), and how they impact user experience. You'll learn about image optimization, code splitting, lazy loading, and other techniques to reduce load times.\n\nWe'll also discuss tools for measuring and monitoring performance, from Lighthouse and WebPageTest to real user monitoring solutions, and how to establish a performance budget for your projects.",
  date: "April 10, 2023",
  image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop",
  category: "Performance",
  tags: ["Web Vitals", "Optimization", "Lazy Loading", "Caching", "Performance Budget"],
  author: {
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  }
},
{
  id: 4,
  title: "The Rise of Headless CMS: Decoupling Content from Presentation",
  excerpt:
  "Explore how headless CMS architecture is changing the way we build and manage digital experiences.",
  content:
  "Traditional content management systems have long coupled content creation and presentation, but the rise of headless CMS solutions is changing this paradigm. In this article, we'll explore what headless CMS is, how it works, and why it's gaining popularity among developers and content creators alike.\n\nWe'll discuss the benefits of decoupling your content from presentation, including greater flexibility, improved performance, and the ability to deliver content across multiple channels and devices. You'll learn about popular headless CMS options like Contentful, Sanity, and Strapi, and how they compare to traditional systems like WordPress.\n\nWe'll also cover real-world use cases and implementation strategies, helping you determine if a headless approach is right for your next project.",
  date: "March 5, 2023",
  image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1364&auto=format&fit=crop",
  category: "Content Management",
  tags: ["Headless CMS", "JAMstack", "API", "Content Strategy", "Multichannel"],
  author: {
    name: "Emily Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg"
  }
},
{
  id: 5,
  title: "Mastering CSS Grid: Advanced Layout Techniques",
  excerpt:
  "Take your CSS Grid skills to the next level with these advanced techniques and practical examples.",
  content:
  "CSS Grid has revolutionized web layout, providing a powerful two-dimensional system that makes complex designs more accessible to implement. In this deep dive, we'll move beyond the basics and explore advanced CSS Grid techniques that can elevate your layouts.\n\nWe'll cover complex grid structures, responsive layouts without media queries, grid template areas for semantic layouts, and combining Grid with Flexbox for maximum flexibility. You'll learn how to create magazine-style layouts, asymmetrical designs, and interactive grid-based components.\n\nThrough practical examples and code snippets, you'll gain the confidence to implement sophisticated layouts that were once difficult or impossible with traditional CSS techniques.",
  date: "February 18, 2023",
  image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1470&auto=format&fit=crop",
  category: "CSS",
  tags: ["CSS Grid", "Layout", "Responsive Design", "Flexbox", "Web Design"],
  author: {
    name: "Alex Thompson",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  }
},
{
  id: 6,
  title: "Building a Design System from Scratch",
  excerpt:
  "A step-by-step guide to creating a cohesive design system that scales with your product.",
  content:
  "Design systems have become essential for teams looking to build consistent, scalable products efficiently. In this comprehensive guide, we'll walk through the process of building a design system from scratch, covering everything from planning and component design to documentation and maintenance.\n\nWe'll explore the key components of a successful design system, including design tokens, UI components, patterns, and guidelines. You'll learn how to audit your existing design, establish a visual language, and create a component library that serves the needs of both designers and developers.\n\nWe'll also discuss tools and workflows for design system creation, strategies for adoption across teams, and approaches to evolving your system as your product grows and changes.",
  date: "January 25, 2023",
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1364&auto=format&fit=crop",
  category: "Design Systems",
  tags: ["Design Tokens", "Component Library", "Documentation", "Collaboration", "Figma"],
  author: {
    name: "Olivia Kim",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  }
}];


const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...new Set(blogPosts.map((post) => post.category))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === "all" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24">
      <section className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <h1 className="heading-xl mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and perspectives on design, development, and digital trends
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />

          </div>
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full md:w-auto">

            <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 lg:flex">
              {categories.map((category) =>
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize">

                  {category}
                </TabsTrigger>
              )}
            </TabsList>
          </Tabs>
        </div>

        {filteredPosts.length === 0 ?
        <div className="text-center py-12">
            <h3 className="heading-md mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div> :

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) =>
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>

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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full mr-2" />

                        <span className="text-sm">{post.author.name}</span>
                      </div>
                      <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-accent font-medium hover:underline">

                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
          )}
          </div>
        }
      </section>

      <section className="bg-muted py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Popular Topics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore articles by topic to find the information most relevant to you
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(
              new Set(blogPosts.flatMap((post) => post.tags))
            ).map((tag, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}>

                <Badge
                variant="outline"
                className="text-sm py-2 px-4 cursor-pointer hover:bg-accent hover:text-white transition-colors"
                onClick={() => setSearchQuery(tag)}>

                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="bg-card text-card-foreground p-8 md:p-12 rounded-xl shadow-lg text-center">
            <h2 className="heading-lg mb-4">Subscribe to the Newsletter</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay updated with the latest articles, tips, and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow" />

              <Button className="bg-accent hover:bg-accent-700 text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>);

};

export default BlogPage;