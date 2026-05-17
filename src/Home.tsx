import React from "react";

type Language = "pt" | "en";

type HomeProps = {
  language: Language;
};

const content = {
  pt: {
    title: "Arraial Surf School",
    text: "Sua primeira onda começa aqui.",
  },

  en: {
    title: "Arraial Surf School",
    text: "Your first wave starts here.",
  },
};

export default function Home({
  language,
}: HomeProps) {
  const t = content[language];

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.text}</p>
    </div>
  );
}