import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";

const Agendamento = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    data: "",
    horario: "",
    servico: "Bronzeamento Natural"
  });

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    telefone: ""
  });

  const [touched, setTouched] = useState({
    nome: false,
    email: false,
    telefone: false
  });

  // Validação de Nome Completo (mínimo 2 palavras, 5 caracteres)
  const validateNome = (nome: string): string => {
    if (!nome.trim()) {
      return "Nome é obrigatório";
    }
    if (nome.trim().length < 5) {
      return "Nome deve ter pelo menos 5 caracteres";
    }
    const palavras = nome.trim().split(/\s+/);
    if (palavras.length < 2) {
      return "Por favor, informe nome e sobrenome";
    }
    return "";
  };

  // Validação de Email
  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return "E-mail é obrigatório";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "E-mail inválido";
    }
    return "";
  };

  // Validação de Telefone (formato brasileiro)
  const validateTelefone = (telefone: string): string => {
    if (!telefone.trim()) {
      return "Telefone é obrigatório";
    }
    // Remove caracteres não numéricos
    const numeros = telefone.replace(/\D/g, "");
    if (numeros.length !== 11) {
      return "Telefone deve ter 11 dígitos (DDD + 9 dígitos)";
    }
    if (!numeros.startsWith("0") && numeros[2] !== "9") {
      return "Telefone celular deve começar com 9";
    }
    return "";
  };

  // Máscara de telefone
  const formatTelefone = (value: string): string => {
    const numeros = value.replace(/\D/g, "");
    if (numeros.length <= 2) {
      return numeros;
    }
    if (numeros.length <= 7) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    }
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "telefone") {
      const formatted = formatTelefone(value);
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Validar em tempo real se o campo já foi tocado
    if (touched[name as keyof typeof touched]) {
      validateField(name, name === "telefone" ? formatTelefone(value) : value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "nome":
        error = validateNome(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "telefone":
        error = validateTelefone(value);
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Marcar todos os campos como tocados
    setTouched({
      nome: true,
      email: true,
      telefone: true
    });

    // Validar todos os campos
    const nomeError = validateNome(formData.nome);
    const emailError = validateEmail(formData.email);
    const telefoneError = validateTelefone(formData.telefone);

    setErrors({
      nome: nomeError,
      email: emailError,
      telefone: telefoneError
    });

    // Se houver erros, não enviar
    if (nomeError || emailError || telefoneError) {
      return;
    }

    // Aqui você pode enviar os dados para o backend ou WhatsApp
    console.log("Formulário válido:", formData);
    alert("Agendamento enviado com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-32">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-script text-5xl md:text-6xl text-gold">
              Agende sua Sessão
            </h1>
            <p className="text-lg text-foreground/80">
              Escolha a melhor data e horário para sua transformação.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-soft p-8 space-y-6">
            <div className="space-y-4">
              {/* Nome Completo */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <Input
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="João Silva"
                  className={errors.nome && touched.nome ? "border-red-500" : ""}
                />
                {errors.nome && touched.nome && (
                  <p className="text-red-500 text-xs mt-1">{errors.nome}</p>
                )}
              </div>

              {/* E-mail */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="joao@email.com"
                  className={errors.email && touched.email ? "border-red-500" : ""}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Telefone <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="(41) 99999-9999"
                  maxLength={15}
                  className={errors.telefone && touched.telefone ? "border-red-500" : ""}
                />
                {errors.telefone && touched.telefone && (
                  <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>
                )}
              </div>

              {/* Data Preferida */}
              <div>
                <label className="block text-sm font-medium mb-2">Data Preferida</label>
                <Input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                />
              </div>

              {/* Horário Preferido */}
              <div>
                <label className="block text-sm font-medium mb-2">Horário Preferido</label>
                <Input
                  type="time"
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                />
              </div>

              {/* Serviço */}
              <div>
                <label className="block text-sm font-medium mb-2">Serviço</label>
                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                >
                  <option>Bronzeamento Natural</option>
                  <option>Bronzeamento Express</option>
                  <option>Análise de Pele</option>
                  <option>Pacote Premium</option>
                </select>
              </div>
            </div>

            <Button type="submit" variant="cta" size="lg" className="w-full gap-2">
              <Calendar className="w-5 h-5" />
              CONFIRMAR AGENDAMENTO
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agendamento;
