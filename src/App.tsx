import { useState } from "react";
import { Download, BookOpen } from "lucide-react";

import { Cover } from "@/components/ebook/Cover";
import { Page, Ornament, PullQuote } from "@/components/ebook/Page";
import { CharacterPage } from "@/components/ebook/CharacterPage";
import { CTA } from "@/components/ebook/CTA";

import charHarley from "@/assets/char-harley.jpg";
import charRose from "@/assets/char-rose.jpg";
import charWalter from "@/assets/char-walter.jpg";
import charJordan from "@/assets/char-jordan.jpg";
import charShelby from "@/assets/char-shelby.jpg";
import charBatman from "@/assets/char-batman.jpg";
import charStrange from "@/assets/char-strange.jpg";
import charNeo from "@/assets/char-neo.jpg";

const TOTAL = 20;

export default function App() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);

    try {
      const html2pdf = (await import("html2pdf.js")).default;

      const element = document.getElementById("ebook-root");

      if (!element) return;

      await html2pdf()
        .set({
          margin: 0,
          filename: "Mary-Morgan-O-Codigo-Oculto.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#0A0A0A",
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },
        })
        .from(element)
        .save();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <main className="relative bg-[#0A0A0A] text-[#F5F5F5]">
      {/* BOTÃO PDF FIXO */}
      <a
        href="/Mary-Morgan-O-Codigo-Oculto.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir PDF"
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-2
          rounded-full
          bg-[#C8A96A]
          px-5 py-3
          text-[11px] font-medium uppercase tracking-[0.35em]
          text-black
          shadow-[0_0_30px_rgba(200,169,106,0.35)]
          transition-all duration-300
          hover:scale-105
          hover:bg-[#d8b97a]
          hover:shadow-[0_0_40px_rgba(200,169,106,0.55)]
          active:scale-95
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>

        PDF
      </a>

      <div id="ebook-root">
        <Cover />

        <Page
          number={2}
          total={TOTAL}
          chapter="Capítulo 01"
          variant="dark"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-10">
            Você Não Está Vivendo
            <br />
            <em className="text-[#C8A96A]">Apenas</em> o Presente.
          </h2>

          <Ornament />

          <p className="font-serif text-lg md:text-xl leading-[1.8] mb-6 opacity-95">
            Existe uma camada invisível operando dentro de você.
          </p>

          <PullQuote>
            O presente é apenas o palco. O roteiro foi escrito muito antes.
          </PullQuote>
        </Page>

        <CharacterPage
          number={6}
          total={TOTAL}
          archetype="Órfão Afetivo"
          name="Harley Quinn"
          movie="Suicide Squad · DC"
          image={charHarley}
          quote="Eu sou aquela maluca que faz o que ninguém tem coragem de fazer."
          body={[
            "Harley não é apenas caos.",
            "Ela representa abandono emocional transformado em vício afetivo.",
          ]}
        />

        <CharacterPage
          number={7}
          total={TOTAL}
          archetype="Órfão Afetivo"
          name="Rose DeWitt"
          movie="Titanic · 1997"
          image={charRose}
          quote="Eu vejo você."
          body={[
            "Rose viveu aprisionada.",
            "O amor virou portal para a própria identidade.",
          ]}
        />

        <CharacterPage
          number={9}
          total={TOTAL}
          archetype="Sobrevivente da Escassez"
          name="Walter White"
          movie="Breaking Bad"
          image={charWalter}
          quote="Eu sou o perigo."
          body={[
            "Walter queria respeito.",
            "O dinheiro era apenas a superfície.",
          ]}
        />

        <CharacterPage
          number={10}
          total={TOTAL}
          archetype="Sobrevivente da Escassez"
          name="Jordan Belfort"
          movie="O Lobo de Wall Street"
          image={charJordan}
          quote="Venda-me esta caneta."
          body={[
            "Jordan transformou vazio em excesso.",
            "Poder virou anestesia emocional.",
          ]}
        />

        <CharacterPage
          number={12}
          total={TOTAL}
          archetype="Controlador Silencioso"
          name="Thomas Shelby"
          movie="Peaky Blinders"
          image={charShelby}
          quote="Em nome do diabo..."
          body={[
            "Thomas controla tudo.",
            "Porque sente que perdeu tudo.",
          ]}
        />

        <CharacterPage
          number={13}
          total={TOTAL}
          archetype="Controlador Silencioso"
          name="Bruce Wayne"
          movie="Batman"
          image={charBatman}
          quote="O que eu faço me define."
          body={[
            "Batman é trauma organizado.",
            "Controle virou identidade.",
          ]}
        />

        <CharacterPage
          number={15}
          total={TOTAL}
          archetype="Mago Fragmentado"
          name="Stephen Strange"
          movie="Doctor Strange"
          image={charStrange}
          quote="Você não pode vencer a morte."
          body={[
            "A queda abriu o portal.",
            "O ego precisou morrer.",
          ]}
        />

        <CharacterPage
          number={16}
          total={TOTAL}
          archetype="Mago Fragmentado"
          name="Neo"
          movie="Matrix"
          image={charNeo}
          quote="Eu posso senti-los."
          body={[
            "Neo percebe a falha.",
            "A verdade sempre esteve dentro dele.",
          ]}
        />

        <Page
          number={20}
          total={TOTAL}
          chapter="Conclusão"
          variant="dark"
        >
          <div className="flex flex-col items-center text-center pt-10">
            <p className="text-[11px] tracking-[0.5em] uppercase text-[#C8A96A] mb-8">
              Última Página
            </p>

            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1] mb-10 max-w-2xl">
              O seu padrão tem
              <br />
              <em className="text-[#C8A96A]">nome</em>.
            </h2>

            <Ornament />

            <div className="flex flex-col items-center gap-5 mb-16">
              <CTA
                href="https://marymorgan-tarot.vercel.app/"
                label="Decifrar Meu Padrão"
                variant="primary"
              />

              <CTA
                href="https://marymorgan.vercel.app/"
                label="Entrar na Experiência"
              />
            </div>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="
                mt-16
                inline-flex
                items-center
                gap-3
                rounded-full
                px-8
                py-4
                text-[11px]
                tracking-[0.35em]
                uppercase
                text-black
                transition
                hover:scale-[1.02]
                disabled:opacity-60
              "
              style={{
                background:
                  "linear-gradient(135deg,#C8A96A 0%,#E6D3A3 100%)",
                boxShadow:
                  "0 0 40px rgba(200,169,106,0.35)",
              }}
            >
              <BookOpen className="h-4 w-4" />

              {downloading ? "Gerando PDF..." : "Baixar Ebook em PDF"}
            </button>
          </div>
        </Page>
      </div>
    </main>
  );
}
