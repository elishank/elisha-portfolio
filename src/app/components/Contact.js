export default function Contact() {
  return (
    <section id="contact" className="page-section" style={{ justifyContent: 'flex-end', alignItems: 'flex-start', minHeight: 'auto' }}>
      <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <h1>Contact Me</h1>
        <p >Have an exciting project you need help with?<br />Send me an email! I'd love to get in touch.</p>
        <div className="contact-links" style={{ marginTop: '2rem' }}>
          <a href="mailto:elishankunzi2@outlook.com" style={{ display: 'block', marginBottom: '1rem', fontSize: '1.7rem', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease', opacity: 1 }}>Email</a>
          <a href="https://linkedin.com/in/elisha-nkunzimana" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '1rem', fontSize: '1.7rem', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease', opacity: 1 }}>LinkedIn</a>
          <a href="https://github.com/elishank" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '1rem', fontSize: '1.7rem', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease', opacity: 1 }}>GitHub</a>
        </div>
      </div>
    </section>
  );
}
