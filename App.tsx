
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
  Microscope,
  LifeBuoy,
  MessageCircle,
  Send,
  Check
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
              Buongiorno, sono la segretaria del Dr. Bonante. Come posso aiutarla? Inoltrerò il suo messaggio subito al Dottore.
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
            Contatta la Segreteria
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
    {/* Hero Row */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://www.centronaturamedica.com/wp-content/uploads/2019/08/Foto-Pierpaolo-Bonante-1200x992.jpg" 
          alt="Dr. Pier Paolo Bonante" 
          className="w-full h-full object-cover object-top scale-105 animate-pulse-slow transition-transform duration-[10s]"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
      </div>
      <div className="relative text-center text-white px-4 max-w-4xl pt-20">
        <span className="text-xs uppercase tracking-[0.5em] mb-6 block font-light opacity-80">Eccellenza Medica • Innovazione Estetica</span>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-none">Longevity & <br/><span className="italic">Wellness</span></h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Il connubio esclusivo tra Chirurgia Urologica e Medicina Rigenerativa. Un approccio scientifico per ottimizzare la tua vitalità.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => setPage('longevity')} className="bg-white text-slate-900 px-10 py-5 font-bold text-[11px] uppercase tracking-widest hover:bg-slate-100 transition-all">
            Scopri Longevity
          </button>
          <button onClick={() => setPage('medical')} className="border border-white/40 text-white px-10 py-5 font-bold text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all">
            Area Urologia
          </button>
        </div>
      </div>
    </section>

    {/* Philosophy Row */}
    <SectionRow className="py-32 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-4 block">La Visione</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-slate-900">Oltre la medicina, verso la longevità.</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Il Dr. Bonante unisce il rigore chirurgico acquisito in contesti internazionali alla sensibilità estetica più raffinata. Ogni trattamento è studiato per preservare l'armonia naturale e potenziare le funzioni biologiche.
          </p>
          <button onClick={() => setPage('profile')} className="flex items-center text-slate-900 font-bold uppercase tracking-widest text-[11px] group">
            Leggi la Biografia <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
          </button>
        </div>
        <div className="relative group">
           <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
           <div className="absolute -bottom-8 -right-8 bg-slate-900 p-8 text-white hidden md:block">
              <span className="text-4xl font-serif block mb-1 italic">30+</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">Anni di Successi</span>
           </div>
        </div>
      </div>
    </SectionRow>

    {/* Services Overview Row */}
    <SectionRow className="py-24 bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">Aree d'Intervento</h2>
        <div className="w-20 h-0.5 bg-slate-900 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-white p-10 shadow-sm hover:shadow-xl transition-all border border-slate-100">
           <Activity className="mb-6 text-slate-400" />
           <h3 className="text-xl font-serif mb-4">Andrologia</h3>
           <p className="text-sm text-slate-500 leading-relaxed">Diagnostica avanzata per la salute maschile, fertilità e performance funzionale.</p>
        </div>
        <div className="bg-white p-10 shadow-sm hover:shadow-xl transition-all border border-slate-100">
           <Sparkles className="mb-6 text-slate-400" />
           <h3 className="text-xl font-serif mb-4">Medicina Estetica</h3>
           <p className="text-sm text-slate-500 leading-relaxed">Trattamenti rigenerativi per il viso e il corpo con precisione millimetrica.</p>
        </div>
        <div className="bg-white p-10 shadow-sm hover:shadow-xl transition-all border border-slate-100">
           <Zap className="mb-6 text-slate-400" />
           <h3 className="text-xl font-serif mb-4">Longevity Suite</h3>
           <p className="text-sm text-slate-500 leading-relaxed">Protocolli di bio-hacking per rallentare l'invecchiamento cellulare e sistemico.</p>
        </div>
      </div>
    </SectionRow>

    {/* Narrative Row */}
    <SectionRow className="py-32 luxury-gradient text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">"L'eccellenza non è un atto, ma un'abitudine."</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          Dalle sale operatorie di Londra alle missioni in Africa, il Dr. Bonante ha operato dove la medicina è vita pura. Oggi porta questa dedizione nello studio di Foggia.
        </p>
        <button onClick={() => setPage('contact')} className="bg-white text-slate-900 px-10 py-4 font-bold text-[11px] uppercase tracking-widest hover:bg-slate-100 transition-all">
          Prenota una consulenza
        </button>
      </div>
    </SectionRow>

    {/* Location Row */}
    <SectionRow className="py-24 bg-white">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-serif mb-8">Dove trovarci.</h2>
          <p className="text-slate-600 mb-8">Sede principale nel cuore di Foggia, un ambiente riservato ed elegante dove ogni paziente riceve un'attenzione personalizzata.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
               <MapPin className="text-slate-400" size={20} />
               <span className="text-sm font-medium">Via G. Rosati 141, 71121 Foggia</span>
            </div>
            <div className="flex items-center space-x-4">
               <Phone className="text-slate-400" size={20} />
               <span className="text-sm font-medium">+39 0881 31 28 57</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-80 bg-slate-100 rounded-2xl overflow-hidden grayscale">
           <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
        </div>
      </div>
    </SectionRow>
  </>
);

