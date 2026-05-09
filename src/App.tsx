import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import logo from "./assets/logo_clear.png";
import hero1 from "./assets/hero/hero1.png";
import hero2 from "./assets/hero/hero2.png";
import hero3 from "./assets/hero/hero3.png";
import "./App.css";

const heroImages = [
  hero1,
  hero2,
  hero3,
];



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
    navHome: "Home",
    navAbout: "About",
    navLessons: "Lessons",
    navContact: "Contact",
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
    navHome: "Início",
    navAbout: "Sobre",
    navLessons: "Aulas",
    navContact: "Contato",
  },
};

function App() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prevImage) =>
      prevImage === heroImages.length - 1 ? 0 : prevImage + 1
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);
  const t = content[lang];
  const navigate = useNavigate();
  

  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div style={{ fontFamily: "Arial, sans-serif" }}>
            

            {/* NAVBAR */}
<nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    zIndex: 1000,
    background: "rgba(0,0,0,0.25)",
    backdropFilter: "blur(8px)",
    boxSizing: "border-box",
    overflow: "visible",
  }}
>
  {/* LEFT LOGO */}
  <div
    style={{
      color: "white",
      fontSize: ".5rem",
      fontWeight: "bold",
      letterSpacing: "2px",
      cursor: "pointer",
    }}
  >
    <img
  src={logo}
  alt="Arraial Surf School"
  className="logo"
/>
  </div>

  {/* RIGHT MENU + LANGUAGE */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "28px",
    color: "white",
    fontWeight: 500,
  }}
>
  <span style={{ cursor: "pointer" }}>{t.navHome}</span>
  <span style={{ cursor: "pointer" }}>{t.navAbout}</span>
  <span style={{ cursor: "pointer" }}>{t.navLessons}</span>
  <span style={{ cursor: "pointer" }}>{t.navContact}</span>

  {/* LANGUAGE FLAGS */}
  <div className="language-switch" 
  style={{ display: "flex", gap: "8px", marginLeft: "12px" }}>
    <button
  onClick={() => setLang("pt")}
  style={{
    fontSize: "22px",
    cursor: "pointer",
    background:
      lang === "pt"
        ? "rgba(0,0,0,0.2)"
        : "transparent",
    border:
      lang === "pt"
        ? "1px solid rgba(255,255,255,0.2)"
        : "1px solid transparent",
    borderRadius: "8px",
    padding: "6px 8px",
    transition: "0.3s ease",
    backdropFilter: "blur(6px)",
    boxShadow:
      lang === "pt"
        ? "0 4px 12px rgba(255,255,255,0.4)"
        : "none",
  }}
>
  🇧🇷
</button>

    <button
  onClick={() => setLang("en")}
  style={{
    fontSize: "22px",
    cursor: "pointer",
    background: lang === "en"
      ? "rgba(255,255,255,0.2)"
      : "transparent",
    border: lang === "en"
      ? "1px solid rgba(255,255,255,0.4)"
      : "1px solid transparent",
    borderRadius: "8px",
    padding: "6px 8px",
    transition: "0.3s ease",
    backdropFilter: "blur(6px)",
  }}
>
  🇺🇸
</button>
  </div>
</div>
</nav>

            {/* HERO */}
            <section
              style={{
                height: "100vh",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${heroImages[currentImage]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "background-image 1s ease-in-out",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
              > 
             
            
 <div className="hero-content">
  <h1 className="hero-title">{t.title}</h1>

  <p className="hero-subtitle">{t.subtitle}</p>

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
</div>
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
              <p>Email: surf@arraialsurfschool.com</p>
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