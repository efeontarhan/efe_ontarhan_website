
import React from 'react';

function App() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <img
        src={`${process.env.PUBLIC_URL}/1739025835152.jpg`}
        alt="Efe Öntarhan"
        style={{ width: '160px', borderRadius: '50%', marginBottom: '1.5rem' }}
      />

      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Efe Öntarhan</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Master's Student in Technology & Engineering Management | Sales & Strategy Enthusiast | Based in Barcelona
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2>About Me</h2>
        <p>
          I’m currently writing my master’s thesis in Technology and Engineering Management at Universitat Rovira i Virgili.
          My academic background started in Civil Engineering at METU (ODTÜ), but my interest quickly shifted to the intersection
          of business and technology. I'm passionate about sales, operations, and strategic growth — especially in environments
          where innovation and human-centered thinking matter.
        </p>
        <p>
          I've gained hands-on experience through internships at Beymen Group and INCO International. At Beymen, I analyzed KPI data,
          prepared internal reports, and supported communication between stores and headquarters. At INCO, I worked on procurement
          and supply chain process improvements in Dubai, where I also negotiated with suppliers and optimized inventory strategies.
        </p>
        <p>
          These experiences reflect not only my analytical mindset but also my emotional intelligence — I work well with people,
          listen carefully, and stay calm in moments of pressure. I enjoy finding common ground and creating harmony within teams.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Skills</h2>
        <ul>
          <li>Languages: English (Fluent), Turkish (Native), Spanish (Beginner)</li>
          <li>Tools: Excel (VBA), AutoCAD, MATLAB, Microsoft Office</li>
          <li>Soft Skills: Analytical Thinking, Communication, Teamwork, Adaptability, Persuasion</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Interests</h2>
        <p>
          I’m deeply into theater and performance arts, enjoy jogging to clear my mind, play drums in my spare time,
          and love discovering new cities. My personal and professional life are shaped by curiosity and people-first values.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Contact</h2>
        <p>📧 efeontarhan@gmail.com</p>
        <p>📍 Barcelona, Spain</p>
        <a href={`${process.env.PUBLIC_URL}/Efe Öntarhan CV.pdf`} download>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Download CV</button>
        </a>
      </section>
    </main>
  );
}

export default App;
