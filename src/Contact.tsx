import "./Contact.css";
import whatsappIcon from "./assets/whatsapp.png";

type Language = "pt" | "en";

type ContactProps = {
  language: Language;
};

const content = {
  pt: {
    title: "Contato",
    text: "Entre em contato conosco.",
    whatsappLabel: "WhatsApp",
    whatsappNumber: "+55 22 99978-1304",
    email: "surf@arraialsurfschool.com",
  },

  en: {
    title: "Contact",
    text: "Get in touch with us.",
    whatsappLabel: "WhatsApp",
    whatsappNumber: "+55 22 99978-1304",
    email: "surf@arraialsurfschool.com",
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

        <div className="contact-whatsapp">
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="whatsapp-icon"
          />

          <div>
            <div className="whatsapp-label">
              {t.whatsappLabel}
            </div>

            <div className="whatsapp-number">
              {t.whatsappNumber}
            </div>
          </div>
        </div>

        <div className="contact-email">
          <strong>Email:</strong>

          <div>{t.email}</div>
        </div>
      </div>
    </section>
  );
}