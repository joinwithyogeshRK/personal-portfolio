import { motion } from "framer-motion";
import { Download, Mail, MapPin, Calendar1 as Calendar, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative mb-6">
                <img
                  src="/profile-image.jpg"
                  alt="Professional Portrait"
                  className="w-full aspect-square object-cover rounded-xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop";
                  }} />

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-xl -z-10" />
              </div>

              <h1 className="heading-lg mb-2">John Doe</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Creative Professional
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Available from June 2023</span>
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent-700 text-white mb-4">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:contact@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="mb-12">
              <TabsList className="mb-8">
                <TabsTrigger value="about">About Me</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <div className="space-y-6">
                  <h2 className="heading-md">Professional Profile</h2>
                  <p className="text-lg">
                    I'm a multidisciplinary designer and developer with over 8 years of experience creating digital products and experiences. My expertise spans across UI/UX design, frontend development, and creative direction, with a focus on building accessible, performant, and visually appealing web applications.
                  </p>
                  <p className="text-lg">
                    Throughout my career, I've collaborated with startups, agencies, and enterprise clients to deliver solutions that not only meet business objectives but also delight users. I'm passionate about the intersection of design and technology, constantly exploring new tools and methodologies to enhance my craft.
                  </p>
                  <p className="text-lg">
                    When I'm not designing or coding, you can find me exploring photography, contributing to open-source projects, or mentoring aspiring designers and developers. I believe in continuous learning and sharing knowledge with the community.
                  </p>

                  <Separator className="my-8" />

                  <h2 className="heading-md">My Approach</h2>
                  <p className="text-lg">
                    I approach each project with a user-centered mindset, focusing on understanding the needs, goals, and pain points of the target audience. My process typically involves:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Thorough research and discovery to understand the problem space</li>
                    <li>Collaborative ideation and wireframing to explore potential solutions</li>
                    <li>Iterative design and prototyping to refine the user experience</li>
                    <li>Clean, maintainable code implementation with a focus on performance</li>
                    <li>Continuous testing and refinement based on user feedback</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="experience">
                <div className="space-y-8">
                  <h2 className="heading-md mb-6">Work Experience</h2>

                  <div className="relative pl-8 pb-8 border-l-2 border-muted">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-bold">Senior UI/UX Designer</h3>
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span>2021 - Present</span>
                      </div>
                    </div>
                    <p className="text-accent font-medium mb-2">TechInnovate Inc.</p>
                    <p className="text-muted-foreground mb-4">
                      Lead the design team in creating user-centered digital experiences for enterprise clients. Established design systems and workflows that improved team efficiency by 30%.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Redesigned the company's flagship product, resulting in a 25% increase in user engagement</li>
                      <li>Implemented a design system that reduced design inconsistencies and development time</li>
                      <li>Mentored junior designers and facilitated design thinking workshops</li>
                      <li>Collaborated with product managers and developers to ensure design feasibility</li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-8 border-l-2 border-muted">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-bold">Frontend Developer</h3>
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span>2018 - 2021</span>
                      </div>
                    </div>
                    <p className="text-accent font-medium mb-2">WebSolutions Agency</p>
                    <p className="text-muted-foreground mb-4">
                      Developed responsive web applications for clients across various industries. Specialized in React and Vue.js implementations with a focus on performance optimization.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Built and maintained over 20 client websites and web applications</li>
                      <li>Improved site performance by implementing lazy loading and code splitting</li>
                      <li>Integrated third-party APIs and services for enhanced functionality</li>
                      <li>Collaborated with designers to ensure pixel-perfect implementations</li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-8 border-l-2 border-muted">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-bold">UI Designer</h3>
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span>2015 - 2018</span>
                      </div>
                    </div>
                    <p className="text-accent font-medium mb-2">CreativeLab Studio</p>
                    <p className="text-muted-foreground mb-4">
                      Created user interfaces for mobile and web applications. Worked closely with UX researchers and developers to deliver cohesive digital experiences.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Designed interfaces for 15+ mobile applications across iOS and Android</li>
                      <li>Created visual identity systems for startups and established brands</li>
                      <li>Conducted usability testing and implemented design iterations</li>
                      <li>Developed interactive prototypes to communicate design concepts</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education">
                <div className="space-y-8">
                  <h2 className="heading-md mb-6">Education & Certifications</h2>

                  <div className="relative pl-8 pb-8 border-l-2 border-muted">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-bold">Master of Fine Arts in Interaction Design</h3>
                      <div className="flex items-center text-muted-foreground">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        <span>2013 - 2015</span>
                      </div>
                    </div>
                    <p className="text-accent font-medium mb-2">California Institute of Design</p>
                    <p className="text-muted-foreground">
                      Focused on human-centered design methodologies and interactive experiences. Thesis project on "Designing for Digital Wellbeing" received departmental honors.
                    </p>
                  </div>

                  <div className="relative pl-8 pb-8 border-l-2 border-muted">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                      <div className="flex items-center text-muted-foreground">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        <span>2009 - 2013</span>
                      </div>
                    </div>
                    <p className="text-accent font-medium mb-2">University of Technology</p>
                    <p className="text-muted-foreground">
                      Specialized in software engineering and human-computer interaction. Participated in multiple hackathons and led the university's web development club.
                    </p>
                  </div>

                  <h2 className="heading-md mt-12 mb-6">Certifications</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-bold mb-2">AWS Certified Solutions Architect</h3>
                      <p className="text-muted-foreground mb-2">Amazon Web Services</p>
                      <p className="text-sm text-muted-foreground">Issued: 2022 • Expires: 2025</p>
                    </div>

                    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-bold mb-2">Professional UX Design Certificate</h3>
                      <p className="text-muted-foreground mb-2">Google</p>
                      <p className="text-sm text-muted-foreground">Issued: 2021</p>
                    </div>

                    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-bold mb-2">Frontend Web Developer Nanodegree</h3>
                      <p className="text-muted-foreground mb-2">Udacity</p>
                      <p className="text-sm text-muted-foreground">Issued: 2019</p>
                    </div>

                    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-bold mb-2">Certified Scrum Master</h3>
                      <p className="text-muted-foreground mb-2">Scrum Alliance</p>
                      <p className="text-sm text-muted-foreground">Issued: 2020 • Expires: 2024</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="skills">
                <div className="space-y-8">
                  <h2 className="heading-md mb-6">Technical Skills</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">UI/UX Design</span>
                        <span className="text-muted-foreground">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Frontend Development</span>
                        <span className="text-muted-foreground">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">React / React Native</span>
                        <span className="text-muted-foreground">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">TypeScript</span>
                        <span className="text-muted-foreground">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Node.js</span>
                        <span className="text-muted-foreground">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Figma / Adobe XD</span>
                        <span className="text-muted-foreground">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Responsive Design</span>
                        <span className="text-muted-foreground">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Accessibility (WCAG)</span>
                        <span className="text-muted-foreground">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>

                  <h2 className="heading-md mt-12 mb-6">Software & Tools</h2>

                  <div className="flex flex-wrap gap-3">
                    {[
                    "Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator",
                    "VS Code", "Git", "GitHub", "Jira", "Notion",
                    "Slack", "Trello", "Asana", "InVision", "Zeplin"].
                    map((tool, index) =>
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full">

                        {tool}
                      </motion.div>
                    )}
                  </div>

                  <h2 className="heading-md mt-12 mb-6">Languages</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">English</span>
                        <span className="text-muted-foreground">Native</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Spanish</span>
                        <span className="text-muted-foreground">Fluent</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">French</span>
                        <span className="text-muted-foreground">Intermediate</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">German</span>
                        <span className="text-muted-foreground">Basic</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </section>
    </div>);

};

export default AboutPage;