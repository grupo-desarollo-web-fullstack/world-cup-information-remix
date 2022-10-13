import { useSwiper } from "swiper/react";


const ButtonCarrusel = ({ children, size = 48, action }) => {
  const swiper = useSwiper();

  const handleClickActionSlide = () => {
    if (action === "prev") return swiper.slidePrev();
    swiper.slideNext();
  };

  return (
    <button
      width={size}
      height={size}
      className={`slider__button slider__button--${action}`}
      onClick={handleClickActionSlide}
      type="button"
    >
      {children}
    </button>
  );
};

ButtonCarrusel.displayName = "ButtonCarrusel";

export default ButtonCarrusel;
