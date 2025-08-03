import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaJava, FaPhp, FaLaravel, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiDart, SiFlutter, SiSpring, SiTrello, SiFigma } from 'react-icons/si';
import profile from '../assets/images/profile.jpg'; 
import About from '../pages/About';
import Cv from '../pages/Cv';
import Contact from '../pages/Contact';
import Projects from '../pages/Projets';

import PostmanIcon from '../assets/icons/postman.svg?react';
import CakephpIcon from '../assets/icons/cakephp.svg?react';
import CanvaIcon from '../assets/icons/canva.svg?react';
import SonarqubeIcon from '../assets/icons/sonarqubeserver.svg?react';
import DockerIcon from '../assets/icons/docker.svg?react';

const techs = [
  { icon: <FaHtml5 />, label: 'HTML5' },
  { icon: <FaCss3Alt />, label: 'CSS3' },
  { icon: <FaJsSquare />, label: 'JavaScript' },
  { icon: <FaReact />, label: 'React' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <FaGithub />, label: 'GitHub' },
  { icon: <FaGitAlt />, label: 'Git' },
  { icon: <FaJava />, label: 'Java' },
  { icon: <FaPhp />, label: 'Php' },
  { icon: <FaLaravel />, label: 'Laravel' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <FaDatabase />, label: 'SQL' },
  { icon: <SiTypescript />, label: 'TypeScript' },
  { icon: <SiDart />, label: 'Dart' },
  { icon: <SiFlutter />, label: 'Flutter' },
  { icon: <SiSpring />, label: 'Spring Boot' },
  { icon: <SiTrello />, label: 'Trello' },
  { icon: <SiFigma />, label: 'Figma' },
{ icon: <CakephpIcon  className="w-8 h-8 fill-violet-600" />, label: 'CakePHP' },
{ icon: <PostmanIcon className="w-8 h-8 fill-violet-600" />, label: 'Postman' },
{ icon: <CanvaIcon  className="w-8 h-8 fill-violet-600" />, label: 'Canva' },
{ icon: <SonarqubeIcon className="w-8 h-8 fill-violet-600" />, label: 'SonarQube' },
{ icon: <DockerIcon className="w-8 h-8 fill-violet-600" />, label: 'Docker' },

  


];

export default function Home() {
  return (
        <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto">

    <section className="text-center">
      {/* Animation container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Photo */}
        <img
          src={profile}
          alt="Mamadou Khaly Sow"
          className="mx-auto w-36 h-36 object-cover rounded-full border-4 border-violet-500 shadow-md"
        />

        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-bold mt-6 text-gray-800">
          Mamadou Khaly Sow
        </h1>

        {/* Phrase d'accroche */}
        <p className="mt-3 text-lg text-gray-600">
          Développeur Web Full Stack – Passionné par le code et l’innovation 🚀
        </p>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {techs.map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-violet-600 hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 5 }}
          >
            <div className="text-4xl">{tech.icon}</div>
            <span className="text-sm mt-2 text-gray-700">{tech.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
    {/* About */}
      <section className="mt-0">
        <About />
      </section>

      {/* Projects */}
      <section className="mt-0">
        <Projects />
      </section>

      {/* CV */}
      <section className="mt-0">
        <Cv />
      </section>

      {/* Contact */}
      <section className="mt-0">
        <Contact />
      </section>
    </div>
    
  );
}
