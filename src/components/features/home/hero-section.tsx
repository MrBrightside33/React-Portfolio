import { motion } from "framer-motion"; 
import { FaGithub, FaLinkedin, FaFacebook, FaArrowDown } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Link } from "react-router"
import Code from "@/assets/code.webp";

export function HeroSection() {
  return (
      <section className="min-h-screen  bg-white dark:bg-gray-900 flex items-center justify-center px-6 py-20 relative overflow-hidden bg-linear-to-br from-blue-100 via-white to-purple-200 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 opacity-50 -z-10" />
        
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-blue-600 dark:text-blue-400 font-medium"
              >
                Hi, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Erico Casil
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400"
              >
                IT Student
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Enthusiastic about developing modern web applications and solving challenging problems through code. Currently a Bachelor of Science in Information Technology student with a strong focus on web development and programming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 items-center flex-wrap"
            >
              <Link to="/project">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="px-8 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              
               <a href="https://github.com/MrBrightside33?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              
              <a href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              
              <a  href="https://www.facebook.com/erico.casil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img
                src={Code}
                alt="Developer workspace"
                className="relative w-full h-full object-cover rounded-4xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FaArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </section>
)
}