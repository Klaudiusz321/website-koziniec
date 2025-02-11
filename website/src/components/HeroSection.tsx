import React from "react";

interface HeroSectionProps {
  // W razie potrzeby można zdefiniować tu dowolne propsy
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Gwiazdy z klasą – Mercedes to nasza pasja
        </h1>
        <p className="hero-subtitle">
          Kochamy Mercedesy, bo luksus i precyzja idą tu w parze. Jesteśmy
          najlepsi, bo wiemy, co to prawdziwa klasa – i chcemy się nią dzielić
          z każdym fanem czterech kółek.
        </p>

        <ul className="hero-highlights">
          <li>Luksus w każdym detalu.</li>
          <li>Mercedesy, którym nie da się oprzeć.</li>
        </ul>

        <button className="hero-cta">
          Odwiedź Sklep
        </button>
      </div>

      {/* Możesz podmienić na własne zdjęcie lub grafikę */}
      <div className="hero-image">
        <img
          src="/images/mercedes-hero.jpg"
          alt="Mercedes"
          className="hero-img"
        />
      </div>
    </section>
  );
};

export default HeroSection;
