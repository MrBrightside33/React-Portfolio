import { motion } from "framer-motion"; 
import { Button } from "@/components/ui/button";
import { Link } from "react-router"

export function SkillSection() {
    return (
        <section className="py-20 px-6 bg-linear-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Knowledge</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Knowledgeable in modern web technologies and frameworks
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Javascript', 'React.js', 'Node.js', 'Java', 'Tailwind CSS',
              'Neon', 'PostgreSQL', 'Git', 'PHP', 
              'MySQL', 'Next.js', 'C', 'C#'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <span className="text-gray-800 dark:text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <Link to="/about">
              <Button variant="outline" className="px-8 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                Learn More About Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    )
}