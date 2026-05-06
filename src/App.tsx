import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Booking from "./Booking";

const content = {
  en: {
    title: "Arraial Surf School",
    subtitle: "Learn to surf in paradise 🌊",
    button: "Book a Lesson",
    aboutTitle: "About Us",
    aboutText:
      "We offer professional surf lessons for all levels in the crystal-clear waters of Arraial do Cabo. Private lessons or small groups, the experienced instructor and professional surfer Leo Barbalho will guide you through the amazing waves.",
    servicesTitle: "Our Services",
    service1: "Beginner Lessons",
    service1Desc:
      "Perfect if it's your first time on a board. Leo Barbalho is an experienced surfer and passionate teacher.",
    service2: "Advanced Coaching",
    service2Desc:
      "Improve your technique and confidence with the style and expertise of coach Leo!",
    service3: "Film Your Session",
    service3Desc:
      "Capture your best moments on the waves with our professional surf filming service by Leon Barbalho.",
    contactTitle: "Contact",
    contactText: "Get in touch with us!",
  },
  pt: {
    title: "Arraial Surf School",
    subtitle: "Aprenda a surfar no paraíso 🌊",
    button: "Agendar Aula",
    aboutTitle: "Sobre Nós",
    aboutText:
      "Oferecemos aulas de surf, para todos os níveis, nas águas cristalinas de Arraial do Cabo. Aulas individuais ou pequenos grupos, o experiente instrutor e surfista profissional Leo Barbalho irá guiá-lo em ondas incríveis.",
    servicesTitle: "Nossos Serviços",
    service1: "Aulas para Iniciantes",
    service1Desc:
      "Perfeito se é sua primeira vez na prancha. Leo Barbalho é um surfista experiente e apaixonado por ensinar.",
    service2: "Treino Avançado",
    service2Desc:
      "Melhore sua técnica e confiança com o style e metodologia do coach Leo!",
    service3: "Filme Sua Sessão",
    service3Desc:
      "Capture seus melhores momentos nas ondas com nosso serviço profissional de filmagem de surf por Leon Barbalho.",
    contactTitle: "Contato",
    contactText: "Entre em contato conosco!",
  },
};

function App() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const t = content[lang];
  const navigate = useNavigate();

  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div style={{ fontFamily: "Arial, sans-serif" }}>
            
            {/* LANGUAGE SWITCH */}
            <div
              style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                zIndex: 10,
                display: "flex",
                gap: "10px",
              }}
            >
              <button onClick={() => setLang("pt")} style={{ fontSize: "24px", cursor: "pointer" }}>
                🇧🇷
              </button>
              <button onClick={() => setLang("en")} style={{ fontSize: "24px", cursor: "pointer" }}>
                🇺🇸
              </button>
            </div>

            {/* HERO */}
            <section
              style={{
                height: "100vh",
                background:
                  "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') center/cover",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h1 style={{ fontSize: "3rem" }}>{t.title}</h1>
              <p>{t.subtitle}</p>

              <button
                onClick={() => navigate("/booking")}
                style={{
                  marginTop: "20px",
                  padding: "12px 24px",
                  background: "#00bcd4",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {t.button}
              </button>
            </section>

            {/* ABOUT */}
            <section style={{ padding: "60px 20px", textAlign: "center" }}>
              <h2>{t.aboutTitle}</h2>
              <p style={{ maxWidth: "600px", margin: "0 auto" }}>
                {t.aboutText}
              </p>
            </section>

            {/* SERVICES */}
            <section
              style={{
                padding: "60px 20px",
                background: "#f5f5f5",
                textAlign: "center",
              }}
            >
              <h2>{t.servicesTitle}</h2>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                  flexWrap: "wrap",
                  marginTop: "30px",
                }}
              >
                <div style={{ maxWidth: "250px" }}>
                  <h3>{t.service1}</h3>
                  <p>{t.service1Desc}</p>
                </div>

                <div style={{ maxWidth: "250px" }}>
                  <h3>{t.service2}</h3>
                  <p>{t.service2Desc}</p>
                </div>

                <div style={{ maxWidth: "250px" }}>
                  <h3>{t.service3}</h3>
                  <p>{t.service3Desc}</p>
                </div>
              </div>
            </section>

            {/* CONTACT */}
            <section style={{ padding: "60px 20px", textAlign: "center" }}>
              <h2>{t.contactTitle}</h2>
              <p>WhatsApp: +55 22 99978-1304</p>
              <p>Email: surf@arraailsurfschool.com</p>
            </section>
          </div>
        }
      />

      {/* BOOKING PAGE */}
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;