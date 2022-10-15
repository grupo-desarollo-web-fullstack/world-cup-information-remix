import { useEffect } from "react";

const LosQueNuncaLlegaron = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main>
      <article className="p-4 p-md-5 mb-4 text-bg-dark pt-1 d-flex align-items-center" style={{height:'80vh'}}>
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">Los que no llegaron</h1>
          <p className="lead my-3">
            En esta seccion se mostrara a los jugadores que no clasificaron al
            mundial de Qatar 2022, asi como tambien datos resaltantes de cada
            uno de ellos.
          </p>
          <p className="lead mb-0">
            <a href="#jugadores" className="text-white fw-bold">
              Saltar a la accion...
            </a>
          </p>
        </div>
      </article>

      <section className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img rounded-circle"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665717248/Zlatan_00006e9807.jpg?updated_at=2022-10-14T03:14:09.526Z"
                alt="Zlatan"
                width={140}
                height={140}
              />
            </div>

            <h2 className="fw-normal">Zlatan Ibrahimović</h2>
            <p>
              Futbolista sueco de ascendencia bosniocroata.​ Juega de delantero
              y su equipo actual es el A. C. Milan de la Serie A de Italia. Es
              considerado como uno de los mejores delanteros de todos los
              tiempos.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img rounded-circle"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665794925/haaalnad12_25bf76f232.jpg?updated_at=2022-10-15T00:48:46.133Z"
                alt="Zlatan"
                width={140}
                height={140}
              />
            </div>

            <h2 className="fw-normal">Erling Haaland</h2>
            <p>
              Futbolista noruego que juega como delantero en el Manchester City
              F. C. de la Premier League de Inglaterra, y en la selección de
              fútbol de Noruega, el cual es conocido como el proximo CR7.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img rounded-circle"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665795055/mohamed_salasas1212_c4d90465b3.webp?updated_at=2022-10-15T00:50:56.593Z"
                alt="Zlatan"
                width={140}
                height={140}
              />
            </div>

            <h2 className="fw-normal">Mohamed Salah</h2>
            <p>
              Futbolista egipcio que juega como delantero en el Liverpool F. C.
              de la Premier League de Inglaterra, y la selección de Egipto, de
              la cual es su capitán; considerado tambien el mejor de Europa.
            </p>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette" id="jugadores">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                El retiro de Zlatan del futbol sueco,{" "}
                <span className="text-muted">una moraleja para muchos.</span>
              </h2>
              <p className="lead">
                Zlatan Ibrahimović se retiro del futbol sueco en el año 2016 a
                causa de un desprestigio parte de sus selección, donde
                mencionaron reiteradas veces que el equipo de suecia ya no
                necesita mas a alguien de su edad y que su mejor momento, ya
                habia pasado, sin embargo Ibra demostro todo lo cantrario, ya
                que a la edad de 40 años fue fichado por el AC Millan.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto design__img"
                style={{ height: 500 }}
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665795491/ibrahimovic_suecia_1920_1_d59672269a.jpg?updated_at=2022-10-15T00:58:12.354Z"
                alt="Zlatan"
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Erling Haaland el joven promesa del fútbol noruego,{" "}
                <span className="text-muted">
                  situado entre los mejores del mundo.
                </span>
              </h2>
              <p className="lead">
                Erling Haaland ha demostrado talento, calidad y resultados en
                los partidos de su equipo a sus 22 años de edad, sin embargo a
                pesar de esto no ha logrado obtener los mismos resultados con la
                selección Noruega, ya que su equipo no logro obtener el puntaje
                requerido para poder clasificar al mundial de qatar 2022; por
                otro lado; aun puede lograr jugar en un mundial gracias a su
                edad.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto design__img"
                style={{ height: 500 }}
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665795486/erling_haaland_marco_hat_trick_con_noruega_1_f4ff6e5a61.webp?updated_at=2022-10-15T00:58:07.143Z"
                alt="Haaland"
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette mb-3">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Mohamed Salah el astro egipcio,
                <span className="text-muted">
                  considerdo el mejor de Europa.
                </span>
              </h2>
              <p className="lead">
                Mohamed Salah es un jugador egipcio de gran calidad y lo a
                demostrado en varios partidos de la Premier League en el cual se
                destaca por sus increibles goles, que a veces son dificiles de
                creer y su gran facilidad de quitarse a un oponente del frente;
                sin embargo en este año la selección de Egipto no logro
                clasificar al mundial, en vista de que los equipos contra los
                que se enfrento eran de un alto nivel, en comparacion de su
                equipo en el cual tan solo el resalta.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto design__img"
                style={{ height: 500 }}
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665797812/TNU_2_NMI_7_AFAXVFHSDT_5_OJXBHAI_b07f7db72d.jpg?updated_at=2022-10-15T01:36:52.856Z"
                alt="Haaland"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LosQueNuncaLlegaron;
