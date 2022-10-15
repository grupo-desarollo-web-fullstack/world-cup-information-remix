import { useEffect } from "react";

const Balones = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main className="overflow-hidden">
      <article className="p-4 p-md-5 mb-4  text-bg-dark mt-1 pt-1 d-flex align-items-center" style={{height:'80vh'}}>
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">Los mejores balones</h1>
          <p className="lead my-3">
            El balón: el mejor amigo del futbolista. A través de los años
            cientos de diseños han rodado por las canchas del mundo. Pero solo
            21 han sido los responsables de representar a los mundiales y
            hacernos recordar bellos momentos. Descubre aquí los mejores balones
            en los Mundiales de futbol.
          </p>
          <p className="lead mb-0">
            <a href="#balones" className="text-white fw-bold">
              Saltar a la accion...
            </a>
          </p>
        </div>
      </article>

      <div className="row mb-2" id="balones">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Mundial de México
              </strong>
              <h3 className="mb-0">BALÓN TELSTAR</h3>
              <div className="mb-1 text-muted">1970</div>
              <p className="card-text mb-auto">
                En 1963 cuando la marca alemana Adidas comenzó a fabricarlos y
                el primero de la empresa fue bautizado Telstar, en honor al
                satélite que hacía posible la transmisión del mundial de México
                1970.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img
                className="bd-placeholder-img design__img"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665800625/telstar70_1_1_1_e1222f1c3f.jpg?updated_at=2022-10-15T02:23:46.171Z"
                alt="TELSTAR"
                style={{ height: 250, width:200}}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Mundial de Argentina
              </strong>
              <h3 className="mb-0">BALÓN TANGO</h3>
              <div className="mb-1 text-muted">1978</div>
              <p className="mb-auto">
                El balón que más historia ha marcado en los mundiales fue el
                utilizado en el mundial de Argentina 1978 donde el balón Tango
                hizo su debut y fue de tal agrado que perduro durante 6
                mundiales.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img
                className="bd-placeholder-img design__img"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665800052/tango_c0c84d055f.png?updated_at=2022-10-15T02:14:13.229Z"
                alt="TANGO"
                style={{ height: 250, width:200}}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Mundial de Corea del Sur y Japón
              </strong>
              <h3 className="mb-0">BALÓN FEVERNOVA</h3>
              <div className="mb-1 text-muted">2002</div>
              <p className="mb-auto">
                El llamado Balón Fevernova con un innovador diseño haciendo
                alusión a las culturas asiáticas, empleo una capa de espuma para
                darle un mejor rendimiento al esférico y con una carcasa tejida
                de tres capas.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img
                className="bd-placeholder-img design__img"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665800422/fevernova2002_1_2_2d2c617b80.jpg?updated_at=2022-10-15T02:20:22.975Z"
                alt="FEVERNOVA"
                style={{ height: 250, width:200}}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Mundial de Alemania
              </strong>
              <h3 className="mb-0">BALÓN ADIDAS + TEAMGEIST</h3>
              <div className="mb-1 text-muted">2006</div>
              <p className="mb-auto">
                El Teamgeist está formado por 14 piezas, reduciendo la cantidad
                de puntos de contacto entre las piezas en un 60%, creando en
                definitiva un balón más esférico.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img
                className="bd-placeholder-img design__img"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665799180/balon_adidas_team_geist_ffbe98cdba.png?updated_at=2022-10-15T01:59:40.929Z"
                alt="BALÓN ADIDAS + TEAMGEIST"
                style={{ height: 250, width:200}}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Mundial de Sudáfrica
              </strong>
              <h3 className="mb-0">BALÓN JABULANI</h3>
              <div className="mb-1 text-muted">2010</div>
              <p className="mb-auto">
                El mundo volteaba los ojos por primera vez al continente
                africano, pero desafortunadamente este mundial de Sudáfrica 2010
                se vio afectado por el que es considerado el peor balón de la
                historia.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img
                className="bd-placeholder-img design__img"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665800050/JABULANI_1_90adc4c014.jpg?updated_at=2022-10-15T02:14:11.084Z"
                alt="JABULANI"
                style={{ height: 250, width:200}}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Mundial de Brasil
              </strong>
              <h3 className="mb-0">BALÓN BRAZUCA</h3>
              <div className="mb-1 text-muted">2014</div>
              <p className="mb-auto">
                El balón Brazuca está hecho con seis paneles en forma de propela
                unidas térmicamente. El Jabulani por su parte tenía 8 secciones,
                el Teamgeist 14 y un balón tradicional tiene 32.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img
                className="bd-placeholder-img design__img"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665799181/brazuca_759fef7845.png?updated_at=2022-10-15T01:59:41.429Z"
                alt="BRAZUCA"
                style={{ height: 250, width:200}}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Mundial de Rusia
              </strong>
              <h3 className="mb-0">BALÓN RUSIA</h3>
              <div className="mb-1 text-muted">2018</div>
              <p className="mb-auto">
                El Telstar 18 regresa a los orígenes de blanco y negro y tiene
                en su diseño una carcasa con elementos reciclables y lo más
                llamativo un chip insertado dentro del balón para ayudar a los arbitros.
              </p>
            </div>
            <img
                className="bd-placeholder-img design__img"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665800782/61_EK_5gan_O_L_AC_UL_600_SR_600_400_1_549da592b3.jpg?updated_at=2022-10-15T02:26:23.722Z"
                alt="RUSIA"
                style={{ height: 250, width:200}}
              />  
          </div>
        </div>
      </div>
    </main>
  );
};
export default Balones;
