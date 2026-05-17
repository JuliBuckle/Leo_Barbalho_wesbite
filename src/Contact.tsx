import React from "react";
import "./Contact.css";

type Language = "pt" | "en";

type ContactProps = {
  language: Language;
};

const content = {
  pt: {
    title: "Contato",
    text: "Entre em contato conosco.",
    whatsapp: "WhatsApp: +55 22 99978-1304",
    email: "Email: surf@arraialsurfschool.com",
  },

  en: {
    title: "Contact",
    text: "Get in touch with us.",
    whatsapp: "WhatsApp: +55 22 99978-1304",
    email: "Email: surfarraialsurfschool.com",
  },
};

export default function Contact({
  language,
}: ContactProps) {
  const t = content[language];

  return (
    <section className="contact-page">
      <div className="contact-content">
        <h1>{t.title}</h1>

        <p>{t.text}</p>

        <p>{t.whatsapp}</p>

        <p>{t.email}</p>
      </div>
    </section>
  );
}