const LongevityPage: React.FC = () => (
  <div className="pt-24 bg-slate-50 min-h-screen">
    <SectionRow className="py-32">
      <div className="max-w-3xl">
        <span className="text-xs uppercase tracking-[0.4em] font-bold text-slate-400 mb-4 block">The Bio-Suite Concept</span>
        <h1 className="text-6xl font-serif mb-8">Scienza della <span className="italic text-slate-400">Longevità.</span></h1>
        <p className="text-xl text-slate-600 font-light leading-relaxed">
          Prevenire l'invecchiamento prima che inizi. La nostra Longevity Suite è un percorso clinico integrato che agisce sulla qualità della vita a 360 gradi.
        </p>
      </div>
    </SectionRow>

    <SectionRow className="py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
         <div className="space-y-12">
            <div className="border-l-4 border-slate-900 pl-8">
               <h3 className="text-2xl font-serif mb-3">Check-up Metabolico</h3>
               <p className="text-slate-500 text-sm">Analisi dei marker infiammatori e dello stress ossidativo per mappare l'età biologica.</p>
            </div>
            <div className="border-l-4 border-slate-300 pl-8">
               <h3 className="text-2xl font-serif mb-3">Skin Bio-hacking</h3>
               <p className="text-slate-500 text-sm">Utilizziamo biostimolatori di ultima generazione per indurre la rigenerazione tissutale profonda.</p>
            </div>
         </div>
         <div className="space-y-12">
            <div className="border-l-4 border-slate-300 pl-8">
               <h3 className="text-2xl font-serif mb-3">Andro-Longevity</h3>
               <p className="text-slate-500 text-sm">Ottimizzazione della salute maschile per mantenere vitalità e performance nel tempo.</p>
            </div>
            <div className="border-l-4 border-slate-900 pl-8">
               <h3 className="text-2xl font-serif mb-3">Nutraceutica Clinica</h3>
               <p className="text-slate-500 text-sm">Integrazione mirata basata su analisi cliniche per colmare i deficit micronutrizionali.</p>
            </div>
         </div>
      </div>
    </SectionRow>

    <SectionRow className="py-24 luxury-gradient text-white">
       <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Investi nel tuo futuro biologico.</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">I protocolli del Dr. Bonante sono personalizzati e basati sulle evidenze scientifiche più recenti nel campo della medicina anti-aging.</p>
          <div className="flex justify-center space-x-12 opacity-60">
             <div className="text-center"><Zap size={40} className="mx-auto mb-2" /><span className="text-[10px] uppercase tracking-widest">Energia</span></div>
             <div className="text-center"><Droplets size={40} className="mx-auto mb-2" /><span className="text-[10px] uppercase tracking-widest">Pelle</span></div>
             <div className="text-center"><Activity size={40} className="mx-auto mb-2" /><span className="text-[10px] uppercase tracking-widest">Vitalità</span></div>
          </div>
       </div>
    </SectionRow>

    <SectionRow className="py-24 bg-white">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-3xl font-serif mb-6">Analisi della Vitalità</h2>
             <p className="text-slate-600 mb-8">Utilizziamo tecnologie non invasive per monitorare i progressi del percorso Longevity.</p>
             <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-sm"><Check className="text-slate-400" size={18} /> Valutazione della composizione corporea</li>
                <li className="flex items-center space-x-3 text-sm"><Check className="text-slate-400" size={18} /> Monitoraggio dell'equilibrio ormonale</li>
                <li className="flex items-center space-x-3 text-sm"><Check className="text-slate-400" size={18} /> Test del DNA per predisposizioni anti-aging</li>
             </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" className="w-full h-auto" />
          </div>
       </div>
    </SectionRow>

    <SectionRow className="py-24 text-center">
       <h2 className="text-2xl font-serif mb-6">Vuoi saperne di più sul bio-hacking?</h2>
       <p className="text-slate-500 mb-8">Prenota un colloquio conoscitivo gratuito via WhatsApp.</p>
       <button className="bg-slate-900 text-white px-8 py-4 font-bold uppercase tracking-widest text-[11px]">Scarica Brochure</button>
    </SectionRow>
  </div>
);

