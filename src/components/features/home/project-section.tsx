
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaFilter } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Techno from "@/assets/techno.webp";
import TeamMclovin from "@/assets/teammclovin.webp";
import QuickFix from "@/assets/quickfix.webp";
import Personal from "@/assets/personal.webp";
import Steam from "@/assets/steam.webp";
import CPC from "@/assets/cpc.webp";
import { Link } from "react-router"



export function ProjectSection({ showViewAllButton = true }: { showViewAllButton?: boolean }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Full Stack','Frontend', 'Backend'];

   const PROJECTS = [
    {
      title: 'Technoplay Minishop Platform',
      description: '',
      image: Techno,
      tags: ['React', 'Node.js', 'Neon', 'PostgreSQL'],
      category: 'Backend',
      github: 'https://github.com/MrBrightside33/TechnoPlay-MiniShop',
      demo: 'https://techno-play-mini-shop-rico.vercel.app/login',
    },
    {
      title: 'Team Portfolio',
      description: '',
      image: TeamMclovin,
      tags: ['HTML', 'CSS'],
      category: 'Frontend',
      github: 'https://github.com/MrBrightside33/Team-Mclovin-html-css-',
      demo: 'https://teammclovin.vercel.app/',
    },
    {
      title: 'Personal Portfolio',
      description: '',
      image: Personal,
      tags: ['HTML', 'CSS'],
      category: 'Frontend',
      github: 'https://github.com/MrBrightside33/Portfolio-html-css-',
      demo: 'https://portfolio-html-css-blush-mu.vercel.app/',
    },
    {
      title: 'Quickfix Home Service Platform',
      description: '',
      image: QuickFix,
      tags: ['HTML', 'CSS',],
      category: 'Frontend',
      github: 'https://github.com/MrBrightside33/QuickFix-html-css-',
      demo: 'https://quick-fix-html-css.vercel.app/',
    },
    {
      title: 'Steam Login Clone',
      description: '',
      image: Steam,
      tags: ['Nextjs', 'TailwindCSS'],
      category: 'None',
      github: 'https://github.com/MrBrightside33/Steam_clone_loginpage',
      demo: 'https://steam-clone-loginpage.vercel.app/',
    },
    {
      title: 'CPC Website Redesign',
      description: '',
      image: CPC,
      tags: ['Nextjs', 'TailwindCSS'],
      category: 'None',
      github: 'https://github.com/MrBrightside33/CPC-Website-Redesign',
      demo: 'https://im-cpc-website.vercel.app/',
    },
];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedFilter);



  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* Header */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my work, from full-stack applications to frontend designs and backend APIs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <FaFilter className="w-5 h-5" />
              <span className="font-medium">Filter:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            {showViewAllButton && (
            <Link to="/project">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 mt-15">
                Check out all Projects
              </Button>
            </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}