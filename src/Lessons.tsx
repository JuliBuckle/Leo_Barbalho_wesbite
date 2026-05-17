import "./Lessons.css";

type Language = "pt" | "en";

type LessonsProps = {
  language: Language;
};

const content = {
  pt: {
    title: "Aulas",
    subtitle: "Pacotes de aulas de surf",
    note: "Para confirmar a aula, é necessário um sinal de 50% do pacote.",
    oneHour: "Aulas de 1 hora",
    oneHalfHour: "Aulas de 1 hora e 30 minutos",
    specialPackages: "Pacotes de Imagens (Foto e Vídeo)",
    columns: ["Pacote", "Preço"],

    oneHourPrices: [
      ["1 aula avulsa", "R$ 150,00"],
      ["Pacote 2 aulas", "R$ 280,00"],
      ["Pacote 3 aulas", "R$ 400,00"],
      ["Pacote 4 aulas", "R$ 500,00"],
      ["Pacote 5 aulas", "R$ 600,00"],
      ["Pacote 6 aulas", "R$ 680,00"],
      ["Pacote 7 aulas", "R$ 770,00"],
      ["Pacote 10 aulas", "R$ 1.000,00"],
    ],

    oneHalfHourPrices: [
      ["1 aula avulsa", "R$ 200,00"],
      ["Pacote 2 aulas", "R$ 380,00"],
      ["Pacote 3 aulas", "R$ 525,00"],
      ["Pacote 4 aulas", "R$ 650,00"],
      ["Pacote 5 aulas", "R$ 800,00"],
      ["Pacote 6 aulas", "R$ 950,00"],
      ["Pacote 7 aulas", "R$ 1.080,00"],
      ["Pacote 10 aulas", "R$ 1.500,00"],
    ],

    specialPrices: [
      ["1 hora de sessão para 1 pessoa", "R$ 250,00"],
      ["2 horas de sessão para 1 pessoa", "R$ 350,00"],
      ["3 horas de sessão para 1 pessoa", "R$ 450,00"],
      ["1 hora de sessão para 2 pessoas", "R$ 400,00"],
      ["2 horas de sessão para 2 pessoas", "R$ 600,00"],
      ["3 horas de sessão para 2 pessoas", "R$ 800,00"],
      ["1 hora de sessão para 3 pessoas", "R$ 500,00"],
      ["2 horas de sessão para 3 pessoas", "R$ 800,00"],
      ["3 horas de sessão para 3 pessoas", "R$ 900,00"],
      ["4 horas de sessão para 4 pessoas", "R$ 1.200,00"],
      ["3 horas de sessão para 1 pessoa + edição de 1 min", "R$ 500,00"],
      ["3 horas de sessão para 2 pessoas + 2 edições de 1 min", "R$ 900,00"],
    ],

    pixTitle: "Pagamento via Pix",
    pixKeyLabel: "Chave Pix:",
    pixButton: "Enviar comprovante no WhatsApp",
  },

  en: {
    title: "Lessons",
    subtitle: "Surf lesson packages",
    note: "To confirm the lesson, a 50% deposit of the package is required.",
    oneHour: "1-hour lessons",
    oneHalfHour: "1 hour and 30 minutes lessons",
    specialPackages: "Image Packages (Photo & Video)",
    columns: ["Package", "Price"],

    oneHourPrices: [
      ["Single lesson", "R$ 150.00"],
      ["2-lesson package", "R$ 280.00"],
      ["3-lesson package", "R$ 400.00"],
      ["4-lesson package", "R$ 500.00"],
      ["5-lesson package", "R$ 600.00"],
      ["6-lesson package", "R$ 680.00"],
      ["7-lesson package", "R$ 770.00"],
      ["10-lesson package", "R$ 1,000.00"],
    ],

    oneHalfHourPrices: [
      ["Single lesson", "R$ 200.00"],
      ["2-lesson package", "R$ 380.00"],
      ["3-lesson package", "R$ 525.00"],
      ["4-lesson package", "R$ 650.00"],
      ["5-lesson package", "R$ 800.00"],
      ["6-lesson package", "R$ 950.00"],
      ["7-lesson package", "R$ 1,080.00"],
      ["10-lesson package", "R$ 1,500.00"],
    ],

    specialPrices: [
      ["1-hour session for 1 person", "R$ 250.00"],
      ["2-hour session for 1 person", "R$ 350.00"],
      ["3-hour session for 1 person", "R$ 450.00"],
      ["1-hour session for 2 people", "R$ 400.00"],
      ["2-hour session for 2 people", "R$ 600.00"],
      ["3-hour session for 2 people", "R$ 800.00"],
      ["1-hour session for 3 people", "R$ 500.00"],
      ["2-hour session for 3 people", "R$ 800.00"],
      ["3-hour session for 3 people", "R$ 900.00"],
      ["4-hour session for 4 people", "R$ 1,200.00"],
      ["3-hour session for 1 person + 1 min edit", "R$ 500.00"],
      ["3-hour session for 2 people + two 1 min edits", "R$ 900.00"],
    ],

    pixTitle: "Pix Payment",
    pixKeyLabel: "Pix Key:",
    pixButton: "Send payment confirmation on WhatsApp",
  },
};

export default function Lessons({ language }: LessonsProps) {
  const t = content[language];

  const renderTable = (
    title: string,
    prices: string[][],
    extraClass = ""
  ) => (
    <div className={`lesson-card ${extraClass}`}>
      <h2 className="lesson-card-title">{title}</h2>

      <table className="lesson-table">
        <thead>
          <tr>
            <th>{t.columns[0]}</th>
            <th>{t.columns[1]}</th>
          </tr>
        </thead>

        <tbody>
          {prices.map((item, index) => (
            <tr key={index}>
              <td>{item[0]}</td>
              <td className="price">{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="lessons-page">
      <div className="lessons-container">
        <h1 className="lessons-title">{t.title}</h1>

        <p className="lessons-subtitle">{t.subtitle}</p>

        <div className="lessons-grid">
          {renderTable(t.oneHour, t.oneHourPrices)}
          {renderTable(t.oneHalfHour, t.oneHalfHourPrices)}
        </div>

        {renderTable(
          t.specialPackages,
          t.specialPrices,
          "special-prices-card"
        )}

        <p className="lessons-note">{t.note}</p>

        <div className="pix-box">
          <h3>{t.pixTitle}</h3>

          <p>{t.pixKeyLabel}</p>

          <div className="pix-key">
            Leo.barbalho@icloud.com
          </div>

          <a
            href="https://wa.me/5522999781304"
            target="_blank"
            rel="noopener noreferrer"
            className="pix-whatsapp"
          >
            {t.pixButton}
          </a>
        </div>
      </div>
    </section>
  );
}