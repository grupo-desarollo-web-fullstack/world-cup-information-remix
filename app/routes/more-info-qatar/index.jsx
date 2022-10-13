import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Bootstrap from "~/styles/css/modules/bootstrap.css";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: Bootstrap,
    },
  ]
}

const MoreInfoQatar = () => {
  return (
    <main>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665694051/image1_02_2fe0205f2c.jpg?updated_at=2022-10-13T20:47:31.963Z"
            className="d-block w-100"
            alt="image1"
          />

          <Carousel.Caption className="slider-theme bg-gradient opacity-100">
            <h3>Estadios a disputar</h3>
            <p>
              En estos estadios se disputaran los partidos mas desafiantes del
              mundo, ¿Quien obtendra la copa?
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665693423/image2_731869f816.jpg?updated_at=2022-10-13T20:37:04.354Z"
            className="d-block w-100"
            alt="image2"
          />
          <Carousel.Caption className="slider-theme bg-gradient opacity-100">
            <h3>Jugadores Jovenes</h3>
            <p>
              Buscan destacar en la copa Mundial, es uno de los objetivos de
              cualquier jugador, ¿Lograrán conseguirlo?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="py-5">
        <Container>
          <Row>
            <Col md={4}>
              <Card bsPrefix="card m-3" bg="light">
                <Card.Img
                  style={{ height: "15rem" }}
                  src="https://piks-eldesmarqueporta.netdna-ssl.com/thumbs/o/1200/bin/nacional/info/17-18/Chica-10-3/Los10Mas/Estrellas_Sin_Mundial/Estrellas_sin_Mundial2.jpg"
                  variant="top"
                  alt="Jugadores que nunca fueron al mundial"
                />
                <Card.Body>
                  <Card.Title as="h5">Los que nunca llegaron</Card.Title>
                  <Card.Text as="p">
                    En esta seccion contaremos mas sobre aquellas estrellas que
                    nunca clasificaron al mundial
                  </Card.Text>
                  <Button as="a" variant="dark" href="#">
                    ¡Saber mas!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bsPrefix="card m-3" bg="light">
                <Card.Img
                  style={{ height: "15rem" }}
                  src="https://www.neogol.com/wp-content/uploads/2018/04/balones-mundiales-1930-2018.jpg"
                  variant="top"
                  alt="Jugadores que nunca fueron al mundial"
                />
                <Card.Body>
                  <Card.Title as="h5">Mejores balones del mundial</Card.Title>
                  <Card.Text as="p">
                    En esta seccion te contaremos sobre los mejores balones con
                    los que se jugaron cada mundial
                  </Card.Text>
                  <Button as="a" variant="dark" href="#">
                    ¡Saber mas!
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card bsPrefix="card m-3" bg="light">
                <Card.Img
                  style={{ height: "15rem" }}
                  src="https://depor.com/resizer/zHzu_dekMZ8XNR9OqDajC_tjdcU=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/N74EWLMJLJFNHBTG7P3PF77CYE.jpg"
                  variant="top"
                  alt="Jugadores que nunca fueron al mundial"
                />
                <Card.Body>
                  <Card.Title as="h5">Los mas jovenes</Card.Title>
                  <Card.Text as="p">
                    En esta seccion te contaremos sobre los jugadores mas
                    jovenes que fueron al mundial
                  </Card.Text>
                  <Button as="a" variant="dark" href="#">
                    ¡Saber mas!
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card bsPrefix="card m-3" bg="light">
                <Card.Img
                  style={{ height: "15rem" }}
                  src="https://luznoticiasrm.blob.core.windows.net.optimalcdn.com/images/2022/03/31/imagen-de-la-pantalla-de-un-video-juego-8e9a2e4c.jpg"
                  variant="top"
                  alt="Jugadores que nunca fueron al mundial"
                />
                <Card.Body>
                  <Card.Title as="h5">Mejores selecciones</Card.Title>
                  <Card.Text as="p">
                    En esta seccion te hablaremos sobre las mejores selecciones
                    de futbol que existen en el mundo
                  </Card.Text>
                  <Button as="a" variant="dark" href="#">
                    ¡Saber mas!
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card bsPrefix="card m-3" bg="light">
                <Card.Img
                  style={{ height: "15rem" }}
                  src="https://img.asmedia.epimg.net/resizer/NOp_g6-T3ZrCS_IUW_TXfRSlBpY=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/U6ISC4MFYNINRO56DRQYFT7WJA.jpg"
                  variant="top"
                  alt="Jugadores que nunca fueron al mundial"
                />
                <Card.Body>
                  <Card.Title as="h5">Los estadios mas modernos</Card.Title>
                  <Card.Text as="p">
                    En esta seccion te hablaremos mas sobre los estadios donde
                    se definira al unico ganador de este mundial
                  </Card.Text>
                  <Button as="a" variant="dark" href="#">
                    ¡Saber mas!
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card bsPrefix="card m-3" bg="light">
                <Card.Img
                  style={{ height: "15rem" }}
                  src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/18/15529140472083.jpg"
                  variant="top"
                  alt="Jugadores que nunca fueron al mundial"
                />
                <Card.Body>
                  <Card.Title as="h5">Mejores camisetas del mundo</Card.Title>
                  <Card.Text as="p">
                    En esta seccion te hablaremos sobre las mejores camisetas
                    del mundo, asi como tambien cual es su significado
                  </Card.Text>
                  <Button as="a" variant="dark" href="#">
                    ¡Saber mas!
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card bsPrefix="card m-3" bg="light">
                <Card.Img
                  style={{ height: "15rem" }}
                  src="https://www.infobae.com/new-resizer/8dEAhaq8YH0wYsDssEdlS0D3JNQ=/1024x512/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/HEOWTHEJQBACLO5AFLFD3LXYRQ.jpg"
                  variant="top"
                  alt="Jugadores que nunca fueron al mundial"
                />
                <Card.Body>
                  <Card.Title as="h5">Los favoritos</Card.Title>
                  <Card.Text as="p">
                    En esta seccion te hablaremos sobre los mejores equipos que
                    podrian obtener la copa del mundo este 2022
                  </Card.Text>
                  <Button as="a" variant="dark" href="#">
                    ¡Saber mas!
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card bsPrefix="card m-3" bg="light">
                <Card.Img
                  style={{ height: "15rem" }}
                  src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-03/qatar2%20%281%29.jpg?itok=CuBxfwMJ"
                  variant="top"
                  alt="Jugadores que nunca fueron al mundial"
                />
                <Card.Body>
                  <Card.Title as="h5">Mas sobre Qatar</Card.Title>
                  <Card.Text as="p">
                    En esta seccion te hablaremos mas sobre como poder viajar a
                    Qatar y sus reglamentos
                  </Card.Text>
                  <Button as="a" variant="dark" href="#">
                    ¡Saber mas!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default MoreInfoQatar;
