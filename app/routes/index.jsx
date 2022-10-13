import HeroWorldCup from "~/components/HeroWorldCup";
import Carrusel from "~/components/Carrusel";
import stylesSwiper from "~/styles/css/modules/swiper.css"
export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesSwiper,
    },
  ]
}

export default function Index() {
  return (
    <main>
      <HeroWorldCup />
      <Carrusel />
    </main>
  );
}
