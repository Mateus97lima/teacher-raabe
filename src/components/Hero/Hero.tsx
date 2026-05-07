export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-[5%] pt-[100px] pb-[60px] relative overflow-hidden">
      {/* Glows */}
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none top-[-100px] left-[-100px] bg-[rgba(108,63,197,0.35)] blur-[120px]" />
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none bottom-[-100px] right-[-100px] bg-[rgba(224,64,160,0.2)] blur-[120px]" />
      <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none top-1/2 right-[10%] -translate-y-1/2 bg-[rgba(14,207,180,0.12)] blur-[120px]" />

      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[rgba(14,207,180,0.12)] border border-[rgba(14,207,180,0.3)] text-teal text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
            <span className="w-[6px] h-[6px] rounded-full bg-teal animate-pulse" />
            English Teacher · Online
          </div>

          <h1 className="font-playfair text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] text-white mb-5">
            Fale inglês com{" "}
            <em className="gradient-text not-italic">confiança</em> e
            naturalidade
          </h1>

          <p className="text-[#9B93B8] text-base leading-[1.85] font-light mb-8 max-w-[480px]">
            Aulas personalizadas com método próprio — do seu nível atual até
            onde você quer chegar. Conversação real, evolução garantida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="gradient-bg text-white px-8 py-3 rounded-full font-semibold text-base hover:-translate-y-1 hover:opacity-90 transition-all duration-200 text-center"
            >
              Quero começar agora 🚀
            </a>
            <a
              href="#etapas"
              className="text-[#F0EDF8] px-8 py-3 rounded-full font-light text-base border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 text-center"
            >
              Ver o método
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="bg-card card-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple via-pink to-teal" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center font-playfair text-2xl text-white shrink-0">
                R
              </div>
              <div>
                <div className="font-playfair text-lg text-white">Teacher Raabe</div>
                <div className="text-xs text-[#9B93B8] mt-1">CELTA Certified · 8+ anos de experiência</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: "500+", label: "Alunos", color: "text-purple-light" },
                { num: "98%", label: "Satisfação", color: "text-pink-light" },
                { num: "4.9", label: "Avaliação", color: "text-teal" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-xl p-4 text-center"
                >
                  <span className={`font-playfair text-[1.8rem] font-bold block leading-none ${s.color}`}>
                    {s.num}
                  </span>
                  <span className="text-[0.72rem] text-[#9B93B8] mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🇺🇸", bg: "rgba(108,63,197,0.2)", title: "Inglês Americano", sub: "Conversação & Fluência" },
              { icon: "🎯", bg: "rgba(14,207,180,0.15)", title: "Método Próprio", sub: "3 etapas de evolução" },
            ].map((c) => (
              <div key={c.title} className="bg-card card-border rounded-xl p-5 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                  style={{ background: c.bg }}
                >
                  {c.icon}
                </div>
                <div>
                  <div className="text-[0.85rem] text-[#F0EDF8] font-medium">{c.title}</div>
                  <div className="text-[0.78rem] text-[#9B93B8] leading-snug">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
