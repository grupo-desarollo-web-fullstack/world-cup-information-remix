import Bootstrap from "~/styles/css/modules/bootstrap.css";
import styleBootstrap from "~/styles/css/modules/styleBootstrap.css";
import carrusel from "~/styles/css/modules/carrusel.css";
import { useEffect } from "react";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: Bootstrap,
    },
    {
      rel: "stylesheet",
      href: styleBootstrap,
    },
    {
      rel: "stylesheet",
      href: carrusel,
    },
  ];
};

const LosQueNuncaLlegaron = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main>
      <div class="p-4 p-md-5 mb-4 text-bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 fst-italic">Los que no llegaron</h1>
          <p class="lead my-3">
            En esta seccion se mostrara a los jugadores que no clasificaron al
            mundial de Qatar 2022, asi como tambien datos resaltantes de cada
            uno de ellos.
          </p>
          <p class="lead mb-0">
            <a href="#" class="text-white fw-bold">
              Saltar a la accion...
            </a>
          </p>
        </div>
      </div>

      <section class="container marketing">
        <div class="row">
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665717248/Zlatan_00006e9807.jpg?updated_at=2022-10-14T03:14:09.526Z"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2 class="fw-normal">Zlatan Ibrahimović</h2>
            <p>
              Futbolista sueco de ascendencia bosniocroata.​ Juega de delantero
              y su equipo actual es el A. C. Milan de la Serie A de Italia. Es
              considerado como uno de los mejores delanteros de todos los
              tiempos.
            </p>
          </div>

          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2 class="fw-normal">Erling Haaland</h2>
            <p>
              Futbolista noruego que juega como delantero en el Manchester City
              F. C. de la Premier League de Inglaterra, y en la selección de
              fútbol de Noruega, el cual es conocido como el proximo CR7.
            </p>
          </div>

          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2 class="fw-normal">Mohamed Salah</h2>
            <p>
              Futbolista egipcio que juega como delantero en el Liverpool F. C.
              de la Premier League de Inglaterra, y la selección de Egipto, de
              la cual es su capitán; considerado tambien el mejor de Europa.
            </p>
          </div>

          <hr class="featurette-divider"></hr>

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">
                El retiro de Zlatan del futbol sueco,{" "}
                <span class="text-muted">una moraleja para muchos.</span>
              </h2>
              <p class="lead">
                Zlatan Ibrahimović se retiro del futbol sueco en el año 2016 a
                causa de un desprestigio parte de sus selección, donde
                mencionaron reiteradas veces que el equipo de suecia ya no
                necesita mas a alguien de su edad y que su mejor momento, ya
                habia pasado, sin embargo Ibra demostro todo lo cantrario, ya
                que a la edad de 40 años fue fichado por el AC Millan.
              </p>
            </div>
            <div class="col-md-5">
              <svg
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <hr class="featurette-divider"></hr>

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">
                Erling Haaland el joven promesa del fútbol noruego,{" "}
                <span class="text-muted">
                  situado entre los mejores del mundo.
                </span>
              </h2>
              <p class="lead">
                Erling Haaland ha demostrado talento, calidad y resultados en
                los partidos de su equipo a sus 22 años de edad, sin embargo a
                pesar de esto no ha logrado obtener los mismos resultados con la
                selección Noruega, ya que su equipo no logro obtener el puntaje
                requerido para poder clasificar al mundial de qatar 2022; por
                otro lado; aun tiene la oportunidad de seguir intentandolo
                gracias a su edad y su buena condición fisica.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <svg
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <hr class="featurette-divider"></hr>

          <div class="row featurette mb-3">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">
                Mohamed Salah el astro egipcio,
                <span class="text-muted">
                  considerdo por muchos el mejor de Europa.
                </span>
              </h2>
              <p class="lead">
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
            <div class="col-md-5">
              <svg
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>





        </div>
      </section>
    </main>
  );
};

export default LosQueNuncaLlegaron;