const MedicalPage: React.FC = () => (
  <div className="pt-24 bg-white min-h-screen">
    <SectionRow className="py-32 bg-slate-50">
      <div className="max-w-3xl">
        <h1 className="text-6xl font-serif mb-8">Andrologia & <span className="italic text-slate-400">Urologia.</span></h1>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          La salute maschile richiede competenza specialistica e un approccio multidisciplinare. Diagnosi tempestiva e cura d'eccellenza.
        </p>
      </div>
    </SectionRow>

    <SectionRow className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
           <img src="https://images.unsplash.com/photo-1576091160550-2173dad99a01?auto=format&fit=crop&q=80&w=800" className="rounded-xl shadow-lg grayscale" />
        </div>
        <div>
           <h2 className="text-3xl font-serif mb-6">Diagnostica per Immagini</h2>
           <p className="text-slate-600 mb-8 leading-relaxed">
              Il Dr. Bonante è perfezionato in ecografia uronefrologica. Questo ci permette di eseguire esami approfonditi in tempo reale durante la visita specialistica.
           </p>
           <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border border-slate-100 bg-slate-50">
                 <h4 className="font-bold text-xs uppercase mb-2">Ecografia Prostatica</h4>
                 <p className="text-[10px] text-slate-500">Analisi transrettale high-res per screening preventivo.</p>
              </div>
              <div className="p-4 border border-slate-100 bg-slate-50">
                 <h4 className="font-bold text-xs uppercase mb-2">Uroflussimetria</h4>
                 <p className="text-[10px] text-slate-500">Valutazione funzionale immediata delle basse vie urinarie.</p>
              </div>
           </div>
        </div>
      </div>
    </SectionRow>

    <SectionRow className="py-24 bg-slate-900 text-white">
       <div className="text-center mb-16">
          <h2 className="text-4xl font-serif italic">Patologie Trattate</h2>
          <p className="text-slate-400 mt-4">Gestione clinica e chirurgica delle principali problematiche urologiche.</p>
       </div>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Prostatite", "Disfunzione Erettile", "Calcolosi", "Infertilità", "Incontinenza", "Varicocele", "Cistite", "Neoplasie"].map(item => (
            <div key={item} className="text-center p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
               <span className="text-sm font-medium tracking-widest uppercase">{item}</span>
            </div>
          ))}
       </div>
    </SectionRow>

    <SectionRow className="py-24">
       <div className="max-w-4xl mx-auto text-center">
          <Microscope size={48} className="mx-auto mb-8 text-slate-300" />
          <h2 className="text-3xl font-serif mb-6">L'importanza della prevenzione.</h2>
          <p className="text-slate-600 leading-relaxed mb-10">Lo screening urologico dopo i 45 anni è fondamentale per la salute maschile. Il Dr. Bonante offre protocolli di monitoraggio annuale dedicati.</p>
          <button className="border border-slate-900 text-slate-900 px-10 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">Controlla i tuoi Marker</button>
       </div>
    </SectionRow>

    <SectionRow className="py-24 bg-slate-50 text-center">
       <p className="text-slate-400 italic text-sm">"In urologia, il tempo è il fattore più critico per una guarigione completa."</p>
    </SectionRow>
  </div>
);

