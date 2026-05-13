"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "558888536810"; // e

const contactItems = [
  { icon: "📱", label: "WhatsApp", value: "(88) 8853-6810" },
  { icon: "📧", label: "E-mail", value: "teacherraabe@gmail.com" },
  { icon: "🌐", label: "Modalidade", value: "100% Online · Google Meet" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    level: "",
    goal: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Teacher Raabe! 👋

Meu nome é *${form.name}*.
📧 E-mail: ${form.email}
📱 WhatsApp: ${form.phone}
📊 Meu nível de inglês: ${form.level}

🎯 Meu objetivo:
${form.goal}

Gostaria de agendar minha aula experimental gratuita!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const inputClass =
    "w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl text-sm text-[#F0EDF8] lg:text-[re] placeholder-[rgba(255,255,255,0.2)] outline-none focus:border-purple-light transition-colors duration-200 font-jakarta";

  return (
    <section id="contact" className="py-[90px] px-[5%] bg-[#13102A]">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-[0.72rem] font-semibold text-teal tracking-[0.1em] uppercase mb-2 bg-[rgba(14,207,180,0.1)] px-3 py-1 rounded-full border border-[rgba(14,207,180,0.2)]">
          Contato
        </span>
        <h2 className="font-playfair text-[clamp(2rem,4vw,2.8rem)] text-white mb-10 leading-tight">
          Vamos começar sua jornada? 🚀
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          {/* LEFT */}
          <div>
            <h3 className="font-playfair text-2xl text-white mb-3">
              Fale comigo e agende sua aula gratuita
            </h3>
            <p className="text-sm text-[#9B93B8] leading-[1.8] font-light mb-8">
              Preencha o formulário e entrarei em contato em até 24 horas para agendarmos sua aula
              experimental gratuita. Sem compromisso!
            </p>

            <div className="flex flex-col gap-3">
              {contactItems.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 bg-card card-border rounded-xl px-5 py-4"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-base shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#9B93B8]">{c.label}</div>
                    <div className="text-sm text-[#F0EDF8] font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="bg-card card-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] animated-border" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#9B93B8] uppercase tracking-wide mb-2">
                    Nome
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#9B93B8] uppercase tracking-wide mb-2">
                    WhatsApp
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#9B93B8] uppercase tracking-wide mb-2">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#9B93B8] uppercase tracking-wide mb-2">
                  Nível de inglês
                </label>
                <select
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  required
                  className={inputClass + " cursor-pointer appearance-none"}
                >
                  <option value="" className="bg-[#1E1A38]">Selecione seu nível atual</option>
                  <option className="bg-[#1E1A38]">Básico (nunca estudei muito)</option>
                  <option className="bg-[#1E1A38]">Iniciante (conheço o básico)</option>
                  <option className="bg-[#1E1A38]">Intermediário</option>
                  <option className="bg-[#1E1A38]">Avançado</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#9B93B8] uppercase tracking-wide mb-2">
                  Objetivo
                </label>
                <textarea 
                  name="goal"
                  value={form.goal}
                  onChange={handleChange}
                  placeholder="Me conte onde você quer chegar com o inglês..."
                  required
                  rows={4}
                  className={inputClass + " resize-none"}
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="gradient-bg text-white py-4 rounded-xl text-base font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 mt-1"
              >
                Quero minha aula gratuita ✨
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
