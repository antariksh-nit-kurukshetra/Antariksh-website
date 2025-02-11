import "../Landing/Land.css";
import antariksh_logo from "../../assets/antariksh-logo.png";
import insta_logo from "../../assets/Instagram.svg";
import newsletter_logo from "../../assets/newsletter-icon.svg";

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
      <a href="https://linktr.ee/antarikshnitkkr?utm_source=linktree_profile_share&ltsid=5645fcb7-dbd3-446a-9e52-9a081d687268 " target="_blank" className="btn newsletter-btn">
        <img src={newsletter_logo} alt="Newsletter" className="newsletter-icon" />
        <span className="btn-text">NEWSLETTERS</span>
      </a>
    </div>
  );
}

function Land() {
  return (
    <>
      <HeroSection />
    </>
  );
}

export default Land;
