import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [status, setStatus] = useState({ success: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ success: null, message: '' });
  setLoading(true);

  try {
    const { nom, email, message } = formData;
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, {
      nom,
      email,
      message,
    });

    setStatus({ success: true, message: res.data.message });
    setFormData({ nom: '', email: '', message: '' });
  } catch (err) {
    const msg = err.response?.data?.message || "Erreur lors de l'envoi.";
    setStatus({ success: false, message: msg });
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="pt-28 pb-20 px-6 max-w-3xl mx-auto text-gray-800">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-violet-600 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contactez-moi
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Une idée de projet ou une collaboration en tête ? N’hésitez pas à me laisser un message !
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <input
          type="text"
          name="nom"
          placeholder="Votre nom"
          value={formData.nom}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Votre adresse email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition duration-300"
        >
          <FaPaperPlane />
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </motion.form>

      {/* Affichage du message */}
      {status.message && (
        <motion.p
          className={`mt-6 text-center font-medium ${
            status.success ? "text-green-600" : "text-red-600"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {status.message}
        </motion.p>
      )}
    </section>
  );
}
