import { motion } from "framer-motion"
import { Code, Layers, Database, Cloud, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wave2 } from "@/components/ui/wave"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "JavaScript", "TypeScript", "HTML", "CSS", "Python", "Node.js", "REST APIs"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      "Angular",
      "React",
      "J2EE",
      "Jest",
      "Spring",
      "Spring Boot",
      "JPA",
      "Hibernate",
      "JUnit",
      "FastAPI",
      "Pydantic AI",
      "FastMCP",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "Oracle", "SQLite", "Azure SQL Server", "AlloyDB", "BigQuery"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Microsoft Azure", "Google Cloud Platform (GCP)", "Docker", "Kubernetes", "CI/CD Pipelines"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Jira", "Jenkins", "Microservices", "Vibe Coding", "Windsurf", "Cursor"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

export function Skills() {
  return (
    <section id="skills" className="relative pt-0 pb-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black overflow-x-hidden" style={{ isolation: 'isolate' }}>
      <Wave2 fill="rgb(9, 9, 11)" className="absolute -top-1 left-0 w-full z-20" />
      
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div key={index} variants={item}>
                <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm h-full hover:bg-zinc-900/70 transition-all duration-300 hover:shadow-xl hover:shadow-pink-600/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-zinc-950/50 border-pink-600/30 text-gray-300 hover:bg-pink-600/10 hover:border-pink-600 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
