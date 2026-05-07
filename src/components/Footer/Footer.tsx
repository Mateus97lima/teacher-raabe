export default function Footer() {
  return (
    <footer className="bg-[#0D0B1A] border-t border-[rgba(108,63,197,0.15)] py-8 px-[5%] text-center">
      <div className="font-playfair text-lg text-white mb-1">
        Teacher <span className="text-teal">Raabe</span>
      </div>
      <p className="text-xs text-[#9B93B8]">
        © {new Date().getFullYear()} Teacher Raabe · Todos os direitos reservados · Feito com 💜
      </p>
    </footer>
  );
}
