import { ArrowRight, CheckCircle, Mail, AlertCircle, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * MarketMind - Landing Page Premium Escura Varos Level
 * Design: Fundo Escuro + Azul (#025BD9) + Verde (#00FF00) estratégico
 * Tipografia: Instrument Sans (como Varos)
 * Animações: Framer Motion com fade-in, slide-up, scale
 */

// Variantes de animação reutilizáveis
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [abVariant, setAbVariant] = useState<"A" | "B">("A");
  const [cookieConsent, setCookieConsent] = useState<"accepted" | "rejected" | null>(null);

  // Inicializar teste A/B e verificar consentimento de cookies
  useEffect(() => {
    const storedVariant = localStorage.getItem("ab_variant") as "A" | "B" | null;
    if (storedVariant) {
      setAbVariant(storedVariant);
    } else {
      const randomVariant = Math.random() > 0.5 ? "A" : "B";
      localStorage.setItem("ab_variant", randomVariant);
      setAbVariant(randomVariant);
    }

    // Verificar consentimento de cookies
    const storedConsent = localStorage.getItem("cookie_consent");
    if (storedConsent) {
      setCookieConsent(storedConsent as "accepted" | "rejected");
    }
  }, []);

  // Função para aceitar cookies
  const handleAcceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    localStorage.setItem("cookie_consent_date", new Date().toISOString());
    setCookieConsent("accepted");
  };

  // Função para rejeitar cookies
  const handleRejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    localStorage.setItem("cookie_consent_date", new Date().toISOString());
    setCookieConsent("rejected");
  };

  // Função para rastrear cliques em CTAs
  const trackCTAClick = (ctaName: string) => {
    const clicks = JSON.parse(localStorage.getItem("cta_clicks") || "{}");
    clicks[ctaName] = (clicks[ctaName] || 0) + 1;
    localStorage.setItem("cta_clicks", JSON.stringify(clicks));
    console.log(`CTA Click: ${ctaName} | Variant: ${abVariant}`, clicks);
  };

  // Cores dinâmicas baseadas no teste A/B
  const primaryButtonColor = abVariant === "A" ? "#00FF00" : "#FF6B00";
  const primaryButtonHover = abVariant === "A" ? "#00DD00" : "#E55A00";

  const faqItems = [
    {
      question: "Como funciona o Teste de Perfil?",
      answer: "O Teste de Perfil é um diagnóstico comportamental que analisa como você toma decisões sob pressão, reage ao risco, gerencia perdas e controla emoções. Existem três versões: Perfil Iniciante (para quem está começando), Perfil Trader (análise de comportamento em operações de curto prazo) e Perfil Investidor (análise de decisões de longo prazo). Leva 15-20 minutos e gera um relatório detalhado. Você pode fazer apenas o Teste ou adicionar uma Devolutiva 1h personalizada."
    },
    {
      question: "Qual é a melhor trilha para mim: Iniciante, Investidor ou Trader?",
      answer: "Trilha Iniciante: Para quem não tem experiência. Começa com E-book, Teste de Perfil, Minicurso 1h, Curso Minimalista e Mentoria Premium. Trilha Investidor: Para quem quer operar com consciência em longo prazo. Inclui E-book, Teste de Perfil, Minicurso 1h, Curso Minimalista e Mentoria Premium. Trilha Trader: Para quem já opera mas é inconsistente. Começa com Teste de Perfil, Minicurso 1h, Trader Reboot e Mentoria Premium. Faça o Teste de Perfil para receber uma recomendação personalizada."
    },
    {
      question: "O que é o Curso Mercado Minimalista?",
      answer: "É um curso prático de 5 encontros online de 2h cada. Ensina estratégias simples para operar com segurança, ganhar dinheiro dedicando poucos minutos por semana, controlar risco profissionalmente e montar operações claras sem ruído. Ideal para quem quer resultados reais sem complexidade. Acessível para perfis conservadores e iniciantes."
    },
    {
      question: "Qual é a diferença entre os Minicursos?",
      answer: "Minicurso 1h (Desvendando o Inconsciente): Foca em vieses comportamentais que sabotam suas operações. Ensina a identificar padrões de pensamento, dominar psicologia da decisão sob pressão e construir processos emocionalmente independentes. Minicurso 1h30 (Mente Blindada): Mais aprofundado. Ensina a reconhecer 30+ vieses cognitivos específicos (confirmação, aversão à perda, efeito manada, etc) e aplicar técnicas para neutralizá-los. Ambos são 100% online com material de suporte."
    },
    {
      question: "O que é o Trader Reboot?",
      answer: "É uma imersão intensiva de 5 dias para traders que querem corrigir comportamentos sabotadores. Você opera no mercado à vista com seus setups reais, grava cada operação e envia para análise profunda. Recebe análise detalhada de execução, hesitação, impulsividade e ansiedade. Ao final, recebe um Plano de Alinhamento Comportamental personalizado mostrando exatamente onde está errando e como corrigir para operar com consistência."
    },
    {
      question: "O que é Mente Blindada com Consultoria 1h?",
      answer: "Mente Blindada é o Minicurso 1h30 sobre vieses cognitivos (R$ 157). A Consultoria 1h adicional (+ R$ 199) permite agendar uma sessão personalizada para discutir os pontos que mais te atrapalham no trading. Você recebe análise profunda dos seus vieses específicos e um plano de ação customizado. Ideal para quem quer suporte personalizado além do curso."
    },
    {
      question: "O que é a Mentoria Premium?",
      answer: "É um programa de 1 mês transformador customizado conforme seu perfil e objetivos. Inclui sessões regulares de consultoria, análise profunda de seu comportamento e operações, desenvolvimento de planos personalizados e suporte contínuo. Acessível apenas para pessoas que passam por um processo de seleção rigoroso. Não é para qualquer um - é para quem realmente quer consistência e resultados."
    },
    {
      question: "Quanto custa cada produto?",
      answer: "Teste de Perfil + Devolutiva 1h: R$ 157. Minicurso 1h: R$ 157. Minicurso 1h30 (Mente Blindada): de R$ 297 por R$ 157 (+ R$ 199 para Consultoria 1h). Curso Minimalista: valor sob consulta. Trader Reboot: valor sob consulta. Mentoria Premium: customizada conforme seu perfil. E-book Gratuito: Vieses que te impedem de lucrar."
    },
    {
      question: "Como funciona o E-book Gratuito?",
      answer: "É um recurso gratuito chamado 'Vieses que te impedem de lucrar'. Análise profunda dos sabotadores invisíveis do seu trading. Você recebe por email após se cadastrar. Ideal para começar a entender os vieses comportamentais antes de fazer o Teste de Perfil ou qualquer curso."
    },
    {
      question: "Posso fazer tudo online?",
      answer: "Sim, 100% online. Testes, minicursos, devolutivas, consultoria e mentorias são realizados via videoconferência. Você recebe acesso a materiais digitais, vídeos, exercícios e ferramentas práticas. Não há necessidade de estar em um local específico. Tudo é flexível e adaptado às suas necessidades."
    },
    {
      question: "Qual é a garantia de satisfação?",
      answer: "Oferecemos garantia 100% ou seu dinheiro de volta. Se após a primeira sessão/aula você não sentir valor ou não se identificar com a abordagem, devolvemos integralmente sem perguntas ou burocracia. Queremos que você esteja 100% satisfeito com o investimento."
    },
    {
      question: "Quantas pessoas você aceita por mês?",
      answer: "Aceito apenas pessoas genuinamente prontas para mudar. Há um processo de seleção rigoroso para garantir que a mentoria será efetiva. Não é para qualquer um - é para quem realmente quer consistência e resultados. Vagas limitadas. Você passa por uma seleção antes de ser aceito."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Autoconhecimento é imediato - você entende seu perfil após o Teste de Perfil. Mudanças comportamentais começam em 2-4 semanas de trabalho dedicado. Resultados financeiros consistentes geralmente vêm em 2-3 meses. O Trader Reboot oferece transformação em 5 dias. A Mentoria Premium trabalha transformação em 1 mês."
    },
    {
      question: "Preciso ter experiência em trading para participar?",
      answer: "Não necessariamente. Temos trilhas e programas para iniciantes que querem começar com os fundamentos comportamentais corretos. Também temos programas para traders experientes que querem melhorar consistência e resultados. O Teste de Perfil ajuda a identificar qual caminho é melhor para você."
    },
    {
      question: "Como começo?",
      answer: "Comece com o E-book Gratuito para entender os vieses. Depois, faça o Teste de Perfil para receber uma recomendação personalizada de trilha. Escolha sua trilha (Iniciante, Investidor ou Trader) e comece com o primeiro produto. Cada etapa prepara você para a próxima. Você pode começar hoje mesmo!"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage("Por favor, insira um email válido");
      setSubmitStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Email inválido. Verifique e tente novamente");
      setSubmitStatus("error");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYWM2YmZjMTg4N2ZlYzI2OTYwYzkyNzBiNDdiZmVjNDIwYjYzMjVhZjFkY2VkYWY1NTE1YjhjYWM1ODQxOGU2ZGFlYzA4YjY5YWEwZDA2YTIiLCJpYXQiOjE3NzUwNjIwMzEuMDk5MTUzLCJuYmYiOjE3NzUwNjIwMzEuMDk5MTU2LCJleHAiOjQ5MzA3MzU2MzEuMDkyNzczLCJzdWIiOiIyMDQxNzMxIiwic2NvcGVzIjpbXX0.wrdkm91e0mty7bT9TIobXoKgZlQG8BNrIOiKWo9iOjZRIvCg_7LoAJqBPQVWoQNMhvcl2MCGAGUeEReFHUgbVdhFrGCVzzwTN8Kw1sKGNXkICQo5u-jTK-QOIu97tHc6QM1ySkpJyJv4Y2IAzPMrc6QrMTY7NVbutRYYyzs1RYqTWihC2ZlcCga-6LGXUQ4hgoszsMCdy2l6XL3ujGdRxEtc8IK1fTQGhtzUJazhIy9dN027AYThkl70cAPUpava5SJMQF4KV_7BlruY1G04PIBTI0ZMTe-ZYsi7Z4F-78hMpm9CmrRMgunFxUftSp9acouxYC7jNgRORAuhPZil6Bw8kmgY9p7bXA8l4wo3nbE7uQ8Y5m6OR1N-tIuOtFhX4b9cDM4If7dfsJgxlfNcCxL4gR8JmW0vOK3eVfCQSHhmHXgdGr_KmYp78M5vwb0bMvG4Kdb3FzGh2_Do4FoBCKkvu9zH2K5E8dl-lguM5n9y6d1fui1kMYLQnSFbyuoodroOWxEszu0bL8lmp3bntsysy9nbLlvLXe2Ha-DPt_d0l2dp4C-aILLu1cyr1bjWsPyM3YmTsLOY3wPzmPOhKh-s1ry1jpJe_4QzWDVEmI1143DpXnAwGXlX9j7mvRHFBqHQFTecsXeVzmfaXdmOpKhD9DrJnryxKFMv_3F8wfI'
        },
        body: JSON.stringify({
          email: email,
          groups: ['175964817584031024'],
          status: 'active'
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setErrorMessage("Erro ao cadastrar. Tente novamente.");
        setSubmitStatus("error");
      }
    } catch (err) {
      setErrorMessage("Erro de conexão. Tente novamente.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f]" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0f0f0f]/95 backdrop-blur border-b border-[#333333]" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-6">
          <motion.div 
            className="text-2xl font-bold flex-shrink-0" 
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#025BD9]">Market</span><span className="text-[#00FF00]">Mind</span>
          </motion.div>
          <nav className="hidden md:flex gap-8 items-center flex-1 justify-center px-6">
            <a href="#problema" className="text-white hover:text-[#025BD9] font-medium transition whitespace-nowrap text-sm">O Problema</a>
            <a href="#trajetoria" className="text-white hover:text-[#025BD9] font-medium transition whitespace-nowrap text-sm">Trajetória</a>
            <a href="#servicos" className="text-white hover:text-[#025BD9] font-medium transition whitespace-nowrap text-sm">Serviços</a>
            <a href="#resultados" className="text-white hover:text-[#025BD9] font-medium transition whitespace-nowrap text-sm">Resultados</a>
          </nav>
          <motion.button 
            className="hidden md:block bg-[#00FF00] text-[#0f0f0f] hover:bg-[#00DD00] font-bold px-6 py-2 rounded transition ml-auto flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar Agora
          </motion.button>
        </div>
      </header>

      {/* Hero Section - COM FOTO GRANDE */}
      <section className="pt-32 pb-20 px-4 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#025BD9]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FF00]/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.div 
                className="flex justify-center mb-6"
                variants={fadeInUp}
              >
                <div className="inline-block border border-dashed border-[#025BD9] rounded-full px-4 py-2">
                  <span className="text-[#025BD9] font-medium text-center">Mentoria para Traders e Investidores</span>
                </div>
              </motion.div>
              <motion.h1 
                className="text-6xl font-bold text-white mb-6 leading-tight" 
                style={{ fontWeight: 800 }}
                variants={fadeInUp}
              >
                Você não perde dinheiro <br />
                <span className="text-[#025BD9]">por causa do setup.</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                Você perde por causa do seu comportamento. O mercado é estatística e probabilidade. Você está operando como se fosse emoção e impulsividade.
              </motion.p>
              <motion.div 
                className="flex gap-4 flex-wrap"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.button 
                  className="font-bold px-8 py-3 rounded transition flex items-center gap-2"
                  style={{
                    backgroundColor: primaryButtonColor,
                    color: abVariant === "A" ? "#0f0f0f" : "white"
                  }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTAClick("hero_test_perfil");
                  window.open('https://go.hotmart.com/J105153225P?dp=1', '_blank');
                }}
              >
                Fazer o Teste de Perfil <ArrowRight size={20} />
                </motion.button>
                <motion.button 
                  className="border-2 border-dashed border-[#025BD9] text-[#025BD9] hover:bg-[#025BD9]/10 font-bold px-8 py-3 rounded transition"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Baixar Ebook Gratuito
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
            >
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663416505971/RGkKKJ6Dv3D9iisvmREZF2/ImagemfinalSite_compressed_93c815de.png"
                alt="Trader analisando gráficos"
                className="rounded-lg shadow-2xl border border-[#025BD9]/30 w-full"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            className="flex flex-col md:grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-[#333333] w-full"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="w-full text-center flex flex-col items-center justify-center">
              <div className="text-2xl md:text-4xl font-bold text-[#025BD9] mb-2" style={{ fontWeight: 800 }}>15+</div>
              <p className="text-xs md:text-base text-gray-400">Anos no mercado</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full text-center flex flex-col items-center justify-center">
              <div className="text-2xl md:text-4xl font-bold text-[#025BD9] mb-2" style={{ fontWeight: 800 }}>6+</div>
              <p className="text-xs md:text-base text-gray-400">Formações em comportamento humano</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full text-center flex flex-col items-center justify-center">
              <div className="text-2xl md:text-4xl font-bold text-[#025BD9] mb-2" style={{ fontWeight: 800 }}>ANBIMA</div>
              <p className="text-xs md:text-base text-gray-400">Consultor de Investimentos</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* O Problema - COM FOTO */}
      <motion.section 
        id="problema" 
        className="py-20 px-4 bg-[#0f0f0f] border-t border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInLeft}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663416505971/RGkKKJ6Dv3D9iisvmREZF2/Gemini_Generated_Image_kfe5tlkfe5tlkfe5_compressed_eb206d37.png"
                alt="Frustração no trading"
                className="rounded-lg shadow-xl border border-[#025BD9]/30 w-full"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-5xl font-bold text-white mb-6" style={{ fontWeight: 800 }}>O problema real</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Você está tentando vencer um jogo estatístico usando regras emocionais.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                A inconsistência não vem da falta de técnica. Vem da tentativa de aplicar no trading as mesmas regras que funcionam na vida profissional — disciplina, esforço, força de vontade — em um ambiente que exige <strong className="text-white">probabilidade, matemática e autoconsciência comportamental</strong>.
              </p>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div className="flex gap-4" variants={fadeInUp}>
                  <div className="w-8 h-8 rounded-full bg-[#00FF00] flex items-center justify-center flex-shrink-0 mt-1 border-2 border-dashed border-[#00FF00]">
                    <span className="text-[#0f0f0f] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#025BD9] mb-2">O Desafio</h4>
                    <p className="text-gray-400">Você opera contra sua própria natureza</p>
                  </div>
                </motion.div>
                <motion.div className="flex gap-4" variants={fadeInUp}>
                  <div className="w-8 h-8 rounded-full bg-[#00FF00] flex items-center justify-center flex-shrink-0 mt-1 border-2 border-dashed border-[#00FF00]">
                    <span className="text-[#0f0f0f] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#025BD9] mb-2">A Realidade</h4>
                    <p className="text-gray-400">Você toma decisões que contradizem seu perfil</p>
                  </div>
                </motion.div>
                <motion.div className="flex gap-4" variants={fadeInUp}>
                  <div className="w-8 h-8 rounded-full bg-[#00FF00] flex items-center justify-center flex-shrink-0 mt-1 border-2 border-dashed border-[#00FF00]">
                    <span className="text-[#0f0f0f] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#025BD9] mb-2">O Resultado</h4>
                    <p className="text-gray-400">Você tenta ser um trader que você não nasceu para ser</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Timeline - Trajetória - COM FOTOS */}
      <motion.section 
        id="trajetoria" 
        className="py-20 px-4 bg-[#0f0f0f] border-t border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-5xl font-bold text-white mb-4 text-center" 
            style={{ fontWeight: 800 }}
            variants={fadeInUp}
          >
            A jornada que me trouxe até aqui
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 text-center mb-16"
            variants={fadeInUp}
          >
            Mais de 15 anos no mercado, seis crises globais e uma descoberta que mudou tudo.
          </motion.p>
          
            <div className="relative">
              {/* Linha vertical em degradê para desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#025BD9] via-[#00FF00] to-[#025BD9]"></div>
            <motion.div 
              className="space-y-0"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* 2007 */}
              <motion.div className="md:grid md:grid-cols-2 md:gap-8 md:items-center flex flex-col" variants={fadeInUp}>
                <motion.div className="md:text-right border-2 border-dashed border-[#025BD9] rounded-lg p-6 hover:border-[#00FF00] transition md:order-1 order-2 relative md:w-full w-full" whileHover={{ scale: 1.02 }}>
                  <h3 className="text-3xl font-bold text-[#025BD9] mb-2" style={{ fontWeight: 800 }}>2007</h3>
                  <h4 className="text-xl font-bold text-white mb-3">O início da jornada</h4>
                  <p className="text-gray-400 leading-relaxed">No mercado desde o final de 2007, passei por 6+ formações em desenvolvimento humano e finanças comportamentais, perdendo consistentemente — buscando o 'setup mágico' sem resultado.</p>

                </motion.div>
                <div className="md:flex justify-center hidden md:order-2 order-1">
                  <div className="w-8 h-8 rounded-full bg-[#00FF00] border-4 border-[#0f0f0f] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#025BD9]"></div>
                  </div>
                </div>
              </motion.div>

              {/* Bolinha entre 2007 e 2016 */}
              <div className="md:hidden flex justify-center py-6 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#00FF00] border-4 border-[#0f0f0f] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#025BD9]"></div>
                </div>
              </div>

              {/* 2016 */}
              <motion.div className="md:grid md:grid-cols-2 md:gap-8 md:items-center flex flex-col" variants={fadeInUp}>
                <div className="md:flex justify-center order-2 md:order-1 hidden">
                  <div className="w-8 h-8 rounded-full bg-[#00FF00] border-4 border-[#0f0f0f] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#025BD9]"></div>
                  </div>
                </div>
                <motion.div className="order-1 md:order-2 border-2 border-dashed border-[#025BD9] rounded-lg p-6 hover:border-[#00FF00] transition relative md:w-full w-full" whileHover={{ scale: 1.02 }}>
                  <h3 className="text-3xl font-bold text-[#025BD9] mb-2" style={{ fontWeight: 800 }}>2016</h3>
                  <h4 className="text-xl font-bold text-white mb-3">A virada profissional</h4>
                  <p className="text-gray-400 leading-relaxed">Deixei 20 anos de docência universitária para me tornar Assessor de Investimentos na XP. Foi nos bastidores que comecei a descobrir como o sistema realmente funciona.</p>
                </motion.div>
              </motion.div>

              {/* Bolinha entre 2016 e 2017 */}
              <div className="md:hidden flex justify-center py-6 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#00FF00] border-4 border-[#0f0f0f] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#025BD9]"></div>
                </div>
              </div>

              {/* 2017 */}
              <motion.div className="md:grid md:grid-cols-2 md:gap-8 md:items-center flex flex-col" variants={fadeInUp}>
                <motion.div className="md:text-right border-2 border-dashed border-[#025BD9] rounded-lg p-6 hover:border-[#00FF00] transition md:order-1 order-2 relative md:w-full w-full" whileHover={{ scale: 1.02 }}>
                  <h3 className="text-3xl font-bold text-[#025BD9] mb-2" style={{ fontWeight: 800 }}>2017</h3>
                  <h4 className="text-xl font-bold text-white mb-3">O elo que faltava</h4>
                  <p className="text-gray-400 leading-relaxed">Investi no estudo da mente e Finanças Comportamentais com professores da Universidade de Toronto. Estratégia + neurociência da decisão = resultados reais.</p>

                </motion.div>
                <div className="md:flex justify-center hidden md:order-2 order-1">
                  <div className="w-8 h-8 rounded-full bg-[#00FF00] border-4 border-[#0f0f0f] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#025BD9]"></div>
                  </div>
                </div>
              </motion.div>

              {/* Bolinha entre 2017 e Hoje */}
              <div className="md:hidden flex justify-center py-6 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#00FF00] border-4 border-[#0f0f0f] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#025BD9]"></div>
                </div>
              </div>

              {/* Hoje */}
              <motion.div className="md:grid md:grid-cols-2 md:gap-8 md:items-center flex flex-col" variants={fadeInUp}>
                <div className="md:flex justify-center order-2 md:order-1 hidden">
                  <div className="w-8 h-8 rounded-full bg-[#00FF00] border-4 border-[#0f0f0f] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#025BD9]"></div>
                  </div>
                </div>
                <motion.div className="order-1 md:order-2 border-2 border-dashed border-[#025BD9] rounded-lg p-6 hover:border-[#00FF00] transition relative md:w-full w-full" whileHover={{ scale: 1.02 }}>
                  <h3 className="text-3xl font-bold text-[#025BD9] mb-2" style={{ fontWeight: 800 }}>Hoje</h3>
                  <h4 className="text-xl font-bold text-white mb-3">Ajudando traders e investidores</h4>
                  <p className="text-gray-400 leading-relaxed">Como Consultor certificado pela ANBIMA, minha missão é evitar que você repita os erros que me custaram anos. A consistência está na sua mente.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testes de Perfil */}
      <motion.section 
        id="servicos" 
        className="py-20 px-4 bg-[#0f0f0f] border-t border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-5xl font-bold text-white mb-4 text-center" 
            style={{ fontWeight: 800 }}
            variants={fadeInUp}
          >
            Perfis: <span className="text-[#025BD9]">Iniciante</span>, <span className="text-[#00FF00]">Trader</span> e <span className="text-[#025BD9]">Investidor</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 text-center mb-16"
            variants={fadeInUp}
          >
            Antes de mudar seus resultados, você precisa entender como você decide. Os testes revelam como sua mente reage ao risco, à pressão, à perda e ao ganho.
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card 1 - Perfil Iniciante */}
            <motion.div 
              className="border-2 border-dashed border-[#025BD9] rounded-lg p-8 hover:border-[#00FF00] transition"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#00FF00] flex items-center justify-center mb-6 border-2 border-dashed border-[#00FF00]">
                <span className="text-[#0f0f0f] font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Perfil Iniciante</h3>
              <p className="text-gray-400 mb-6">Teste de Perfil focado em iniciantes que estão começando a entender seu comportamento no mercado financeiro.</p>
              <div className="space-y-3">
                <motion.button 
                  className="bg-[#00FF00] text-[#0f0f0f] hover:bg-[#00DD00] font-bold px-6 py-2 rounded w-full transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://go.hotmart.com/K105149403I?dp=1', '_blank')}
                >
                  Teste Apenas
                </motion.button>
                <motion.button 
                  className="bg-[#025BD9] text-white hover:bg-[#0247B2] font-normal px-6 py-2 rounded w-full transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://go.hotmart.com/K105149403I?dp=1', '_blank')}
                >
                  Teste + Devolutiva 1h
                </motion.button>
              </div>
            </motion.div>

            {/* Card 2 - Perfil Trader (DESTAQUE) */}
            <motion.div 
              className="border-2 border-dashed border-[#00FF00] rounded-lg p-8 hover:border-[#00FF00] transition -my-6 shadow-2xl bg-gradient-to-br from-[#00FF00]/10 to-[#025BD9]/10"
              variants={scaleIn}
              whileHover={{ scale: 1.08 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#00FF00] flex items-center justify-center mb-6 border-2 border-dashed border-[#00FF00]">
                <span className="text-[#0f0f0f] font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Perfil Trader</h3>
              <p className="text-gray-400 mb-6">Receba seu relatório de Perfil Trader completo com análise profunda de seu comportamento em operações de curto prazo.</p>
              <div className="space-y-3">
                <motion.button 
                  className="bg-[#00FF00] text-[#0f0f0f] hover:bg-[#00DD00] font-bold px-6 py-2 rounded w-full transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://go.hotmart.com/Q105148590W?dp=1', '_blank')}
                >
                  Teste Apenas
                </motion.button>
                <motion.button 
                  className="bg-[#025BD9] text-white hover:bg-[#0247B2] font-normal px-6 py-2 rounded w-full transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://go.hotmart.com/Q105148590W?dp=1', '_blank')}
                >
                  Teste + Devolutiva 1h
                </motion.button>
              </div>
            </motion.div>

            {/* Card 3 - Perfil Investidor */}
            <motion.div 
              className="border-2 border-dashed border-[#025BD9] rounded-lg p-8 hover:border-[#00FF00] transition"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#00FF00] flex items-center justify-center mb-6 border-2 border-dashed border-[#00FF00]">
                <span className="text-[#0f0f0f] font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Perfil Investidor</h3>
              <p className="text-gray-400 mb-6">Consultoria comportamental personalizada com análise aprofundada de seu perfil em decisões de longo prazo.</p>
              <div className="space-y-3">
                <motion.button 
                  className="bg-[#00FF00] text-[#0f0f0f] hover:bg-[#00DD00] font-bold px-6 py-2 rounded w-full transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://go.hotmart.com/L105187035P?dp=1', '_blank')}
                >
                  Teste Apenas
                </motion.button>
                <motion.button 
                  className="bg-[#025BD9] text-white hover:bg-[#0247B2] font-normal px-6 py-2 rounded w-full transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://go.hotmart.com/L105187035P?dp=1', '_blank')}
                >
                  Teste + Devolutiva 1h
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Email Capture */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-b from-[#0f0f0f] to-[#025BD9]/10 border-t border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div className="mb-8" variants={fadeInUp}>
            <Mail className="w-16 h-16 text-[#025BD9] mx-auto mb-6" />
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-white mb-4" 
            style={{ fontWeight: 800 }}
            variants={fadeInUp}
          >
            Receba o Ebook Gratuito
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            variants={fadeInUp}
          >
            "Vieses que te impedem de lucrar" - Análise profunda dos sabotadores invisíveis do seu trading
          </motion.p>

          <motion.form 
            onSubmit={handleEmailSubmit}
            className="flex flex-col md:flex-row gap-3 mb-4"
            variants={fadeInUp}
          >
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 bg-[#0f0f0f] border-2 border-dashed border-[#025BD9] rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF00] transition"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#00FF00] text-[#0f0f0f] hover:bg-[#00DD00] font-bold px-8 py-3 rounded transition disabled:opacity-50 w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? "Enviando..." : "Receber Ebook"}
            </motion.button>
          </motion.form>

          {submitStatus === "success" && (
            <motion.div 
              className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✓ Email recebido! Verifique sua caixa de entrada para o ebook.
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div 
              className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✗ {errorMessage}
            </motion.div>
          )}

          <motion.p 
            className="text-sm text-gray-500"
            variants={fadeInUp}
          >
            Respeitamos sua privacidade. Você pode se desinscrever a qualquer momento.
          </motion.p>
        </div>
      </motion.section>

      {/* Seção Anos de Perda - Narrativa Emocional */}
      <motion.section 
        className="py-24 px-4 bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] border-t border-b border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-3xl">
          <motion.div className="space-y-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 className="text-5xl md:text-6xl font-bold text-white leading-tight" style={{ fontWeight: 800 }} variants={fadeInUp}>
              Anos de perdas.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025BD9] to-[#00FF00]">Milhares de reais queimados.</span>
              <br />
              E uma dor que só quem vive sabe.
            </motion.h2>
            
            <motion.div className="space-y-6 text-lg text-gray-300 leading-relaxed" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeInUp}>
                Dinheiro que eu suei para ganhar… e entreguei para o mercado como se não valesse nada.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Foram anos acreditando que “agora vai”. Anos alimentando expectativas que nunca se concretizavam. Anos colecionando frustrações, noites mal dormidas e aquela sensação sufocante de incapacidade.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Eu me tornei escravo das minhas próprias crenças. Da minha falta de noção sobre como o trading realmente funciona. Dos meus vieses, sabotadores e de uma inteligência emocional completamente despreparada para lidar com pressão, perda e incerteza.
              </motion.p>

              <motion.div className="bg-[#025BD9]/10 border-l-4 border-[#025BD9] pl-6 py-4" variants={fadeInUp}>
                <motion.p className="text-xl font-semibold text-white">
                  O mercado não me destruía — eu me destruía.
                  <br />
                  E o pior: eu nem percebia.
                </motion.p>
              </motion.div>

              <motion.p variants={fadeInUp}>
                Cada stop doía mais do que o anterior. Cada mês negativo parecia um lembrete cruel de que talvez eu “não fosse feito para isso”. E cada nova tentativa só aumentava a sensação de estar preso em um ciclo infinito de esperança e decepção.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Eu tentei de tudo. Estratégias, setups, indicadores, cursos, promessas milagrosas. Nada funcionava. Nada mudava. Nada me tirava do lugar.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Até que um dia, exausto de perder dinheiro, tempo e autoestima, eu finalmente decidi olhar para onde nunca tinha olhado. E foi exatamente aí que tudo começou a mudar.
              </motion.p>

              <motion.div className="bg-[#00FF00]/10 border-l-4 border-[#00FF00] pl-6 py-4" variants={fadeInUp}>
                <motion.p className="text-xl font-semibold text-white">
                  Porque a verdade é simples e brutal:
                  <br />
                  <span className="text-[#025BD9]">não é o mercado que te derrota — é você.</span>
                  <br />
                  E enquanto você não enxergar isso,
                  <br />
                  vai continuar pagando caro, em dinheiro e em sofrimento.
                </motion.p>
              </motion.div>

              <motion.div className="space-y-4 pt-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
                  Se você sente que já perdeu demais…
                </motion.p>
                <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
                  Se está cansado de tentar e falhar…
                </motion.p>
                <motion.p className="text-lg text-gray-300" variants={fadeInUp}>
                  Se já não aguenta mais carregar a frustração de anos sem resultados…
                </motion.p>
              </motion.div>

              <motion.p className="text-2xl font-bold text-[#00FF00] pt-6" variants={fadeInUp}>
                Então você está no lugar certo.
                <br />
                Aqui começa a sua virada.
                <br />
                Aqui você finalmente aprende a parar de lutar contra o mercado — e contra si mesmo.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mentorias */}
      <motion.section 
        id="resultados" 
        className="py-20 px-4 bg-[#0f0f0f] border-t border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-5xl font-bold text-white mb-4 text-center" 
            style={{ fontWeight: 800 }}
            variants={fadeInUp}
          >
            Mentorias <span className="text-[#025BD9]">Market</span><span className="text-[#00FF00]">Mind</span> Trader e Investidor
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 text-center mb-16"
            variants={fadeInUp}
          >
            Para poucos. Para quem está pronto. Atenção: não é para qualquer um. Para participar, você precisa passar por uma seleção. Só aceito pessoas que realmente estão prontas para mudar.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInLeft}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663416505971/RGkKKJ6Dv3D9iisvmREZF2/Gemini_Generated_Image_33i9ft33i9ft33i9_compressed_6456c022.png"
                alt="Mentoria profissional"
                className="rounded-lg shadow-xl border border-[#025BD9]/30 w-full"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div className="mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h3 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }} variants={fadeInUp}>Formato</motion.h3>
                <motion.ul className="space-y-3 text-gray-300" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={20} />
                    Individual ou em grupo
                  </motion.li>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={20} />
                    Online ou presencial
                  </motion.li>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={20} />
                    Planos de acompanhamento sob medida
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div className="mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h3 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }} variants={fadeInUp}>Você vai trabalhar</motion.h3>
                <motion.ul className="space-y-3 text-gray-300" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={20} />
                    Mentalidade profissional
                  </motion.li>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={20} />
                    Processos de decisão
                  </motion.li>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={20} />
                    Edge estatístico
                  </motion.li>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={20} />
                    Métricas que importam
                  </motion.li>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={20} />
                    Controle emocional
                  </motion.li>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={20} />
                    Redução de erros
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.button 
                className="bg-[#00FF00] text-[#0f0f0f] hover:bg-[#00DD00] font-bold px-8 py-3 rounded w-full transition"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/5531982910530?text=Olá%2C%20gostaria%20de%20me%20candidatar%20à%20Mentoria%20Premium%20da%20MarketMind', '_blank')}
              >
                Quero Me Candidatar à Mentoria
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* PROTOCOLO RESGATE: OPERAÇÃO APOSENTADORIA */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-t border-[#333333]">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-block mb-4 px-4 py-2 border-2 border-[#FF6B00] rounded-full">
              <p className="text-[#FF6B00] font-bold text-sm">MENTORIA ESPECIALIZADA</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Protocolo Resgate: <span className="text-[#025BD9]">Operação Aposentadoria</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sua última grande chance de construir patrimônio para sua aposentadoria depois dos 50, de forma segura e <span className="text-[#00FF00] font-bold">começando do zero</span>.
            </p>
          </motion.div>

          {/* Problema */}
          <motion.div 
            className="bg-[#111111] border-l-4 border-[#FF6B00] p-8 rounded mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              O relógio é implacável e o mercado tradicional pode não ser mais uma opção para você. Se você passou dos 50 anos e seu capital está "preso" na Renda Fixa ou na Poupança, você não está apenas sendo conservador. <span className="text-[#00FF00] font-bold">Você está deixando o seu futuro para trás.</span> E se você ainda nem começou... <span className="text-[#00FF00] font-bold">boa sorte!</span>
            </p>
            <p className="text-gray-400 text-base mt-4">
              Pelas vias normais da Renda Fixa, os números dificilmente fecharão a tempo. Mas existe uma saída estratégica.
            </p>
          </motion.div>

          {/* Missão */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">A MISSÃO: RESGATAR O SEU TEMPO PERDIDO</h3>
            
            {/* Imagem Missão Especial - Posicionada dentro da seção A MISSÃO */}
            <motion.div
              className="mb-8 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663416505971/RGkKKJ6Dv3D9iisvmREZF2/missao-resgate-Sd9TzTLcwG32HSGaGzJWUv.webp"
                alt="Missão Especial - Protocolo Resgate"
                className="w-full max-w-3xl h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Mentoria prática desenhada para quem nunca investiu em ações e quer usar todo o sobe e desce da bolsa a seu favor. Minha missão é te mostrar como mudar o jogo através de uma visão tática das oportunidades que o mercado oferece, focando no crescimento exponencial do seu capital para a aposentadoria, com risco totalmente controlado.
            </p>
            <p className="text-[#025BD9] font-bold mt-4 text-lg">Aqui, a gestão do risco é levada muito a sério — ela é blindada pela estratégia.</p>
          </motion.div>

          {/* Plano de Ação */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">O PLANO DE AÇÃO</h3>
            <p className="text-gray-400 text-center mb-12 text-lg">Esqueça o caos das notícias e o vício em telas de computador. Nossa operação é simples, objetiva e exige apenas alguns minutos da sua semana.</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-[#025BD9]/20 to-[#025BD9]/5 border border-[#025BD9] p-8 rounded-lg"
              >
                <div className="text-4xl font-bold text-[#025BD9] mb-4">1</div>
                <h4 className="text-xl font-bold text-white mb-4">Inteligência Teórica</h4>
                <p className="text-gray-300 leading-relaxed">
                  Aulas gravadas, detalhadas e claras, sem teoria desnecessária, onde desintegramos a complexidade do mercado. Você aprende as estratégias e como montá-las no seu ritmo.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-[#00FF00]/20 to-[#00FF00]/5 border border-[#00FF00] p-8 rounded-lg"
              >
                <div className="text-4xl font-bold text-[#00FF00] mb-4">2</div>
                <h4 className="text-xl font-bold text-white mb-4">Treinamento Tático ao Vivo</h4>
                <p className="text-gray-300 leading-relaxed">
                  4 encontros de 1h30m cada, por semana, em grupos de, no máximo, 5 alunos, para tirar dúvidas em tempo real. Estarei com você enquanto montamos suas operações.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-[#FF6B00]/20 to-[#FF6B00]/5 border border-[#FF6B00] p-8 rounded-lg"
              >
                <div className="text-4xl font-bold text-[#FF6B00] mb-4">3</div>
                <h4 className="text-xl font-bold text-white mb-4">Acompanhamento de Elite</h4>
                <p className="text-gray-300 leading-relaxed">
                  3 meses de suporte direto via WhatsApp após a mentoria para monitorarmos seus resultados e fazermos as intervenções necessárias.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Diferencial */}
          <motion.div 
            className="bg-gradient-to-r from-[#025BD9]/10 to-[#00FF00]/10 border border-[#025BD9] p-12 rounded-lg mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">O DIFERENCIAL: O CONDICIONAMENTO MENTAL</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Por que a maioria falha onde você terá sucesso? <span className="text-[#00FF00] font-bold">Porque eles não dominam a própria mente.</span>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              O coração do Protocolo Resgate é a parte psicológica. Como consultor, vou te ajudar a condicionar sua mentalidade para aplicar a estratégia com disciplina. O mercado é feito de comportamento, e você aprenderá a dominar os seus vieses para ter a chance de colher os lucros que a Renda Fixa jamais entregaria.
            </p>
          </motion.div>

          {/* Para Quem É */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center"><span className="text-white">PROTOCOLO RESGATE</span> <span className="text-[#025BD9]">É PARA QUEM</span></h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111111] border-l-4 border-[#025BD9] p-6 rounded">
                <p className="text-gray-300 text-lg">✓ Nunca investiu na vida e quer começar agora</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-[#00FF00] p-6 rounded">
                <p className="text-gray-300 text-lg">✓ Só investe em Renda Fixa e quer crescimento exponencial</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-[#FF6B00] p-6 rounded">
                <p className="text-gray-300 text-lg">✓ Quer recuperar o tempo perdido após os 50</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-[#025BD9] p-6 rounded">
                <p className="text-white text-lg">✓ Busca uma chance de ter uma aposentadoria mais tranquila e segura</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-[#025BD9] p-6 rounded">
                <p className="text-white text-lg">✓ Quer aproveitar as oportunidades do mercado de ações, sem abrir mão da segurança</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-[#00FF00] p-6 rounded">
                <p className="text-gray-300 text-lg">✓ Não dispõe de muito dinheiro para começar</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-[#00FF00] p-6 rounded">
                <p className="text-gray-300 text-lg">✓ Quer se comprometer de verdade com seu resgate</p>
              </div>
            </div>
          </motion.div>

          {/* Para Quem NÃO É */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center"><span className="text-red-600">PARA QUEM NÃO É</span></h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111111] border-l-4 border-red-600 p-6 rounded">
                <p className="text-gray-300 text-lg">✗ Para quem não tem disciplina</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-red-600 p-6 rounded">
                <p className="text-gray-300 text-lg">✗ Para quem não está comprometido com seu projeto de aposentadoria e crescimento de capital</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-red-600 p-6 rounded">
                <p className="text-gray-300 text-lg">✗ Para quem acha que o dinheiro gasto na mentoria será uma despesa</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-red-600 p-6 rounded">
                <p className="text-gray-300 text-lg">✗ Para quem acredita em fórmula mágica</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-red-600 p-6 rounded">
                <p className="text-gray-300 text-lg">✗ Para quem não tem paciência de esperar os frutos crescerem ao longo do tempo</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-red-600 p-6 rounded">
                <p className="text-gray-300 text-lg">✗ Para quem quer algo da noite para o dia</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-red-600 p-6 rounded">
                <p className="text-gray-300 text-lg">✗ Para quem está buscando um esquema de enriquecimento</p>
              </div>
              <div className="bg-[#111111] border-l-4 border-red-600 p-6 rounded">
                <p className="text-gray-300 text-lg">✗ Para quem não tem dinheiro algum para começar</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">O MOMENTO DA DECISÃO</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Você pode continuar que ainda dá tempo de se aposentar com seu salário ou apenas com a renda fixa ou pode iniciar o seu Protocolo Resgate hoje mesmo e aprender a aproveitar as milhares de oportunidades que o mercado lhe oferece.
            </p>
            <p className="text-[#FF6B00] font-bold text-xl mb-8">O tempo está correndo. Você está pronto para o regate ou prefere se entregar?</p>
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-[#FF6B00]/50 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              QUERO INICIAR O PROTOCOLO RESGATE
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Curso Mercado Minimalista */}
      <motion.section 
        className="py-20 px-4 bg-[#0f0f0f] border-t border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-5xl font-bold text-white mb-4 text-center" 
            style={{ fontWeight: 800 }}
            variants={fadeInUp}
          >
            Curso <span className="text-[#025BD9]">Mercado</span> <span className="text-[#00FF00]">Minimalista</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 text-center mb-16"
            variants={fadeInUp}
          >
            5 encontros online de 2h cada. Estratégias simples, seguras e sem complicações.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInLeft}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div className="space-y-6">
                <motion.div className="border-l-4 border-[#00FF00] pl-6" variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Para Quem Quer Simplicidade</h3>
                  <p className="text-gray-300">Nada de setups mirabolantes, dezenas de indicadores ou horas na frente do gráfico. Aqui você aprende estratégias minimalistas com risco totalmente controlado.</p>
                </motion.div>

                <motion.div className="border-l-4 border-[#025BD9] pl-6" variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Acessível para Todos</h3>
                  <p className="text-gray-300">Estratégias acessíveis até mesmo para quem tem perfil conservador ou morre de medo de ações. Comece totalmente do zero.</p>
                </motion.div>

                <motion.div className="border-l-4 border-[#00FF00] pl-6" variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Sem complexidade desnecessária</h3>
                  <p className="text-gray-300">Sem complexidade, sem promessas mágicas e sem perda de tempo. Estratégias totalmente alinhadas ao seu perfil.</p>
                </motion.div>

                <motion.div className="border-l-4 border-[#025BD9] pl-6" variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Sem Enrolação</h3>
                  <p className="text-gray-300">Sem teorias desnecessárias, direto ao ponto. Você aprende apenas o que realmente importa para operar com consistência.</p>
                </motion.div>

                <motion.div className="border-l-4 border-[#00FF00] pl-6" variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Muito Mais que Ações</h3>
                  <p className="text-gray-300">Entenda o que realmente interessa no mundo da renda variável, que é muito mais do que operar ações.</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div className="mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h3 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }} variants={fadeInUp}>Você vai aprender:</motion.h3>
                <motion.ul className="space-y-3 text-gray-300" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={24} />
                    Estratégias simples e diretas para operar com segurança
                  </motion.li>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={24} />
                    Estratégias executadas em poucos minutos por semana ou por mês
                  </motion.li>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={24} />
                    Como controlar o risco de forma profissional
                  </motion.li>
                  <motion.li className="flex items-center gap-3" variants={fadeInUp}>
                    <CheckCircle className="text-[#00FF00]" size={24} />
                    Como montar operações claras e objetivas
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div className="mb-8 bg-gradient-to-r from-[#025BD9]/10 to-[#00FF00]/10 border border-[#025BD9]/30 rounded-lg p-6" variants={fadeInUp}>
                <p className="text-gray-300 mb-4"><span className="text-[#00FF00] font-bold">5 encontros online de 2h cada em tempo real</span></p>
                <p className="text-gray-300 mb-4"><span className="text-[#00FF00] font-bold">+ Acompanhamento de 2 meses</span> no WhatsApp até você dominar as estratégias</p>
                <div className="mt-4 pt-4 border-t border-[#025BD9]/30">
                  <p className="text-sm text-[#00FF00] font-semibold">💡 <span className="text-[#025BD9]">Muitos alunos já recuperam o investimento do curso antes mesmo de terminá-lo, dependendo das condições do mercado e da ocorrência do sinal de entrada.</span></p>
                </div>
              </motion.div>

              <motion.div className="mb-8 bg-gradient-to-r from-[#FF6B00]/10 to-[#025BD9]/10 border border-[#FF6B00]/30 rounded-lg p-6" variants={fadeInUp}>
                <p className="text-center text-lg font-bold text-white">Não é apenas mais um curso de ações</p>
                <p className="text-center text-gray-300 text-sm mt-2">Este é um programa completo de transformação comportamental e operacional.</p>
                <p className="text-center text-xl font-bold text-[#FF6B00] mt-4">Não é sobre day trading</p>
              </motion.div>              <motion.button 
                className="font-bold px-8 py-3 rounded w-full transition"
                style={{
                  backgroundColor: primaryButtonColor,
                  color: abVariant === "A" ? "#0f0f0f" : "white"
                }}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTAClick("curso_minimalista");
                  window.open('https://go.hotmart.com/L105345200L?dp=1', '_blank');
                }}
              >
                Acessar o Curso Agora
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Prova Social */}
      <motion.section 
        className="py-20 px-4 bg-[#0f0f0f] border-t border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-5xl font-bold text-white mb-16 text-center" 
            style={{ fontWeight: 800 }}
            variants={fadeInUp}
          >
            Prova social
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-8"
              variants={scaleIn}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#00FF00]">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Depois do teste de Perfil e da devolutiva, entendi exatamente por que eu saía das operações cedo demais. Era um viés que eu nunca tinha identificado. Mudou completamente minha forma de operar."
              </p>
              <p className="font-bold text-white">Ricardo M.</p>
              <p className="text-gray-400 text-sm">Trader de ações</p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-8"
              variants={scaleIn}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#00FF00]">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Eu achava que precisava de um setup melhor. Na verdade, eu precisava me conhecer melhor. A MarketMind me mostrou isso com clareza."
              </p>
              <p className="font-bold text-white">Ana P.</p>
              <p className="text-gray-400 text-sm">Investidora pessoa física</p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-8"
              variants={scaleIn}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#00FF00]">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Em 20 anos de mercado nunca ninguém tinha falado de comportamento assim. Essa abordagem estatística e comportamental é o que faltava."
              </p>
              <p className="font-bold text-white">Fábio L.</p>
              <p className="text-gray-400 text-sm">Investidor de longo prazo</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trader Reboot */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] border-t border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div className="inline-block mb-4 px-4 py-2 bg-[#00FF00]/10 border border-[#00FF00] rounded-full" variants={fadeInUp}>
              <span className="text-[#00FF00] font-bold text-sm">⚡ Transformação em 5 Dias</span>
            </motion.div>
            <motion.h2 
              className="text-5xl font-bold text-white mb-4" 
              style={{ fontWeight: 800 }}
              variants={fadeInUp}
            >
              Trader Reboot – <span className="text-[#025BD9]">Reset</span> da <span className="text-[#00FF00]">Consistência</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Timeline Esquerda */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInLeft}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {/* Step 1 */}
              <motion.div className="flex gap-6" variants={fadeInUp}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#025BD9] rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div className="w-1 h-20 bg-gradient-to-b from-[#025BD9] to-[#00FF00] mt-2"></div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Você Opera</h3>
                  <p className="text-gray-400">Durante 5 dias, você opera no mercado à vista com seus setups reais. Grava cada operação e envia para análise profunda.</p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div className="flex gap-6" variants={fadeInUp}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center text-[#0f0f0f] font-bold text-lg">2</div>
                  <div className="w-1 h-20 bg-gradient-to-b from-[#00FF00] to-[#025BD9] mt-2"></div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Eu Analiso</h3>
                  <p className="text-gray-400">Análise profunda de cada detalhe: execução, hesitação, impulsividade, ansiedade. Tudo que você não percebe mas destrói seus resultados.</p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div className="flex gap-6" variants={fadeInUp}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#025BD9] rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontWeight: 800 }}>Você Recebe</h3>
                  <p className="text-gray-400">Plano de Alinhamento Comportamental personalizado. Exatamente onde está errando e como corrigir para operar com consistência.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Benefícios Direita */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <motion.div className="bg-gradient-to-br from-[#00FF00]/20 to-[#025BD9]/20 border-2 border-[#00FF00] rounded-lg p-8" variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontWeight: 800 }}>Resultado Final</h3>
                <motion.ul className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <span className="text-[#00FF00] font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-300">Clareza total sobre seu comportamento</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <span className="text-[#00FF00] font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-300">Operacional estruturado e testado</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <span className="text-[#00FF00] font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-300">Confiança para operar com consistência</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <span className="text-[#00FF00] font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-300">Plano personalizado de ação</span>
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div className="bg-[#025BD9]/20 border-2 border-[#025BD9] rounded-lg p-6 text-center" variants={fadeInUp}>
                <p className="text-gray-300 mb-2"><span className="text-[#00FF00] font-bold text-xl">Investimento:</span> Sob consulta</p>
                <p className="text-sm text-gray-400">Turmas limitadas • Seleção rigorosa</p>
              </motion.div>

              <motion.button 
                className="font-bold px-8 py-3 rounded w-full transition"
                style={{
                  backgroundColor: primaryButtonColor,
                  color: abVariant === "A" ? "#0f0f0f" : "white"
                }}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTAClick("trader_reboot");
                  window.open('https://go.hotmart.com/M105343772G?dp=1', '_blank');
                }}
              >
                Acessar o Curso Agora
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Minicurso Destacado */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-[#025BD9]/20 to-[#00FF00]/10 border-t border-b border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div className="border-2 border-dashed border-[#00FF00] rounded-lg p-6 md:p-12" variants={scaleIn}>
            <motion.div className="text-center mb-8" variants={fadeInUp}>
              <p className="text-sm text-[#025BD9] font-bold mb-3 uppercase tracking-wide">Minicurso Exclusivo</p>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3" style={{ fontWeight: 800 }}>
                Desvendando o Inconsciente
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6" style={{ fontWeight: 600 }}>
                O Fator Oculto por Trás dos Seus Resultados no Trading
              </p>
            </motion.div>

            <motion.div className="space-y-6 mb-10" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div className="flex gap-4 items-start" variants={fadeInUp}>
                <div className="w-8 h-8 rounded-full bg-[#00FF00] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#0f0f0f] font-bold text-sm">✓</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Entenda os vieses comportamentais que sabotam seus resultados</h3>
                  <p className="text-sm md:text-base text-gray-400">Descubra os padrões de pensamento que te levam a tomar decisões contrárias ao seu plano de trading. Aprenda a identificar e neutralizar esses vieses em tempo real.</p>
                </div>
              </motion.div>

              <motion.div className="flex gap-4 items-start" variants={fadeInUp}>
                <div className="w-8 h-8 rounded-full bg-[#00FF00] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#0f0f0f] font-bold text-sm">✓</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Domine a psicologia da decisão sob pressão</h3>
                  <p className="text-sm md:text-base text-gray-400">Aprenda técnicas comprovadas para manter a clareza mental quando o mercado está volátil. Desenvolva resiliência emocional e confiança nas suas decisões.</p>
                </div>
              </motion.div>

              <motion.div className="flex gap-4 items-start" variants={fadeInUp}>
                <div className="w-8 h-8 rounded-full bg-[#00FF00] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#0f0f0f] font-bold text-sm">✓</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Construa processos que funcionam independente do seu estado emocional</h3>
                  <p className="text-sm md:text-base text-gray-400">Crie sistemas de decisão que reduzem a dependência de emoções. Implemente rotinas que garantem consistência mesmo nos dias mais desafiadores.</p>
                </div>
              </motion.div>

              <motion.div className="flex gap-4 items-start" variants={fadeInUp}>
                <div className="w-8 h-8 rounded-full bg-[#00FF00] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#0f0f0f] font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Acesse ferramentas práticas e exercícios aplicáveis imediatamente</h3>
                  <p className="text-gray-400">Saia do minicurso com um toolkit pronto para usar. Exercícios, checklists e frameworks que você pode aplicar na sua próxima operação.</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <p className="text-lg text-gray-300 mb-6">
                <span className="text-[#00FF00] font-bold">Investimento:</span> <span className="line-through">R$ 297</span> <span className="text-2xl font-bold text-[#00FF00]">R$ 97</span>
              </p>
              <motion.button 
                className="font-bold px-12 py-4 rounded text-lg transition"
                style={{
                  backgroundColor: primaryButtonColor,
                  color: abVariant === "A" ? "#0f0f0f" : "white"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTAClick("minicurso_trader_reboot");
                  window.open('https://go.hotmart.com/M105343772G?dp=1', '_blank');
                }}
              >
                Acessar o Minicurso Agora
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Seção Profissional: O Mercado Financeiro como Profissão */}
      <motion.section
        className="relative py-32 px-4 bg-[#0a0a0a] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Conteúdo */}
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Título Principal */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontWeight: 800 }}>
              <span className="text-white">Profissão Trader</span>
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-[#00FF00] mb-6">
              A oportunidade que você estava esperando
            </p>
          </motion.div>

          {/* Layout: Texto à Esquerda + Imagem à Direita */}
          <motion.div className="grid md:grid-cols-2 gap-12 mb-12 items-start" variants={fadeInUp}>
            {/* Texto à Esquerda */}
            <motion.div className="flex flex-col justify-start" variants={slideInLeft}>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                <span className="font-bold">Comece do zero do modo certo e fuja da estatística dos que desistem.</span> Se você busca uma carreira sólida ou uma gestão profissional do seu patrimônio, precisa de uma mentalidade profissional. Na Market Mind, nós não ensinamos apenas a operar; nós formamos a mente de quem vence.
              </p>
            </motion.div>

            {/* Imagem à Direita */}
            <motion.div className="flex justify-center" variants={slideInRight}>
              <div className="w-full h-96 md:h-full rounded-lg overflow-hidden border border-[#025BD9]/50">
                <motion.img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663416505971/RGkKKJ6Dv3D9iisvmREZF2/trader-professional-ZotDE3zsykXZBNU2zf4EiB.webp" 
                  alt="Trader profissional analisando gráficos" 
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Conteúdo em 3 Colunas */}
          <motion.div className="grid md:grid-cols-3 gap-8 mb-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {/* Coluna 1 */}
            <motion.div className="bg-[#1a1a1a]/40 backdrop-blur p-6 md:p-8 rounded-lg border border-[#333333] hover:border-[#025BD9] transition" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">O Fim do Amadorismo</h3>
              <p className="text-gray-300 leading-relaxed">
                <span className="font-bold">Comece do zero do modo certo e fuja da estatística dos que desistem.</span> No mercado de ações, <span className="font-bold text-[#00FF00]">95% dos investidores falham</span>. Eles não perdem por falta de gráficos ou notícias, mas porque tentam operar o mercado com a mente de um amador. Um profissional de mercado não vive de sorte; ele vive de processo, gerenciamento de risco e, acima de tudo, domínio comportamental.
              </p>
            </motion.div>

            {/* Coluna 2 */}
            <motion.div className="bg-gradient-to-br from-[#025BD9] to-[#00FF00] p-6 md:p-8 rounded-lg border border-[#333333] transition" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">A Formação Market Mind</h3>
              <p className="text-black leading-relaxed">
                A Market Mind não é mais um curso de fórmulas mágicas. Somos uma <span className="font-bold text-[#00FF00]">formação de elite</span> que trata o mercado com a seriedade que ele exige. Nosso diferencial único é o foco na estrutura psicológica do trader. Entendemos que o seu maior inimigo (ou aliado) não é o gráfico, mas o seu comportamento diante da incerteza.
              </p>
            </motion.div>

            {/* Coluna 3 */}
            <motion.div className="bg-[#1a1a1a]/40 backdrop-blur p-6 md:p-8 rounded-lg border border-[#333333] hover:border-[#025BD9] transition" variants={fadeInUp}>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Uma Visão Diferenciada</h3>
              <p className="text-gray-300 leading-relaxed">
                Acreditamos que viver de mercado não significa estar preso a uma tela fazendo Day Trading frenético. Nossa metodologia é desenhada inclusive para o <span className="font-bold text-[#00FF00]">investidor conservador</span>, que busca consistência e geração de renda através de estruturas profissionais de ações e opções.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Button após boxes */}
          <motion.div className="text-center" variants={fadeInUp}>
            <a 
              href="https://go.hotmart.com/L105345200L?dp=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#00FF00] text-black font-bold rounded-lg hover:bg-[#025BD9] hover:text-white transition duration-300"
            >
              Começar Minha Formação Agora
            </a>
          </motion.div>


        </div>
      </motion.section>

      {/* Mente Blindada - Curso de Viés Cognitivo */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] border-t border-[#333333]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div className="inline-block mb-4 px-4 py-2 bg-[#025BD9]/10 border border-[#025BD9] rounded-full" variants={fadeInUp}>
              <span className="text-[#025BD9] font-bold text-sm">🗣️ Psicologia Aplicada</span>
            </motion.div>
            <p className="text-sm text-[#025BD9] font-bold mb-3 uppercase tracking-wide">Minicurso Exclusivo</p>
            <motion.h2 
              className="text-6xl font-bold text-white mb-3" 
              style={{ fontWeight: 800 }}
              variants={fadeInUp}
            >
              Mente Blindada
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto" 
              variants={fadeInUp}
            >
              Supere seus Vieses Cognitivos e Eleve sua Performance no Trading
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Esquerda - Conteúdo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInLeft}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>O Problema Real</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Os vieses cognitivos — atalhos mentais que distorcem nossa percepção — são responsáveis por decisões precipitadas, excesso de confiança e perdas evitáveis.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>Você vai aprender:</h3>
                <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <span className="text-[#00FF00] font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-300">Reconhecer os 30 vieses que afetam traders (confirmação, aversão à perda, efeito manada e muito mais) com exemplos práticos de cada um.</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <span className="text-[#00FF00] font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-300">Identificar padrões de comportamento que sabotam sua disciplina</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <span className="text-[#00FF00] font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-300">Aplicar técnicas práticas para manter foco e clareza sob pressão</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp}>
                    <span className="text-[#00FF00] font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-300">Transformar sua mentalidade em vantagem competitiva</span>
                  </motion.li>
                </motion.ul>
              </div>

              <div className="bg-[#025BD9]/20 border-2 border-[#025BD9] rounded-lg p-6">
                <p className="text-gray-300 italic">
                  🚀 <span className="font-bold">Resultado esperado:</span> Mais disciplina, clareza e consistência em suas operações, reduzindo erros emocionais e aumentando suas chances de sucesso.
                </p>
              </div>
            </motion.div>

            {/* Direita - Preços e CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <motion.div className="bg-gradient-to-br from-[#00FF00]/20 to-[#025BD9]/20 border-2 border-[#00FF00] rounded-lg p-8" variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>Blindar sua Mente</h3>
                <p className="text-gray-300 mb-6">Acesso completo ao curso online com vídeos, exercícios e ferramentas práticas.</p>
                
                <p className="text-lg text-gray-300 mb-6">
                  <span className="text-[#00FF00] font-bold">Investimento:</span> <span className="line-through">R$ 297</span> <span className="text-2xl font-bold text-[#00FF00]">R$ 157</span>
                </p>
                <motion.button 
                  className="font-bold px-12 py-4 rounded text-lg transition w-full"
                  style={{
                    backgroundColor: primaryButtonColor,
                    color: abVariant === "A" ? "#0f0f0f" : "white"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    trackCTAClick("mente_blindada");
                    window.open('https://go.hotmart.com/B105345322Y?dp=1', '_blank');
                  }}
                >
                  Acessar Curso Agora
                </motion.button>
              </motion.div>

              <motion.div className="bg-[#025BD9]/20 border-2 border-[#025BD9] rounded-lg p-8" variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>+ Consultoria 1h</h3>
                <p className="text-gray-300 mb-6">Agende uma sessão de consultoria personalizada para discutir os pontos que mais te atrapalham no trading.</p>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Investimento Adicional</p>
                    <p className="text-4xl font-bold text-[#025BD9]" style={{ fontWeight: 800 }}>+R$ 199</p>
                  </div>

                  <motion.button 
                    className="bg-[#025BD9] text-white hover:bg-[#0247B2] font-bold px-8 py-4 rounded w-full text-lg transition"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://form.jotform.com/260615357587062', '_blank')}
                  >
                    Agendar Consultoria
                  </motion.button>
                </div>
              </motion.div>

              <motion.div className="text-center text-gray-400 text-sm" variants={fadeInUp}>
                <p>🔐 <span className="font-bold">Blindar sua mente é o primeiro passo para blindar seus resultados.</span></p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Trilhas de Aprendizado */}
      <motion.section 
        className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border-t border-b border-[#333333]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-6xl">
            <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontWeight: 800 }}>
              A Consistência que Você Busca Começa com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025BD9] to-[#00FF00]">Autoconhecimento</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Escolha sua trilha de aprendizado. Cada caminho é desenhado para seu perfil específico.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Trilha 1 - Iniciantes */}
            <motion.div 
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#025BD9] rounded-lg p-8 hover:border-[#025BD9]/80 transition flex flex-col h-full"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div className="text-4xl mb-4 text-center" variants={fadeInUp}>📚</motion.div>
              <motion.h3 className="text-2xl font-bold text-white mb-2 text-center h-14 flex items-center justify-center" style={{ fontWeight: 800 }} variants={fadeInUp}>
                Trilha 1<br />Iniciantes
              </motion.h3>
              <motion.p className="text-sm text-[#025BD9] font-semibold mb-6 text-center h-16 flex items-center justify-center" variants={fadeInUp}>
                Quem não sabe nada<br />ou sabe muito pouco
              </motion.p>
              
              <motion.div className="space-y-4 mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">1</span>
                  <div>
                    <p className="font-bold text-white">E-book Gratuito</p>
                    <p className="text-sm text-gray-400">Porta de entrada</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">2</span>
                  <div>
                    <p className="font-bold text-white">Diagnóstico + Devolutiva</p>
                    <p className="text-sm text-gray-400">Entenda seu perfil</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">3</span>
                  <div>                    <p className="font-bold text-white">Minicurso</p>                   <p className="text-sm text-gray-400">Desvendando o Inconsciente</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">4</span>
                  <div>
                    <p className="font-bold text-white">Curso Minimalista</p>
                    <p className="text-sm text-gray-400">Técnica + Mentalidade</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">5</span>
                  <div>
                    <p className="font-bold text-white">Mentoria Premium</p>
                    <p className="text-sm text-gray-400">1 mês transformador</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.button 
                className="w-full bg-[#025BD9] text-white hover:bg-[#025BD9]/80 font-bold py-3 px-6 rounded transition h-12 flex items-center justify-center mt-auto"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTAClick("trilha_iniciantes");
                  window.open('https://go.hotmart.com/K105149403I?dp=1', '_blank');
                }}
              >
                Começar Trilha
              </motion.button>
            </motion.div>

            {/* Trilha 2 - Investidores */}
            <motion.div 
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#00FF00] rounded-lg p-8 hover:border-[#00FF00]/80 transition flex flex-col h-full"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div className="text-4xl mb-4 text-center" variants={fadeInUp}>💰</motion.div>
              <motion.h3 className="text-2xl font-bold text-white mb-2 text-center h-14 flex items-center justify-center" style={{ fontWeight: 800 }} variants={fadeInUp}>
                Trilha 2<br />Investidores
              </motion.h3>
              <motion.p className="text-sm text-[#00FF00] font-semibold mb-6 text-center h-16 flex items-center justify-center" variants={fadeInUp}>
                Quem quer operar<br />com consciência
              </motion.p>
              
              <motion.div className="space-y-4 mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">1</span>
                  <div>
                    <p className="font-bold text-white">E-book Gratuito</p>
                    <p className="text-sm text-gray-400">Comportamento é tudo</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">2</span>
                  <div>
                    <p className="font-bold text-white">Diagnóstico + Devolutiva</p>
                    <p className="text-sm text-gray-400">Entenda seu perfil</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">3</span>
                  <div>
                    <p className="font-bold text-white">Minicurso</p>
                    <p className="text-sm text-gray-400">Desvendando o Inconsciente</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">4</span>
                  <div>
                    <p className="font-bold text-white">Curso Minimalista</p>
                    <p className="text-sm text-gray-400">Estratégias simples</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">5</span>
                  <div>
                    <p className="font-bold text-white">Mentoria Premium</p>
                    <p className="text-sm text-gray-400">Plano sólido personalizado</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.button 
                className="w-full bg-[#00FF00] text-[#0f0f0f] hover:bg-[#00DD00] font-bold py-3 px-6 rounded transition h-12 flex items-center justify-center mt-auto"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTAClick("trilha_investidores");
                  window.open('https://go.hotmart.com/L105187035P?dp=1', '_blank');
                }}
              >
                Começar Trilha
              </motion.button>
            </motion.div>

            {/* Trilha 3 - Traders */}
            <motion.div 
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#FF6B00] rounded-lg p-8 hover:border-[#FF6B00]/80 transition flex flex-col h-full"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div className="text-4xl mb-4 text-center" variants={fadeInUp}>⚡</motion.div>
              <motion.h3 className="text-2xl font-bold text-white mb-2 text-center h-14 flex items-center justify-center" style={{ fontWeight: 800 }} variants={fadeInUp}>
                Trilha 3<br />Traders
              </motion.h3>
              <motion.p className="text-sm text-[#FF6B00] font-semibold mb-6 text-center h-16 flex items-center justify-center" variants={fadeInUp}>
                Quem já opera,<br />mas é inconsistente
              </motion.p>
              
              <motion.div className="space-y-4 mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">1</span>
                  <div>
                    <p className="font-bold text-white">Diagnóstico + Devolutiva</p>
                    <p className="text-sm text-gray-400">Entenda seu perfil</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">2</span>
                  <div>
                    <p className="font-bold text-white">Minicurso</p>
                    <p className="text-sm text-gray-400">Desvendando o Inconsciente</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">3</span>
                  <div>
                    <p className="font-bold text-white">Trader Reboot</p>
                    <p className="text-sm text-gray-400">Choque de realidade</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" variants={fadeInUp}>
                  <span className="text-[#00FF00] font-bold mt-1">4</span>
                  <div>
                    <p className="font-bold text-white">Mentoria Premium</p>
                    <p className="text-sm text-gray-400">Transformação real</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.button 
                className="w-full bg-[#FF6B00] text-white hover:bg-[#FF6B00]/80 font-bold py-3 px-6 rounded transition h-12 flex items-center justify-center mt-auto"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTAClick("trilha_traders");
                  window.open('https://go.hotmart.com/Q105148590W?dp=1', '_blank');
                }}
              >
                Começar Trilha
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        id="faq"
        className="py-20 px-4 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 
              className="text-5xl font-bold text-white mb-4" 
              style={{ fontWeight: 800 }}
            >
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-gray-300">
              Respostas para as perguntas mais comuns sobre as mentorias
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border-2 border-dashed border-[#025BD9] rounded-lg overflow-hidden hover:border-[#00FF00] transition"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-[#0f0f0f]/50 hover:bg-[#0f0f0f]/80 transition"
                >
                  <span className="text-left text-white font-bold text-lg" style={{ fontWeight: 700 }}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#00FF00] text-2xl flex-shrink-0 ml-4"
                  >
                    ▼
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-gradient-to-r from-[#025BD9]/10 to-[#00FF00]/10 border-t border-[#025BD9]/30">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 p-6 border-2 border-dashed border-[#00FF00] rounded-lg bg-[#00FF00]/5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-center text-gray-300">
              Ainda tem dúvidas? <span className="text-[#025BD9] font-bold">Entre em contato</span> conosco diretamente.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#333333] py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-8 mb-8">
            <motion.div
              className="text-center"
            >
              <h3 className="text-white font-bold mb-4"><span className="text-[#025BD9]">Market</span><span className="text-[#00FF00]">Mind</span></h3>
              <p className="text-gray-400 text-sm">Mentoria para traders e investidores que querem consistência real.</p>
            </motion.div>
            <div>
              <h4 className="text-white font-bold mb-4">Navegação</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#problema" className="hover:text-[#025BD9] transition">O Problema</a></li>
                <li><a href="#trajetoria" className="hover:text-[#025BD9] transition">Trajetória</a></li>
                <li><a href="#servicos" className="hover:text-[#025BD9] transition">Serviços</a></li>
                <li><a href="#resultados" className="hover:text-[#025BD9] transition">Resultados</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Documentos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy-policy" className="hover:text-[#025BD9] transition">Privacidade</a></li>
                <li><a href="/terms-of-service" className="hover:text-[#025BD9] transition">Termos</a></li>
                <li><a href="#" className="hover:text-[#025BD9] transition">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-sm">
                <a href="https://wa.me/5531982910530" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition">
                  <MessageCircle size={18} className="text-[#00FF00] flex-shrink-0" />
                  <span className="text-[#00FF00]">+55 31 98291-0530</span>
                </a>
                <a href="mailto:contato@marketmind.net.br" className="flex items-center gap-2 hover:opacity-80 transition">
                  <Mail size={18} className="text-[#025BD9] flex-shrink-0" />
                  <span className="text-[#025BD9]">contato@marketmind.net.br</span>
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-white font-bold mb-3">Redes Sociais</h4>
                <div className="flex gap-6">
                  <a href="https://www.instagram.com/consultor_meireles/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#E1306C">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/consultordeinvestimentos/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.428-.66 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.59zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.708 0-.955.77-1.708 1.963-1.708 1.192 0 1.915.753 1.938 1.708 0 .95-.746 1.708-1.986 1.708zm1.581 11.597H3.635V9.724h3.283v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden space-y-8 mb-8">
            {/* Logo and description */}
            <motion.div className="text-center">
              <h3 className="text-white font-bold mb-4"><span className="text-[#025BD9]">Market</span><span className="text-[#00FF00]">Mind</span></h3>
              <p className="text-gray-400 text-sm">Mentoria para traders e investidores que querem consistência real.</p>
            </motion.div>

            {/* Navegação */}
            <div>
              <h4 className="text-white font-bold mb-4 text-center">Navegação</h4>
              <ul className="space-y-2 text-gray-400 text-sm text-center">
                <li><a href="#problema" className="hover:text-[#025BD9] transition">O Problema</a></li>
                <li><a href="#trajetoria" className="hover:text-[#025BD9] transition">Trajetória</a></li>
                <li><a href="#servicos" className="hover:text-[#025BD9] transition">Serviços</a></li>
                <li><a href="#resultados" className="hover:text-[#025BD9] transition">Resultados</a></li>
              </ul>
            </div>

            {/* Contato (centered) */}
            <div className="text-center">
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <div className="space-y-3 text-sm">
                <a href="https://wa.me/5531982910530" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:opacity-80 transition">
                  <MessageCircle size={18} className="text-[#00FF00] flex-shrink-0" />
                  <span className="text-[#00FF00]">+55 31 98291-0530</span>
                </a>
                <a href="mailto:contato@marketmind.net.br" className="flex items-center justify-center gap-2 hover:opacity-80 transition">
                  <Mail size={18} className="text-[#025BD9] flex-shrink-0" />
                  <span className="text-[#025BD9]">contato@marketmind.net.br</span>
                </a>
              </div>
            </div>

            {/* Documentos */}
            <div>
              <h4 className="text-white font-bold mb-4 text-center">Documentos</h4>
              <ul className="space-y-2 text-gray-400 text-sm text-center">
                <li><a href="/privacy-policy" className="hover:text-[#025BD9] transition">Privacidade</a></li>
                <li><a href="/terms-of-service" className="hover:text-[#025BD9] transition">Termos</a></li>
                <li><a href="#" className="hover:text-[#025BD9] transition">Cookies</a></li>
              </ul>
            </div>

            {/* Redes Sociais (centered) */}
            <div className="text-center">
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-6 justify-center">
                <a href="https://www.instagram.com/consultor_meireles/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#E1306C">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/consultordeinvestimentos/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.428-.66 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.59zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.708 0-.955.77-1.708 1.963-1.708 1.192 0 1.915.753 1.938 1.708 0 .95-.746 1.708-1.986 1.708zm1.581 11.597H3.635V9.724h3.283v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333333] pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 <span className="text-[#025BD9]">Market</span><span className="text-[#00FF00]">Mind</span>. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner - LGPD */}
      {cookieConsent === null && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t-2 border-[#025BD9] shadow-2xl z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto max-w-6xl px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-white font-bold mb-2">Disclaimer</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong>Disclaimer de Mercado:</strong> As informações fornecidas neste site são apenas para fins educacionais e informativos. Não constituem recomendação de investimento ou aconselhamento financeiro. O mercado financeiro envolve risco substancial de perda. Resultados passados não garantem resultados futuros. Você é responsável por suas próprias decisões de investimento.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-3">
                  <strong>Disclaimer de Mentoria:</strong> Embora os resultados sejam totalmente possíveis de serem alcançados, eles dependem do comportamento e atitude do mentorado responsável pela colocação do conhecimento adquirido em prática, não podendo ser garantido qualquer resultado. A MarketMind não se responsabiliza por perdas financeiras resultantes de decisões de investimento do cliente.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <motion.button
                  className="px-6 py-2 rounded font-bold text-sm border-2 border-[#025BD9] text-[#025BD9] hover:bg-[#025BD9]/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRejectCookies}
                >
                  Fechar
                </motion.button>
                <motion.button
                  className="px-6 py-2 rounded font-bold text-sm bg-[#025BD9] text-white hover:bg-[#0249b0] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAcceptCookies}
                >
                  Entendi
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
