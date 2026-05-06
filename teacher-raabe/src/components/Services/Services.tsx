const plans = [
  {
    icon: "🎯",
    iconBg: "rgba(14,207,180,0.12)",
    title: "Aula Experimental",
    desc: "Conheça minha metodologia em uma aula completa. Diagnóstico do seu nível e planejamento do seu caminho até a fluência.",
    price: "Grátis",
    period: "/ 1 aula",
    badge: "TRIAL GRATUITO",
    badgeColor: "bg-[rgba(14,207,180,0.15)] text-teal",
    featured: false,
  },
  {
    icon: "⭐",
    iconBg: "rgba(108,63,197,0.2)",
    title: "Plano Mensal",
    desc: "8 aulas por mês com acompanhamento completo. Material incluso, exercícios personalizados e suporte pelo WhatsApp.",
    price: "R$ 497",
    period: "/ mês",
    badge: "MAIS POPULAR",
    badgeColor: "bg-[rgba(108,63,197,0.2)] text-purple-light",
    featured: true,
  },
  {
    icon: "🚀",
    iconBg: "rgba(224,64,160,0.15)",
    title: "Plano Intensivo",
    desc: "16 aulas por mês para evolução acelerada. Ideal para quem tem prazo: processo seletivo, viagem ou intercâmbio.",
    price: "R$ 897",
    period: "/ mês",
    badge: "INTENSIVO",
    badgeColor: "bg-[rgba(224,64,160,0.15)] text-pink-light",
    featured: false,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div
              key={p.title}
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
