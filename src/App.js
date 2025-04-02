
import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      name: "Efe Öntarhan",
      title: "Master's Student in Technology & Engineering Management | Sales & Strategy Enthusiast | Based in Barcelona",
      about: "About Me",
      aboutText: "I’m currently writing my master’s thesis in Technology and Engineering Management at Universitat Rovira i Virgili. My academic background started in Civil Engineering at METU (ODTÜ), but my interest quickly shifted to the intersection of business and technology. I'm passionate about sales, operations, and strategic growth — especially in environments where innovation and human-centered thinking matter.",
      thesis: "My thesis focuses on reducing churn rate in SaaS by analyzing customer loyalty and user experience.",
      skills: "Skills",
      softSkills: "Punctuality, Detail-Oriented, Communication, Emotional Intelligence, Teamwork",
      tools: "Excel (VBA), AutoCAD, MATLAB, Microsoft Office",
      languages: "English (Fluent), Turkish (Native), Spanish (Beginner)",
      contact: "Contact",
      downloadCV: "Download CV",
      location: "Barcelona, Spain"
    },
    tr: {
      name: "Efe Öntarhan",
      title: "Teknoloji ve Mühendislik Yönetimi Yüksek Lisans Öğrencisi | Satış ve Strateji Meraklısı | Barselona’da yaşıyor",
      about: "Hakkımda",
      aboutText: "Şu anda Universitat Rovira i Virgili’de Teknoloji ve Mühendislik Yönetimi üzerine yüksek lisans tezim üzerinde çalışıyorum. Lisans eğitimimi ODTÜ İnşaat Mühendisliği bölümünde tamamladım fakat ilgi alanım hızla iş ve teknoloji kesişiminde yoğunlaştı. Satış, operasyon ve stratejik büyüme konularına özellikle yenilikçi ve insan odaklı ortamlarda büyük ilgi duyuyorum.",
      thesis: "Tezim, SaaS sektöründe müşteri sadakati ve kullanıcı deneyimini analiz ederek müşteri kaybını azaltmaya odaklanıyor.",
      skills: "Yetenekler",
      softSkills: "Dakiklik, Detaylara Önem Verme, İletişim, Duygusal Zeka, Takım Çalışması",
      tools: "Excel (VBA), AutoCAD, MATLAB, Microsoft Office",
      languages: "İngilizce (İleri), Türkçe (Ana Dil), İspanyolca (Başlangıç)",
      contact: "İletişim",
      downloadCV: "CV’yi İndir",
      location: "Barselona, İspanya"
    },
    de: {
      name: "Efe Öntarhan",
      title: "Masterstudent für Technologie- & Ingenieurmanagement | Vertriebs- & Strategie-Enthusiast | Lebt in Barcelona",
      about: "Über mich",
      aboutText: "Derzeit schreibe ich meine Masterarbeit im Bereich Technologie- und Ingenieurmanagement an der Universitat Rovira i Virgili. Mein akademischer Hintergrund liegt im Bauingenieurwesen an der METU (ODTÜ), aber mein Interesse verlagerte sich schnell auf die Schnittstelle von Wirtschaft und Technologie.",
      thesis: "Meine Masterarbeit befasst sich mit der Reduzierung der Kündigungsrate im SaaS-Bereich durch Analyse von Kundentreue und Nutzererfahrung.",
      skills: "Fähigkeiten",
      softSkills: "Pünktlichkeit, Detailverliebtheit, Kommunikation, Emotionale Intelligenz, Teamarbeit",
      tools: "Excel (VBA), AutoCAD, MATLAB, Microsoft Office",
      languages: "Englisch (Fließend), Türkisch (Muttersprache), Spanisch (Anfänger)",
      contact: "Kontakt",
      downloadCV: "Lebenslauf herunterladen",
      location: "Barcelona, Spanien"
    },
    es: {
      name: "Efe Öntarhan",
      title: "Estudiante de Máster en Gestión de Tecnología e Ingeniería | Apasionado por las Ventas y la Estrategia | Con base en Barcelona",
      about: "Sobre mí",
      aboutText: "Actualmente estoy escribiendo mi tesis de máster en Gestión de Tecnología e Ingeniería en la Universitat Rovira i Virgili. Comencé mis estudios en Ingeniería Civil en METU (ODTÜ), pero pronto enfoqué mi interés en la intersección entre los negocios y la tecnología.",
      thesis: "Mi tesis se centra en reducir la tasa de abandono en SaaS analizando la fidelidad del cliente y la experiencia del usuario.",
      skills: "Habilidades",
      softSkills: "Puntualidad, Atención al Detalle, Comunicación, Inteligencia Emocional, Trabajo en Equipo",
      tools: "Excel (VBA), AutoCAD, MATLAB, Microsoft Office",
      languages: "Inglés (Fluido), Turco (Nativo), Español (Principiante)",
      contact: "Contacto",
      downloadCV: "Descargar CV",
      location: "Barcelona, España"
    }
  };

  const t = translations[language];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 800, margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="tr">TR</option>
          <option value="de">DE</option>
          <option value="es">ES</option>
        </select>
      </div>

      <img src={process.env.PUBLIC_URL + "/1739025835152.jpg"} alt={t.name} style={{ width: 160, borderRadius: '50%' }} />
      <h1>{t.name}</h1>
      <p>{t.title}</p>

      <section>
        <h2>{t.about}</h2>
        <p>{t.aboutText}</p>
        <p>{t.thesis}</p>
      </section>

      <section>
        <h2>{t.skills}</h2>
        <ul>
          <li>{t.languages}</li>
          <li>{t.tools}</li>
          <li>{t.softSkills}</li>
        </ul>
      </section>

      <section>
        <h2>{t.contact}</h2>
        <p>📧 efeontarhan@gmail.com</p>
        <p>📍 {t.location}</p>
        <a href={process.env.PUBLIC_URL + "/Efe Öntarhan CV.pdf"} download>
          <button>{t.downloadCV}</button>
        </a>
      </section>
    </main>
  );
}

export default App;
