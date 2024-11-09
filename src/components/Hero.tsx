// components/Hero.tsx
import React from 'react';
import "../css-files/hero.css"
import Link from 'next/link';



const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/images/me.jpg" alt="Your Name" className="hero-image" />
        <h1 className="hero-title">IQRA NAZ</h1>
        <p className="hero-description">
          I am a passionate web developer skilled in crafting responsive visually appealing websites
        </p> 
        <Link href="https://github.com/IqraNaz421/portfolio.git"> <button className="explore-button">Hire Me</button></Link>
       
      </div>
    </section>
  );
};

export default Hero;

