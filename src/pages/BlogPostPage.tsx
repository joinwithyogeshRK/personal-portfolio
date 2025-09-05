import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar1 as Calendar, Clock, Share2, Bookmark, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Sample blog posts data
const blogPosts = [
{
  id: "1",
  title: "The Future of Web Development: Trends to Watch in 2023",
  excerpt:
  "Explore the emerging technologies and methodologies that are shaping the future of web development.",
  content:
  "The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. In this article, we'll explore the key trends that are set to shape the future of web development in 2023 and beyond.\n\n## WebAssembly Goes Mainstream\n\nWebAssembly (Wasm) has been gaining traction over the past few years, but 2023 is likely to be the year it truly goes mainstream. This binary instruction format allows code written in languages like C, C++, and Rust to run in the browser at near-native speed, opening up new possibilities for web applications.\n\nWe're already seeing WebAssembly being used for everything from games and multimedia applications to complex data visualization and machine learning models in the browser. As the ecosystem matures and tooling improves, expect to see more developers leveraging WebAssembly for performance-critical parts of their applications.\n\n## Edge Computing Transforms Application Architecture\n\nEdge computing is changing how we think about application architecture. By moving computation closer to the end user, edge functions and edge rendering can significantly improve performance and user experience.\n\nFrameworks like Next.js and Remix are already embracing this approach, allowing developers to run certain code at the edge rather than on a centralized server or in the user's browser. This hybrid approach combines the best aspects of static generation, server-side rendering, and client-side processing.\n\n## AI-Assisted Development\n\nAI tools like GitHub Copilot and ChatGPT are already changing how developers write code, and this trend will only accelerate in 2023. These tools can suggest code completions, generate boilerplate, explain complex code, and even help debug issues.\n\nWhile AI won't replace human developers anytime soon, it will increasingly augment their capabilities, allowing them to focus on higher-level problems and creative solutions rather than routine coding tasks.\n\n## Accessibility Becomes Non-Negotiable\n\nAccessibility has been gaining importance for years, but in 2023, it's becoming a non-negotiable aspect of web development. This shift is driven by a combination of legal requirements, ethical considerations, and the recognition that accessible websites simply provide a better experience for all users.\n\nExpect to see more tools, frameworks, and libraries that bake accessibility in from the start, making it easier for developers to create inclusive experiences without requiring specialized knowledge.\n\n## The Rise of Web3 Technologies\n\nWhile the cryptocurrency market has seen significant volatility, the underlying technologies of Web3 continue to evolve and find practical applications. Decentralized applications (dApps), smart contracts, and blockchain-based solutions are being integrated into traditional web applications in ways that provide tangible benefits beyond speculation.\n\nIn 2023, we'll likely see more focus on the practical applications of these technologies, such as decentralized identity, content verification, and transparent supply chains, rather than purely financial use cases.\n\n## Conclusion\n\nThe web development landscape in 2023 promises to be exciting and challenging. By staying informed about these emerging trends and being willing to adapt and learn new skills, developers can position themselves to create more powerful, efficient, and inclusive web experiences.\n\nWhether you're a seasoned developer or just starting your journey, keeping an eye on these trends will help you navigate the ever-changing world of web development and make informed decisions about which technologies to invest your time in learning.",
  date: "June 15, 2023",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1470&auto=format&fit=crop",
  category: "Web Development",
  tags: ["JavaScript", "WebAssembly", "Edge Computing", "Web3", "AI"],
  author: {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Senior Web Developer with 10+ years of experience. Passionate about emerging technologies and creating accessible web experiences."
  }
},
{
  id: "2",
  title: "Designing for Accessibility: A Comprehensive Guide",
  excerpt:
  "Learn how to create inclusive digital experiences that work for everyone, regardless of ability.",
  content:
  "Accessibility is not just a checkbox to tick off—it's a fundamental aspect of creating digital experiences that are truly inclusive. In this comprehensive guide, we'll explore the principles, practices, and tools that can help you design and develop more accessible websites and applications.\n\n## Understanding Accessibility\n\nAt its core, web accessibility is about ensuring that people with disabilities can perceive, understand, navigate, and interact with websites and tools. However, the benefits of accessible design extend to all users, not just those with permanent disabilities.\n\nAccessibility encompasses a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities. It also benefits people with temporary limitations, such as someone with a broken arm or someone using a device in bright sunlight.\n\n## The Web Content Accessibility Guidelines (WCAG)\n\nThe Web Content Accessibility Guidelines (WCAG) provide a framework for making web content more accessible. These guidelines are organized around four principles, often referred to as POUR:\n\n- **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.\n- **Operable**: User interface components and navigation must be operable.\n- **Understandable**: Information and the operation of the user interface must be understandable.\n- **Robust**: Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.\n\nWCAG defines three levels of conformance: A (lowest), AA (mid-range), and AAA (highest). Most organizations aim for WCAG 2.1 AA compliance as a baseline.\n\n## Common Accessibility Issues and Solutions\n\n### Keyboard Navigation\n\nMany users with motor disabilities rely on keyboards or keyboard alternatives to navigate websites. Ensure that all interactive elements are keyboard accessible and that there's a visible focus indicator to show which element is currently selected.\n\n```css\n:focus {\n  outline: 2px solid #4f46e5;\n  outline-offset: 2px;\n}\n```\n\n### Alternative Text for Images\n\nUsers who are blind or have low vision rely on screen readers to describe images. Always provide descriptive alt text for images that convey information.\n\n```html\n<img src=\"chart-data.png\" alt=\"Bar chart showing sales growth of 25% in Q1 2023 compared to Q1 2022\" />\n```\n\n### Semantic HTML\n\nUsing the correct HTML elements for their intended purpose makes your content more accessible. Screen readers and other assistive technologies rely on these semantics to provide context to users.\n\n```html\n<!-- Bad: Using divs for everything -->\n<div class=\"header\">\n  <div class=\"heading\">Page Title</div>\n</div>\n\n<!-- Good: Using semantic elements -->\n<header>\n  <h1>Page Title</h1>\n</header>\n```\n\n### Color Contrast\n\nEnsure sufficient contrast between text and its background to make content readable for users with low vision or color blindness. WCAG 2.1 AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.\n\n### Form Accessibility\n\nForms can be particularly challenging for users with disabilities. Use proper labels, provide clear instructions, and ensure error messages are accessible.\n\n```html\n<div>\n  <label for=\"email\">Email Address</label>\n  <input type=\"email\" id=\"email\" aria-describedby=\"email-hint\" required />\n  <p id=\"email-hint\">We'll never share your email with anyone else.</p>\n</div>\n```\n\n## Testing for Accessibility\n\nAccessibility testing should be integrated throughout the design and development process. Some approaches include:\n\n- **Automated testing**: Tools like Axe, WAVE, and Lighthouse can identify many common accessibility issues.\n- **Manual testing**: Keyboard navigation testing, screen reader testing, and checking against WCAG guidelines.\n- **User testing**: Testing with actual users who have disabilities provides invaluable insights that automated tools might miss.\n\n## The Business Case for Accessibility\n\nBeyond the ethical imperative, there are compelling business reasons to prioritize accessibility:\n\n- **Expanded market reach**: People with disabilities represent a significant market segment.\n- **Legal compliance**: Many countries have laws requiring digital accessibility.\n- **Better user experience for everyone**: Features like captions benefit users in noisy environments, not just those who are deaf or hard of hearing.\n- **Improved SEO**: Many accessibility practices, like proper heading structure and alt text, also benefit search engine optimization.\n\n## Conclusion\n\nDesigning for accessibility is not an add-on or a nice-to-have—it's an essential aspect of creating digital experiences that work for everyone. By embracing accessibility principles from the start of your projects, you can create more inclusive, usable, and ultimately successful products.\n\nRemember that accessibility is a journey, not a destination. Start where you are, make incremental improvements, and continue learning and adapting as best practices evolve.",
  date: "May 22, 2023",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop",
  category: "UI/UX Design",
  tags: ["Accessibility", "WCAG", "Inclusive Design", "User Testing", "Screen Readers"],
  author: {
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "UX Designer specializing in accessible and inclusive design. Advocate for digital experiences that work for everyone."
  }
},
{
  id: "3",
  title: "Optimizing Website Performance: Speed Matters",
  excerpt:
  "Discover techniques and best practices to improve your website's loading speed and overall performance.",
  content:
  "In today's fast-paced digital world, users expect websites to load quickly and perform smoothly. A delay of just a few seconds can lead to increased bounce rates and lost conversions. In this article, we'll explore the importance of website performance and provide practical techniques to optimize your site's speed.\n\n## Why Performance Matters\n\nWebsite performance isn't just about technical metrics—it directly impacts business outcomes:\n\n- **User Experience**: 53% of mobile users abandon sites that take longer than 3 seconds to load.\n- **Conversion Rates**: A 1-second delay in page load time can result in a 7% reduction in conversions.\n- **SEO Rankings**: Google uses page speed as a ranking factor for both desktop and mobile searches.\n- **Brand Perception**: A slow website can negatively impact how users perceive your brand's quality and reliability.\n\n## Key Performance Metrics\n\nBefore optimizing, it's important to understand what to measure. Google's Core Web Vitals provide a good framework:\n\n- **Largest Contentful Paint (LCP)**: Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.\n- **First Input Delay (FID)**: Measures interactivity. Pages should have a FID of less than 100 milliseconds.\n- **Cumulative Layout Shift (CLS)**: Measures visual stability. Pages should maintain a CLS of less than 0.1.\n\nOther important metrics include Time to First Byte (TTFB), First Contentful Paint (FCP), and Total Blocking Time (TBT).\n\n## Optimization Techniques\n\n### Image Optimization\n\nImages often account for the majority of a webpage's size. Here are some ways to optimize them:\n\n- **Format Selection**: Use modern formats like WebP which offer better compression than JPEG or PNG.\n- **Responsive Images**: Serve different image sizes based on the user's device using the `srcset` attribute.\n- **Lazy Loading**: Only load images when they're about to enter the viewport.\n\n```html\n<img src=\"small.jpg\" srcset=\"medium.jpg 1000w, large.jpg 2000w\" sizes=\"(max-width: 500px) 100vw, 50vw\" loading=\"lazy\" alt=\"Description\" />\n```\n\n### Minimize Render-Blocking Resources\n\nCSS and JavaScript files can block rendering if not handled properly:\n\n- **Critical CSS**: Inline critical styles needed for above-the-fold content and defer the rest.\n- **Async/Defer Scripts**: Use `async` or `defer` attributes to prevent JavaScript from blocking rendering.\n\n```html\n<link rel=\"stylesheet\" href=\"non-critical.css\" media=\"print\" onload=\"this.media='all'\" />\n<script src=\"analytics.js\" defer></script>\n```\n\n### Code Optimization\n\n- **Minification**: Remove unnecessary characters from HTML, CSS, and JavaScript.\n- **Code Splitting**: Break down large JavaScript bundles into smaller chunks that can be loaded on demand.\n- **Tree Shaking**: Eliminate dead code from your JavaScript bundles.\n\n### Caching Strategies\n\n- **Browser Caching**: Set appropriate cache headers to store resources locally in the user's browser.\n- **Content Delivery Network (CDN)**: Distribute your content across multiple geographically dispersed servers to reduce latency.\n\n```nginx\n# Example Nginx cache headers\nlocation /static/ {\n  expires 1y;\n  add_header Cache-Control \"public, immutable\";\n}\n```\n\n### Server Optimization\n\n- **HTTP/2 or HTTP/3**: Upgrade to newer HTTP protocols that offer improved performance.\n- **Server-Side Rendering (SSR)**: Pre-render pages on the server to improve perceived load time.\n- **Edge Computing**: Deploy your code closer to your users using edge functions and CDNs.\n\n## Measuring and Monitoring Performance\n\nRegularly testing your website's performance is crucial:\n\n- **Lighthouse**: Built into Chrome DevTools, provides audits for performance, accessibility, and more.\n- **WebPageTest**: Offers detailed performance analysis from multiple locations and devices.\n- **Real User Monitoring (RUM)**: Collect performance data from actual users to understand real-world experience.\n\n## Establishing a Performance Budget\n\nA performance budget sets thresholds for metrics that affect site performance. For example:\n\n- Total page weight under 1MB\n- LCP under 2.5 seconds\n- CLS under 0.1\n\nThis budget helps teams make decisions about adding features or content that might impact performance.\n\n## Conclusion\n\nOptimizing website performance is an ongoing process, not a one-time task. By focusing on key metrics, implementing the techniques outlined in this article, and continuously monitoring results, you can create faster, more efficient websites that provide better user experiences and drive business results.\n\nRemember that small improvements add up—you don't need to implement every optimization technique at once. Start with the changes that will have the biggest impact for your specific site and audience, and build from there.",
  date: "April 10, 2023",
  readTime: "9 min read",
  image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop",
  category: "Performance",
  tags: ["Web Vitals", "Optimization", "Lazy Loading", "Caching", "Performance Budget"],
  author: {
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    bio: "Performance Engineer focused on creating lightning-fast web experiences. Speaker and consultant on web optimization techniques."
  }
}];