const AestheticPage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <div className="pt-24 bg-slate-50 min-h-screen">
    <SectionRow className="py-32 bg-white">
      <div className="max-w-3xl">
        <span className="text-xs uppercase tracking-[0.4em] font-bold text-slate-400 mb-4 block">Aesthetic Medicine</span>
        <h1 className="text-6xl font-serif mb-8">Rigenerazione <span className="italic text-slate-400">Naturale.</span></h1>
        <p className="text-lg text-slate-600 font-light leading-relaxed">
          Un'estetica guidata dalla medicina. Non alteriamo la tua fisionomia, ne ottimizziamo la luce e la struttura cellulare.
        </p>
      </div>
    </SectionRow>

    <SectionRow className="py-24">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative group overflow-hidden rounded-3xl h-[600px]">
             <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-serif mb-4">Viso & Collo</h3>
                <p className="text-slate-300 text-sm">Filler, Botox e Biostimolazione per un effetto lifting naturale senza bisturi.</p>
             </div>
          </div>
          <div className="relative group overflow-hidden rounded-3xl h-[600px] mt-12 md:mt-24">
             <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-serif mb-4">Body Contouring</h3>
                <p className="text-slate-300 text-sm">Trattamenti lipolitici e tonificanti per ridefinire la silhouette maschile e femminile.</p>
             </div>
          </div>
       </div>
    </SectionRow>

    <SectionRow className="py-32 bg-slate-900 text-white">
       <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center italic">Il Metodo Bonante</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="text-center">
                <div className="text-slate-400 font-bold mb-4">01.</div>
                <h4 className="text-xl font-serif mb-4">Precisione</h4>
                <p className="text-xs text-slate-500">Utilizzo di tecniche chirurgiche per minimizzare traumi e lividi.</p>
             </div>
             <div className="text-center">
                <div className="text-slate-400 font-bold mb-4">02.</div>
                <h4 className="text-xl font-serif mb-4">Sicurezza</h4>
                <p className="text-xs text-slate-500">Solo materiali certificati e biocompatibili di altissima gamma.</p>
             </div>
             <div className="text-center">
                <div className="text-slate-400 font-bold mb-4">03.</div>
                <h4 className="text-xl font-serif mb-4">Naturalezza</h4>
                <p className="text-xs text-slate-500">Risultati armonici che rispettano l'espressività individuale.</p>
             </div>
          </div>
       </div>
    </SectionRow>

    <SectionRow className="py-24 bg-white">
       <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <h2 className="text-3xl font-serif mb-6">Trattamenti di Punta</h2>
             <div className="space-y-4">
                {["Lifting Non Chirurgico", "Peeling Chimici Medicali", "Radiofrequenza Frazionata", "Carbossiterapia", "Fili di trazione"].map(t => (
                  <div key={t} className="flex items-center justify-between py-4 border-b border-slate-100">
                     <span className="text-sm font-medium">{t}</span>
                     <ArrowRight size={14} className="text-slate-300" />
                  </div>
                ))}
             </div>
          </div>
          <div className="lg:w-1/2">
             <div className="bg-slate-50 p-12 rounded-2xl">
                <h3 className="text-2xl font-serif mb-4">Domande Frequenti</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">Scopri i tempi di recupero e le modalità di intervento per ogni tipologia di trattamento estetico medicale.</p>
                <button onClick={() => setPage('contact')} className="text-slate-900 font-bold uppercase tracking-widest text-[10px] border-b border-slate-900">Consulta il Dottore</button>
             </div>
          </div>
       </div>
    </SectionRow>

    <SectionRow className="py-24 text-center">
       <p className="text-slate-400 text-xs uppercase tracking-widest">Bellezza è Salute. Salute è Longevità.</p>
    </SectionRow>
  </div>
);

