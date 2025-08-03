import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="pt-28 pb-16 px-6 max-w-5xl mx-auto text-gray-800">
      {/* Titre */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-violet-600 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        À propos de moi
      </motion.h2>

      {/* Présentation générale */}
      <motion.div
        className="space-y-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Je suis <strong>Mamadou Khaly Sow</strong>, développeur web full-stack passionné par le code et les nouvelles technologies.
          Mon parcours m’a permis d’évoluer dans différents contextes et d’acquérir des compétences solides en <span className="text-violet-600 font-medium">développement web</span>, <span className="text-violet-600 font-medium">gestion de projet</span> et <span className="text-violet-600 font-medium">collaboration agile</span>.
        </p>
      </motion.div>

      {/* Expériences pro */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-violet-500 mb-6">💼 Expériences professionnelles</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold">Concepteur / Développeur Full-Stack – <span className="text-gray-600">My Digital School, Paris</span></h4>
            <p className="text-sm text-gray-500">Décembre 2024 - Présent</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>Développement complet de plateforme avec Node.js, Express, MongoDB (back) et React.js (front).</li>
              <li>Tests avec Jest, analyse du code avec SonarQube, et environnement Dockerisé.</li>
              <li>Suivi des tâches avec Trello et gestion de projet en Scrum (daily meetings, sprints).</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Développeur Full-Stack – <span className="text-gray-600">LHT Automobile, Reims</span></h4>
            <p className="text-sm text-gray-500">Novembre 2024 - Juin 2025</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>Optimisation d’un site de location de voiture en Java + Next.js.</li>
              <li>Création et sécurisation d’API REST avec Spring Security + JWT.</li>
              <li>Mise en place de tests unitaires avec JUnit 5 et Mockito.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Développeur Full-Stack – <span className="text-gray-600">Sympanux, Oujda</span></h4>
            <p className="text-sm text-gray-500">Décembre 2023 - Février 2024</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>Initiation au développement web, participation à des projets d’équipe.</li>
              <li>Création de sites statiques et intégration de données dynamiques.</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Formations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-violet-500 mb-6">🎓 Formations</h3>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>MBA Développeur Full-stack</strong> – My Digital School, Paris, France <br />
            <span className="text-sm text-gray-500">2025 - 2027</span>
          </p>
          <p>
            <strong>Bachelor 3 Concepteur Développeur d’Application</strong> – My Digital School, Paris, France<br />
            <span className="text-sm text-gray-500">2024 - 2025</span>
          </p>
          <p>
            <strong>DTS Développeur Full-Stack</strong> – OFPPT, Oujda, Maroc<br />
            <span className="text-sm text-gray-500">2022 - 2024</span>
          </p>
          <p>
            <strong>BTS Télécommunication Commutation Réseau</strong> – ENPT, Conakry, Guinée<br />
            <span className="text-sm text-gray-500">2019 - 2022</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

