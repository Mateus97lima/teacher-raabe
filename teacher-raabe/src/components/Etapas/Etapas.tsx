const etapas = [
  {
    num: "1",
    title: "Etapa 1 — Entrevista",
    color: "text-purple-light",
    bg: "rgba(108,63,197,0.2)",
    accent: "from-purple to-purple-light",
    text: `Pegue um café, um chá ou até sua garrafinha de água — e vamos conversar.
Quero saber de você: como começou sua jornada com o inglês? O que tem estudado atualmente? E onde você quer chegar?
Esse é um bom momento pra refletirmos juntos sobre o seu caminho até aqui. Será que você está no nível iniciante, intermediário ou já está mais avançado do que imagina?
Vou te fazer algumas perguntas, mas fique tranquilo(a): elas são só pra nos ajudar a entender melhor seu momento na língua. O importante é sermos honestos com o processo.`,
  },
  {
    num: "2",
    title: "Etapa 2 — Construir",
    color: "text-pink-light",
    bg: "rgba(224,64,160,0.2)",
    accent: "from-pink to-pink-light",
    text: `Após nossa conversa inicial, terei as informações que preciso para montar um plano de estudos personalizado pra você.
Vamos passar por duas grandes fases de acompanhamento e revisão, que vão nos ajudar a ajustar o foco das aulas e garantir que estamos caminhando na direção certa.
Durante essa etapa, vamos trabalhar bastante com comunicação, prática e desenvolvimento das suas habilidades — tudo de forma organizada e de acordo com os seus objetivos.`,
  },
  {
    num: "3",
    title: "Etapa 3 — Polimento",
    color: "text-teal",
    bg: "rgba(14,207,180,0.15)",
    accent: "from-teal-dark to-teal",
    text: `Conforme avançamos nos estudos, vamos nos concentrar nos últimos ajustes para que você se sinta cada vez mais confiante com o inglês.
Nessa fase, costumo revisar os conteúdos que ainda precisam de reforço e ajustar os detalhes finais do seu plano de aprendizagem.
Depois disso, fazemos uma "limpeza e polimento": refinamos pronúncia, gramática, vocabulário e fluência de forma mais precisa.
E claro — você vai receber toda a orientação e suporte necessário pra seguir com autonomia. O objetivo é um encerramento sólido e um novo começo com mais segurança no idioma! 🎉`,
  },
];

export default function Etapas() {
  return (
    <section id="etapas" className="py-[90px] px-[5%] bg-[#1A1535]">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-[0.72rem] font-semibold text-teal tracking-[0.1em] uppercase mb-2 bg-[rgba(14,207,180,0.1)] px-3 py-1 rounded-full border border-[rgba(14,207,180,0.2)]">
          Como funciona
        </span>
        <h2 className="font-playfair text-[clamp(2rem,4vw,2.8rem)] text-white mb-3 leading-tight">
          O meu método em 3 etapas
        </h2>
        <p className="text-[0.95rem] text-[#9B93B8] leading-[1.8] font-light max-w-[560px] mb-10">
          Um processo pensado para te levar do seu ponto atual até onde você quer chegar — com
          clareza, consistência e muita evolução.
        </p>

        <div className="flex flex-col gap-5">
          {etapas.map((e) => (
            <div
              key={e.num}
              className="bg-card card-border rounded-2xl p-8 grid grid-cols-[auto_1fr] gap-8 items-start relative overflow-hidden hover:border-[rgba(108,63,197,0.5)] transition-colors duration-300 group"
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${e.accent}`}
              />
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center font-playfair text-2xl font-bold shrink-0"
                style={{ background: e.bg }}
              >
                <span className={e.color}>{e.num}</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl text-white mb-3">{e.title}</h3>
                <p className="text-sm text-[#9B93B8] leading-[1.9] font-light whitespace-pre-line">
                  {e.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
