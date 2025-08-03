import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaEyeSlash } from 'react-icons/fa';
import cvFile from '../assets/Mamadou-Khaly-Sow-CV.pdf'; // 📎 Corrige le chemin si besoin

export default function Cv() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section className="pt-28 pb-16 px-6 max-w-5xl mx-auto text-center text-gray-800">
      {/* Titre */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-violet-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mon CV
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Retrouvez ici mon parcours professionnel et académique à travers mon CV. 
        Vous pouvez le télécharger directement ou le visualiser dans cette page. 
        Cliquez de nouveau pour le masquer si besoin.
      </motion.p>

      {/* Boutons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href={cvFile}
          download
          className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition duration-300 shadow-md"
        >
          <FaDownload />
          Télécharger le CV
        </a>

        <button
          onClick={() => setShowPreview(!showPreview)}
          className="inline-flex items-center gap-2 border-2 border-violet-600 text-violet-600 px-6 py-3 rounded-lg hover:bg-violet-100 transition duration-300 shadow-sm"
        >
          {showPreview ? (
            <>
              <FaEyeSlash />
              Masquer le CV
            </>
          ) : (
            <>
              <FaEye />
              Visualiser le CV
            </>
          )}
        </button>
      </motion.div>

      {/* Aperçu PDF */}
      {showPreview && (
        <motion.div
          className="mt-6 w-full max-w-full rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative w-full" style={{ paddingTop: '130%' }}>
            <iframe
              src={cvFile}
              title="CV de Mamadou Khaly Sow"
              className="absolute top-0 left-0 w-full h-full border-none rounded-xl"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
