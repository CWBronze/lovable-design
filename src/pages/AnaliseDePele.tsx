import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  User, 
  Eye, 
  Palette, 
  Sparkles, 
  Sun, 
  Droplet, 
  Calendar, 
  AlertCircle,
  Award,
  Info,
  ChevronRight
} from "lucide-react";

// Tipos de dados
interface Question {
  id: number;
  title: string;
  icon: any;
  options: {
    text: string;
    points: number;
  }[];
}

interface FototipoResult {
  type: string;
  name: string;
  description: string;
  recommendations: string;
  color: string;
}

// Perguntas do questionário
const questions: Question[] = [
  {
    id: 1,
    title: "Qual é a cor natural do seu cabelo?",
    icon: User,
    options: [
      { text: "Loiro claro ou ruivo", points: 1 },
      { text: "Loiro escuro ou castanho claro", points: 2 },
      { text: "Castanho médio", points: 3 },
      { text: "Castanho escuro", points: 4 },
      { text: "Preto", points: 5 }
    ]
  },
  {
    id: 2,
    title: "Qual é a cor natural dos seus olhos?",
    icon: Eye,
    options: [
      { text: "Azul, cinza ou verde claro", points: 1 },
      { text: "Verde, cinza ou azul escuro", points: 2 },
      { text: "Castanho claro ou mel", points: 3 },
      { text: "Castanho escuro", points: 4 },
      { text: "Preto", points: 5 }
    ]
  },
  {
    id: 3,
    title: "Qual é a cor natural da sua pele (sem bronzeado)?",
    icon: Palette,
    options: [
      { text: "Muito clara, branca rosada", points: 1 },
      { text: "Clara, bege claro", points: 2 },
      { text: "Média, bege dourado", points: 3 },
      { text: "Morena clara, bege escuro", points: 4 },
      { text: "Morena escura ou negra", points: 5 }
    ]
  },
  {
    id: 4,
    title: "Você tem sardas em áreas expostas ao sol?",
    icon: Sparkles,
    options: [
      { text: "Muitas sardas", points: 1 },
      { text: "Algumas sardas", points: 2 },
      { text: "Poucas sardas", points: 3 },
      { text: "Raras sardas", points: 4 },
      { text: "Nenhuma sarda", points: 5 }
    ]
  },
  {
    id: 5,
    title: "Como sua pele reage após 30 minutos de exposição solar (sem proteção)?",
    icon: Sun,
    options: [
      { text: "Fica vermelha, sensível", points: 1 },
      { text: "Fica levemente avermelhada", points: 2 },
      { text: "Bronzeia levemente", points: 3 },
      { text: "Bronzeia facilmente", points: 4 },
      { text: "Bronzeia muito facilmente", points: 5 }
    ]
  },
  {
    id: 6,
    title: "Após exposição solar, sua pele:",
    icon: Droplet,
    options: [
      { text: "Descama muito, não bronzeia", points: 1 },
      { text: "Descama um pouco, bronzeia levemente", points: 2 },
      { text: "Descama raramente, bronzeia gradualmente", points: 3 },
      { text: "Não descama, bronzeia bem", points: 4 },
      { text: "Nunca descama, bronzeia intensamente", points: 5 }
    ]
  },
  {
    id: 7,
    title: "Com que frequência você bronzeia?",
    icon: Calendar,
    options: [
      { text: "Nunca bronzeio", points: 1 },
      { text: "Raramente bronzeio", points: 2 },
      { text: "Às vezes bronzeio", points: 3 },
      { text: "Frequentemente bronzeio", points: 4 },
      { text: "Sempre bronzeio", points: 5 }
    ]
  },
  {
    id: 8,
    title: "Como você descreveria a sensibilidade da sua pele ao sol?",
    icon: AlertCircle,
    options: [
      { text: "Muito sensível", points: 1 },
      { text: "Sensível", points: 2 },
      { text: "Moderadamente sensível", points: 3 },
      { text: "Pouco sensível", points: 4 },
      { text: "Nada sensível", points: 5 }
    ]
  }
];

// Resultados dos fototipos
const fototipoResults: { [key: string]: FototipoResult } = {
  "I": {
    type: "I",
    name: "Pele Muito Clara",
    description: "Sua pele é delicada e merece cuidados especiais. Com o bronzeamento artificial controlado, você pode conquistar um tom dourado suave e luminoso.",
    recommendations: "Sessões curtas e gradativas, com acompanhamento profissional próximo. Hidratação intensiva antes e após cada sessão.",
    color: "#FFE5E5"
  },
  "II": {
    type: "II",
    name: "Pele Clara",
    description: "Sua pele responde bem ao bronzeamento gradual. Com o protocolo adequado, você alcançará um bronze natural e duradouro.",
    recommendations: "Sessões progressivas, começando com tempos reduzidos. Hidratação diária e acompanhamento profissional.",
    color: "#FFD4B8"
  },
  "III": {
    type: "III",
    name: "Pele Média",
    description: "Sua pele tem ótima capacidade de bronzeamento! Você pode desenvolver um tom dourado intenso com segurança e beleza.",
    recommendations: "Protocolo balanceado com sessões regulares. Manutenção da hidratação para resultados duradouros.",
    color: "#E8C4A0"
  },
  "IV": {
    type: "IV",
    name: "Pele Morena Clara",
    description: "Sua pele bronzeia com facilidade e beleza! Você pode alcançar tons incríveis com manutenção simples.",
    recommendations: "Sessões regulares para manutenção do bronze. Foco em uniformização e brilho natural da pele.",
    color: "#C9A882"
  },
  "V": {
    type: "V",
    name: "Pele Morena Escura",
    description: "Sua pele tem pigmentação natural rica! O bronzeamento artificial realça ainda mais sua beleza natural.",
    recommendations: "Sessões focadas em uniformização e intensificação do tom. Hidratação para brilho radiante.",
    color: "#8B6F47"
  },
  "VI": {
    type: "VI",
    name: "Pele Negra",
    description: "Sua pele tem proteção natural e beleza única! O bronzeamento artificial potencializa seu brilho e uniformidade.",
    recommendations: "Sessões para realce e uniformização do tom. Hidratação profunda para pele radiante e saudável.",
    color: "#5C4033"
  }
};

