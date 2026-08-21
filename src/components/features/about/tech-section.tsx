import { motion } from "framer-motion";

export function TechSection() {
    const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML/CSS",
        "Bootstrap CSS",
        "JavaScript",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Java",
        "PostgreSQL",
        "Neon",
        "PHP",
        "MongoDB",
        "MySQL",
        "C",
        "C#",
      ],
    },
    {
      category: "Tools & Other",
      items: [
        "Git/GitHub",
        "Thunder Client",
        "Figma",
        "VS Code",
        "Visual Studio Community",
        "Postman",
      ],
    },
  ];
    return(
        <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Experienced Technologies
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white dark:bg-gray-600 rounded-full text-gray-800 dark:text-gray-200 font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
}