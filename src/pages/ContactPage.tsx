import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="heading-xl mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-accent" />
                  Email
                </CardTitle>
                <CardDescription>Send me an email directly</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:contact@example.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  contact@example.com
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-accent" />
                  Location
                </CardTitle>
                <CardDescription>Based in</CardDescription>
              </CardHeader>
              <CardContent>
                <p>San Francisco, California</p>
                <p>United States</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-accent" />
                  Phone
                </CardTitle>
                <CardDescription>Call or text me</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+15551234567"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h2 className="heading-md mb-6">Connect With Me</h2>
            <p className="text-muted-foreground mb-8">
              Feel free to connect with me on social media or check out my work
              on various platforms. I'm always open to networking and
              collaboration opportunities.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="outline" className="flex items-center" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="flex items-center" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="flex items-center" asChild>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </a>
              </Button>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-3"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Message subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">What services do you offer?</h3>
              <p className="text-muted-foreground">
                I offer a range of services including UI/UX design, frontend development, brand identity design, and digital strategy consulting.
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">What is your typical project process?</h3>
              <p className="text-muted-foreground">
                My process typically includes discovery, planning, design, development, testing, and launch phases, with regular check-ins and feedback sessions throughout.
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">How do you determine project pricing?</h3>
              <p className="text-muted-foreground">
                Project pricing depends on scope, complexity, timeline, and specific requirements. I offer both hourly rates and fixed project fees based on the nature of the work.
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">Do you work with clients remotely?</h3>
              <p className="text-muted-foreground">
                Yes, I work with clients globally and have established effective remote collaboration processes using tools like Zoom, Slack, and collaborative design platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;