const ProfilePage: React.FC = () => (
  <div className="pt-24 bg-white min-h-screen">
    <SectionRow className="py-32 bg-slate-50">
       <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3">
             <img src="https://www.centronaturamedica.com/wp-content/uploads/2019/08/Foto-Pierpaolo-Bonante-1200x992.jpg" alt="Dr Bonante" className="rounded-lg shadow-2xl grayscale" />
          </div>
          <div className="lg:w-2/3">
             <h1 className="text-5xl font-serif mb-6">Dr. Pier Paolo Bonante</h1>
             <p className="text-slate-500 uppercase tracking-widest text-sm font-bold mb-8 italic text-slate-400">Urologo • Andrologo • Chirurgo • Medico Estetico</p>
             <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Oltre tre decenni di esperienza clinica tra Italia, Galles, Inghilterra e Africa. Un medico che ha dedicato la vita alla cura dell'essere umano in ogni sua sfaccettatura, dall'emergenza in contesti critici alla medicina d'eccellenza privata.
             </p>
             <div className="flex space-x-6">
                <Globe className="text-slate-300" />
                <Anchor className="text-slate-300" />
                <Award className="text-slate-300" />
             </div>
          </div>
       </div>
    </SectionRow>

    <SectionRow className="py-24">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
             <h3 className="text-2xl font-serif mb-8 border-b border-slate-100 pb-4">Istruzione e Specializzazione</h3>
             <div className="space-y-8">
                <div>
                   <span className="text-xs font-bold text-slate-400">1991</span>
                   <h4 className="font-bold">Laurea in Medicina e Chirurgia</h4>
                   <p className="text-sm text-slate-500">Università "La Sapienza" di Roma (108/110)</p>
                </div>
                <div>
                   <span className="text-xs font-bold text-slate-400">1997</span>
                   <h4 className="font-bold">Specializzazione in Urologia</h4>
                   <p className="text-sm text-slate-500">Università Cattolica "Sacro Cuore" di Roma (50/50 Lode)</p>
                </div>
                <div>
                   <span className="text-xs font-bold text-slate-400">Post-Grad</span>
                   <h4 className="font-bold">Perfezionamenti Diversificati</h4>
                   <p className="text-sm text-slate-500">Ecografia Uronefrologica, Fitomedicina, Diving Medicine, Chirurgia d'Urgenza.</p>
                </div>
             </div>
          </div>
          <div className="space-y-12">
             <h3 className="text-2xl font-serif mb-8 border-b border-slate-100 pb-4">Esperienze Internazionali</h3>
             <div className="space-y-8">
                <div>
                   <h4 className="font-bold">United Kingdom (NHS)</h4>
                   <p className="text-sm text-slate-500">Trust Grade in Galles e Specialist Registrar a Londra presso Chelsea and Westminster Hospital.</p>
                </div>
                <div>
                   <h4 className="font-bold">Missioni Umanitarie (Africa)</h4>
                   <p className="text-sm text-slate-500">Chirurgo Cooperante in Angola e Burundi con ONG internazionali. Responsabile formazione chirurgia d'urgenza.</p>
                </div>
                <div>
                   <h4 className="font-bold">Navi da Crociera</h4>
                   <p className="text-sm text-slate-500">Chief Ship's Doctor per Royal Caribbean e Costa Crociere su rotte globali.</p>
                </div>
             </div>
          </div>
       </div>
    </SectionRow>

    <SectionRow className="py-24 bg-slate-900 text-white">
       <h2 className="text-3xl font-serif mb-12 text-center">Timeline Professionale</h2>
       <div className="max-w-4xl mx-auto space-y-8">
          {[
            { year: "1992-1997", event: "Specialista in formazione presso Casa Sollievo della Sofferenza." },
            { year: "2002", event: "Iscrizione al General Medical Council (UK)." },
            { year: "2006", event: "Conseguimento Idoneità a Medico di Bordo." },
            { year: "2007-2008", event: "Chief Medical Officer in Yemen (International SOS)." },
            { year: "Oggi", event: "Specialista Ambulatoriale Urologia presso ASL Foggia." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
               <span className="w-24 text-right text-xs font-bold text-slate-500">{item.year}</span>
               <div className="w-3 h-3 rounded-full bg-white"></div>
               <p className="text-sm text-slate-300">{item.event}</p>
            </div>
          ))}
       </div>
    </SectionRow>

    <SectionRow className="py-24 bg-slate-50">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
             <h3 className="text-2xl font-serif mb-6">Certificazioni Critiche</h3>
             <ul className="space-y-3 text-sm text-slate-500">
                <li>• ATLS (American College of Surgeons)</li>
                <li>• Advanced Life Support (European Resuscitation Council)</li>
                <li>• Paediatric Basic Life Support</li>
                <li>• Training Center di Ecogia (Ginevra) - Chirurgia Ferite di Guerra</li>
             </ul>
          </div>
          <div>
             <h3 className="text-2xl font-serif mb-6">Passioni Personali</h3>
             <p className="text-sm text-slate-500 leading-relaxed italic">
                Oltre la medicina, il Dr. Bonante coltiva l'amore per il mare (vela), il viaggio, il collezionismo di soldatini e l'arte africana, riflesso della sua anima cosmopolita.
             </p>
          </div>
       </div>
    </SectionRow>

    <SectionRow className="py-24 text-center">
       <button className="bg-slate-900 text-white px-10 py-4 font-bold uppercase tracking-widest text-[11px]">Visualizza CV Completo (PDF)</button>
    </SectionRow>
  </div>
);

