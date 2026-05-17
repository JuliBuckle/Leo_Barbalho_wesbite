import { useNavigate } from "react-router-dom";
import "./Booking.css";

type Language = "pt" | "en";

type BookingProps = {
  language: Language;
};

const content = {
  pt: {
    title: "Reserve Sua Aula",
    subtitle:
      "Entre em contato conosco pelo WhatsApp para agendar sua aula de surf.",
    button: "Reservar pelo WhatsApp",
    back: "← Voltar",
  },

  en: {
    title: "Book Your Lesson",
    subtitle:
      "Contact us on WhatsApp to schedule your surf lesson.",
    button: "Book via WhatsApp",
    back: "← Back",
  },
};

export default function Booking({
  language,
}: BookingProps) {
  const navigate = useNavigate();

  const t = content[language];

  return (
    <section className="booking-page">
      <div className="booking-overlay">
        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          {t.back}
        </button>

        <div className="booking-card">
          <h1>{t.title}</h1>

          <p>{t.subtitle}</p>

          <a
            href="https://wa.me/5522999781304"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
}