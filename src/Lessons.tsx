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
    columns: ["Pacote", "Preço"],

    oneHourPrices: [
      ["1 aula avulsa", "R$ 150,00"],
      ["Pacote 2 aulas", "R$ 280,00"],
      ["Pacote 3 aulas", "R$ 400,00"],
      ["Pacote 5 aulas", "R$ 600,00"],
      ["Pacote 7 aulas", "R$ 770,00"],
      ["Pacote 10 aulas", "R$ 1.000,00"],
    ],

    oneHalfHourPrices: [
      ["1 aula avulsa", "R$ 200,00"],
      ["Pacote 3 aulas", "R$ 525,00"],
      ["Pacote 5 aulas", "R$ 800,00"],
      ["Pacote 7 aulas", "R$ 1.080,00"],
      ["Pacote 10 aulas", "R$ 1.500,00"],
    ],
  },

  en: {
    title: "Lessons",
    subtitle: "Surf lesson packages",
    note: "To confirm the lesson, a 50% deposit of the package is required.",
    oneHour: "1-hour lessons",
    oneHalfHour: "1 hour and 30 minutes lessons",
    columns: ["Package", "Price"],

    oneHourPrices: [
      ["Single lesson", "R$ 150.00"],
      ["2-lesson package", "R$ 280.00"],
      ["3-lesson package", "R$ 400.00"],
      ["5-lesson package", "R$ 600.00"],
      ["7-lesson package", "R$ 770.00"],
      ["10-lesson package", "R$ 1,000.00"],
    ],

    oneHalfHourPrices: [
      ["Single lesson", "R$ 200.00"],
      ["3-lesson package", "R$ 525.00"],
      ["5-lesson package", "R$ 800.00"],
      ["7-lesson package", "R$ 1,080.00"],
      ["10-lesson package", "R$ 1,500.00"],
    ],
  },
};

export default function Lessons({ language }: LessonsProps) {
  const t = content[language];

  const renderTable = (title: string, prices: string[][]) => (
    <div className="lesson-card">
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

          {renderTable(
            t.oneHalfHour,
            t.oneHalfHourPrices
          )}
        </div>

        <p className="lessons-note">{t.note}</p>

       <div className="pix-box">
  <h3>
    {language === "pt"
      ? "Pagamento via Pix"
      : "Pix Payment"}
  </h3>

  <p>
    {language === "pt"
      ? "Chave Pix:"
      : "Pix Key:"}
  </p>

  <div className="pix-key">
    Leo.barbalho@icloud.com
  </div>

  <a
    href="https://wa.me/5522999781304"
    target="_blank"
    rel="noopener noreferrer"
    className="pix-whatsapp"
  >
    {language === "pt"
      ? "Enviar comprovante no WhatsApp"
      : "Send payment confirmation on WhatsApp"}
  </a>
</div>

      </div>
    </section>
  );
}