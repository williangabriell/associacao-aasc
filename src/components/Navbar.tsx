
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-ong-blue via-ong-red to-ong-green"></div>
          <span className="text-xl font-bold">VidaPlena</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#inicio" className="hover:text-ong-blue transition">Início</a>
          <a href="#servicos" className="hover:text-ong-blue transition">Serviços</a>
          <a href="#sobre" className="hover:text-ong-blue transition">Sobre</a>
          <a href="#contato" className="hover:text-ong-blue transition">Contato</a>
        </div>
        <Button className="bg-ong-blue hover:bg-ong-blue/90">Doe Agora</Button>
      </div>
    </nav>
  );
};

export default Navbar;
