import React from 'react';

function App() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Efe Öntarhan</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>Business & Tech Enthusiast | Master's Student | Sales & Strategy Intern</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>About Me / Hakkımda / Sobre mí</h2>
        <p>I’m a master's student in Technology and Engineering Management, currently in the thesis phase...</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Experience</h2>
        <ul>
          <li>Beymen Group – Sales Development Intern (2023)</li>
          <li>INCO Intl, Dubai – Procurement Intern (2022)</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Skills</h2>
        <ul>
          <li>Analytical Thinking & Communication</li>
          <li>Excel, AutoCAD, MATLAB</li>
          <li>English, Turkish, Spanish</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Contact</h2>
        <p>📧 efeontarhan@gmail.com</p>
        <p>📍 Barcelona, Spain</p>
        <a href="/Efe_Ontarhan_CV.pdf" download>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Download CV</button>
        </a>
      </section>
    </main>
  );
}

export default App;
