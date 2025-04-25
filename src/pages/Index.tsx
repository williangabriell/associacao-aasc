
import { Stethoscope, Users, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformando Vidas com
            <span className="text-ong-blue"> Amor </span>
            e
            <span className="text-ong-red"> Cuidado</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Oferecemos atendimento multidisciplinar gratuito para quem mais precisa,
            promovendo saúde e bem-estar para todos.
          </p>
          <Button className="bg-ong-blue hover:bg-ong-blue/90 text-lg px-8 py-6">
            Seja um Voluntário
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={Stethoscope}
              title="Atendimento Médico"
              description="Consultas e acompanhamento com profissionais voluntários"
              color="bg-ong-blue"
            />
            <ServiceCard
              icon={Heart}
              title="Apoio Psicológico"
              description="Suporte emocional e terapia para o bem-estar mental"
              color="bg-ong-red"
            />
            <ServiceCard
              icon={Users}
              title="Nutrição"
              description="Orientação nutricional para uma vida mais saudável"
              color="bg-ong-green"
            />
            <ServiceCard
              icon={Calendar}
              title="Agenda Social"
              description="Eventos e atividades para integração da comunidade"
              color="bg-ong-yellow"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-ong-blue/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Nosso Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-ong-blue mb-2">5000+</div>
              <p className="text-gray-600">Pessoas Atendidas</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-ong-red mb-2">100+</div>
              <p className="text-gray-600">Profissionais Voluntários</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-ong-green mb-2">20+</div>
              <p className="text-gray-600">Projetos Realizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Entre em Contato</h2>
          <p className="text-xl text-gray-600 mb-8">
            Estamos aqui para ajudar. Entre em contato conosco!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-ong-blue hover:bg-ong-blue/90">
              Fale Conosco
            </Button>
            <Button variant="outline" className="border-ong-blue text-ong-blue hover:bg-ong-blue/10">
              Seja um Parceiro
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 VidaPlena. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
