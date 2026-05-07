const certs = [
  { icon: "🏆", title: "FECLESC", sub: "Universidade de Quixáda" },
  { icon: "📚", title: "TOEFL · IELTS", sub: "Preparação para exames" },
  { icon: "🌐", title: "100% Online", sub: "Zoom · Google Meet" },
  { icon: "⏰", title: "Horários flexíveis", sub: "Adaptado à sua rotina" },
];

const funTags = ["☕ Café lover", "🐱 Cat mom", "🎮 Gamer", "🍣 Sushi", "📺 BoJack"];

export default function About() {
  return (
    <section id="about" className="py-[90px] px-[5%] bg-[#13102A]">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-[0.72rem] font-semibold text-teal tracking-[0.1em] uppercase mb-2 bg-[rgba(14,207,180,0.1)] px-3 py-1 rounded-full border border-[rgba(14,207,180,0.2)]">
          Quem sou eu
        </span>
        <h2 className="font-playfair text-[clamp(2rem,4vw,2.8rem)] text-white mb-3 leading-tight">
          Prazer, eu sou a Raabe 👋
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-[5rem] mt-10 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-4">
            <div className="bg-card card-border rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-br from-[rgba(108,63,197,0.3)] to-[rgba(224,64,160,0.2)]" />
              <div className="w-[90px] h-[90px] rounded-full gradient-bg flex items-center justify-center font-playfair text-4xl text-white mx-auto mb-4 relative z-10 border-2 border-[rgba(255,255,255,0.15)]">
                R
              </div>
              <div className="font-playfair text-xl text-white relative z-10">Teacher Raabe</div>
              <div className="text-xs text-teal mt-1 font-medium tracking-wide relative z-10">
                English Teacher · FECLESC Certified
              </div>
            </div>

            <div className="bg-card card-border rounded-2xl p-6">
              <div className="text-xs font-semibold text-purple-light tracking-widest uppercase mb-4">
                ✨ Um pouco sobre mim
              </div>
              <p className="text-md text-[#9B93B8] leading-[1.8] font-light">
                Sou apaixonada por café e não começo o dia sem uma boa xícara!
                Tenho dois companheiros incríveis: o{" "}
                <span className="text-white font-medium">Zezinho</span> (pretinho clássico) e o{" "}
                <span className="text-white font-medium">Gaara</span> (frajolinha estiloso) — meus
                gatos que sempre aparecem nas aulas online. Amo jogos, minha animação favorita é
                BoJack Horseman, e se quiser me conquistar, é só chamar pra comer um bom sushi 🍣.
                Ah, e sim, meu coração já tem dono 💛
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {funTags.map((t) => (
                  <span
                    key={t}
                    className="bg-[rgba(108,63,197,0.15)] border border-[rgba(108,63,197,0.25)] text-purple-light text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-[0.99rem] text-[#9B93B8] leading-[1.9] font-light mb-4">
              Sou professora de inglês com mais de 8 anos de experiência formando alunos do nível
              básico ao avançado. Minha paixão pelo idioma começou cedo e se transformou em missão:
              ajudar pessoas reais a conquistarem a fluência que sempre sonharam.
            </p>
            <p className="text-[0.95rem] text-[#9B93B8] leading-[1.9] font-light mb-4">
              Minha metodologia une gramática, conversação e contexto real para resultados rápidos e
              duradouros. Acredito que aprender inglês vai além de decorar palavras — é sobre ganhar
              confiança, abrir portas e transformar perspectivas de vida.
            </p>
            <p className="text-[0.95rem] text-[#9B93B8] leading-[1.9] font-light mb-6">
              Cada aluno tem um ritmo, uma história e um objetivo diferente. Por isso, cada plano de
              estudos que crio é único — feito sob medida pra você.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certs.map((c) => (
                <div
                  key={c.title}
                  className="bg-card card-border rounded-xl p-4 flex items-center gap-3"
                >
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <div className="text-sm text-[#F0EDF8] font-medium">{c.title}</div>
                    <div className="text-xs text-[#9B93B8]">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
