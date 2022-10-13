import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "@remix-run/react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import ButtonCarrusel from "~/components/ButtonCarrusel";
import { Autoplay } from "swiper";

const Carrusel = () => {
  return (
    <section className="section section--slider">
      <h2 className="section__title">Más sobre Qatar 2022</h2>
      <div className="container-wci container--slider">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
          }}
          className="slider"
          loop={true}
        >
          <SwiperSlide className="slider__section">
            <img
              src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665541766/Image3_7bb422c19a.jpg?updated_at=2022-10-12T02:29:27.541Z"
              alt="image1"
              className="slider__img"
            />
          </SwiperSlide>
          <div className="button-info">
            <Link to="/more-info-qatar" className="button-info__link-container">
              <button type="button" className="button-info__link">
                ¡Ver Más!
              </button>
            </Link>
          </div>
          <SwiperSlide className="slider__section">
            <img
              src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665541766/Image2_aeffb5272d.jpg?updated_at=2022-10-12T02:29:27.015Z"
              alt="image2"
              className="slider__img"
            />
          </SwiperSlide>
          <SwiperSlide className="slider__section">
            <img
              src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665541765/Image1_a21d7e33cf.jpg?updated_at=2022-10-12T02:29:26.455Z"
              alt="image3"
              className="slider__img"
            />
          </SwiperSlide>
          <SwiperSlide className="slider__section">
            <img
              src="https://res.cloudinary.com/dq0gl3g4k/image/upload/v1665541763/Image4_bd862a03b0.jpg?updated_at=2022-10-12T02:29:24.364Z"
              alt="image4"
              className="slider__img"
            />
          </SwiperSlide>

          <ButtonCarrusel action={"next"}>
            <BsFillCaretRightFill />
          </ButtonCarrusel>

          <ButtonCarrusel action={"prev"}>
            <BsFillCaretLeftFill />
          </ButtonCarrusel>
        </Swiper>
      </div>
    </section>
  );
};

export default Carrusel;

