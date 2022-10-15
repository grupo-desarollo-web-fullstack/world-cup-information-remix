import { json } from "@remix-run/node";
import SimulatorGroups from "~/components/Fixture/FixtureGroups";
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
    <section className="simulator">
      <div className="simulator-container">
        <SimulatorGroups />
        <div className="simulator__fixture">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Groups;
