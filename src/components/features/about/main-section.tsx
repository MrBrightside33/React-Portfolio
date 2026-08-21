import { motion } from "framer-motion"; 
import  Erico  from "@/assets/erico.webp";

export function MainSection() {
    return (
        <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <img
                  src={Erico}
                  alt="Erico Casil"
                  className="relative w-full h-full rounded-full shadow-lg object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Journey</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a third-year Information Technology student driven by a passion for building meaningful and impactful digital solutions. My interest in technology began with a simple curiosity about how websites work and has grown into a strong commitment to becoming a well-rounded full-stack developer.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I focus on learning modern web technologies, programming languages and enjoy staying current with emerging industry trends. Whether I&apos;m designing responsive user interfaces, developing backend systems or create a program, I approach every project with enthusiasm, precision, and a strong attention to detail.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Outside of coding, I enjoy spending time outdoors to relax, clear my mind, and recharge. I also actively participate in online courses, as I strongly believe in continuous learning and sharing knowledge with the wider community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    )
}