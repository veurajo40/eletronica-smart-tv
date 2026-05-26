import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Wrench, Tv, MapPin, CheckCircle2, Shield, Zap, Phone, ArrowRight, Home as HomeIcon, Star, Clock, ThumbsUp, Microwave } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const WHATSAPP_LINK = "https://wa.me/5571992921929";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

const itemAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">Serviços</a>
            <a href="#diferencial" className="text-muted-foreground hover:text-foreground transition-colors">Tecnologia Laser</a>
            <a href="#areas" className="text-muted-foreground hover:text-foreground transition-colors">Atendimento</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">Dúvidas</a>
          </nav>
          <Button asChild className="hidden md:flex shadow-md rounded-full px-6">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
            </a>
          </Button>
          <Button asChild size="icon" variant="default" className="md:hidden shadow-md rounded-full h-10 w-10">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero-repair.png" 
              alt="Técnico consertando TV" 
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <motion.div initial="initial" animate="whileInView" variants={staggerChildren}>
                <motion.div variants={itemAnimation} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-foreground mb-8">
                  <Shield className="mr-2 h-4 w-4 text-primary" />
                  Assistência Técnica Especializada
                </motion.div>
                
                <motion.h1 variants={itemAnimation} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
                  Seu aparelho <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300">novo de novo</span>.
                </motion.h1>
                
                <motion.p variants={itemAnimation} className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
                  Não sofra transportando sua TV ou micro-ondas. Atendemos em Salvador, Lauro de Freitas, Camaçari e Simões Filho. Coleta segura e recuperação a laser de ponta.
                </motion.p>
                
                <motion.div variants={itemAnimation} className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg shadow-xl shadow-primary/20 rounded-full h-14 px-8" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Agendar Visita Técnica <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div variants={itemAnimation} className="mt-12 flex items-center gap-6 text-sm text-slate-400 font-medium">
                  <div className="flex items-center"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Orçamento Rápido</div>
                  <div className="flex items-center"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Garantia de Serviço</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="servicos" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Tranquilidade do início ao fim</h2>
              <p className="text-muted-foreground text-lg md:text-xl">Sem filas, sem transporte, sem complicação. Do agendamento à entrega, cuidamos de tudo para que você fique tranquilo.</p>
            </motion.div>

            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={itemAnimation}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background rounded-3xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <HomeIcon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Atendimento em Casa</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Avaliamos e reparamos o seu aparelho no conforto da sua residência, com total segurança, limpeza e agilidade.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemAnimation}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background rounded-3xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <Tv className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Coleta Especializada</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Para reparos que exigem maquinário pesado, retiramos sua TV com embalagem adequada e devolvemos pronta.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemAnimation}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background rounded-3xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <Wrench className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Reparo Avançado</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Diagnóstico preciso no nível do componente, evitando trocas desnecessárias de placas inteiras.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About / Technician Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground mb-6">
                  <Clock className="mr-2 h-4 w-4" />
                  Rapidez e Confiança
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">O especialista que a sua casa merece</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Sabemos que receber um prestador de serviços em casa exige confiança. Nossos técnicos não são apenas especialistas em eletrônica; são profissionais treinados para oferecer um atendimento cordial, limpo e extremamente respeitoso com o seu ambiente.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <ThumbsUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Transparência Total</h4>
                      <p className="text-muted-foreground">Explicamos o defeito de forma clara, sem termos técnicos confusos.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Ambiente Limpo</h4>
                      <p className="text-muted-foreground">Trabalhamos com organização. Sua casa fica exatamente como encontramos.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full relative"
              >
                <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] transform -rotate-3 z-0"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-border">
                  <AspectRatio ratio={3/4}>
                    <img 
                      src="/home-service.png" 
                      alt="Técnico chegando para atendimento domiciliar" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Laser Section */}
        <section id="diferencial" className="py-24 bg-slate-950 text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className="inline-flex items-center rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-sm font-medium text-primary-foreground mb-6">
                  <Zap className="mr-2 h-4 w-4" />
                  Nosso Diferencial
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Tecnologia a Laser Exclusiva</h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Muitas assistências "condenam" telas inteiras por causa de falhas pequenas, forçando você a comprar uma TV nova. Nós possuímos maquinário a laser de altíssima precisão capaz de recuperar trilhas microscópicas danificadas diretamente no painel.
                </p>
                
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                    <div>
                      <span className="font-bold text-lg block text-white">Economia Real</span>
                      <span className="text-slate-400">Evite a troca completa da tela quando um reparo pontual é viável. Economize até 70%.</span>
                    </div>
                  </li>
                  <li className="flex items-start bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                    <div>
                      <span className="font-bold text-lg block text-white">Precisão Industrial</span>
                      <span className="text-slate-400">Equipamento de ponta para um resultado perfeito, invisível a olho nu.</span>
                    </div>
                  </li>
                </ul>

                <Button size="lg" className="rounded-full h-14 px-8 text-lg" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Saber se minha TV tem conserto
                  </a>
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 border border-slate-800">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src="/laser-machine.png" 
                      alt="Máquina a laser recuperando tela de TV" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marcas e Áreas */}
        <section id="areas" className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Especialistas em TVs e Micro-ondas</h2>
                <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                  Consertamos Smart TVs de todas as marcas e micro-ondas das principais fabricantes. Nossos técnicos são treinados para resolver desde problemas simples até os defeitos mais complexos.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {['Samsung', 'LG', 'TCL', 'SEMP', 'Philco', 'Philips', 'AOC', 'Sony'].map((brand) => (
                    <div key={brand} className="flex items-center justify-center p-4 bg-muted/50 rounded-2xl border border-border/50 font-semibold text-lg hover:border-primary/50 transition-colors">
                      {brand}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 p-5 bg-primary/5 border border-primary/20 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Micro-ondas</p>
                    <p className="text-muted-foreground text-sm">Conserto de micro-ondas de todas as marcas, incluindo Samsung, LG, Electrolux, Brastemp e Panasonic.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-primary text-primary-foreground p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <MapPin className="w-64 h-64" />
                </div>
                <h3 className="text-3xl font-bold mb-8 relative z-10">Onde Chegamos</h3>
                <p className="text-primary-foreground/80 text-lg mb-8 relative z-10">
                  Nossas unidades móveis estão prontas para atender você nas seguintes regiões:
                </p>
                <ul className="space-y-4 relative z-10">
                  {['Salvador', 'Lauro de Freitas', 'Camaçari', 'Simões Filho'].map((cidade) => (
                    <li key={cidade} className="flex items-center text-xl font-medium bg-primary-foreground/10 p-4 rounded-xl backdrop-blur-sm border border-primary-foreground/10">
                      <MapPin className="h-7 w-7 mr-4 text-primary-foreground flex-shrink-0" />
                      {cidade}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Quem confia, recomenda</h2>
              <p className="text-muted-foreground text-lg">A satisfação dos nossos clientes é a nossa maior garantia.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { name: "Claudio Rosario", loc: "Local Guide · Salvador", text: "Sr. André Urquia foi muito gentil, prestativo e honesto no conserto da minha TV. Deus abençoe-o." },
                { name: "Taisa Oliveira", loc: "Salvador", text: "Trabalho eficiente de boa qualidade, profissional excelente!" }
              ].map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full rounded-3xl border-none shadow-md">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-4 text-amber-500">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">"{review.text}"</p>
                      <div>
                        <p className="font-bold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.loc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Visita Técnica</h2>
              <p className="text-muted-foreground text-lg">Transparência do início ao fim. O valor da visita é <strong>abatido do total</strong> caso o serviço seja aprovado.</p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <motion.div variants={itemAnimation}>
                <Card className="border-2 border-border rounded-3xl shadow-lg h-full">
                  <CardContent className="p-10 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Tv className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">TVs até 55"</p>
                    <p className="text-5xl font-extrabold mb-1">R$ 150</p>
                    <p className="text-sm text-muted-foreground">por visita</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemAnimation}>
                <Card className="border-2 border-primary rounded-3xl shadow-xl h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">TVs grandes</div>
                  <CardContent className="p-10 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Tv className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">TVs acima de 55"</p>
                    <p className="text-5xl font-extrabold mb-1">R$ 190</p>
                    <p className="text-sm text-muted-foreground">por visita</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemAnimation}>
                <Card className="border-2 border-border rounded-3xl shadow-lg h-full">
                  <CardContent className="p-10 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Microwave className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">Micro-ondas</p>
                    <p className="text-3xl font-extrabold mb-1">Coleta gratuita</p>
                    <p className="text-sm text-muted-foreground">Você paga apenas o conserto</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>


            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-10 text-base max-w-xl mx-auto"
            >
              O valor da visita técnica é cobrado no agendamento e <strong>descontado integralmente</strong> do preço final caso você aprove o serviço.
            </motion.p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
              
              <Accordion type="single" collapsible className="w-full bg-background rounded-3xl border shadow-sm p-4 md:p-8">
                <AccordionItem value="item-1" className="border-b-border py-2">
                  <AccordionTrigger className="text-left text-lg font-bold hover:no-underline hover:text-primary transition-colors">Como funciona o atendimento domiciliar?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                    Você entra em contato via WhatsApp e agenda um horário. Nosso técnico vai até sua residência equipado para realizar o diagnóstico. Em muitos casos, o reparo é feito na hora. Se for necessário maquinário pesado (como o laser) ou peças específicas, fazemos a coleta segura do aparelho e o entregamos funcionando como novo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b-border py-2">
                  <AccordionTrigger className="text-left text-lg font-bold hover:no-underline hover:text-primary transition-colors">O serviço tem garantia?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                    Com certeza. Todos os nossos serviços possuem garantia documentada, seguindo os prazos legais. Utilizamos apenas componentes originais ou de primeiríssima linha para garantir a durabilidade do conserto.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b-border py-2">
                  <AccordionTrigger className="text-left text-lg font-bold hover:no-underline hover:text-primary transition-colors">Qualquer defeito na tela pode ser recuperado a laser?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                    A recuperação a laser é excelente para problemas eletrônicos na tela, como imagem dupla, linhas verticais/horizontais finas e defeitos de comunicação nas trilhas do painel. Porém, telas com danos físicos (quebradas, trincadas ou vazadas) precisam ser integralmente substituídas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-none py-2">
                  <AccordionTrigger className="text-left text-lg font-bold hover:no-underline hover:text-primary transition-colors">Qual o valor da visita técnica?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                    A visita técnica custa R$ 150 para TVs até 55" e R$ 190 para TVs acima de 55". Esse valor é cobrado no agendamento e descontado integralmente do preço final caso você aprove o serviço. Ou seja, se fechar o conserto, a visita não tem custo adicional.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-slate-950 relative overflow-hidden mt-10">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            <div className="absolute w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-white leading-tight">
                Não jogue sua TV fora.<br/>
                <span className="text-primary">Fale com quem entende.</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-slate-300 font-light max-w-2xl mx-auto">
                Resolvemos o seu problema de forma rápida, transparente e no conforto do seu lar.
              </p>
              <Button size="lg" className="text-xl px-12 py-8 rounded-full shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-3 h-6 w-6" /> Chamar no WhatsApp
                </a>
              </Button>
              <p className="mt-8 text-sm font-medium text-slate-400">
                Atendimento rápido das 08h às 18h
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.533 5.851L.057 23.75a.75.75 0 0 0 .916.975l6.146-1.61A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.204-1.43l-.372-.22-3.853 1.01 1.026-3.742-.241-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Falar no WhatsApp
      </a>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo dark />
          
          <div className="text-center md:text-left flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Salvador, Lauro, Camaçari e Simões Filho</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (71) 99292-1929</span>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Eletrônica Smart TV. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
