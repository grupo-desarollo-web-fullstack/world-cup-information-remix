import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fetchStrapi from "~/utils/fetchStrapi";
import ImgBanner from "~/assets/img/image1.jpg";
import FgCard from "~/components/Fg/FgCard";
import FixtureMatch from "~/components/Fixture/FixtureMatch";

export const loader = async ({ params }) => {
  const dataCountry = await fetchStrapi("/countries", {
    "filters[slug][$eq]": params.team,
    "populate[0]": "flag",
    "populate[1]": "group",
    "populate[2]": "matchesHome",
    "populate[3]": "matchesAway",
    "populate[matchesHome][populate]": "*",
    "populate[matchesAway][populate]": "*",
    "populate[flag][populate]": "*",
    "populate[group][populate][0]": "countries",
    "populate[group][populate][countries][populate]": "*",
  });
  return json({
    countries: dataCountry,
  });
};

const TeamParams = () => {
  const { countries } = useLoaderData();
  const [country] = countries.data;
  return (
    <>
      <img src={ImgBanner} alt="image1" className="slider__img" />
      <main>
        <section className="services">
          <div className="services__texts">
            <h2 className="services__title"> BANDERA</h2>
            <p className="services__paragraph">
              {" "}
              Te mostramos, la bandera de la selección
            </p>
            <a href="#" className="services__cta">
              Leer más
            </a>
          </div>

          <div className="services__image services__img--1">
            <img
              src={country.attributes.flag.data.attributes.url}
              alt={`${country.attributes.name} image`}
              width={country.attributes.flag.data.attributes.width}
              height={country.attributes.flag.data.attributes.height}
            />
          </div>

          <div className="services__texts services__texts--2">
            <h2 className="services__title"> GRUPO</h2>
            <p className="services__paragraph"> A qué grupo pertenece</p>
            <a href="#" className="services__cta">
              Leer más
            </a>
          </div>

          <div className="services__image services__img--3">
            <FgCard
              className="services__group__card"
              group={country.attributes.group.data}
            />
          </div>

          <div className="services__texts services__texts--3">
            <h2 className="services__title"> CASA</h2>
            <p className="services__paragraph"> Juega de local.</p>
            <a href="#" className="services__cta">
              Leer más
            </a>
          </div>

          <div className="services__image services__img--4"></div>

          <div className="services__texts services__texts--4">
            <h2 className="services__title"> VISITANTE</h2>
            <p className="services__paragraph"> Juega de visitante.</p>
            <a href="#" className="services__cta">
              Leer más
            </a>
          </div>

          <div className="services__image--5 services__img--5"></div>

          <div className="services__texts services__texts--5">
            <h2 className="services__title"> PARTIDO</h2>
            <p className="services__paragraph"> Partido que se disputa.</p>
            <a href="#" className="services__cta">
              Leer más
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default TeamParams;