const BlogPostPage = () => {
  const { id } = useParams<{id: string;}>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>);

  }

  // Find the current post index and determine next/previous posts
  const currentIndex = blogPosts.findIndex((p) => p.id === id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Function to render markdown-like content
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="heading-md mt-8 mb-4">
            {paragraph.substring(3)}
          </h2>);

      } else if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="heading-sm mt-6 mb-3">
            {paragraph.substring(4)}
          </h3>);

      } else if (paragraph.startsWith('```')) {
        const codeContent = paragraph.substring(paragraph.indexOf('\n') + 1, paragraph.lastIndexOf('\n'));
        return (
          <pre key={index} className="bg-muted p-4 rounded-md my-6 overflow-x-auto">
            <code>{codeContent}</code>
          </pre>);

      } else if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map((item) => item.substring(2));
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2">
            {items.map((item, i) =>
            <li key={i}>{item}</li>
            )}
          </ul>);

      } else {
        return <p key={index} className="mb-4 text-lg">{paragraph}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen pt-24">
      <article className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>

          <Link
            to="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">

            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="font-medium">
                  {post.category}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <h1 className="heading-xl mb-6">{post.title}</h1>

              <div className="flex items-center mb-8">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {post.author.bio}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-lg shadow-md" />

            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {renderContent(post.content)}
            </div>

            <div className="flex flex-wrap gap-2 mt-10">
              <span className="text-muted-foreground flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                Tags:
              </span>
              {post.tags.map((tag) =>
              <Badge key={tag} variant="outline" className="font-medium">
                  {tag}
                </Badge>
              )}
            </div>

            <Separator className="my-10" />

            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button size="sm" variant="outline">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>

            <Separator className="my-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevPost &&
              <Link
                to={`/blog/${prevPost.id}`}
                className="group bg-card text-card-foreground p-6 rounded-lg shadow-sm flex items-start">

                  <ChevronLeft className="h-5 w-5 mr-2 flex-shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Previous Article</div>
                    <h4 className="font-medium group-hover:text-accent transition-colors line-clamp-2">
                      {prevPost.title}
                    </h4>
                  </div>
                </Link>
              }

              {nextPost &&
              <Link
                to={`/blog/${nextPost.id}`}
                className="group bg-card text-card-foreground p-6 rounded-lg shadow-sm flex items-start text-right md:ml-auto">

                  <div className="flex-grow">
                    <div className="text-sm text-muted-foreground mb-1">Next Article</div>
                    <h4 className="font-medium group-hover:text-accent transition-colors line-clamp-2">
                      {nextPost.title}
                    </h4>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-2 flex-shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                </Link>
              }
            </div>
          </div>
        </motion.div>
      </article>

      <section className="bg-muted py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">More Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continue exploring more insights and perspectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.
            filter((p) => p.id !== id).
            slice(0, 3).
            map((relatedPost) =>
            <Link
              key={relatedPost.id}
              to={`/blog/${relatedPost.id}`}
              className="group">

                  <div className="relative h-48 overflow-hidden rounded-lg mb-3">
                    <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {relatedPost.category}
                  </Badge>
                  <h4 className="font-medium text-lg group-hover:text-accent transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {relatedPost.date} · {relatedPost.readTime}
                  </p>
                </Link>
            )}
          </div>
        </div>
      </section>
    </div>);

};

export default BlogPostPage;