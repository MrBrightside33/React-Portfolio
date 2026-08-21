
import { motion } from "framer-motion"; 
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';


export function ExperienceSection() {
    const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Cordova Public College(Undergraduate)",
      period: "2023 - present",
      description:
        "Focus on programming, Web Development, and Database Systems",
    },
  ];

  const experience = [
    {
      role: "Sublimation Printer Operator and Maintainance",
      company: "JL Macher Sublimation",
      period: "2021-2022",
      description: "Operate and maintain machine and digital hardware",
    },
    {
      role: "Graphic Designer",
      company: "JL Macher Sublimation",
      period: "2021 - 2022",
      description: "Editing and creating layout design using Adobe tools",
    },
  ];

    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <FaGraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Education
                </h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.school}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                      {edu.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <FaBriefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Experience
                </h2>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                      {exp.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}