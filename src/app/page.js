import Projects from './components/Projects';
import Contact from './components/Contact';
import PdfViewer from './components/PdfViewer';

export default function Home() {
  return (
    <main>
      <section id="home" className="page-section">
        <div className="section-content">
          <h1>Elisha Nkunzimana</h1>
          <p>Software Engineer, Web & App Developer</p>
          <div className="boxes">
            <div className="box">
              <div className="box-content">
                <img src="/software-dev.jpg" alt="Software Development" />
                <div>
                  <h2 className="blue-underline">Software Development</h2>
                  <p>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box-content">
                <img src="/web-dev.jpg" alt="Web Development" />
                <div>
                  <h2 className="orange-underline">Web Development</h2>
                  <p>Passionate about Web Development. Over 5 years of development experience in HTML, CSS, JS, and NextJS frameworks.</p>
                </div>
              </div>
            </div>
            <div className="box box3">
              <div className="box-content">
                <img src="/flutter.jpg" alt="Flutter Development" />
                <div>
                  <h2 className="pink-underline">Flutter Dev, Android and IOS</h2>
                  <p>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter, React and Swift frameworks.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4rem', gap: '1rem' }}>
            <h1>Resume and more about me!</h1>
            <img src="/download.. 2.png" alt="Download arrow" style={{ height: '4.3rem', width: 'auto', flexShrink: 0 }} />
            <PdfViewer />
          </div>
        </div>
      </section>
      <Projects />
      <Contact />
    </main>
  );
}
