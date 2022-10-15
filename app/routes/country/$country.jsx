import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fetchStrapi from "~/utils/fetchStrapi";
import ImgBanner from "~/assets/img/image1.jpg";

export const loader = async ({ params }) => {
  const dataCountry = await fetchStrapi("/countries", {
    "filters[slug][$eq]": params.country,
    "populate[0]": "flag",
    "populate[1]": "group",
    "populate[2]": "matchesHome",
    "populate[3]": "matchesAway",
    "populate[matchesHome][populate]": "*",
    "populate[matchesAway][populate]": "*",
    "populate[group][populate][0]": "matches",
  });
  return json({
    countries: dataCountry,
  });
};

const CountryParams = () => {
  const { countries } = useLoaderData();
  const [country] = countries.data;
  return (
    <>
      <div>CountryParams</div>
      <img src={ImgBanner} alt="image1" className="slider__img" />
      <main>
        <section class="services">
          <div class="services__img service__img--1"></div>

          <div class="services__texts">
            <h2 class="services__title"> BANDERA</h2>
            <p class="services__paragraph">
              {" "}
              Te mostramos, la bandera de la selección
            </p>
            <a href="#" class="services__cta">
              Leer más
            </a>
          </div>

          <div class="services__image service__img--2"></div>

          <div class="services__texts services__texts--2">
            <h2 class="services__title"> GRUPO</h2>
            <p class="services__paragraph"> A qué grupo pertenece</p>
            <a href="#" class="services__cta">
              Leer más
            </a>
          </div>

          <div class="services__image service__img--3"></div>

          <div class="services__texts services__texts--3">
            <h2 class="services__title"> CASA</h2>
            <p class="services__paragraph"> Juega de local.</p>
            <a href="#" class="services__cta">
              Leer más
            </a>
          </div>

          <div class="services__image service__img--4"></div>

          <div class="services__texts services__texts--4">
            <h2 class="services__title"> VISITANTE</h2>
            <p class="services__paragraph"> Juega de visitante.</p>
            <a href="#" class="services__cta">
              Leer más
            </a>
          </div>

          <div class="services__image--5 service__img--5"></div>

          <div class="services__texts services__texts--5">
            <h2 class="services__title"> PARTIDO</h2>
            <p class="services__paragraph"> Partido que se disputa.</p>
            <a href="#" class="services__cta">
              Leer más
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default CountryParams;