const AnaliseDePele = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<FototipoResult | null>(null);

  const handleStart = () => {
    setStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calcular resultado
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const totalPoints = finalAnswers.reduce((sum, points) => sum + points, 0);
    
    let fototipoType: string;
    if (totalPoints <= 12) fototipoType = "I";
    else if (totalPoints <= 18) fototipoType = "II";
    else if (totalPoints <= 25) fototipoType = "III";
    else if (totalPoints <= 30) fototipoType = "IV";
    else if (totalPoints <= 35) fototipoType = "V";
    else fototipoType = "VI";

    setResult(fototipoResults[fototipoType]);
    setShowResult(true);
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQ = questions[currentQuestion];
  const Icon = currentQ?.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* HERO SECTION */}
      {!started && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="font-script text-6xl md:text-7xl text-white mb-6">
              Descubra Seu Fototipo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12">
              Questionário científico baseado na Escala de Fitzpatrick
            </p>
            <Button 
              onClick={handleStart}
              variant="cta"
              size="lg"
              className="text-lg px-12 py-6 bg-primary text-white hover:bg-primary/90 shadow-2xl"
            >
              INICIAR ANÁLISE
            </Button>
          </div>
        </section>
      )}

      {/* QUESTIONÁRIO */}
      {started && !showResult && (
        <main className="flex-1 container mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-foreground/70">
                  Pergunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-gold transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-card rounded-3xl shadow-soft p-8 md:p-12 space-y-8 animate-in fade-in duration-500">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  {Icon && <Icon className="w-8 h-8 text-primary" />}
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  {currentQ.title}
                </h2>
              </div>

              <div className="space-y-4">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.points)}
                    className="w-full text-left p-6 bg-background hover:bg-primary/5 border-2 border-border hover:border-primary rounded-2xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {option.text}
                      </span>
                      <ChevronRight className="w-5 h-5 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* RESULTADO */}
      {showResult && result && (
        <main className="flex-1 container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Badge do Fototipo */}
            <div className="text-center space-y-6 animate-in fade-in duration-700">
              <div 
                className="inline-flex items-center justify-center w-32 h-32 rounded-full mx-auto shadow-gold"
                style={{ backgroundColor: result.color }}
              >
                <div className="flex flex-col items-center">
                  <Award className="w-12 h-12 text-primary mb-2" />
                  <span className="text-3xl font-bold text-foreground">
                    {result.type}
                  </span>
                </div>
              </div>

              <h1 className="font-script text-5xl md:text-6xl text-primary">
                Seu Fototipo: {result.name}
              </h1>
            </div>

            {/* Informações do Resultado */}
            <div className="bg-card rounded-3xl shadow-soft p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Sobre Seu Tipo de Pele
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {result.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Recomendações Personalizadas
                </h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {result.recommendations}
                </p>
              </div>
            </div>

            {/* Caixa Informativa - Todos os Fototipos */}
            <div className="bg-champagne rounded-3xl p-8 md:p-12 space-y-8">
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-semibold text-foreground">
                  Conheça Todos os Fototipos
                </h2>
                <p className="text-lg text-foreground/70">
                  A Escala de Fitzpatrick classifica a pele em 6 tipos
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.values(fototipoResults).map((fototipo) => (
                  <div
                    key={fototipo.type}
                    className="bg-white rounded-2xl p-6 text-center space-y-2 shadow-soft hover:shadow-gold transition-all duration-300"
                    style={{ borderTop: `4px solid ${fototipo.color}` }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                      style={{ backgroundColor: fototipo.color }}
                    >
                      <span className="text-2xl font-bold text-foreground">
                        {fototipo.type}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {fototipo.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 md:p-8 flex gap-4">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground/80 leading-relaxed">
                Este é um questionário orientativo. A análise completa e personalizada será realizada presencialmente por nossa equipe, incluindo ficha de anamnese detalhada.
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/agendamento">
                <Button 
                  variant="cta" 
                  size="lg"
                  className="w-full md:w-auto text-lg px-12 py-6"
                >
                  AGENDAR AVALIAÇÃO PROFISSIONAL
                </Button>
              </Link>
              <Button 
                onClick={handleRestart}
                variant="outline"
                size="lg"
                className="w-full md:w-auto text-lg px-12 py-6 border-2 border-primary text-primary hover:bg-primary/5"
              >
                REFAZER ANÁLISE
              </Button>
            </div>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
};

export default AnaliseDePele;

