import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-violet-700"><strong>MK-SOW</strong></Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-violet-600">Accueil</Link>
          <Link to="/about" className="hover:text-violet-600">À propos</Link>
          <Link to="/projets" className="hover:text-violet-600">Projets</Link>
          <Link to="/cv" className="hover:text-violet-600">CV</Link>
          <Link to="/contact" className="hover:text-violet-600">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md px-4 pb-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <nav className="flex flex-col space-y-2 text-gray-700 font-medium">
              <Link to="/" onClick={toggleMenu}>Accueil</Link>
              <Link to="/a-propos" onClick={toggleMenu}>À propos</Link>
              <Link to="/projets" onClick={toggleMenu}>Projets</Link>
              <Link to="/cv" onClick={toggleMenu}>CV</Link>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
