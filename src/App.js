import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      greeting: "🧑‍💼 About Me",
      intro: "Hi, I'm Efe!\nI'm currently living in Barcelona and finishing my Master of Science in Technology and Engineering Management. My thesis focuses on reducing churn in SaaS products by analyzing customer loyalty and user experience. This topic excites me because it blends strategy, technology, and human behavior — a mix I truly enjoy.",
      background: "I studied Civil Engineering at Middle East Technical University in Ankara (2018–2023), and over time, I developed a strong interest in business, growth, and innovation, which led me to shift my path toward management and strategy.",
      workTitle: "💼 Work Experience",
      work: [
        "<strong>Beymen Group, Istanbul</strong> – Sales Development Intern (Jul 2023 – Sep 2023): Worked on performance reports, internal communication, and store operations support.",
        "<strong>INCO International, Dubai</strong> – Procurement Intern (Jun 2022 – Aug 2022): Helped streamline supply chain processes, sourced materials, and collaborated with suppliers."
      ],
      eduTitle: "📚 Education",
      education: [
        "Master of Science – Technology & Engineering Management, Universitat Rovira i Virgili, Tarragona, Spain (2023–2024)",
        "Bachelor of Science – Civil Engineering, Middle East Technical University, Ankara, Turkey (2018–2023)"
      ],
      skillsTitle: "🛠️ Skills & Tools",
      skills: [
        "Microsoft Office & Excel (incl. VBA)",
        "MATLAB",
        "AutoCAD",
        "SAP",
        "React, GitHub (beginner)",
        "Languages: English (fluent), Turkish (native), Spanish (beginner)"
      ],
      softSkillsTitle: "💡 Soft Skills",
      softSkills: [
        "Analytical thinking", "Strong communication", "Detail-oriented", "Punctual",
        "Proactive", "Team-oriented", "Calm in pressure", "Reliable and well-organized",
        "Quick to adapt", "Open-minded"
      ],
      interestsTitle: "🎭 Interests",
      interests: "Outside of work, I’m into theater, playing the drums, jogging, and exploring new places. I enjoy connecting with people, hearing their stories, and learning from different perspectives.",
      contactTitle: "📫 Contact",
      location: "📍 Based in Barcelona",
      email: "📧 efeontarhan@gmail.com",
      cv: "⬇️ Download my CV"
    },
    tr: {
      greeting: "🧑‍💼 Hakkımda",
      intro: "Merhaba, ben Efe!\nŞu anda Barselona'da yaşıyorum ve Teknoloji ve Mühendislik Yönetimi alanında yüksek lisans eğitimimi tamamlıyorum. Tez konum, SaaS ürünlerinde müşteri sadakati ve kullanıcı deneyimini analiz ederek müşteri kaybını azaltmaya odaklanıyor. Strateji, teknoloji ve insan davranışlarını bir araya getirmesi beni heyecanlandırıyor.",
      background: "2018–2023 yılları arasında Ankara’daki Orta Doğu Teknik Üniversitesi’nde İnşaat Mühendisliği okudum. Zamanla iş, büyüme ve yenilik alanlarına ilgim arttı ve bu doğrultuda yönetim ve stratejiye yöneldim.",
      workTitle: "💼 İş Deneyimi",
      work: [
        "<strong>Beymen Group, İstanbul</strong> – Satış Geliştirme Stajyeri (Tem 2023 – Eyl 2023): Performans raporları hazırladım, iç iletişimde yer aldım ve mağaza operasyonlarını destekledim.",
        "<strong>INCO International, Dubai</strong> – Satın Alma Stajyeri (Haz 2022 – Ağu 2022): Tedarik zinciri süreçlerini geliştirdim, malzeme tedariki yaptım ve tedarikçilerle iş birliği sağladım."
      ],
      eduTitle: "📚 Eğitim",
      education: [
        "Master of Science – Teknoloji ve Mühendislik Yönetimi, Universitat Rovira i Virgili, Tarragona, İspanya (2023–2024)",
        "Bachelor of Science – İnşaat Mühendisliği, Orta Doğu Teknik Üniversitesi, Ankara, Türkiye (2018–2023)"
      ],
      skillsTitle: "🛠️ Yetenekler ve Araçlar",
      skills: [
        "Microsoft Office & Excel (VBA dahil)",
        "MATLAB",
        "AutoCAD",
        "SAP",
        "React, GitHub (başlangıç)",
        "Diller: İngilizce (akıcı), Türkçe (ana dil), İspanyolca (başlangıç)"
      ],
      softSkillsTitle: "💡 Kişisel Beceriler",
      softSkills: [
        "Analitik düşünce", "Güçlü iletişim", "Detaylara önem verme", "Dakiklik",
        "Proaktiflik", "Takım çalışması", "Baskı altında sakinlik", "Güvenilir ve düzenli",
        "Hızlı adaptasyon", "Açık fikirlilik"
      ],
      interestsTitle: "🎭 İlgi Alanları",
      interests: "Tiyatroya ilgi duyarım, bateri çalarım, koşmayı severim ve yeni yerler keşfetmeyi çok severim. İnsanlarla tanışmak ve farklı bakış açıları öğrenmekten keyif alırım.",
      contactTitle: "📫 İletişim",
      location: "📍 Barselona, İspanya",
      email: "📧 efeontarhan@gmail.com",
      cv: "⬇️ CV’mi İndir"
    },
        de: {
      greeting: "🧑‍💼 Über mich",
      intro: "Hallo, ich bin Efe!\nIch lebe derzeit in Barcelona und schließe meinen Master of Science in Technologie- und Ingenieurmanagement ab. Meine Masterarbeit beschäftigt sich mit der Reduzierung der Abwanderungsrate in SaaS-Produkten durch die Analyse von Kundentreue und Nutzererfahrung.",
      background: "Ich habe zwischen 2018 und 2023 Bauingenieurwesen an der Middle East Technical University in Ankara studiert. Mit der Zeit entwickelte ich ein starkes Interesse an Geschäftswachstum und Innovation und entschied mich, mich auf Management und Strategie zu konzentrieren.",
      workTitle: "💼 Berufserfahrung",
      work: [
        "<strong>Beymen Group, Istanbul</strong> – Praktikum im Bereich Vertriebsentwicklung (Jul 2023 – Sep 2023): Erstellung von Leistungsberichten, interne Kommunikation und Unterstützung von Filialabläufen.",
        "<strong>INCO International, Dubai</strong> – Praktikum im Bereich Beschaffung (Jun 2022 – Aug 2022): Optimierung von Lieferkettenprozessen, Materialbeschaffung und Zusammenarbeit mit Lieferanten."
      ],
      eduTitle: "📚 Ausbildung",
      education: [
        "Master of Science – Technologie- und Ingenieurmanagement, Universitat Rovira i Virgili, Tarragona, Spanien (2023–2024)",
        "Bachelor of Science – Bauingenieurwesen, Middle East Technical University, Ankara, Türkei (2018–2023)"
      ],
      skillsTitle: "🛠️ Fähigkeiten & Tools",
      skills: [
        "Microsoft Office & Excel (inkl. VBA)",
        "MATLAB",
        "AutoCAD",
        "SAP",
        "React, GitHub (Anfänger)",
        "Sprachen: Englisch (fließend), Türkisch (Muttersprache), Spanisch (Anfänger)"
      ],
      softSkillsTitle: "💡 Soziale Kompetenzen",
      softSkills: [
        "Analytisches Denken", "Gute Kommunikationsfähigkeit", "Detailorientiert", "Pünktlich",
        "Proaktiv", "Teamfähig", "Ruhig unter Druck", "Zuverlässig und organisiert",
        "Schnelle Anpassungsfähigkeit", "Aufgeschlossenheit"
      ],
      interestsTitle: "🎭 Interessen",
      interests: "Ich interessiere mich für Theater, spiele Schlagzeug, jogge gerne und entdecke neue Orte. Ich liebe es, Menschen kennenzulernen und verschiedene Perspektiven zu verstehen.",
      contactTitle: "📫 Kontakt",
      location: "📍 Wohnhaft in Barcelona",
      email: "📧 efeontarhan@gmail.com",
      cv: "⬇️ Lebenslauf herunterladen"
    },

    es: {
      greeting: "🧑‍💼 Sobre mí",
      intro: "¡Hola! Soy Efe.\nActualmente vivo en Barcelona y estoy terminando mi Máster en Gestión de Tecnología e Ingeniería. Mi tesis trata sobre cómo reducir la tasa de cancelación en productos SaaS analizando la fidelización del cliente y la experiencia del usuario.",
      background: "Estudié Ingeniería Civil en la Middle East Technical University en Ankara entre 2018 y 2023. Con el tiempo, desarrollé un gran interés por los negocios, el crecimiento y la innovación, lo que me llevó a orientarme hacia la gestión y la estrategia.",
      workTitle: "💼 Experiencia Laboral",
      work: [
        "<strong>Beymen Group, Estambul</strong> – Prácticas en Desarrollo Comercial (Jul 2023 – Sep 2023): Elaboración de informes de rendimiento, comunicación interna y apoyo operativo en tiendas.",
        "<strong>INCO International, Dubái</strong> – Prácticas en Compras (Jun 2022 – Ago 2022): Mejora de procesos de la cadena de suministro, adquisición de materiales y colaboración con proveedores."
      ],
      eduTitle: "📚 Educación",
      education: [
        "Máster en Gestión de Tecnología e Ingeniería, Universitat Rovira i Virgili, Tarragona, España (2023–2024)",
        "Grado en Ingeniería Civil, Middle East Technical University, Ankara, Turquía (2018–2023)"
      ],
      skillsTitle: "🛠️ Habilidades y Herramientas",
      skills: [
        "Microsoft Office y Excel (incl. VBA)",
        "MATLAB",
        "AutoCAD",
        "SAP",
        "React, GitHub (principiante)",
        "Idiomas: Inglés (fluido), Turco (nativo), Español (principiante)"
      ],
      softSkillsTitle: "💡 Habilidades Personales",
      softSkills: [
        "Pensamiento analítico", "Buena comunicación", "Atención al detalle", "Puntualidad",
        "Proactividad", "Trabajo en equipo", "Tranquilidad bajo presión", "Organización y fiabilidad",
        "Capacidad de adaptación", "Mentalidad abierta"
      ],
      interestsTitle: "🎭 Intereses",
      interests: "Me gusta el teatro, tocar la batería, correr y descubrir nuevos lugares. Disfruto conectando con personas, escuchando sus historias y aprendiendo de diferentes puntos de vista.",
      contactTitle: "📫 Contacto",
      location: "📍 Residencia en Barcelona",
      email: "📧 efeontarhan@gmail.com",
      cv: "⬇️ Descargar mi CV"
    }

  };

  const t = content[language];

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="tr">TR</option>
          <option value="de">DE</option>
          <option value="es">ES</option>
        </select>
      </div>

      <img
        src={process.env.PUBLIC_URL + "/1739025835152.jpg"}
        alt="Efe Öntarhan"
        style={{ width: 160, borderRadius: '50%', marginBottom: '1.5rem' }}
      />

      <h2>{t.greeting}</h2>
      <p>{t.intro}</p>
      <p>{t.background}</p>

      <h2>{t.workTitle}</h2>
      <ul>{t.work.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>

      <h2>{t.eduTitle}</h2>
      <ul>{t.education.map((item, i) => <li key={i}>{item}</li>)}</ul>

      <h2>{t.skillsTitle}</h2>
      <ul>{t.skills.map((item, i) => <li key={i}>{item}</li>)}</ul>

      <h2>{t.softSkillsTitle}</h2>
      <ul>{t.softSkills.map((item, i) => <li key={i}>{item}</li>)}</ul>

      <h2>{t.interestsTitle}</h2>
      <p>{t.interests}</p>

      <h2>{t.contactTitle}</h2>
      <p>{t.location}</p>
      <p>{t.email}</p>
      <a href={process.env.PUBLIC_URL + "/Efe Öntarhan CV.pdf"} download>
        <button>{t.cv}</button>
      </a>
    </main>
  );
}

export default App;
