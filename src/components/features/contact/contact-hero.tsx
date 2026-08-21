import { motion } from "framer-motion";

export function ContactHero() {
    return (
        <section className="py-20 px-6 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>
    )
}