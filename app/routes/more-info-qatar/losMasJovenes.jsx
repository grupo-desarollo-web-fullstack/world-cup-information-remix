import { useEffect } from "react";

const Jovenes = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main>
      <article
        className="p-4 p-md-5 mb-4 text-bg-dark pt-1 d-flex align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">
            Los mas jovenes en jugar un mundial
          </h1>
          <p className="lead my-3">
            En esta seccion se tratara sobre aquellos jugadores que a su corta
            edad lograron clasificar y jugar un mundial.
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
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665811178/Pele_219acad319.jpg?updated_at=2022-10-15T05:19:39.020Z"
                alt="Pele"
                width={140}
                height={140}
              />
            </div>

            <h2 className="fw-normal">Pelé</h2>
            <p>
              A los 17 años, 7 meses y 23 días debutó contra la Unión Soviética.
              De ahí en adelante no volvió a salir y con Brasil ganó el primer
              título Mundial. Es considerado por muchos el mejor jugador de
              todos los tiempos.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img rounded-circle"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665811430/9f9e2e82d8420cc94109da9586e94e22_8aa1cb3e4e.jpg?updated_at=2022-10-15T05:23:50.426Z"
                alt="Zlatan"
                width={140}
                height={140}
              />
            </div>

            <h2 className="fw-normal">Salomon Olembé</h2>
            <p>
              Con 17 años, 6 meses y 3 días jugó el primer partido de la fase de
              grupos ante Austria en Francia 1998. El mediocampista vistió
              varias camisetas en el fútbol francés, inglés, catarí, turco y
              griego.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img rounded-circle"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665811729/gettyimages_1074362584_612x612_400x302_76ff6e44c3.jpg?updated_at=2022-10-15T05:28:49.319Z"
                alt="Zlatan"
                width={140}
                height={140}
              />
            </div>

            <h2 className="fw-normal">Femi Opabunmi</h2>
            <p>
              Ya cuando los africanos estaban eliminados en la primera ronda del
              2002 el jugador del Grasshopper jugó contra Inglaterra con 17
              años, 3 meses y 9 días. En el 2008 debió retirarse con solo 23
              años por un problema en uno de sus ojos.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img rounded-circle"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665812055/skysports_samuel_etoo_barcelona_4767534_8825919ecf.jpg?updated_at=2022-10-15T05:34:15.874Z"
                alt="Zlatan"
                width={140}
                height={140}
              />
            </div>

            <h2 className="fw-normal">Samuel Eto’o</h2>
            <p>
              Claude Le Roy lo puso a debutar en un Mundial con 17 años, 3 meses
              y 7 días. Fue en el segundo partido de ‘Los Leones Indomables’ en
              el Mundial de Francia 1998 ante Italia. Más adelante el goleador
              tendría la oportunidad de participar en 3 Copas del Mundo más:
              2002, 2010 y 2014.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img rounded-circle"
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665812249/114304789_nwunited_4d5a435c4f.jpg?updated_at=2022-10-15T05:37:29.695Z"
                alt="Zlatan"
                width={140}
                height={140}
              />
            </div>

            <h2 className="fw-normal">Norman Whiteside</h2>
            <p>
              Con 17 años y 41 días actuó ante Yugoslavia en el primer partido
              de la fase de grupos en España 1982. El delantero desarrolló la
              mayor parte de su carrera en el Manchester United y posteriormente
              se retiró a los 26 años en el Everton por una grave lesión de
              rodilla.
            </p>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette" id="jugadores">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                El comienzo de pele,{" "}
                <span className="text-muted">
                  considerado el mejor de todos.
                </span>
              </h2>
              <p className="lead">
                Ganó con Brasil las Copas Mundiales de 1958, 1962 y 1970, siendo
                quien más veces y más joven la ha obtenido con 17 años, y
                participó en cuatro incluido también en 1966, en las cuales
                anotó, siendo quien lo ha hecho en más ediciones. 2​ con 12
                goles en total.​ Fue el mejor jugador en 1970 y el mejor jugador
                joven en 1958. Fue subcampeón y el mejor jugador en la Copa
                América de 1959. Debutó como profesional con el Santos en 1956,
                en el que militó hasta 1974.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto design__img"
                style={{ height: 500 }}
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665812706/1970_copa_pele_abraco_widexl_d54a81e401.jpg?updated_at=2022-10-15T05:45:06.608Z"
                alt="Zlatan"
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette pb-5">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Samuel Eto’o el joven promesa,{" "}
                <span className="text-muted">
                  considerado el mejor futbolista africano.
                </span>
              </h2>
              <p className="lead">
                El 17 de diciembre de 2010 se convirtió en el único jugador del
                mundo que ha conseguido marcar en siete torneos oficiales
                distintos en un mismo año, los cuales son: Copa Africana de
                Naciones 2010, Serie A 2009-10, Copa Italia 2009-10, Liga de
                Campeones de la UEFA 2009-10, Copa Mundial de Fútbol de 2010,
                Supercopa de Italia 2010 y Copa Mundial de Clubes de la FIFA
                2010, superando de esta manera a Pedro Rodríguez Ledesma.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto design__img"
                style={{ height: 500 }}
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665810881/samuel_oto_e6034a6b25.jpg?updated_at=2022-10-15T05:14:41.995Z"
                alt="Samuel Eto’o"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Jovenes;
