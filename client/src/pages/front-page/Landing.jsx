import "./Landing.css";
import antariksh_logo from "../../assets/landing/antariksh-logo.png";
import insta_logo from "../../assets/landing/insta_logo.svg";
// import newsletter_logo from "../../assets/landing/news_letter.svg";

function Header() {
  return (
    <header>
      <div className="ant-logo">
        <img src={antariksh_logo} alt="logo" width="120px" />
      </div>
      <nav>
        <ul>
          <li><a href="#" className="active">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTENT</a></li>
          <li><a href="#">OTHERS</a></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>FROM EARTH</h1>
        <h2>TO THE INFINITE</h2>
      </div>
      <div className="hero-content">
        Unveil the wonders of the universe with our website. Delve into the mysteries of celestial phenomena, explore the intricacies of distant galaxies, and witness the awe-inspiring beauty of our cosmos.
      </div>
      <HeroButtons />
    </section>
  );
}

function HeroButtons() {
  return (
    <div className="hero-buttons">
      <a href="https://www.instagram.com/antariksh_nitkkr/" target="_blank" className="btn insta-btn" rel="noopener noreferrer">
        <img src={insta_logo} alt="Instagram" className="insta-icon" />
        <span className="btn-text">FIND MORE</span>
      </a>
      <a href="#" className="btn newsletter-btn">
        {/* <img src={newsletter_logo} alt="Newsletter" className="newsletter-icon" /> */}
        <span className="btn-text">NEWSLETTERS</span>
      </a>
    </div>
  );
}

function Landing() {
  return (
    <div className="landing">
      <Header />
      <HeroSection />
    </div>
  );
}

export default Landing;
