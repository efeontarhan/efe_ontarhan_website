import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      greeting: "🧑‍💼 About Me",
      intro: "Hi, I'm Efe!\nI'm currently living in Barcelona and finishing my master's degree in Technology and Engineering Management. Right now, I'm focused on my thesis about how to reduce churn in SaaS products by understanding customer loyalty and user experience. It’s a topic that really excites me because it connects strategy, tech, and human behavior — my favorite mix.",
      background: "I originally studied Civil Engineering at METU (Ankara), but over time I found myself drawn more toward business, growth, and innovation. That’s why I made the shift — and I’ve never looked back.",
      workTitle: "💼 Work Experience",
      work: [
        "Beymen Group – Sales Development Intern (2023): Worked on performance reports, internal communication, and store operations support.",
        "INCO International – Procurement Intern (Dubai) (2022): Helped streamline supply chain processes, sourced materials, and collaborated with suppliers."
      ],
      eduTitle: "📚 Education",
      education: [
        "MSc – Technology & Engineering Management, Universitat Rovira i Virgili, Spain",
        "BSc – Civil Engineering, Middle East Technical University, Turkey"
      ],
      skillsTitle: "🛠️ Skills & Tools",
      skills: [
        "Microsoft Office & Excel (incl. VBA)",
        "MATLAB, AutoCAD",
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
      interests: "Outside of work, I’m into theater, playing the drums, jogging, and just exploring new places. I enjoy connecting with people, hearing their stories, and learning from different ways of thinking.",
      contactTitle: "📫 Contact",
      location: "📍 Based in Barcelona",
      email: "📧 efeontarhan@gmail.com",
      cv: "⬇️ Download my CV"
    },
    tr: {
      greeting: "🧑‍💼 Hakkımda",
      intro: "Merhaba, ben Efe!\nŞu anda Barselona'da yaşıyorum ve Teknoloji ve Mühendislik Yönetimi yüksek lisansımı tamamlıyorum. Tez konum, SaaS ürünlerinde müşteri sadakati ve kullanıcı deneyimini anlayarak müşteri kaybını azaltmaya odaklanıyor.",
      background: "ODTÜ'de İnşaat Mühendisliği okudum ama zamanla ilgim iş, büyüme ve inovasyona kaydı. Bu yüzden yön değiştirdim — hiç pişman olmadım.",
      workTitle: "💼 İş Deneyimi",
      work: [
        "Beymen Group – Satış Geliştirme Stajyeri (2023): Performans raporları, iç iletişim ve mağaza operasyonlarına destek verdim.",
        "INCO International – Satın Alma Stajyeri (Dubai) (2022): Tedarik zinciri süreçlerini iyileştirdim, malzeme tedarik ettim, tedarikçilerle iş birliği yaptım."
      ],
      eduTitle: "📚 Eğitim",
      education: [
        "Yüksek Lisans – Teknoloji ve Mühendislik Yönetimi, Universitat Rovira i Virgili, İspanya",
        "Lisans – İnşaat Mühendisliği, Orta Doğu Teknik Üniversitesi, Türkiye"
      ],
      skillsTitle: "🛠️ Yetenekler ve Araçlar",
      skills: [
        "Microsoft Office & Excel (VBA dahil)",
        "MATLAB, AutoCAD",
        "React, GitHub (başlangıç)",
        "Diller: İngilizce (akıcı), Türkçe (ana dil), İspanyolca (başlangıç)"
      ],
      softSkillsTitle: "💡 Kişisel Beceriler",
      softSkills: [
        "Analitik düşünce", "İyi iletişim", "Detaylara dikkat", "Dakiklik",
        "Proaktiflik", "Takım ruhu", "Stres altında sakinlik", "Güvenilir ve düzenli",
        "Hızlı uyum sağlama", "Açık fikirlilik"
      ],
      interestsTitle: "🎭 İlgi Alanları",
      interests: "Tiyatro, bateri çalmak, koşmak ve yeni yerler keşfetmekten keyif alırım. İnsanları tanımayı ve onların bakış açısından öğrenmeyi severim.",
      contactTitle: "📫 İletişim",
      location: "📍 Barselona'da yaşıyorum",
      email: "📧 efeontarhan@gmail.com",
      cv: "⬇️ CV'yi indir"
    },
    de: {
      greeting: "🧑‍💼 Über mich",
      intro: "Hallo, ich bin Efe!\nIch lebe derzeit in Barcelona und beende meinen Master in Technologie- und Ingenieurmanagement. Meine Abschlussarbeit konzentriert sich darauf, die Abwanderung im SaaS-Bereich durch Analyse von Kundentreue und Nutzererfahrung zu reduzieren.",
      background: "Ich habe Bauingenieurwesen an der METU (Ankara) studiert, aber mein Interesse verlagerte sich mit der Zeit auf Geschäftsentwicklung und Innovation.",
      workTitle: "💼 Berufserfahrung",
      work: [
        "Beymen Group – Praktikant im Bereich Vertriebsentwicklung (2023): Arbeitete an Leistungsberichten, Kommunikation und operativer Unterstützung.",
        "INCO International – Einkaufspraktikant (Dubai) (2022): Optimierung der Lieferkette, Zusammenarbeit mit Lieferanten."
      ],
      eduTitle: "📚 Ausbildung",
      education: [
        "MSc – Technologie- und Ingenieurmanagement, Universitat Rovira i Virgili, Spanien",
        "BSc – Bauingenieurwesen, METU, Türkei"
      ],
      skillsTitle: "🛠️ Fähigkeiten & Tools",
      skills: [
        "Microsoft Office & Excel (inkl. VBA)",
        "MATLAB, AutoCAD",
        "React, GitHub (Anfänger)",
        "Sprachen: Englisch (fließend), Türkisch (Muttersprache), Spanisch (Anfänger)"
      ],
      softSkillsTitle: "💡 Soziale Kompetenzen",
      softSkills: [
        "Analytisches Denken", "Gute Kommunikation", "Detailorientiert", "Pünktlich",
        "Proaktiv", "Teamfähig", "Ruhig unter Druck", "Zuverlässig und organisiert",
        "Schnelle Anpassung", "Offenheit"
      ],
      interestsTitle: "🎭 Interessen",
      interests: "Ich interessiere mich für Theater, spiele Schlagzeug, jogge gern und entdecke neue Orte. Ich liebe es, von anderen zu lernen.",
      contactTitle: "📫 Kontakt",
      location: "📍 Wohnhaft in Barcelona",
      email: "📧 efeontarhan@gmail.com",
      cv: "⬇️ Lebenslauf herunterladen"
    },
    es: {
      greeting: "🧑‍💼 Sobre mí",
      intro: "¡Hola! Soy Efe.\nActualmente vivo en Barcelona y estoy terminando mi máster en Gestión de Tecnología e Ingeniería. Mi tesis se centra en reducir el churn en productos SaaS analizando la lealtad del cliente y la experiencia del usuario.",
      background: "Estudié Ingeniería Civil en METU (Ankara), pero pronto me interesé más por los negocios, el crecimiento y la innovación.",
      workTitle: "💼 Experiencia Laboral",
      work: [
        "Beymen Group – Pasantía en Desarrollo de Ventas (2023): Trabajé en informes, comunicación interna y apoyo operativo.",
        "INCO International – Pasante de Compras (Dubái) (2022): Mejoré procesos de la cadena de suministro y colaboré con proveedores."
      ],
      eduTitle: "📚 Educación",
      education: [
        "Máster – Gestión de Tecnología e Ingeniería, Universitat Rovira i Virgili, España",
        "Grado – Ingeniería Civil, METU, Turquía"
      ],
      skillsTitle: "🛠️ Habilidades y Herramientas",
      skills: [
        "Microsoft Office & Excel (incl. VBA)",
        "MATLAB, AutoCAD",
        "React, GitHub (principiante)",
        "Idiomas: Inglés (fluido), Turco (nativo), Español (principiante)"
      ],
      softSkillsTitle: "💡 Habilidades Personales",
      softSkills: [
        "Pensamiento analítico", "Comunicación efectiva", "Atención al detalle", "Puntualidad",
        "Proactividad", "Trabajo en equipo", "Tranquilidad bajo presión", "Fiabilidad y organización",
        "Adaptabilidad", "Mentalidad abierta"
      ],
      interestsTitle: "🎭 Intereses",
      interests: "Me gusta el teatro, tocar batería, correr y descubrir nuevos lugares. Me encanta conocer personas y aprender de diferentes puntos de vista.",
      contactTitle: "📫 Contacto",
      location: "📍 Con base en Barcelona",
      email: "📧 efeontarhan@gmail.com",
      cv: "⬇️ Descargar CV"
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

      <h2>{t.greeting}</h2>
      <p>{t.intro}</p>
      <p>{t.background}</p>

      <h2>{t.workTitle}</h2>
      <ul>{t.work.map((item, i) => <li key={i}>{item}</li>)}</ul>

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
