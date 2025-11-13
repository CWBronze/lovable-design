import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-bronze">
      {/* Faixa de Destaque no Topo */}
      <div className="h-[60px] bg-primary"></div>
      
      {/* Conteúdo Principal */}
      <div className="container mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
          {/* Coluna 1 - Sobre */}
          <div className="space-y-5 text-left">
            <h3 className="text-xl font-semibold text-primary mb-5">Sobre CWBronze</h3>
            <p className="text-primary-foreground leading-[1.8] text-sm">
              Clínica de bronzeamento premium dedicado a realçar a beleza natural de cada tom de pele com elegância e cuidado profissional.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="space-y-5 text-left">
            <h3 className="text-xl font-semibold text-primary mb-5">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/#inicio" className="text-primary-foreground text-sm hover:text-primary transition-colors leading-[1.8]">
                Início
              </a>
              <Link to="/nossa-essencia" className="text-primary-foreground text-sm hover:text-primary transition-colors leading-[1.8]">
                Nossa Essência
              </Link>
              <a href="/#servicos" className="text-primary-foreground text-sm hover:text-primary transition-colors leading-[1.8]">
                Serviços
              </a>
              <Link to="/resultados" className="text-primary-foreground text-sm hover:text-primary transition-colors leading-[1.8]">
                Resultados
              </Link>
              <a href="/#contato" className="text-primary-foreground text-sm hover:text-primary transition-colors leading-[1.8]">
                Contato
              </a>
            </nav>
          </div>

          {/* Coluna 3 - Privacidade */}
          <div className="space-y-5 text-left">
            <h3 className="text-xl font-semibold text-primary mb-5">Privacidade</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/termos" className="text-primary-foreground text-sm hover:text-primary transition-colors leading-[1.8]">
                Termos e Condições
              </Link>
              <Link to="/privacidade" className="text-primary-foreground text-sm hover:text-primary transition-colors leading-[1.8]">
                Política de Privacidade
              </Link>
            </nav>
          </div>

          {/* Coluna 4 - Contato */}
          <div className="space-y-5 text-left">
            <h3 className="text-xl font-semibold text-primary mb-5">Contato</h3>
            <div className="space-y-3 text-sm text-primary-foreground leading-[1.8]">
              <a 
                href="https://maps.google.com/?q=R.+Mal.+Deodoro,+276+-+Loja+10,+Centro,+Curitiba+-+PR,+80010-010" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span>R. Mal. Deodoro, 276 - Loja 10<br />Centro, Curitiba - PR, 80010-010</span>
              </a>
              <a 
                href="https://wa.me/5541998661792" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>(41) 99866-1792</span>
              </a>
              <a 
                href="mailto:cwbronzeamentoartificial@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>cwbronzeamentoartificial@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.instagram.com/cwbronze?igsh=Zzl0M3hzNWFidm1r" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:scale-110 transition-transform"
          >
            <Instagram className="w-7 h-7" />
          </a>
          <a 
            href="https://www.facebook.com/share/1DKQoeKX8G/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:scale-110 transition-transform"
          >
            <Facebook className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary py-5">
        <p className="text-center text-primary-foreground text-sm">
          © {new Date().getFullYear()} CWBronze. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
