import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import flynxImg from "../assets/images/flynx.png";
import portfolioImg from "../assets/images/portfolio.png";
import tvmazeImg from "../assets/images/tvmazeApp.png";
import todoImg from "../assets/images/todoList.png";
import frmaworkcssImg from "../assets/images/frameworkcss.png";

const projets = [
  {
    titre: "FLYNX",
    image: flynxImg,
    description:
      "Conception et développement full-stack de la plateforme de gestion des événements Flynx avec Node.js,Express, MongoDB côté backend, et React.js côté frontend pour les interfaces utilisateur collaboration avec l’équipe de conception pour transformer les maquettes en interfaces interactives accessibles et responsives. Réalisation de tests unitaires et d’intégration avec Jest et supertest, amélioration de la qualité du code via SonarQube, et usage de Docker pour simuler les environnements.",
    demo: "https://flynx-frontend.onrender.com/home",
    code: "https://github.com/MKSOW/lab-flynx",
  },
  {
    titre: "Portfolio",
    image: portfolioImg,
    description:
      "Mon portfolio personnel avec React, Vite, TailwindCSS, animations Framer Motion et envoi de mails via Nodemailer.",
    demo: "https://portfolio-frontend-fozp.onrender.com",
    code: "https://github.com/MKSOW/portfolio",
  },
  {
    titre: "ToDoList – gestion des tâches",
    image: todoImg,
    description:
      "ToDoList est une application simple et intuitive développée avec React.js qui permet à l'utilisateur de : Ajouter des tâches via un champ de saisie dynamique.Visualiser la liste des tâches en temps réel. Supprimer les tâches une à une à l’aide d’un bouton ✗. Afficher le nombre de tâches restantes à accomplir. Profiter d'une interface claire avec un slogan motivant pour rester concentré. L'application repose sur les hooks useState et useEffect pour gérer l'état des tâches, avec une interface responsive pour une bonne expérience utilisateur sur tous les écrans.",
    demo: "https://my-todolist-rust-alpha.vercel.app/",
    code: "https://github.com/MKSOW/myTodolist",
  },
  {
    titre: "TVMaze App",
    image: tvmazeImg,
    description:
      "Application web de recherche de séries TV utilisant l'API TVMaze, développée avec React.js. Permet aux utilisateurs de rechercher des séries, voir ses séries favoris, d'afficher les détails et de naviguer facilement grâce à une interface responsive.",
    demo: "https://tvmaze-app-delta.vercel.app/",
    code: "https://github.com/MKSOW/TVMAZE-APP",
  },
  {
    titre: "Framework CSS",
    image: frmaworkcssImg,
    description:
      "Ce projet est une reproduction de la partie vitrine (interface utilisateur) du site officiel du Real Madrid, réalisée dans le cadre de la pratique du module sur les frameworks et préprocesseurs CSS. Utilisation de SCSS (Sass) pour structurer, optimiser et réutiliser les styles de manière modulaire et maintenable.Mise en place d’une architecture CSS propre avec des variables, mixins, et nesting pour un rendu fidèle à l’original.Interface responsive adaptée à différents formats d’écran (desktop, tablette, mobile).Fidèle à la charte graphique et à l’identité visuelle du club (typographie, couleurs, animations).Projet statique visant à se concentrer sur l’intégration frontend pure sans logique métier.✅ Ce projet m’a permis de renforcer mes compétences en intégration HTML/CSS avancée, et de manipuler SCSS de façon concrète dans un contexte proche d’un projet professionnel",
    demo: "https://frameworkcss-3iqo.vercel.app/",
    code: "https://github.com/MKSOW/frameworkcss",
  },
];

export default function Projets() {
  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-gray-800">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-violet-600 mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes Projets
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projets.map((projet, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={projet.image}
              alt={projet.titre}
              className="h-48 w-full object-cover"
            />

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-violet-700 mb-2">
                  {projet.titre}
                </h3>
                <p className="text-gray-600 mb-4">{projet.description}</p>
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={projet.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition text-sm"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
                <a
                  href={projet.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 border border-violet-600 text-violet-600 px-4 py-2 rounded hover:bg-violet-100 transition text-sm"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
