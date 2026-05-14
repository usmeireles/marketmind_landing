import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-[#333333] py-6 px-4 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur z-40">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-[#025BD9] hover:text-[#00FF00] transition font-bold">
              <ArrowLeft size={20} />
              Voltar
            </a>
          </Link>
          <h1 className="text-2xl font-bold"><span className="text-[#025BD9]">Market</span><span className="text-[#00FF00]">Mind</span></h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Política de <span className="text-[#025BD9]">Privacidade</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Última atualização: 14 de abril de 2026
            </p>
          </motion.div>

          {/* Sections */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            {/* 1. Introdução */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">1. Introdução</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A <span className="font-bold">MarketMind</span> ("nós", "nosso" ou "nos") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso site e utiliza nossos serviços.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Esta política foi desenvolvida em conformidade com a <span className="font-bold">Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</span> e outras legislações aplicáveis de proteção de dados.
              </p>
            </section>

            {/* 2. Informações que Coletamos */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">2. Informações que Coletamos</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">2.1 Informações Fornecidas Diretamente</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><span className="font-bold">Email:</span> Coletado através do formulário de inscrição para envio de e-book e comunicações</li>
                    <li><span className="font-bold">Nome:</span> Opcional, fornecido em formulários de contato</li>
                    <li><span className="font-bold">Telefone:</span> Opcional, para contato direto via WhatsApp</li>
                    <li><span className="font-bold">Dados de Perfil:</span> Informações fornecidas nos testes de perfil comportamental</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">2.2 Informações Coletadas Automaticamente</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><span className="font-bold">Cookies:</span> Identificadores armazenados no seu navegador para melhorar experiência e análise de comportamento</li>
                    <li><span className="font-bold">Dados de Navegação:</span> Páginas visitadas, tempo gasto, cliques em botões (CTA tracking)</li>
                    <li><span className="font-bold">Informações do Dispositivo:</span> Tipo de navegador, sistema operacional, endereço IP</li>
                    <li><span className="font-bold">Teste A/B:</span> Variante de design exibida (Verde ou Laranja) para otimização de conversão</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">2.3 Dados de Terceiros</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><span className="font-bold">Hotmart:</span> Dados de compra e transação quando você adquire nossos produtos</li>
                    <li><span className="font-bold">Google Analytics:</span> Dados agregados de comportamento de visitantes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Como Usamos Suas Informações */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">3. Como Usamos Suas Informações</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li><span className="font-bold">Envio de Conteúdo:</span> Distribuir e-books, materiais exclusivos e comunicações sobre nossos produtos</li>
                <li><span className="font-bold">Análise de Comportamento:</span> Entender como você interage com nosso site para melhorar a experiência</li>
                <li><span className="font-bold">Teste A/B:</span> Otimizar cores, textos e layouts para aumentar taxa de conversão</li>
                <li><span className="font-bold">Comunicação:</span> Responder suas dúvidas e fornecer suporte via email ou WhatsApp</li>
                <li><span className="font-bold">Marketing:</span> Enviar informações sobre novos cursos, minicursos e ofertas especiais (apenas com consentimento)</li>
                <li><span className="font-bold">Conformidade Legal:</span> Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            {/* 4. Base Legal para Processamento */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">4. Base Legal para Processamento (LGPD)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Processamos seus dados com base nas seguintes bases legais previstas na LGPD:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><span className="font-bold">Consentimento:</span> Quando você aceita nossa política de cookies e se inscreve em formulários</li>
                <li><span className="font-bold">Interesse Legítimo:</span> Para melhorar nossos serviços, análise de segurança e prevenção de fraude</li>
                <li><span className="font-bold">Execução de Contrato:</span> Quando você adquire nossos cursos e minicursos</li>
                <li><span className="font-bold">Obrigação Legal:</span> Para cumprir leis e regulamentações aplicáveis</li>
              </ul>
            </section>

            {/* 5. Armazenamento de Dados */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">5. Armazenamento de Dados</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">5.1 Onde Armazenamos</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><span className="font-bold">Servidores Locais:</span> Dados de navegação e cookies armazenados no seu navegador (localStorage)</li>
                    <li><span className="font-bold">Plataforma Hotmart:</span> Dados de compra e transação armazenados com segurança pela Hotmart</li>
                    <li><span className="font-bold">Google Analytics:</span> Dados agregados de comportamento armazenados nos servidores do Google</li>
                    <li><span className="font-bold">Email Marketing:</span> Emails armazenados em plataforma de email marketing com criptografia</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">5.2 Período de Retenção</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><span className="font-bold">Cookies:</span> Armazenados por até 30 dias ou até que você limpe seu navegador</li>
                    <li><span className="font-bold">Email:</span> Mantido enquanto você estiver inscrito em nossa lista; pode ser removido a qualquer momento</li>
                    <li><span className="font-bold">Dados de Compra:</span> Retidos conforme exigências fiscais (até 5 anos)</li>
                    <li><span className="font-bold">Logs de Navegação:</span> Mantidos por até 90 dias para análise de segurança</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">5.3 Segurança</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia SSL/TLS, firewalls e monitoramento de segurança contínuo.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Compartilhamento de Dados */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">6. Compartilhamento de Dados</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Compartilhamos suas informações apenas com:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><span className="font-bold">Hotmart:</span> Para processar pagamentos e fornecer acesso aos cursos</li>
                <li><span className="font-bold">Google Analytics:</span> Para análise agregada de comportamento (dados não identificáveis)</li>
                <li><span className="font-bold">Plataformas de Email:</span> Para envio de comunicações (com consentimento)</li>
                <li><span className="font-bold">Autoridades Legais:</span> Quando exigido por lei ou para proteger direitos legais</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                <span className="font-bold">Não vendemos</span> seus dados para terceiros. Não compartilhamos informações pessoais para fins de marketing sem seu consentimento explícito.
              </p>
            </section>

            {/* 7. Seus Direitos */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">7. Seus Direitos (LGPD)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Conforme a LGPD, você tem direito a:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><span className="font-bold">Acesso:</span> Solicitar cópia de todos os dados que temos sobre você</li>
                <li><span className="font-bold">Retificação:</span> Corrigir informações imprecisas ou incompletas</li>
                <li><span className="font-bold">Exclusão:</span> Solicitar a exclusão de seus dados (direito ao esquecimento)</li>
                <li><span className="font-bold">Portabilidade:</span> Receber seus dados em formato estruturado e transferir para outro serviço</li>
                <li><span className="font-bold">Revogação de Consentimento:</span> Retirar consentimento para processamento de dados a qualquer momento</li>
                <li><span className="font-bold">Oposição:</span> Opor-se ao processamento de dados para fins de marketing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Para exercer qualquer desses direitos, entre em contato conosco em <span className="font-bold text-[#025BD9]">contato@marketmind.net.br</span>
              </p>
            </section>

            {/* 8. Cookies */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">8. Cookies e Tecnologias Similares</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">8.1 O que são Cookies?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Cookies são pequenos arquivos de texto armazenados no seu navegador que nos ajudam a reconhecê-lo, lembrar suas preferências e melhorar sua experiência no site.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">8.2 Cookies que Usamos</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><span className="font-bold">ab_variant:</span> Armazena sua variante de teste A/B (Verde ou Laranja)</li>
                    <li><span className="font-bold">cta_clicks:</span> Registra cliques em botões de chamada à ação para análise</li>
                    <li><span className="font-bold">cookie_consent:</span> Lembra sua escolha sobre cookies (aceitar/rejeitar)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">8.3 Como Gerenciar Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Você pode controlar cookies através das configurações do seu navegador. A maioria dos navegadores permite que você recuse cookies ou o alerte quando um cookie está sendo enviado. Para mais informações, consulte a documentação do seu navegador.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Contato */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">9. Entre em Contato</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco:
              </p>
              <div className="bg-[#0f0f0f] border border-[#333333] rounded-lg p-6 space-y-3">
                <p className="text-gray-300">
                  <span className="font-bold text-[#025BD9]">Email:</span> <a href="mailto:contato@marketmind.net.br" className="text-[#025BD9] hover:text-[#00FF00] transition">contato@marketmind.net.br</a>
                </p>
                <p className="text-gray-300">
                  <span className="font-bold text-[#025BD9]">WhatsApp:</span> <a href="https://wa.me/5531982910530" target="_blank" rel="noopener noreferrer" className="text-[#025BD9] hover:text-[#00FF00] transition">+55 31 98291-0530</a>
                </p>
                <p className="text-gray-300">
                  <span className="font-bold text-[#025BD9]">Resposta:</span> Responderemos sua solicitação em até 15 dias úteis, conforme exigido pela LGPD.
                </p>
              </div>
            </section>

            {/* 10. Alterações */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">10. Alterações a Esta Política</h2>
              <p className="text-gray-300 leading-relaxed">
                Podemos atualizar esta Política de Privacidade de tempos em tempos. Notificaremos você sobre mudanças significativas publicando a nova política nesta página e atualizando a data de "Última atualização" no topo. Seu uso contínuo do site após tais modificações constitui sua aceitação das alterações.
              </p>
            </section>

            {/* Disclaimer */}
            <div className="bg-[#00FF00]/10 border-2 border-[#00FF00] rounded-lg p-6 mt-8">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold text-[#00FF00]">Aviso Legal:</span> Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados (LGPD). Para questões legais complexas, recomendamos consultar um advogado especializado em proteção de dados.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#333333] py-8 px-4 mt-12">
        <div className="container mx-auto max-w-6xl text-center text-gray-500 text-sm">
          <p>&copy; 2026 <span className="text-[#025BD9]">Market</span><span className="text-[#00FF00]">Mind</span>. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
