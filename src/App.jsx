import './App.css'

function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <a className="brand" href="#">FORM<span> & </span>FUNCTION.</a>
        <div className="nav-links">
          <a href="#work">Our work</a>
          <a href="#services">Services</a>
          <a href="#contact" className="nav-cta">Let's talk ↗</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="eyebrow">
            <span className="status-dot"></span>
            INDEPENDENT DIGITAL STUDIO · SOUTH AFRICA
          </div>
          <h1>Good businesses<br />deserve <span>great websites.</span></h1>
          <p className="intro">
            We build distinctive digital experiences that make ambitious
            businesses look exceptional and turn more visitors into customers.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">Start a project ↗</a>
            <a className="button-secondary" href="#work">Explore our approach ↓</a>
          </div>
          <div className="hero-bottom">
            <span>DESIGN WITH INTENTION.</span>
            <span>BUILT TO MAKE AN IMPRESSION.</span>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section-heading">
            <div>
              <span className="kicker">SELECTED CONCEPTS</span>
              <h2>Made to stand out.</h2>
            </div>
            <span className="section-note">01 — 03</span>
          </div>

          <div className="project-grid">
            <article className="project project-one">
              <div className="project-art restaurant-art">
                <span className="art-label">EST. MMXXIV</span>
                <div className="restaurant-title">SŌL<br />HOUSE</div>
                <span className="art-caption">A DIFFERENT KIND OF DINING.</span>
              </div>
              <div className="project-info">
                <div><h3>Sōl House</h3><p>Restaurant & hospitality concept</p></div>
                <span>↗</span>
              </div>
            </article>

            <article className="project project-two">
              <div className="project-art beauty-art">
                <span className="beauty-small">THE ART OF</span>
                <div className="beauty-title">ÉLORA</div>
                <span className="beauty-caption">SKINCARE · RITUAL · RENEWAL</span>
              </div>
              <div className="project-info">
                <div><h3>Élora Studio</h3><p>Beauty & wellness concept</p></div>
                <span>↗</span>
              </div>
            </article>

            <article className="project project-three">
              <div className="project-art architecture-art">
                <span className="architecture-label">SPACES FOR LIVING</span>
                <div className="architecture-title">FORM<br />ARCHITECTURE</div>
                <span className="architecture-caption">LESS, BUT BETTER.</span>
              </div>
              <div className="project-info">
                <div><h3>Form Architecture</h3><p>Property & design concept</p></div>
                <span>↗</span>
              </div>
            </article>
          </div>
          <p className="disclaimer">Portfolio concepts created to demonstrate our design direction.</p>
        </section>

        <section className="services" id="services">
          <span className="kicker">WHAT WE DO</span>
          <h2>Everything your online presence<br />needs to feel <em>exceptional.</em></h2>
          <div className="service-list">
            <div><span>01</span><h3>Website design & development</h3><span>↗</span></div>
            <div><span>02</span><h3>Mobile-first experiences</h3><span>↗</span></div>
            <div><span>03</span><h3>Brand identity & art direction</h3><span>↗</span></div>
            <div><span>04</span><h3>Landing pages that convert</h3><span>↗</span></div>
          </div>
        </section>

        <section className="contact" id="contact">
          <span className="kicker">HAVE A PROJECT IN MIND?</span>
          <h2>Let's make something<br /><em>worth looking at.</em></h2>
          <p>Tell us about your business and what you want to build.</p>
          <a className="button-primary" href="mailto:dayannkulu260@gmail.com?subject=Website%20project%20enquiry">
            Get in touch ↗
            <a
  href="https://wa.me/27656492081?text=Hi%2C%20I%27m%20interested%20in%20a%20website"
  target="_blank"
  rel="noreferrer"
>
  Chat on WhatsApp
</a>
          </a>
          <span className="contact-note">dayannkulu260@gmail.com.</span>
        </section>
      </main>

      <footer>
        <a className="brand" href="#">FORM<span> & </span>FUNCTION.</a>
        <span>Independent by design.</span>
        <span>© {new Date().getFullYear()} Form & Function</span>
      </footer>
    </div>
  )
}

export default App