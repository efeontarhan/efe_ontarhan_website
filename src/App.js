import React, { useState } from 'react';

const translations = {
  en: {
    lang: 'EN',
    about: 'About Me',
    intro: `Hi, I'm Efe!
I'm currently living in Barcelona and finishing my master's degree in Technology and Engineering Management. Right now, I'm focused on my thesis about how to reduce churn in SaaS products by understanding customer loyalty and user experience. It’s a topic that really excites me because it connects strategy, tech, and human behavior — my favorite mix.`,
    background: `I originally studied Civil Engineering at METU (Ankara), but over time I found myself drawn more toward business, growth, and innovation. That’s why I made the shift — and I’ve never looked back.`,
    experience: 'Work Experience',
    beymen: 'Beymen Group – Sales Development Intern (2023)',
    beymenDesc: 'Worked on performance reports, internal communication, and store operations support. It was fast-paced, but I loved being part of a dynamic retail environment.',
    inco: 'INCO International – Procurement Intern (Dubai) (2022)',
    incoDesc: 'Helped streamline supply chain processes, sourced materials, and collaborated with suppliers. Learned a lot about negotiation, logistics, and staying calm under pressure.',
    education: 'Education',
    edu1: 'MSc – Technology & Engineering Management (Universitat Rovira i Virgili, Spain)',
    edu2: 'BSc – Civil Engineering (Middle East Technical University, Turkey)',
    skills: 'Skills & Tools',
    tools: 'Microsoft Office & Excel (incl. VBA), MATLAB, AutoCAD, React, GitHub (beginner)',
    languages: 'Languages: English (fluent), Turkish (native), Spanish (beginner)',
    soft: 'Soft Skills',
    softSkills: ['Analytical thinking', 'Strong communication', 'Detail-oriented', 'Punctual', 'Proactive', 'Team-oriented', 'Calm in pressure', 'Reliable and well-organized', 'Quick to adapt', 'Open-minded'],
    interests: 'Interests',
    hobby: 'Outside of work, I’m into theater, playing the drums, jogging, and just exploring new places. I enjoy connecting with people, hearing their stories, and learning from different ways of thinking.',
    contact: 'Contact',
    city: 'Based in Barcelona',
    email: 'efeontarhan@gmail.com',
    cv: 'Download CV'
  },
  de: {
    lang: 'DE',
    about: 'Über mich',
    intro: `Hallo, ich bin Efe!
Ich lebe derzeit in Barcelona und schreibe meine Masterarbeit im Bereich Technologie- und Ingenieurmanagement. Mein Thema: Wie man die Abwanderung im SaaS-Bereich durch Kundenbindung und Nutzererfahrung reduziert – eine perfekte Mischung aus Strategie, Technik und Menschlichkeit.`,
    background: `Ich habe ursprünglich Bauingenieurwesen an der METU in Ankara studiert, doch mein Interesse verlagerte sich schnell in Richtung Business und Innovation – eine Entscheidung, die ich nie bereut habe.`,
    experience: 'Berufserfahrung',
    beymen: 'Beymen Group – Praktikum im Bereich Vertriebsentwicklung (2023)',
    beymenDesc: 'Arbeitete an Leistungsberichten, interner Kommunikation und Support für Filialen. Schnelles Tempo – aber genau mein Ding.',
    inco: 'INCO International – Praktikum im Einkauf (Dubai) (2022)',
    incoDesc: 'Optimierte Prozesse in der Lieferkette, verhandelte mit Lieferanten und lernte viel über Logistik und Verhandlung.',
    education: 'Ausbildung',
    edu1: 'MSc – Technologie- und Ingenieurmanagement (Universitat Rovira i Virgili, Spanien)',
    edu2: 'BSc – Bauingenieurwesen (Middle East Technical University, Türkei)',
    skills: 'Fähigkeiten & Tools',
    tools: 'Microsoft Office & Excel (inkl. VBA), MATLAB, AutoCAD, React, GitHub (Anfänger)',
    languages: 'Sprachen: Englisch (fließend), Türkisch (Muttersprache), Spanisch (Anfänger)',
    soft: 'Soft Skills',
    softSkills: ['Analytisches Denken', 'Starke Kommunikation', 'Detailverliebt', 'Pünktlich', 'Proaktiv', 'Teamorientiert', 'Ruhig unter Druck', 'Zuverlässig & organisiert', 'Anpassungsfähig', 'Offen'],
    interests: 'Interessen',
    hobby: 'Neben der Arbeit liebe ich Theater, Schlagzeugspielen, Joggen und neue Orte entdecken.',
    contact: 'Kontakt',
    city: 'Wohnhaft in Barcelona',
    email: 'efeontarhan@gmail.com',
    cv: 'Lebenslauf herunterladen'
  },
  tr: {
    lang: 'TR',
    about: 'Hakkımda',
    intro: `Merhaba, ben Efe!
Şu anda Barselona'da yaşıyorum ve Teknoloji & Mühendislik Yönetimi yüksek lisans tezimi yazıyorum. Tez konum: SaaS sektöründe müşteri sadakati ve kullanıcı deneyimi üzerinden müşteri kaybını azaltma stratejileri. Tam da sevdiğim alanlar: strateji, teknoloji ve insan odaklılık.`,
    background: `ODTÜ’de İnşaat Mühendisliği okudum ama zamanla ilgim daha çok iş geliştirme ve yeniliğe kaydı. Bu değişiklikten hiç pişman olmadım.`,
    experience: 'Deneyimler',
    beymen: 'Beymen Group – Satış Geliştirme Stajyeri (2023)',
    beymenDesc: 'Performans raporları hazırladım, mağaza-hq iletişimini destekledim. Hızlı ve heyecanlı bir ortamdı.',
    inco: 'INCO International – Satın Alma Stajyeri (Dubai) (2022)',
    incoDesc: 'Tedarik süreçlerini iyileştirdim, tedarikçilerle görüştüm ve lojistik süreçlere destek verdim.',
    education: 'Eğitim',
    edu1: 'Yüksek Lisans – Teknoloji ve Mühendislik Yönetimi (URV, İspanya)',
    edu2: 'Lisans – İnşaat Mühendisliği (ODTÜ, Türkiye)',
    skills: 'Beceriler ve Araçlar',
    tools: 'Microsoft Office & Excel (VBA dahil), MATLAB, AutoCAD, React, GitHub (başlangıç)',
    languages: 'Diller: İngilizce (akıcı), Türkçe (ana dil), İspanyolca (başlangıç)',
    soft: 'Yumuşak Beceriler',
    softSkills: ['Analitik düşünce', 'İyi iletişim', 'Detaylara dikkat', 'Dakiklik', 'Proaktiflik', 'Takım ruhu', 'Stres altında sakin kalmak', 'Güvenilir & düzenli', 'Uyum yeteneği', 'Açık fikirli olmak'],
    interests: 'İlgi Alanlarım',
    hobby: 'Tiyatroya, bateri çalmaya, koşuya ve yeni yerler keşfetmeye bayılırım. İnsanları dinlemeyi ve yeni şeyler öğrenmeyi severim.',
    contact: 'İletişim',
    city: 'Barselona'da yaşıyorum',
    email: 'efeontarhan@gmail.com',
    cv: 'CV'yi indir'
  },
  es: {
    lang: 'ES',
    about: 'Sobre mí',
    intro: `¡Hola! Soy Efe.
Vivo en Barcelona y estoy terminando mi máster en Gestión de Tecnología e Ingeniería. Mi tesis trata sobre cómo reducir la pérdida de clientes en SaaS entendiendo la lealtad del usuario y su experiencia. Un tema que me encanta porque mezcla estrategia, tecnología y personas.`,
    background: `Estudié Ingeniería Civil en METU (Ankara), pero poco a poco me atrajo más el mundo empresarial y la innovación. Desde entonces, no he mirado atrás.`,
    experience: 'Experiencia Laboral',
    beymen: 'Beymen Group – Becario en Desarrollo de Ventas (2023)',
    beymenDesc: 'Preparé informes de rendimiento, apoyé la comunicación entre tiendas y oficinas centrales. Un entorno muy dinámico que disfruté mucho.',
    inco: 'INCO International – Becario en Compras (Dubái) (2022)',
    incoDesc: 'Mejoré procesos logísticos, contacté proveedores y ayudé con estrategias de inventario.',
    education: 'Educación',
    edu1: 'Máster – Gestión de Tecnología e Ingeniería (URV, España)',
    edu2: 'Grado – Ingeniería Civil (METU, Turquía)',
    skills: 'Habilidades y Herramientas',
    tools: 'Microsoft Office y Excel (con VBA), MATLAB, AutoCAD, React, GitHub (básico)',
    languages: 'Idiomas: Inglés (fluido), Turco (nativo), Español (básico)',
    soft: 'Habilidades Blandas',
    softSkills: ['Pensamiento analítico', 'Buena comunicación', 'Detalle', 'Puntualidad', 'Proactividad', 'Trabajo en equipo', 'Tranquilo bajo presión', 'Confiable y organizado', 'Adaptabilidad', 'Mentalidad abierta'],
    interests: 'Intereses',
    hobby: 'Me encanta el teatro, tocar batería, correr y descubrir nuevos lugares. Me gusta conectar con la gente y aprender de ellos.',
    contact: 'Contacto',
    city: 'Viviendo en Barcelona',
    email: 'efeontarhan@gmail.com',
    cv: 'Descargar CV'
  }
};

export default function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', gap: '0.5rem' }}>
        {Object.keys(translations).map((key) => (
          <button key={key} onClick={() => setLang(key)}>{translations[key].lang}</button>
        ))}
      </div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Efe Öntarhan</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>🌍 {t.city} | 📧 {t.email}</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>{t.about}</h2>
        <p>{t.intro}</p>
        <p>{t.background}</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>{t.experience}</h2>
        <p><strong>{t.beymen}</strong><br />{t.beymenDesc}</p>
        <p><strong>{t.inco}</strong><br />{t.incoDesc}</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>{t.education}</h2>
        <ul>
          <li>{t.edu1}</li>
          <li>{t.edu2}</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>{t.skills}</h2>
        <p>{t.tools}</p>
        <p>{t.languages}</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>{t.soft}</h2>
        <ul>
          {t.softSkills.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>{t.interests}</h2>
        <p>{t.hobby}</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>{t.contact}</h2>
        <a href={`${process.env.PUBLIC_URL}/Efe Öntarhan CV.pdf`} download>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>{t.cv}</button>
        </a>
      </section>
    </main>
  );
}
