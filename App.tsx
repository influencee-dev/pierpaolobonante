
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Waves, 
  Stethoscope, 
  Calendar, 
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Award,
  Compass,
  Anchor,
  Globe,
  Droplets,
  Zap,
  Target,
  FlaskConical,
  Microscope,
  LifeBuoy,
  MessageCircle,
  Send
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'longevity' | 'medical' | 'aesthetic' | 'profile' | 'contact';

// --- WhatsApp Component ---

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const doctorPhone = '393484987591';

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${doctorPhone}?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 transition-all transform animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-slate-900 p-4 text-white flex items-center space-x-3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" 
                alt="Secretary" 
                className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
            </div>
            <div>
              <p className="font-bold text-sm">Segreteria Dr. Bonante</p>
              <p className="text-[10px] opacity-70 uppercase tracking-widest">In linea per te</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-auto opacity-50 hover:opacity-100">
              <X size={20} />
            </button>
          </div>
          <div className="p-4 bg-slate-50 min-h-[100px] flex flex-col justify-end">
            <div className="bg-white p-3 rounded-lg shadow-sm text-xs text-slate-700 max-w-[85%] self-start border border-slate-100">
              Buongiorno, come posso aiutarla? Sarò lieta di inoltrare la sua richiesta direttamente al Dottore.
            </div>
          </div>
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input 
              type="text" 
              placeholder="Scrivi un messaggio..."
              className="flex-grow bg-slate-50 border-none px-4 py-2 rounded-full text-xs outline-none focus:ring-1 focus:ring-slate-200"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="bg-slate-900 text-white p-2 rounded-full hover:bg-slate-800 transition-colors">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} fill="currentColor" className="text-white" />}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chatta con noi
          </span>
        )}
      </button>
    </div>
  );
};

// --- Layout Components ---

const Navbar: React.FC<{ currentPage: Page; setPage: (p: Page) => void }> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Longevity', id: 'longevity' },
    { label: 'Urologia', id: 'medical' },
    { label: 'Estetica', id: 'aesthetic' },
    { label: 'Esperienza', id: 'profile' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => { setPage('home'); window.scrollTo(0, 0); }}>
          <span className={`text-xl font-serif font-bold tracking-tighter transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'}`}>
            DR. PIER PAOLO BONANTE
          </span>
          <span className={`text-[9px] tracking-[0.3em] uppercase font-semibold transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-500' : 'text-slate-300'}`}>
            Urologia & Medicina Longevity
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => { setPage(item.id); window.scrollTo(0, 0); }}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-all relative group ${scrolled || currentPage !== 'home' ? 'text-slate-700' : 'text-white'}`}
            >
              {item.label}
              {currentPage === item.id && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-current opacity-50"></span>}
            </button>
          ))}
          <button 
            onClick={() => { setPage('contact'); window.scrollTo(0, 0); }}
            className={`px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all ${scrolled || currentPage !== 'home' ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
          >
            Prenota
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-full h-screen bg-white z-40 p-8 flex flex-col space-y-6 shadow-2xl transition-all">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => { setPage(item.id); setIsOpen(false); window.scrollTo(0, 0); }}
              className="text-2xl font-serif text-left border-b border-slate-100 pb-4 text-slate-800"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { setPage('contact'); setIsOpen(false); window.scrollTo(0,0); }}
            className="w-full bg-slate-900 text-white py-5 font-serif text-xl"
          >
            CONTATTA LO STUDIO
          </button>
        </div>
      )}
    </nav>
  );
};

