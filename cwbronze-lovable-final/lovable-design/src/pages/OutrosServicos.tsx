import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Droplets, Clock, Spray, Heart, Leaf } from "lucide-react";

const OutrosServicos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&h=1080&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="font-script text-5xl md:text-7xl">Outros Serviços</h1>
          <p className="text-xl md:text-2xl font-medium">Tratamentos complementares para resultados ainda melhores</p>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-6 py-20">
        
        <section id="protocolos" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-script text-4xl md:text-5xl text-gold mb-4">Protocolos Exclusivos</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">Tratamentos especializados para resultados superiores</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-gold/20 hover:shadow-gold transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gold">Golden Glow</CardTitle>
                <CardDescription className="text-base">Acelerador Premium</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-gold mb-4">R$ 35</p>
                <p className="text-sm text-foreground/70">Potencializa e acelera o bronzeamento para resultados mais rápidos e intensos com beta-caroteno e óleos naturais</p>
              </CardContent>
              <CardFooter>
                <Link to="/agendamento" className="w-full">
                  <Button variant="cta" className="w-full">ADQUIRIR SERVIÇO</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-gold/20 hover:shadow-gold transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gold">Hidratação Pós-Bronze</CardTitle>
                <CardDescription className="text-base">Nutrição Profunda</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-gold mb-4">R$ 40</p>
                <p className="text-sm text-foreground/70">Prolonga a duração do bronzeado e mantém a pele hidratada com Pantenol, Aloe Vera e Vitamina E</p>
              </CardContent>
              <CardFooter>
                <Link to="/agendamento" className="w-full">
                  <Button variant="cta" className="w-full">ADQUIRIR SERVIÇO</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-gold/20 hover:shadow-gold transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gold">Anti-Idade + Bronze</CardTitle>
                <CardDescription className="text-base">Rejuvenescimento</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-gold mb-4">R$ 80</p>
                <p className="text-sm text-foreground/70">Combina bronzeamento corporal com tratamento facial anti-idade para pele radiante e jovem</p>
              </CardContent>
              <CardFooter>
                <Link to="/agendamento" className="w-full">
                  <Button variant="cta" className="w-full">ADQUIRIR SERVIÇO</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="banho-lua" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-script text-4xl md:text-5xl text-gold mb-4">Banho de Lua</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">Protocolos de clareamento seguro da pilosidade e renovação celular</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-gold/20 hover:shadow-gold transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gold mb-2">Tradicional</CardTitle>
                <CardDescription className="text-base">Protocolo Funcional</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gold">R$ 120</p>
                  <p className="text-sm text-foreground/60">Avulso</p>
                  <p className="text-xl font-semibold text-gold mt-2">R$ 110</p>
                  <p className="text-sm text-green-600">Com Sessão/Pacote</p>
                </div>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>✓ Proteção dérmica com parafina</li>
                  <li>✓ Aplicação de mistura descolorante</li>
                  <li>✓ Esfoliação completa</li>
                  <li>✓ Hidratação de finalização</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/agendamento" className="w-full">
                  <Button variant="cta" className="w-full">AGENDAR AGORA</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-gold/20 hover:shadow-gold transition-all duration-300 relative">
              <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-bold">PREMIUM</div>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gold mb-2">Premium</CardTitle>
                <CardDescription className="text-base">Nutrição Sensorial</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gold">R$ 150</p>
                  <p className="text-sm text-foreground/60">Avulso</p>
                  <p className="text-xl font-semibold text-gold mt-2">R$ 130</p>
                  <p className="text-sm text-green-600">Com Sessão/Pacote</p>
                </div>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>✓ Tudo do Tradicional +</li>
                  <li>✓ Máscaras corporais (argila branca)</li>
                  <li>✓ Óleos essenciais aromáticos</li>
                  <li>✓ Esfoliantes gourmet (maracujá, pitaya)</li>
                  <li>✓ Massagem relaxante</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/agendamento" className="w-full">
                  <Button variant="premium" className="w-full">AGENDAR PREMIUM</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="instant-bronze" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-script text-4xl md:text-5xl text-gold mb-4">Instant Bronze</h2>
            <p className="text-lg text-foreground/80 italic mb-2">Também conhecido como Jet Bronze</p>
            <p className="text-base text-foreground/70 max-w-3xl mx-auto">Bronzeamento profissional com tecnologia anti-laranja para um resultado natural e seguro</p>
          </div>

          <Card className="max-w-4xl mx-auto border-gold/30 shadow-lg mb-8">
            <CardHeader className="text-center bg-gradient-to-r from-gold/10 to-gold-dark/10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Leaf className="w-8 h-8 text-gold" />
                <Heart className="w-8 h-8 text-gold" />
                <Spray className="w-8 h-8 text-gold" />
              </div>
              <CardTitle className="text-3xl text-gold mb-3">Tecnologia Premium Anti-Laranja</CardTitle>
              <CardDescription className="text-base">Fórmula hipoalergênica e vegana com Capilar Essência</CardDescription>
            </CardHeader>
            <CardContent className="py-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gold mb-3">Perfeito para você que:</h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>✓ Prefere evitar exposição prolongada ao sol</li>
                    <li>✓ Possui rotina intensa e valoriza praticidade</li>
                    <li>✓ Busca tom uniforme para eventos especiais</li>
                    <li>✓ Está em período gestacional</li>
                    <li>✓ Faz uso de medicamentos fotossensibilizantes</li>
                    <li>✓ Deseja manter a pele protegida com visual radiante</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gold mb-3">Benefícios:</h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>✓ Bronzeado rápido e uniforme</li>
                    <li>✓ Melhora da autoestima e confiança</li>
                    <li>✓ Camuflagem de pequenas imperfeições</li>
                    <li>✓ Valoriza as roupas e traz leveza</li>
                    <li>✓ Resultado natural sem exposição UV</li>
                    <li>✓ Fórmula hipoalergênica e vegana</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gold/5 rounded-lg border border-gold/20">
                <p className="text-sm text-foreground/70 text-center">
                  <strong className="text-gold">Resultado:</strong> Período técnico de 8 horas para revelação completa da cor (evitar água ou suor). Duração de 7 a 12 dias.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-gold/20 hover:shadow-gold transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <Spray className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gold">Corpo Completo</CardTitle>
                <CardDescription className="text-base">Aplicação Total</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold text-gold mb-4">R$ 180</p>
                <ul className="text-sm text-foreground/70 space-y-2 text-left">
                  <li>✓ Aplicação profissional em todo o corpo</li>
                  <li>✓ Resultado imediato e natural</li>
                  <li>✓ Duração de 7 a 12 dias</li>
                  <li>✓ Produtos premium Capilar Essência</li>
                  <li>✓ Tecnologia anti-laranja</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/agendamento" className="w-full">
                  <Button variant="cta" className="w-full">AGENDAR AGORA</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-gold/20 hover:shadow-gold transition-all duration-300 relative">
              <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-bold">ECONOMIA</div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <Spray className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gold">Pacote 2 Aplicações</CardTitle>
                <CardDescription className="text-base">Melhor Custo-Benefício</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold text-gold mb-2">R$ 320</p>
                <p className="text-sm text-green-600 font-semibold mb-4">Economia de R$ 40</p>
                <ul className="text-sm text-foreground/70 space-y-2 text-left">
                  <li>✓ 2 aplicações corpo completo</li>
                  <li>✓ Validade de 60 dias</li>
                  <li>✓ Agendamento flexível</li>
                  <li>✓ Melhor valor por sessão</li>
                  <li>✓ Ideal para manutenção</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/agendamento" className="w-full">
                  <Button variant="premium" className="w-full">ADQUIRIR PACOTE</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default OutrosServicos;
