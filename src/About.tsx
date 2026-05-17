import "./About.css";

type Language = "pt" | "en";

type AboutProps = {
  language: Language;
};

const leoPhotos: string[] = [
  "/images/leo-surf-1.jpg",
  "/images/leo-surf-2.jpg",
  "/images/leo-surf-3.jpg",
  "/images/leo-surf-4.jpg",
];

const leonnPhotos: string[] = [
  "/images/leon-1.jpg",
  "/images/leon-2.jpg",
  "/images/leon-3.jpg",
  "/images/leon-4.jpg",
  "/images/leon-5.jpg",
  "/images/leon-6.jpg",
  "/images/leon-7.jpg",
  "/images/leon-8.jpg",


];

const content = {
  pt: {
    heroTitle: "Arraial Surf School",
    heroText:
      "Mais do que aulas de surf. Uma experiência vivida com quem nasceu no mar.",

    historyLabel: "Nossa história",
    brothersTitle: "Os irmãos Barbalho",

    brothersText1:
      "A Arraial Surf School nasceu da idealização dos irmãos Barbalho, unindo paixão pelo surf, experiência no mar e um olhar profissional para criar uma experiência completa para quem deseja aprender ou evoluir no surf.",

    brothersText2:
      "Nascidos e criados em Arraial do Cabo, eles conhecem profundamente os melhores picos de onda, as condições do mar e os melhores ângulos para registrar momentos inesquecíveis nas águas cristalinas do Caribe Brasileiro.",

    leoLabel: "Surf",
    leoTitle: "Léo Barbalho",

    leoText:
      "Léo Barbalho é surfista profissional, freesurfer e apaixonado pela água desde muito novo. Com mais de 10 anos de experiência, ele possui um dom natural para ensinar alunos de todos os níveis. Ele é instrutor de surf certificado pelo Ibrasurf e tem uma conexão profunda com o oceano, tornando-o o guia perfeito para sua jornada no surf.",

    banner: "Nascidos e criados em Arraial do Cabo",

    leonnLabel: "Filme & Fotografia",
    leonnTitle: "Leon Barbalho",

    leonnText:
      "Leon Barbalho é filmmaker profissional premiado, com trabalhos publicados em diversas revistas. Seu olhar artístico traz um diferencial especial para a escola.",
    
    surflineLink: "Ver publicação na Surfline",


    galleryLabel: "Caribe Brasileiro",
    galleryTitle: "Surf, mar e experiência",

    ctaTitle: "Sua primeira onda começa aqui.",
    ctaText:
      "Viva uma experiência única nas águas cristalinas de Arraial do Cabo.",

    ctaButton: "Agendar aula",
  },

  en: {
    heroTitle: "Arraial Surf School",
    heroText:
      "More than surf lessons. An experience guided by people who were born by the sea.",

    historyLabel: "Our story",
    brothersTitle: "The Barbalho Brothers",

    brothersText1:
      "Arraial Surf School was created by the Barbalho brothers, combining passion for surfing, ocean experience and a professional creative vision.",

    brothersText2:
      "Born and raised in Arraial do Cabo, they know the best surf spots and angles to capture unforgettable moments.",

    leoLabel: "Surf",
    leoTitle: "Léo Barbalho",

    leoText:
      "Léo Barbalho is a professional surfer and freesurfer with more than 10 years of experience and a natural talent for teaching students of all levels. He is a cerified surf instructor by Ibrasurf and has a deep connection with the ocean, making him the perfect guide for your surf journey.",

    banner: "Born and raised in Arraial do Cabo",

    leonnLabel: "Film & Photography",
    leonnTitle: "Leon Barbalho",

    leonnText:
      "Leon Barbalho is an award-winning filmmaker whose work has been published in several magazines.",

    surflineLink: "View Surfline publication",  

    galleryLabel: "Brazilian Caribbean",
    galleryTitle: "Surf, ocean and experience",

    ctaTitle: "Your first wave starts here.",
    ctaText:
      "Live a unique experience in the crystal-clear waters of Arraial do Cabo.",

    ctaButton: "Book a lesson",
  },
};

export default function About({
  language,
}: AboutProps) {
  const t = content[language];

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-intro">
        <div className="about-intro-image">
          <img
            src="/images/barbalho-brothers.jpg"
            alt={t.brothersTitle}
          />
        </div>

        <div className="about-intro-text">
          <span className="section-label">
            {t.historyLabel}
          </span>

          <h2>{t.brothersTitle}</h2>

          <p>{t.brothersText1}</p>
          <p>{t.brothersText2}</p>
        </div>
      </section>

      {/* FULL BANNER */}
      <section className="full-banner">
        <h2>{t.banner}</h2>
      </section>

      {/* LEO */}
      <section className="profile-section">
        <div className="profile-text">
          <span className="section-label">
            {t.leoLabel}
          </span>

          <h2>{t.leoTitle}</h2>

          <p>{t.leoText}</p>


        </div>

        <div className="carousel">
          {leoPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Leo ${index + 1}`}
            />
          ))}
        </div>
      </section>

    

      {/* LEONN */}
      <section className="profile-section reverse">
        <div className="carousel">
          {leonnPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Leonn ${index + 1}`}
            />
          ))}
        </div>

        <div className="profile-text">
          <span className="section-label">
            {t.leonnLabel}
          </span>

          <h2>{t.leonnTitle}</h2>

          <p>{t.leonnText}</p>
          <a
  href="https://www.surfline.com/surf-news/kelly-slater-barreled-barrinha/55317"
  target="_blank"
  rel="noopener noreferrer"
  className="surfline-link"
>
  {t.surflineLink}
</a>



        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <span className="section-label">
          {t.galleryLabel}
        </span>

        <h2>{t.galleryTitle}</h2>

        <div className="gallery-grid">
          <img src="/images/gallery-1.jpg" alt="" />
          <img src="/images/gallery-2.jpg" alt="" />
          <img src="/images/gallery-3.jpg" alt="" />
          <img src="/images/gallery-4.jpg" alt="" />
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>{t.ctaTitle}</h2>

        <p>{t.ctaText}</p>

        <a
          href="https://wa.me/5522999781304"
          target="_blank"
          rel="noreferrer"
        >
          {t.ctaButton}
        </a>
      </section>
    </div>
  );
}