// --- Row Helper ---
const SectionRow: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "py-24", id }) => (
  <section id={id} className={`w-full ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

// --- Page Components ---

const HomePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <>
    {/* Row 1: Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://www.centronaturamedica.com/wp-content/uploads/2019/08/Foto-Pierpaolo-Bonante-1200x992.jpg" 
          alt="Dr. Pier Paolo Bonante" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]"></div>
      </div>
      <div className="relative text-center text-white px-4 max-w-4xl pt-20">
        <span className="text-xs uppercase tracking-[0.5em] mb-6 block font-light opacity-80">Eccellenza Medica • Innovazione Estetica</span>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-none">Longevity & <br/><span className="italic">Wellness</span></h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Un approccio integrato alla longevità maschile e femminile, dove la clinica urologica incontra la medicina estetica d'avanguardia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => setPage('longevity')} className="bg-white text-slate-900 px-10 py-5 font-bold text-[11px] uppercase tracking-widest hover:bg-slate-100 transition-all">
            Concept Longevity
          </button>
          <button onClick={() => setPage('medical')} className="border border-white/40 text-white px-10 py-5 font-bold text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all">
            Area Medicale
          </button>
        </div>
      </div>
    </section>

    {/* Row 2: Vision */}
    <SectionRow className="py-32 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-4 block">La Filosofia</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-slate-900 italic">"Curare la salute per preservare la bellezza."</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Il Dr. Pier Paolo Bonante ridefinisce il benessere attraverso una visione "Longevity Suite". La medicina estetica non è più solo un ritocco, ma il culmine di un percorso di salute interna, equilibrio ormonale e prevenzione urologica.
          </p>
          <button onClick={() => setPage('profile')} className="flex items-center text-slate-900 font-bold uppercase tracking-widest text-[11px] group">
            Scopri il Dr. Bonante <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-64 bg-slate-100 rounded-lg overflow-hidden">
               <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="h-48 bg-slate-900 flex items-center justify-center p-8 rounded-lg">
               <Target className="text-white w-12 h-12" />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-48 bg-slate-50 border border-slate-100 flex items-center justify-center p-8 rounded-lg">
               <Award className="text-slate-400 w-12 h-12" />
            </div>
            <div className="h-64 bg-slate-100 rounded-lg overflow-hidden">
               <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>
      </div>
    </SectionRow>

    {/* Row 3: Service Summary */}
    <SectionRow className="py-24 bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">Aree di Eccellenza</h2>
        <div className="w-20 h-0.5 bg-slate-900 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center group">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-xl transition-all">
            <Activity className="text-slate-900" />
          </div>
          <h3 className="text-xl font-serif mb-3">Urologia Specialistica</h3>
          <p className="text-slate-500 text-sm">Diagnostica ecografica avanzata e prevenzione delle patologie maschili.</p>
        </div>
        <div className="text-center group">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-xl transition-all">
            <Sparkles className="text-slate-900" />
          </div>
          <h3 className="text-xl font-serif mb-3">Estetica Rigenerativa</h3>
          <p className="text-slate-500 text-sm">Trattamenti mini-invasivi con precisione chirurgica per risultati naturali.</p>
        </div>
        <div className="text-center group">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-xl transition-all">
            <Zap className="text-slate-900" />
          </div>
          <h3 className="text-xl font-serif mb-3">Protocolli Longevity</h3>
          <p className="text-slate-500 text-sm">Ottimizzazione metabolica e bio-hacking per il rallentamento dell'invecchiamento.</p>
        </div>
      </div>
    </SectionRow>

    {/* Row 4: Experience Counter */}
    <SectionRow className="py-32 luxury-gradient text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
        <div>
          <div className="text-5xl font-serif mb-2">30+</div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-50">Anni di Pratica</div>
        </div>
        <div>
          <div className="text-5xl font-serif mb-2">5+</div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-50">Paesi Operativi</div>
        </div>
        <div>
          <div className="text-5xl font-serif mb-2">10k+</div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-50">Pazienti Trattati</div>
        </div>
        <div>
          <div className="text-5xl font-serif mb-2">100%</div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-50">Rigore Clinico</div>
        </div>
      </div>
    </SectionRow>

    {/* Row 5: Final CTA */}
    <SectionRow className="py-24 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif mb-6">Inizia il tuo viaggio verso la longevità.</h2>
        <p className="text-slate-500 mb-10">Prenota una consulenza presso lo studio di Foggia per un piano personalizzato di salute ed estetica.</p>
        <button onClick={() => setPage('contact')} className="bg-slate-900 text-white px-12 py-5 font-bold text-[11px] uppercase tracking-widest hover:bg-slate-800 transition-all">
          Richiedi Appuntamento
        </button>
      </div>
    </SectionRow>
  </>
);

const LongevityPage: React.FC = () => (
  <div className="pt-24 bg-slate-50">
    {/* Row 1: Hero */}
    <SectionRow className="py-32">
      <div className="max-w-3xl">
        <span className="text-xs uppercase tracking-[0.4em] font-bold text-slate-400 mb-4 block">The Bio-Suite</span>
        <h1 className="text-6xl font-serif mb-8 leading-tight">L'arte di <br/><span className="italic text-slate-400">non invecchiare.</span></h1>
        <p className="text-xl text-slate-600 font-light leading-relaxed">
          Oltre la medicina curativa: la medicina preventiva ad alte prestazioni. Il Dr. Bonante unisce la precisione chirurgica alla mappatura dei marker biologici avanzati.
        </p>
      </div>
    </SectionRow>

    {/* Row 2: Pillars */}
    <SectionRow className="py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Droplets />, title: "Skin Health", desc: "Rigenerazione cutanea profonda e bio-rivitalizzazione cellulare." },
          { icon: <Activity />, title: "Metabolic Fix", desc: "Ottimizzazione del metabolismo e gestione dello stress ossidativo." },
          { icon: <ShieldCheck />, title: "Immuno Boost", desc: "Protocolli per il rafforzamento delle difese naturali dell'organismo." },
          { icon: <Zap />, title: "Vitality Index", desc: "Monitoraggio della forza fisica e delle performance cognitive." }
        ].map((item, i) => (
          <div key={i} className="p-10 border border-slate-50 bg-slate-50/50 rounded-2xl hover:bg-white hover:shadow-xl transition-all">
            <div className="text-slate-900 mb-6">{item.icon}</div>
            <h3 className="text-lg font-serif mb-3">{item.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionRow>

    {/* Row 3: Diagnostics */}
    <SectionRow className="py-24 luxury-gradient text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif mb-8">Screening Longevità Maschile</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            In quanto Urologo specializzato, il Dr. Bonante integra lo screening prostatico e andrologico nei protocolli di longevità, garantendo che la vitalità estetica sia supportata da una salute urogenitale perfetta.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-sm font-light"><Microscope className="mr-4 text-slate-600" /> Analisi marker PSA e profilo ormonale</li>
            <li className="flex items-center text-sm font-light"><Microscope className="mr-4 text-slate-600" /> Ecografia uronefrologica con tecnologia 4K</li>
            <li className="flex items-center text-sm font-light"><Microscope className="mr-4 text-slate-600" /> Valutazione stress ossidativo (d-ROMs test)</li>
          </ul>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800" className="rounded-lg shadow-2xl opacity-60" />
        </div>
      </div>
    </SectionRow>

    {/* Row 4: Treatment Focus */}
    <SectionRow className="py-24 bg-white">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <div className="p-8 border-l-4 border-slate-900 bg-slate-50">
            <h3 className="text-2xl font-serif mb-4">Bio-Stimolazione</h3>
            <p className="text-sm text-slate-500">Iniezione di complessi vitaminici e precursori del collagene per "resettare" l'età cutanea.</p>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="p-8 border-l-4 border-slate-300 bg-slate-50">
            <h3 className="text-2xl font-serif mb-4">Detox Interno</h3>
            <p className="text-sm text-slate-500">Piani nutrizionali clinici e integrazione mirata per ridurre l'infiammazione silente.</p>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="p-8 border-l-4 border-slate-200 bg-slate-50">
            <h3 className="text-2xl font-serif mb-4">Balance Ormonale</h3>
            <p className="text-sm text-slate-500">Supporto per l'equilibrio della salute maschile (Andropausa e gestione vitalità).</p>
          </div>
        </div>
      </div>
    </SectionRow>

    {/* Row 5: Why Longevity */}
    <SectionRow className="py-24 bg-slate-50 text-center">
      <h2 className="text-3xl font-serif mb-8">Perché scegliere la nostra Longevity Suite?</h2>
      <div className="max-w-2xl mx-auto space-y-6 text-slate-600">
        <p>A differenza dei centri estetici tradizionali, qui ogni trattamento è validato dal rigore clinico di un medico chirurgo specialista.</p>
        <p className="italic text-slate-400">"Non promettiamo miracoli, ma applichiamo la scienza della vita."</p>
      </div>
    </SectionRow>
  </div>
);

const MedicalPage: React.FC = () => (
  <div className="pt-24 bg-white">
    {/* Row 1: Hero */}
    <SectionRow className="py-32 bg-slate-50">
      <div className="max-w-3xl">
        <h1 className="text-6xl font-serif mb-8">Clinica <br/><span className="text-slate-400 italic">Urologica & Andrologica</span></h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Eccellenza diagnostica e chirurgica per la salute maschile. Il Dr. Bonante unisce competenza accademica e decenni di pratica internazionale.
        </p>
      </div>
    </SectionRow>

    {/* Row 2: Diagnostics */}
    <SectionRow className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" className="rounded-xl shadow-lg" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-serif mb-6">Ecografia Uronefrologica</h2>
          <p className="text-slate-600 mb-6">
            Il Dr. Bonante è perfezionato in ecografia uronefrologica, permettendo una diagnosi immediata e non invasiva di patologie renali, vescicali e prostatiche direttamente in studio.
          </p>
          <ul className="space-y-4 text-sm font-medium text-slate-800">
            <li className="flex items-center"><Activity className="mr-3 text-slate-400" size={18} /> Diagnosi Ipertrofia Prostatica</li>
            <li className="flex items-center"><Activity className="mr-3 text-slate-400" size={18} /> Screening Neoplasie Vescicali</li>
            <li className="flex items-center"><Activity className="mr-3 text-slate-400" size={18} /> Valutazione Calcolosi Renale</li>
          </ul>
        </div>
      </div>
    </SectionRow>

    {/* Row 3: Andrology */}
    <SectionRow className="py-24 bg-slate-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif italic">Andrologia & Salute Sessuale</h2>
        <p className="text-slate-400 mt-4">Un approccio empatico e scientifico alle problematiche maschili.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 border border-white/10 rounded-lg">
          <h4 className="text-xl font-serif mb-4">Disfunzione Erettile</h4>
          <p className="text-sm text-slate-400">Trattamenti di ultima generazione per il ripristino della funzionalità e della fiducia.</p>
        </div>
        <div className="p-8 border border-white/10 rounded-lg">
          <h4 className="text-xl font-serif mb-4">Infertilità Maschile</h4>
          <p className="text-sm text-slate-400">Inquadramento clinico e diagnostico per il desiderio di genitorialità.</p>
        </div>
        <div className="p-8 border border-white/10 rounded-lg">
          <h4 className="text-xl font-serif mb-4">Varicocele</h4>
          <p className="text-sm text-slate-400">Gestione e indicazione chirurgica per una patologia comune ma impattante.</p>
        </div>
      </div>
    </SectionRow>

    {/* Row 4: List of Services */}
    <SectionRow className="py-24">
      <h3 className="text-2xl font-serif mb-12 text-center uppercase tracking-widest text-slate-300">Servizi Specialistici</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "Uroflussimetria", "Cistoscopia", "Check-up Prostate", "Screening STD", 
          "Ecocolordoppler", "Biopsia Prostatica", "Incontinenza", "Eiaculazione Precoce"
        ].map(s => (
          <div key={s} className="p-4 border border-slate-50 text-center text-xs font-bold text-slate-600 bg-slate-50/30 rounded uppercase tracking-wider">
            {s}
          </div>
        ))}
      </div>
    </SectionRow>

    {/* Row 5: Surgical Precision */}
    <SectionRow className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-6 italic">Precisione Chirurgica</h2>
        <p className="text-slate-500 leading-relaxed">
          Grazie alla solida formazione in Chirurgia Generale e d'Urgenza (La Sapienza Roma), ogni procedura viene eseguita con standard di sicurezza ospedalieri e minima invasività.
        </p>
      </div>
    </SectionRow>
  </div>
);

// Fix: AestheticPage needs setPage prop to handle internal navigation buttons
const AestheticPage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <div className="pt-24 bg-slate-50">
    {/* Row 1: Hero */}
    <SectionRow className="py-32 bg-white">
      <div className="max-w-3xl">
        <span className="text-xs uppercase tracking-[0.4em] font-bold text-slate-400 mb-4 block">Medical Aesthetics</span>
        <h1 className="text-6xl font-serif mb-8 italic">L'Estetica <br/><span className="text-slate-900 not-italic">secondo l'Urologo.</span></h1>
        <p className="text-lg text-slate-600 font-light leading-relaxed">
          Precisione millimetrica e conoscenza anatomica profonda. Dr. Bonante porta il rigore della sala operatoria nei trattamenti estetici di lusso.
        </p>
      </div>
    </SectionRow>

    {/* Row 2: Gallery Style Treatments */}
    <SectionRow className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-slate-900/40 p-12 flex flex-col justify-end text-white">
            <h3 className="text-3xl font-serif mb-4">Facial Bio-Modulation</h3>
            <p className="text-sm opacity-80 max-w-xs">Filler e botulino applicati per esaltare i lineamenti naturali senza stravolgere l'identità.</p>
          </div>
        </div>
        <div className="group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl translate-y-12">
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-slate-900/40 p-12 flex flex-col justify-end text-white">
            <h3 className="text-3xl font-serif mb-4">Male Contouring</h3>
            <p className="text-sm opacity-80 max-w-xs">Specifico per l'uomo: ridefinizione mandibolare e trattamento del contorno occhi.</p>
          </div>
        </div>
      </div>
    </SectionRow>

    {/* Row 3: Methodology */}
    <SectionRow className="py-32 bg-slate-900 text-white mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif mb-8 italic">Metodo Rigenerativo</h2>
          <p className="text-slate-400 mb-8">
            Non usiamo solo riempitivi. Utilizziamo biostimolatori che "istruiscono" la tua pelle a produrre nuovo collagene. È estetica curativa, non solo correttiva.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0"><CheckIcon /></div>
              <p className="text-sm">Risultati armoniosi e "invisible touch".</p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0"><CheckIcon /></div>
              <p className="text-sm">Materiali certificati di altissima gamma.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-48 bg-white/5 rounded-lg border border-white/10"></div>
          <div className="h-48 bg-white/5 rounded-lg border border-white/10"></div>
          <div className="h-48 bg-white/5 rounded-lg border border-white/10"></div>
          <div className="h-48 bg-white/5 rounded-lg border border-white/10"></div>
        </div>
      </div>
    </SectionRow>

    {/* Row 4: Clinical Safety */}
    <SectionRow className="py-24 bg-white">
      <div className="text-center max-w-3xl mx-auto">
        <Stethoscope className="w-12 h-12 text-slate-300 mx-auto mb-6" />
        <h2 className="text-3xl font-serif mb-6">Sicurezza Oltre lo Standard</h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Essendo un medico chirurgo urologo, il Dr. Bonante opera in un ambiente protetto, garantendo la massima igiene e la gestione professionale di qualsiasi evenienza clinica. L'estetica medicale richiede responsabilità.
        </p>
      </div>
    </SectionRow>

    {/* Row 5: CTA */}
    <SectionRow className="py-24 bg-slate-50">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-serif mb-8">Vuoi ridefinire la tua immagine?</h3>
        <button onClick={() => setPage('contact')} className="border border-slate-900 text-slate-900 px-10 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
          Parla con il Dr. Bonante
        </button>
      </div>
    </SectionRow>
  </div>
);

const ProfilePage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Row 1: Profile Header */}
      <SectionRow className="py-32 bg-slate-50">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
             <img src="https://www.centronaturamedica.com/wp-content/uploads/2019/08/Foto-Pierpaolo-Bonante-1200x992.jpg" alt="CV Photo" className="w-full h-auto rounded shadow-2xl grayscale" />
          </div>
          <div className="lg:w-2/3">
            <h1 className="text-5xl font-serif mb-6 text-slate-900">Dr. Pier Paolo <br/><span className="italic">Bonante</span></h1>
            <p className="text-slate-500 uppercase tracking-widest text-sm font-bold mb-8">Medico Chirurgo • Specialista in Urologia • Andrologo</p>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              Nato a Foggia nel 1963, il Dr. Bonante incarna la figura del medico cosmopolita. Con una formazione d'eccellenza a Roma e una carriera che ha toccato il Regno Unito, l'Africa e le rotte internazionali come medico di bordo, porta un'esperienza umana e clinica ineguagliabile nel cuore di Foggia.
            </p>
          </div>
        </div>
      </SectionRow>

      {/* Row 2: Education & Specialization */}
      <SectionRow className="py-24 border-b border-slate-100">
        <h2 className="text-3xl font-serif mb-12 flex items-center"><Award className="mr-6 text-slate-400" /> Formazione Accademica</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-slate-50 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-2">Laurea in Medicina e Chirurgia</h4>
            <p className="text-slate-500 text-sm italic mb-4">La Sapienza, Roma - 1991 (108/110)</p>
            <p className="text-slate-600 text-sm">Tesi sperimentale sulle neoplasie gastriche e tecniche di ricostruzione. Internato in Chirurgia d'Urgenza.</p>
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-lg">
            <h4 className="font-bold mb-2">Specializzazione in Urologia</h4>
            <p className="text-slate-400 text-sm italic mb-4">Univ. Cattolica Sacro Cuore, Roma - 1997 (50/50 Lode)</p>
            <p className="text-slate-300 text-sm">Tesi sperimentale sulle neoplasie maligne su rene a ferro di cavallo.</p>
          </div>
        </div>
      </SectionRow>

      {/* Row 3: International Journey */}
      <SectionRow className="py-24 bg-white">
        <h2 className="text-3xl font-serif mb-12 flex items-center"><Globe className="mr-6 text-slate-400" /> Il Percorso Globale</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group">
            <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">United Kingdom</div>
            <h4 className="font-serif text-xl mb-4 group-hover:text-slate-400 transition-colors">NHS Experience</h4>
            <p className="text-slate-500 text-sm">Specialist Registrar presso i più prestigiosi ospedali di Londra: Chelsea and Westminster, Saint Mary e Whipps Cross.</p>
          </div>
          <div className="group">
            <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Africa & Missions</div>
            <h4 className="font-serif text-xl mb-4 group-hover:text-slate-400 transition-colors">Humanitarian Surgeon</h4>
            <p className="text-slate-500 text-sm">Chirurgo in Angola e Burundi con ONG internazionali (INTERSOS, Alisei). Responsabile di progetti di formazione in chirurgia d'urgenza.</p>
          </div>
          <div className="group">
            <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">High Seas</div>
            <h4 className="font-serif text-xl mb-4 group-hover:text-slate-400 transition-colors">Chief Ship's Doctor</h4>
            <p className="text-slate-500 text-sm">Direttore Sanitario per Royal Caribbean e Costa Crociere. Gestione di emergenze e medicina preventiva su navi da crociera internazionali.</p>
          </div>
        </div>
      </SectionRow>

      {/* Row 4: Professional Timeline */}
      <SectionRow className="py-24 bg-slate-50">
        <h2 className="text-3xl font-serif mb-12 text-center">Tappe Fondamentali</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {[
            { year: "1992-1997", event: "Borsista presso Casa Sollievo della Sofferenza (S. Giovanni Rotondo)." },
            { year: "2002", event: "Iscrizione al General Medical Council (GMC) del Regno Unito." },
            { year: "2006", event: "Conseguimento Idoneità a Medico di Bordo dal Ministero della Salute." },
            { year: "2007-2008", event: "Country Chief Medical Officer in Yemen (International SOS)." },
            { year: "2013-Oggi", event: "Specialista Ambulatoriale Urologia presso ASL Foggia e ASUGI Trieste." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-12 group">
              <div className="w-24 text-right shrink-0">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">{item.year}</span>
              </div>
              <div className="pb-12 border-l border-slate-200 pl-12 relative">
                <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-slate-900 group-hover:scale-150 transition-transform"></div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionRow>

      {/* Row 5: Certificates & Skills */}
      <SectionRow className="py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-serif mb-8">Certificazioni Critiche</h3>
            <div className="space-y-4">
              {["ATLS (American College of Surgeons)", "Advanced Life Support (ERC)", "Pediatric ALS", "Diving Medicine (Rijeka)", "Fitomedicina"].map(c => (
                <div key={c} className="flex items-center text-sm text-slate-600">
                  <ShieldCheck className="mr-3 text-slate-400" size={16} /> {c}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-12 text-white rounded-2xl">
            <h3 className="text-2xl font-serif mb-6 italic">Passioni Oltre la Medicina</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Il Dr. Bonante coltiva interessi che riflettono la sua anima cosmopolita: vela e sport acquatici, lettura, viaggi e il collezionismo di soldatini e arte africana.
            </p>
            <div className="flex gap-4">
               <Anchor className="text-slate-600" />
               <Compass className="text-slate-600" />
               <LifeBuoy className="text-slate-600" />
            </div>
          </div>
        </div>
      </SectionRow>
    </div>
  );
};

const ContactPage: React.FC = () => (
  <div className="pt-24 min-h-screen bg-slate-50 flex items-center py-20">
    <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Row 1/Col 1: Details */}
        <div className="p-16 bg-slate-900 text-white flex flex-col justify-center">
          <h2 className="text-5xl font-serif mb-8">Prenota una <br/><span className="italic">Consulenza.</span></h2>
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <MapPin className="text-slate-500 shrink-0" />
              <div>
                <p className="font-bold mb-1 uppercase text-xs tracking-widest">Sede Principale</p>
                <p className="text-slate-400 text-sm">Via G. Rosati 141, 71121 Foggia (FG)</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <Phone className="text-slate-500 shrink-0" />
              <div>
                <p className="font-bold mb-1 uppercase text-xs tracking-widest">Recapiti</p>
                <p className="text-slate-400 text-sm">Fisso: +39 0881 31 28 57</p>
                <p className="text-slate-400 text-sm">Mobile: +39 348 49 87 591</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <Mail className="text-slate-500 shrink-0" />
              <div>
                <p className="font-bold mb-1 uppercase text-xs tracking-widest">Email & PEC</p>
                <p className="text-slate-400 text-sm">ppbon@hotmail.com</p>
                <p className="text-slate-500 text-[10px] mt-1">drpierpaolobonante@pec.it</p>
              </div>
            </div>
          </div>
        </div>
        {/* Row 1/Col 2: Form */}
        <div className="p-16 flex flex-col justify-center">
          <h3 className="text-2xl font-serif mb-12 text-slate-900">Inviaci un Messaggio</h3>
          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <input placeholder="Nome" className="w-full border-b border-slate-200 py-4 outline-none focus:border-slate-900 bg-transparent text-sm" />
              <input placeholder="Cognome" className="w-full border-b border-slate-200 py-4 outline-none focus:border-slate-900 bg-transparent text-sm" />
            </div>
            <input placeholder="Indirizzo Email" className="w-full border-b border-slate-200 py-4 outline-none focus:border-slate-900 bg-transparent text-sm" />
            <select className="w-full border-b border-slate-200 py-4 outline-none bg-transparent text-sm text-slate-500">
              <option>Visita Urologica / Andrologica</option>
              <option>Check-up Prostata</option>
              <option>Medicina Estetica / Filler</option>
              <option>Protocollo Longevity</option>
            </select>
            <textarea placeholder="Inserisci la tua richiesta..." rows={4} className="w-full border-b border-slate-200 py-4 outline-none focus:border-slate-900 bg-transparent text-sm" />
            <button className="w-full bg-slate-900 text-white py-6 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-slate-800 transition-colors shadow-xl">
              Richiedi Appuntamento
            </button>
          </form>
          <p className="text-[10px] text-slate-400 mt-8 text-center italic">
            I dati saranno trattati nel rispetto della normativa sulla privacy.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --- Helpers ---
const CheckIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// --- Main App ---

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch(page) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'longevity': return <LongevityPage />;
      case 'medical': return <MedicalPage />;
      case 'aesthetic': return <AestheticPage setPage={setPage} />;
      case 'profile': return <ProfilePage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={page} setPage={setPage} />
      <main>
        {renderPage()}
      </main>
      
      <footer className="bg-white border-t border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left mb-16">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-serif font-bold text-slate-900">DR. PIER PAOLO BONANTE</span>
              <p className="text-[10px] tracking-[0.3em] uppercase text-slate-400 mt-2">Longevity & Medical Excellence</p>
            </div>
            <div>
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-slate-900 mb-6">Navigazione</h5>
              <div className="flex flex-col space-y-4 text-xs text-slate-500 uppercase tracking-widest">
                <button onClick={() => { setPage('longevity'); window.scrollTo(0,0); }} className="hover:text-slate-900 transition-colors text-left">Longevity</button>
                <button onClick={() => { setPage('medical'); window.scrollTo(0,0); }} className="hover:text-slate-900 transition-colors text-left">Urologia</button>
                <button onClick={() => { setPage('aesthetic'); window.scrollTo(0,0); }} className="hover:text-slate-900 transition-colors text-left">Estetica</button>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-slate-900 mb-6">Legale</h5>
              <div className="flex flex-col space-y-4 text-xs text-slate-500 uppercase tracking-widest">
                <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Termini di Servizio</a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-50 text-center">
            <p className="text-[10px] text-slate-300 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Dr. Pier Paolo Bonante. Ordine dei Medici di Foggia n. 2506. <br/>
              Le informazioni contenute sono fornite per scopi educativi e informativi conformi alle linee guida sanitarie.
            </p>
          </div>
        </div>
      </footer>
      
      <WhatsAppChat />
    </div>
  );
};

export default App;
