"use client";

import { useState, useEffect } from "react";


const links = [
  { href: "#about", label: "Sobre" },
  { href: "#etapas", label: "Método" },
  { href: "#services", label: "Planos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#contact", label: "Contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-[5%] h-[68px] flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(13,11,26,0.95)] backdrop-blur-lg border-b border-[rgba(108,63,197,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="font-playfair text-[1.9rem] text-white">
          Teacher <span className="text-teal">Raabe</span>
        </div>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="lg:text-lg text-sm text-[#9B93B8] hover:text-white transition-colors duration-200 font-light"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block gradient-bg text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Agendar aula ✨
        </a>

        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className="w-6 h-[2px] bg-white rounded block" />
          <span className="w-6 h-[2px] bg-white rounded block" />
          <span className="w-6 h-[2px] bg-white rounded block" />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-[68px] left-0 right-0 bg-[#13102A] border-b border-[rgba(108,63,197,0.2)] px-[5%] py-6 flex flex-col gap-5 z-40">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-base text-[#F0EDF8] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="gradient-bg text-white text-center py-3 rounded-full text-sm font-semibold"
          >
            Agendar aula ✨
          </a>
        </div>
      )}
    </>
  );
}
