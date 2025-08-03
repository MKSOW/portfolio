# 🌐 Portfolio - Mamadou Khaly Sow

Bienvenue sur mon portfolio personnel développé en **React.js**, avec des animations via **Framer Motion** et du stylisme moderne grâce à **Tailwind CSS**. Il présente mes projets, mes compétences techniques, mon parcours, et permet de me contacter via un formulaire dynamique.

---

## 🔥 Aperçu

![Aperçu du Portfolio](./src/assets/images/portfolio.png) 

🎯 Objectif : Mettre en avant mes réalisations en tant que développeur Full Stack et permettre aux visiteurs (recruteurs, collaborateurs, etc.) de découvrir mon profil et me contacter facilement.

---

## 🚀 Fonctionnalités

- 🌍 **Page d’accueil animée** avec photo, titre, phrase d'accroche et stack technologique.
- 👨‍💼 **Page À propos** avec mon parcours, mes expériences professionnelles et formations.
- 📄 **CV interactif** affiché au clic, avec option de masquage.
- 🛠️ **Page Projets** avec cartes, images, descriptions, boutons de démo et code source.
- 📬 **Page Contact** avec formulaire dynamique utilisant **Node.js + Nodemailer** côté backend.
- 📱 **Responsive design** (adapté aux smartphones, tablettes et desktop).
- 🎨 Icônes personnalisées avec des SVG colorés et animés.

---

## 🛠️ Technologies utilisées

### Frontend :
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com/)
- [Vite.js](https://vitejs.dev/)

### Backend :
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)

### Outils :
- [Git & GitHub](https://github.com/)
- [Postman](https://www.postman.com/)
- [Figma, Trello, Canva]

---

## 📁 Structure du projet

```
frontend/
├── src/
│   ├── components/       # Navbar, Footer, Card, etc.
│   ├── pages/            # Home, About, Projects, Contact
│   ├── assets/           # Images et icônes
│   ├── App.jsx
│   └── index.css
├── public/
│   └── index.html
└── vite.config.js
```

---

## ⚙️ Installation locale

### 1. Cloner le dépôt

```bash
git clone https://github.com/MKSOW/portfolio.git
cd portfolio
```

### 2. Installer les dépendances

```bash
cd frontend
npm install
```

### 3. Lancer le projet

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`.

### 4. Configurer le backend (facultatif pour la page Contact)

Crée un fichier `.env` dans le dossier backend avec les variables suivantes :

```env
EMAIL_USER=ton.email@gmail.com
EMAIL_PASS=motdepasse
EMAIL_RECEIVER=ton.email@gmail.com
FRONTEND_URL=http://localhost:5173
PORT=5000
```

---

## 📬 Contact

Tu peux me retrouver ici :

- [LinkedIn](https://www.linkedin.com/in/mamadou-khaly-sow-609a122b7)
- [GitHub](https://github.com/MKSOW)
- ✉️ Email : khalysow.dev@gmail.com

---

## 💡 Remarques

Ce portfolio est **en constante évolution**. N'hésitez pas à revenir pour voir les nouvelles fonctionnalités et projets ajoutés !

---

## 🧾 Licence

Ce projet est libre et open-source. Distribué sous la licence [MIT](https://opensource.org/licenses/MIT).