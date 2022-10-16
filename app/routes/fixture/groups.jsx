import { json } from "@remix-run/node";
import FixtureGroups from "~/components/Fixture/FixtureGroups";
import fetchStrapi from "~/utils/fetchStrapi";
import stylesSwiper from "~/styles/css/modules/swiper.css";
import { Outlet } from "@remix-run/react";

export const links = () => [
  {
    rel: "stylesheet",
    href: stylesSwiper,
  },
];

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

const Groups = () => {
  return (
    <section className="fixture">
      <div className="fixture-container">
        <FixtureGroups />
        <div className="fixture__matches">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Groups;
