import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-[#333333] py-6 px-4 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur z-40">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#025BD9] hover:text-[#00FF00] transition font-bold">
            <ArrowLeft size={20} />
            Voltar
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
              Termos de <span className="text-[#025BD9]">Serviço</span>
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
            {/* 1. Aceitação dos Termos */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">1. Aceitação dos Termos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ao acessar e usar o site da <span className="font-bold">MarketMind</span>, você concorda em estar vinculado por estes Termos de Serviço. Se você não concorda com qualquer parte destes termos, não deve usar o site ou nossos serviços.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Estes termos se aplicam a todos os usuários, visitantes e outras pessoas que acessam ou usam o site.
              </p>
            </section>

            {/* 2. Descrição dos Serviços */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">2. Descrição dos Serviços</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A MarketMind oferece os seguintes serviços:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><span className="font-bold">Cursos Online:</span> Curso Mercado Minimalista, Minicursos e Trader Reboot</li>
                <li><span className="font-bold">Testes de Perfil Comportamental:</span> Diagnósticos para Iniciantes, Investidores e Traders</li>
                <li><span className="font-bold">Mentoria Premium:</span> Acompanhamento personalizado com encontros online e suporte via WhatsApp</li>
                <li><span className="font-bold">Materiais Exclusivos:</span> E-books, guias e recursos educacionais</li>
              </ul>
            </section>

            {/* 3. Licença de Uso */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">3. Licença de Uso</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Concedemos a você uma licença limitada, não exclusiva e não transferível para acessar e usar o site e os materiais educacionais para fins pessoais e não comerciais.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Você não pode:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Reproduzir, distribuir ou compartilhar os materiais do curso com terceiros</li>
                <li>Modificar, adaptar ou criar trabalhos derivados do conteúdo</li>
                <li>Usar o conteúdo para fins comerciais sem autorização explícita</li>
                <li>Tentar contornar ou desabilitar recursos de segurança do site</li>
                <li>Usar o site para atividades ilegais ou prejudiciais</li>
              </ul>
            </section>

            {/* 4. Propriedade Intelectual */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">4. Propriedade Intelectual</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Todo o conteúdo do site, incluindo textos, gráficos, logos, imagens, vídeos, áudio e software, é propriedade da MarketMind ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais internacionais.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Você não pode usar, reproduzir ou distribuir qualquer conteúdo sem permissão escrita explícita da MarketMind.
              </p>
            </section>

            {/* 5. Restrições de Idade */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">5. Restrições de Idade</h2>
              <p className="text-gray-300 leading-relaxed">
                O site é destinado apenas a maiores de 18 anos. Ao usar o site, você declara que tem pelo menos 18 anos de idade. Se você é menor de 18 anos, não deve usar este site.
              </p>
            </section>

            {/* 6. Contas de Usuário */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">6. Contas de Usuário</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ao se registrar para nossos serviços, você concorda em:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Fornecer informações precisas, completas e atualizadas</li>
                <li>Manter a confidencialidade de suas credenciais de login</li>
                <li>Ser responsável por todas as atividades em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer acesso não autorizado</li>
              </ul>
            </section>

            {/* 7. Pagamento e Reembolso */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">7. Pagamento e Reembolso</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">7.1 Pagamento</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Todos os pagamentos são processados através da plataforma Hotmart. Ao fazer uma compra, você concorda em pagar o valor total do produto. Os preços estão sujeitos a mudanças sem aviso prévio.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">7.2 Política de Reembolso</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    Oferecemos uma garantia de satisfação. Se você não estiver satisfeito com sua compra, você pode solicitar um reembolso total.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    Para solicitar um reembolso, entre em contato com nosso suporte em <span className="font-bold">contato@marketmind.net.br</span> com sua solicitação e comprovante de compra. Reembolsos serão processados dentro de 10 dias úteis.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#025BD9] mb-2">7.3 Produtos Digitais e Direito de Arrependimento</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    Conforme estabelecido pelo Ministério da Justiça e Segurança Pública (MJSP) e pela Secretaria Nacional do Consumidor (Senacon), <span className="font-bold">produtos digitais como cursos online e softwares não estão sujeitos ao direito de arrependimento de 7 dias previsto no artigo 49 do Código de Defesa do Consumidor (Lei 8.078/1990)</span>.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    Conforme publicado pela MJSP em 30/11/2024: <span className="italic">\"Vale destacar que o direito de arrependimento não se aplica a todas as compras: produtos digitais, como softwares baixados e cursos online, nem sempre são passíveis de devolução, pois estão sujeitos a políticas específicas que variam conforme a legislação e as regras de cada plataforma.\"</span>
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Portanto, após a compra e acesso ao conteúdo, você terá acesso por <span className="font-bold">12 meses</span> ao material do curso, sem possibilidade de reembolso. Você é responsável por sua decisão de compra.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Acesso ao Conteúdo */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">8. Acesso ao Conteúdo</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Após a compra, você receberá acesso ao conteúdo do curso através de um link de acesso ou credenciais de login. O acesso é pessoal e não transferível.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Você é responsável por manter a segurança de suas credenciais</li>
                <li>Você não pode compartilhar suas credenciais com outras pessoas</li>
                <li>Compartilhamento de contas resultará em suspensão de acesso sem reembolso</li>
                <li>O acesso pode ser revogado se violarmos estes termos</li>
              </ul>
            </section>

            {/* 9. Garantia de Satisfação */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">9. Garantia de Satisfação</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Confiamos na qualidade de nossos cursos e oferecemos uma garantia de satisfação. Queremos que você esteja completamente satisfeito com sua compra. Se tiver dúvidas ou preocupações sobre o conteúdo antes de fazer sua compra, entre em contato conosco em <span className="font-bold">contato@marketmind.net.br</span>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <span className="font-bold">Importante:</span> Como se trata de um produto digital (curso online), conforme legislação brasileira, não há direito de arrependimento após o acesso ao conteúdo. Você terá acesso por <span className="font-bold">12 meses</span> ao material do curso. Você é responsável por sua decisão de compra.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Recomendamos que você revise cuidadosamente a descrição do curso, o programa de aulas e os objetivos de aprendizado antes de fazer sua compra.
              </p>
            </section>

            {/* 10. Limitação de Responsabilidade */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">10. Limitação de Responsabilidade</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <span className="font-bold">AVISO IMPORTANTE:</span> Os cursos e materiais educacionais fornecidos pela MarketMind são apenas para fins informativos e educacionais. Não constituem aconselhamento financeiro, de investimento ou legal profissional.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>A MarketMind não garante resultados específicos ou lucros</li>
                <li>Resultados passados não garantem resultados futuros</li>
                <li>Você é responsável por suas próprias decisões de investimento</li>
                <li>Consulte um consultor financeiro profissional antes de tomar decisões de investimento</li>
                <li>A MarketMind não é responsável por perdas financeiras resultantes do uso de nossos materiais</li>
              </ul>
            </section>

            {/* 11. Isenção de Garantias */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">11. Isenção de Garantias</h2>
              <p className="text-gray-300 leading-relaxed">
                O site e os serviços são fornecidos "como estão" sem garantias de qualquer tipo, expressas ou implícitas. A MarketMind não garante que o site funcionará sem interrupções ou erros, ou que os defeitos serão corrigidos.
              </p>
            </section>

            {/* 12. Suspensão de Acesso */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">12. Suspensão de Acesso</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A MarketMind se reserva o direito de suspender ou encerrar seu acesso ao site e aos serviços se você violar estes Termos de Serviço, incluindo:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Compartilhamento de contas ou credenciais</li>
                <li>Violação de direitos autorais ou propriedade intelectual</li>
                <li>Atividades ilegais ou prejudiciais</li>
                <li>Comportamento abusivo ou assediador</li>
              </ul>
            </section>

            {/* 13. Modificação dos Termos */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">13. Modificação dos Termos</h2>
              <p className="text-gray-300 leading-relaxed">
                A MarketMind se reserva o direito de modificar estes Termos de Serviço a qualquer momento. Notificaremos você sobre mudanças significativas publicando os novos termos nesta página. Seu uso contínuo do site após tais modificações constitui sua aceitação dos novos termos.
              </p>
            </section>

            {/* 14. Lei Aplicável */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">14. Lei Aplicável</h2>
              <p className="text-gray-300 leading-relaxed">
                Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil, sem considerar seus conflitos de disposições legais. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
              </p>
            </section>

            {/* 15. Contato */}
            <section className="border-l-4 border-[#025BD9] pl-6 py-4">
              <h2 className="text-2xl font-bold mb-4 text-[#00FF00]">15. Entre em Contato</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco:
              </p>
              <div className="bg-[#0f0f0f] border border-[#333333] rounded-lg p-6 space-y-3">
                <p className="text-gray-300">
                  <span className="font-bold text-[#025BD9]">Email:</span> <a href="mailto:contato@marketmind.net.br" className="text-[#025BD9] hover:text-[#00FF00] transition">contato@marketmind.net.br</a>
                </p>
                <p className="text-gray-300">
                  <span className="font-bold text-[#025BD9]">WhatsApp:</span> <a href="https://wa.me/5531982910530" target="_blank" rel="noopener noreferrer" className="text-[#025BD9] hover:text-[#00FF00] transition">+55 31 98291-0530</a>
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="bg-[#00FF00]/10 border-2 border-[#00FF00] rounded-lg p-6 mt-8">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold text-[#00FF00]">Aviso Legal:</span> Estes Termos de Serviço foram elaborados com base em práticas comerciais padrão. Para questões legais complexas, recomendamos consultar um advogado especializado em direito comercial e tecnologia.
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
