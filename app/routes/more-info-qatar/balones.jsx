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

const Balones = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main>
      <div class="p-4 p-md-5 mb-4  text-bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 fst-italic">Los mejores balones</h1>
          <p class="lead my-3">
            El balón: el mejor amigo del futbolista. A través de los años
            cientos de diseños han rodado por las canchas del mundo. Pero solo
            21 han sido los responsables de representar a los mundiales y
            hacernos recordar bellos momentos. Descubre aquí los mejores balones
            en los Mundiales de futbol.
          </p>
          <p class="lead mb-0">
            <a href="#" class="text-white fw-bold">
              Saltar a la accion...
            </a>
          </p>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                Mundial de México
              </strong>
              <h3 class="mb-0">BALÓN TELSTAR</h3>
              <div class="mb-1 text-muted">1970</div>
              <p class="card-text mb-auto">
                en 1963 cuando la marca alemana Adidas comenzó a fabricarlos y
                el primero de la empresa fue bautizado Telstar, en honor al
                satélite que hacía posible la transmisión del mundial de México
                1970.
              </p>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg
                class="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                Mundial de Argentina
              </strong>
              <h3 class="mb-0">BALÓN TANGO</h3>
              <div class="mb-1 text-muted">1978</div>
              <p class="mb-auto">
                El balón que más historia ha marcado en los mundiales fue el
                utilizado en el mundial de Argentina 1978 donde el balón Tango
                hizo su debut y fue de tal agrado que perduro durante 6
                mundiales.
              </p>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg
                class="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                Mundial de Corea del Sur y Japón
              </strong>
              <h3 class="mb-0">BALÓN FEVERNOVA</h3>
              <div class="mb-1 text-muted">2002</div>
              <p class="mb-auto">
                El llamado Balón Fevernova con un innovador diseño haciendo
                alusión a las culturas asiáticas, empleo una capa de espuma para
                darle un mejor rendimiento al esférico y con una carcasa tejida
                de tres capas.
              </p>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg
                class="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                Mundial de Alemania
              </strong>
              <h3 class="mb-0">BALÓN ADIDAS +TEAMGEIST</h3>
              <div class="mb-1 text-muted">2006</div>
              <p class="mb-auto">
                El Teamgeist está formado por 14 piezas, reduciendo la cantidad
                de puntos de contacto entre las piezas en un 60%, creando en
                definitiva un balón más esférico.
              </p>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg
                class="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                Mundial de Sudáfrica
              </strong>
              <h3 class="mb-0">BALÓN JABULANI</h3>
              <div class="mb-1 text-muted">2010</div>
              <p class="mb-auto">
                El mundo volteaba los ojos por primera vez al continente
                africano, pero desafortunadamente este mundial de Sudáfrica 2010
                se vio afectado por el que es considerado el peor balón de la
                historia.
              </p>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg
                class="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                Mundial de Brasil
              </strong>
              <h3 class="mb-0">BALÓN BRAZUCA</h3>
              <div class="mb-1 text-muted">2014</div>
              <p class="mb-auto">
                El balón Brazuca está hecho con seis paneles en forma de propela
                unidas térmicamente. El Jabulani por su parte tenía 8 secciones,
                el Teamgeist 14 y un balón tradicional tiene 32.
              </p>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg
                class="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                Mundial de Rusia
              </strong>
              <h3 class="mb-0">BALÓN RUSIA</h3>
              <div class="mb-1 text-muted">2018</div>
              <p class="mb-auto">
                El Telstar 18 regresa a los orígenes de blanco y negro y tiene
                en su diseño una carcasa con elementos reciclables y lo más
                llamativo un chip insertado dentro del balón para ayudar a los arbitros.
              </p>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg
                class="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Balones;
