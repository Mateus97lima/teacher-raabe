const testimonials = [
  {
    initials: "CM",
    name: "Carlos Mendes",
    role: "Analista de TI",
    color: "bg-[rgba(108,63,197,0.25)] text-purple-light",
    text: "Em 6 meses com a Teacher Raabe consegui passar na entrevista de emprego em inglês. Ela tem um dom para ensinar de forma simples e eficaz.",
  },
  {
    initials: "AF",
    name: "Amanda Ferreira",
    role: "Estudante universitária",
    color: "bg-[rgba(224,64,160,0.2)] text-pink-light",
    text: "Tentei aprender inglês por anos sem sucesso. Com a Raabe, em 3 meses já me comunicava com confiança. Método incrível e muito divertido!",
  },
  {
    initials: "LR",
    name: "Lucas Rodrigues",
    role: "Mestrando no exterior",
    color: "bg-[rgba(14,207,180,0.15)] text-teal",
    text: "Tirei 7.5 no IELTS graças à preparação da Teacher Raabe. Ela conhece cada detalhe do exame e sabe exatamente como te preparar.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[90px] px-[5%] bg-[#0D0B1A]">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-[0.72rem] font-semibold text-teal tracking-[0.1em] uppercase mb-2 bg-[rgba(14,207,180,0.1)] px-3 py-1 rounded-full border border-[rgba(14,207,180,0.2)]">
          Depoimentos
        </span>
        <h2 className="font-playfair text-[clamp(2rem,4vw,2.8rem)] text-white mb-10 leading-tight">
          O que meus alunos dizem 💬
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card card-border rounded-2xl p-7 relative">
              <div className="absolute top-4 right-5 font-playfair text-5xl text-purple-light opacity-30 leading-none">
                "
              </div>
              <div className="text-yellow-400 text-sm mb-4 tracking-widest">★★★★★</div>
              <p className="text-sm text-[#9B93B8] leading-[1.85] font-light italic mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#F0EDF8]">{t.name}</div>
                  <div className="text-xs text-[#9B93B8]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
