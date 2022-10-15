import { useEffect } from "react";

const Qatar = () => {
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
          <h1 className="display-4 fst-italic">Mas sobre Qatar</h1>
          <p className="lead my-3">
            En esta seccion se tratara sobre el pais anfitrion en el que se
            realizara la copa del mundo.
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
          <div className="row featurette pt-5" id="jugadores">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Los países anfitriones,{" "}
                <span className="text-muted">clasificados al mundial.</span>
              </h2>
              <p className="lead">
                Se trata de la nación más pequeña de las que han albergado una
                fase final mundialista en toda la historia de la competición, lo
                que permitirá a los visitantes desplazarse por el país con total
                facilidad, e incluso ver varios partidos el mismo día. La nación
                está construyendo desde hace varios años algunas de las
                instalaciones deportivas más ecológicas y, desde el punto de
                vista arquitectónico, más avanzadas jamás vistas. Todas ellas se
                exhibirán ante el mundo cuando el mayor espectáculo deportivo
                del planeta llegue a Oriente Próximo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto design__img"
                style={{ height: 500 }}
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665834670/webimage_2ce7f20e_f7b3_4eee_aa73_0bcc3021230b_a0a236cc51.png?updated_at=2022-10-15T11:51:11.502Z"
                alt="Paises"
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette pb-5">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                El alojamiento en Qatar,{" "}
                <span className="text-muted">los mejores del mundo.</span>
              </h2>
              <p className="lead">
                Esto incluye desde hoteles, apartamentos y villas, hasta
                campamentos en el desierto en las Villas de aficionados y
                habitaciones a bordo de cruceros. Ya sea que desee alojarse en
                el centro de Doha, en un área urbana en una isla o en las
                increíbles playas, donde todo está a su alcance. Incluso tendrá
                la posibilidad de asistir a más de un partido al día durante la
                Fase de Grupos, ya que todos los estadios están a poca distancia
                unos de otros, sin necesidad de cambiar de alojamiento durante
                todo el torneo.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto design__img"
                style={{ height: 500 }}
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665835203/hoteles_en_doha_para_mundial_qatar_7_749ce6b568.jpg?updated_at=2022-10-15T12:00:04.250Z"
                alt="Samuel Eto’o"
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette pt-5" id="jugadores">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Doha, <span className="text-muted">la capital de Qatar.</span>
              </h2>
              <p className="lead">
                Es un centro de comercio de primer orden, en el que se hallan
                numerosos monumentos modernos, instituciones públicas,
                ministerios, entidades financieras y organismos empresariales,
                así como el nuevo puerto y el aeropuerto que la conectan con el
                mundo exterior. Es una urbe que combina civilización y
                tradición, y es conocida por sus muchas mezquitas, torres y
                fortificaciones, como el fuerte de Doha y las torres de Barzan.
                Además de los lugares históricos, cuenta con excelentes
                infraestructuras, impresionantes rascacielos en el núcleo urbano
                y diversos centros comerciales modernos.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto design__img"
                style={{ height: 500 }}
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665835489/481987_Doha_And_Vicinity_8304ee5f60.webp?updated_at=2022-10-15T12:04:51.058Z"
                alt="Doha"
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette pb-5">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Al Wakrah,{" "}
                <span className="text-muted">
                  de las mas antiguas y habitadas ininterrumpidamente.
                </span>
              </h2>
              <p className="lead">
                Al Wakrah tiene una espléndida playa de arena y muchos lugares
                históricos, que incluyen ejemplos de sus viviendas
                tradicionales. En su museo regional pueden verse distintas
                exposiciones medioambientales y arqueológicas, y otras que
                repasan la historia natural, las artes y la arquitectura de la
                ciudad.Antaño, era famosa por su puerto pesquero y el comercio
                de perlas naturales. El diseño del estadio de Al Janoub, en el
                que se disputarán encuentros de la Copa Mundial de la FIFA 2022
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto design__img"
                style={{ height: 500 }}
                src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665836627/CXL_4_VJC_5_DJEA_3_HIVQR_4_CL_7_ARU_4_c45aea0171.jpg?updated_at=2022-10-15T12:23:48.255Z"
                alt="Al Wakrah"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Qatar;
