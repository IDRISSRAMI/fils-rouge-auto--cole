import nodemailer from 'nodemailer';

export async function sendEmail(to, subject, text) {
  try {
    // Création du transporteur SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou autre service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email envoyé à:', to);
  } catch (error) {
    console.error('Erreur en envoyant email:', error);
  }
}
