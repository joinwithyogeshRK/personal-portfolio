import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Web Development", percentage: 90 },
  { name: "UI/UX Design", percentage: 85 },
  { name: "Mobile Development", percentage: 75 },
  { name: "Backend Development", percentage: 80 },
  { name: "DevOps", percentage: 65 },
  { name: "Project Management", percentage: 70 },
];

const technologies = [
  "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", 
  "GraphQL", "Figma", "AWS", "Docker", "Git", "MongoDB", 
  "PostgreSQL", "Redux", "Express", "React Native"
];

const SkillsSection = () => {
  return (
    <section className="section-container py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-8">Skills & Expertise</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.percentage}%</span>
                </div>
                <Progress value={skill.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-8">Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full"
              >
                {tech}
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="heading-sm mb-4">Education & Certifications</h3>
            <ul className="space-y-6">
              <li className="border-l-2 border-accent pl-4 py-1">
                <div className="text-sm text-muted-foreground">2018 - 2022</div>
                <div className="font-medium text-lg">Bachelor of Science in Computer Science</div>
                <div className="text-muted-foreground">University of Technology</div>
              </li>
              <li className="border-l-2 border-accent pl-4 py-1">
                <div className="text-sm text-muted-foreground">2022</div>
                <div className="font-medium text-lg">AWS Certified Solutions Architect</div>
                <div className="text-muted-foreground">Amazon Web Services</div>
              </li>
              <li className="border-l-2 border-accent pl-4 py-1">
                <div className="text-sm text-muted-foreground">2021</div>
                <div className="font-medium text-lg">Professional UX Design Certificate</div>
                <div className="text-muted-foreground">Google</div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;