import { json } from "@remix-run/node";

import HeroWorldCup from "~/components/HeroWorldCup";
import Carrusel from "~/components/Carrusel";
import stylesSwiper from "~/styles/css/modules/swiper.css";
import fetchStrapi from "~/utils/fetchStrapi";
import Fg from "~/components/Fg/Fg";

export const loader = async () => {
  const dataGroups = await fetchStrapi("/groups", {
    "sort[0]": "name",
    "populate[0]": "countries",
    "populate[countries][populate]": "*",
  });
  return json({
    groups: dataGroups,
  });
};

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesSwiper,
    },
  ];
};

export default function Index() {
  return (
    <main>
      <HeroWorldCup />
      <Fg />
      <Carrusel />
    </main>
  );
}