const ContactPage: React.FC = () => (
  <div className="pt-24 bg-slate-50 min-h-screen flex items-center">
    <SectionRow className="py-20 w-full">
       <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-16 bg-slate-900 text-white flex flex-col justify-center">
             <h2 className="text-5xl font-serif mb-12 leading-tight">Inizia il tuo <br/><span className="italic">percorso.</span></h2>
             <div className="space-y-10">
                <div className="flex items-start space-x-6">
                   <MapPin className="text-slate-500 mt-1" />
                   <div>
                      <p className="text-xs uppercase tracking-widest font-bold mb-1">Indirizzo</p>
                      <p className="text-slate-400 text-sm">Via G. Rosati 141, 71121 Foggia (FG)</p>
                   </div>
                </div>
                <div className="flex items-start space-x-6">
                   <Phone className="text-slate-500 mt-1" />
                   <div>
                      <p className="text-xs uppercase tracking-widest font-bold mb-1">Recapito Telefonico</p>
                      <p className="text-slate-400 text-sm">+39 348 49 87 591</p>
                      <p className="text-slate-400 text-sm">+39 0881 31 28 57</p>
                   </div>
                </div>
                <div className="flex items-start space-x-6">
                   <Mail className="text-slate-500 mt-1" />
                   <div>
                      <p className="text-xs uppercase tracking-widest font-bold mb-1">E-mail Principale</p>
                      <p className="text-slate-400 text-sm">ppbon@hotmail.com</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="p-16 flex flex-col justify-center">
             <form className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                   <input placeholder="Nome" className="w-full border-b border-slate-200 py-3 text-sm outline-none focus:border-slate-900 bg-transparent" />
                   <input placeholder="Cognome" className="w-full border-b border-slate-200 py-3 text-sm outline-none focus:border-slate-900 bg-transparent" />
                </div>
                <input placeholder="E-mail" className="w-full border-b border-slate-200 py-3 text-sm outline-none focus:border-slate-900 bg-transparent" />
                <select className="w-full border-b border-slate-200 py-3 text-sm outline-none bg-transparent">
                   <option>Visita Urologica</option>
                   <option>Longevity Protocol</option>
                   <option>Medicina Estetica</option>
                   <option>Consulenza Andrologica</option>
                </select>
                <textarea placeholder="Messaggio o Note" rows={3} className="w-full border-b border-slate-200 py-3 text-sm outline-none focus:border-slate-900 bg-transparent" />
                <button className="w-full bg-slate-900 text-white py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-slate-800 transition-all">Invia Richiesta</button>
             </form>
          </div>
       </div>
    </SectionRow>
  </div>
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
            <div className="col-span-1">
              <span className="text-2xl font-serif font-bold text-slate-900">DR. PIER PAOLO BONANTE</span>
              <p className="text-[10px] tracking-[0.3em] uppercase text-slate-400 mt-2">Longevity & Medical Excellence</p>
            </div>
            <div>
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-slate-900 mb-6">Menu</h5>
              <div className="flex flex-col space-y-4 text-xs text-slate-500 uppercase tracking-widest">
                <button onClick={() => { setPage('longevity'); window.scrollTo(0,0); }} className="hover:text-slate-900 transition-colors text-left">Longevity</button>
                <button onClick={() => { setPage('medical'); window.scrollTo(0,0); }} className="hover:text-slate-900 transition-colors text-left">Urologia</button>
                <button onClick={() => { setPage('aesthetic'); window.scrollTo(0,0); }} className="hover:text-slate-900 transition-colors text-left">Estetica</button>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-slate-900 mb-6">Legal</h5>
              <div className="flex flex-col space-y-4 text-xs text-slate-500 uppercase tracking-widest">
                <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Cookie</a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-50 text-center">
            <p className="text-[10px] text-slate-300 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Dr. Pier Paolo Bonante. Ordine Medici Foggia n. 2506. <br/>
              Informazione sanitaria conforme alle linee guida ministeriali.
            </p>
          </div>
        </div>
      </footer>
      
      <WhatsAppChat />
    </div>
  );
};

export default App;
