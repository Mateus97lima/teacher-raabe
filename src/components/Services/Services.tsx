 const plans = [
{
    icon: "🎯",
    iconBg: "rgba(14,207,180,0.12)",
    title: "Plano Semanal",
    subtitle: "1 aula por semana",
    desc: "25 encontros de 60 min. Plano de estudos semanal, acesso à plataforma Ellii, homework personalizado e 1 participação semanal em turmas.",
    price: "R$ 350",
    period: "/ mês",
    badge: "6 MESES",
    badgeColor: "bg-[rgba(14,207,180,0.15)] text-teal",
    featured: false,
    details: ["25 encontros de 60 min", "1x por semana", "Plano semanal em PDF", "Acesso à Ellii"],
  },
  {
    icon: "⭐",
    iconBg: "rgba(108,63,197,0.2)",
    title: "Plano Personalizado",
    subtitle: "2 aulas por semana",
    desc: "50 encontros de 60 min. Evolução acelerada com plano personalizado, acesso à Ellii, homework e participação semanal em turmas.",
    price: "R$ 620",
    period: "/ mês",
    badge: "MAIS POPULAR",
    badgeColor: "bg-[rgba(108,63,197,0.2)] text-purple-light",
    featured: true,
    details: ["50 encontros de 60 min", "2x por semana", "Plano semanal em PDF", "Acesso à Ellii"],
  },
  {
    icon: "🚀",
    iconBg: "rgba(224,64,160,0.15)",
    title: "Plano Anual",
    subtitle: "1 aula por semana",
    desc: "50 encontros de 60 min. Compromisso de longo prazo com o melhor custo-benefício e todos os benefícios das aulas particulares.",
    price: "R$ 300",
    period: "/ mês",
    badge: "MELHOR PREÇO",
    badgeColor: "bg-[rgba(224,64,160,0.15)] text-pink-light",
    featured: false,
    details: ["50 encontros de 60 min", "1x por semana", "Plano semanal em PDF", "Acesso à Ellii"],
  },
  {
    icon: "💎",
    iconBg: "rgba(255,209,102,0.15)",
    title: "Plano Anual Intensivo",
    subtitle: "2 aulas por semana",
    desc: "100 encontros de 60 minutos. A jornada completa para quem quer alcançar a fluência de forma rápida e consistente.",
    price: "R$ 560",
    period: "/ mês",
    badge: "IMERSÃO TOTAL",
    badgeColor: "bg-[rgba(255,209,102,0.12)] text-yellow-400",
    featured: false,
    details: ["100 encontros de 60 min", "2x por semana", "Plano semanal em PDF", "Acesso à Ellii"],
  },
];


export default function Services() {
  return (
    <section id="services" className="py-[90px] px-[5%] bg-[#13102A]">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-[0.72rem] font-semibold text-teal tracking-[0.1em] uppercase mb-2 bg-[rgba(14,207,180,0.1)] px-3 py-1 rounded-full border border-[rgba(14,207,180,0.2)]">
          Planos
        </span>
        <h2 className="font-playfair text-[clamp(2rem,4vw,2.8rem)] text-white mb-10 leading-tight">
          Escolha o plano ideal pra você
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-7">
          {plans.map((p, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 flex flex-col transition-all duration-200 hover:-translate-y-1 relative ${
                p.featured
                  ? "border-2 border-purple"
                  : "card-border hover:border-[rgba(108,63,197,0.45)]"
              }`}
            >
              {p.featured && (
                <div className="absolute top-4 right-4 gradient-bg text-white text-[0.68rem] font-bold px-3 py-1 rounded-full tracking-wide">
                  Mais popular
                </div>
              )}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: p.iconBg }}
              >
                {p.icon}
              </div>
              <h3 className="font-playfair text-lg text-white mb-3">{p.title}</h3>
              <p className="text-sm text-[#9B93B8] leading-[1.8] font-light flex-1">{p.desc}</p>
              <hr className="border-[rgba(255,255,255,0.07)] my-5" />
              <div className="font-playfair text-[1.6rem] text-white">
                {p.price}{" "}
                <span className="text-sm text-[#9B93B8] font-jakarta font-light">{p.period}</span>
              </div>
              <span className={`inline-block mt-2 text-[0.72rem] font-semibold px-3 py-1 rounded-full w-fit ${p.badgeColor}`}>
                {p.badge}
              </span>
              <a
                href="#contact"
                className="mt-5 gradient-bg text-white text-center py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Quero esse plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
