import HeroImg from "~/assets/img/catar-image-hero.png";

const HeroWorldCup = () => {
  return (
    <article id="hero" className="hero">
      <div className="container--hero">
        <div className="hero__info">
          <h1 className="fade-in hero__title">World Cup Information</h1>
          <p className="fade-in hero__text">
            La mejor información de la máxima competición del fútbol a nivel
            mundial, la encuentras aquí. Desde cada selección clasificada,
            pasando por los estadios hasta un simulador donde podrás tener a tu
            propio Campeón Mundial ⚽🌍.
          </p>
        </div>
        <div className="hero__img-container">
          <img
            className="appear hero__img"
            width="150"
            height="150"
            src={HeroImg}
            alt="qatar-imagen"
          />
        </div>
      </div>
    </article>
  );
};

export default HeroWorldCup;
