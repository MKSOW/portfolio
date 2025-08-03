const nodemailer = require("nodemailer");

exports.sendContactEmail = async (req, res) => {
const { nom, email, message } = req.body;

  // Validation basique des champs
  if (!nom || !email || !message) {
    return res.status(400).json({ success: false, message: "Tous les champs sont requis." });
  }

  // Vérifie l'email avec une regex simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "L'adresse email n'est pas valide." });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Envoi vers toi (le développeur)
    await transporter.sendMail({
      from: `"${nom}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `💬 Nouveau message de ${nom}`,
      text: `
        Vous avez reçu un nouveau message depuis le portfolio :

        👤 Nom : ${nom}
        📧 Email : ${email}

        ✉️ Message :
        ${message}
      `,
    });

    // 2. Envoi de confirmation à l'utilisateur
    await transporter.sendMail({
      from: `"Khaly Sow - Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "📨 Votre message a bien été reçu !",
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background-color: #f9f9f9; border: 1px solid #e0e0e0;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://i.imgur.com/sS1WueI.png" alt="Logo Khaly Sow" width="70" />
      <h2 style="color: #4A3AFF;">Merci pour votre message !</h2>
    </div>

    <p>Bonjour <strong>${nom}</strong>,</p>

    <p>Je vous remercie pour votre message envoyé depuis mon portfolio. Je l’ai bien reçu et je vous répondrai dans les plus brefs délais.</p>

    <p style="margin-top: 20px;">🔁 Ceci est un message automatique pour confirmer la bonne réception de votre demande.</p>

      <p>En attendant, n’hésitez pas à explorer mes projets sur GitHub ou en apprendre plus sur mon parcours via LinkedIn :</p>
        <div style="text-align: center; margin: 20px 0;">
    <a href="https://www.linkedin.com/in/mamadou-khaly-sow-609a122b7" target="_blank" style="margin-right: 15px;">
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="32" />
    </a>
    <a href="https://github.com/MKSOW" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" width="32" />
    </a>
  </div>

    <p style="margin-top: 20px;">✨ Je vous souhaite une excellente journée et vous dis à très bientôt !</p>

    

    <hr style="margin: 30px 0;" />

    <p style="font-size: 15px; color: #555;">
      Bien cordialement,<br/>
      <strong>Mamadou Khaly Sow</strong><br/>
      Développeur Web Full Stack<br/>
     <a href="mailto:${process.env.EMAIL_RECEIVER}" style="color: #4A3AFF;">${process.env.EMAIL_RECEIVER}</a><br/>

    </p>
      `,
    });

    res.status(200).json({ success: true, message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    res.status(500).json({ success: false, message: "Erreur serveur lors de l'envoi du message." });
  }
};
