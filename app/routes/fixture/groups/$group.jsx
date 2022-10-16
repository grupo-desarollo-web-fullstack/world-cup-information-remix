import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import FixtureMatch from "~/components/Fixture/FixtureMatch";
import fetchStrapi from "~/utils/fetchStrapi";

export const loader = async ({ params }) => {
  const { group } = params;
  const fixture = await fetchStrapi("/matches", {
    "populate[0]": "group",
    "populate[1]": "home",
    "populate[2]": "away",
    "populate[3]": "stadium",
    "populate[group][populate]": "*",
    "populate[home][populate]": "*",
    "populate[away][populate]": "*",
    "populate[stadium][populate]": "*",
    "filters[group][slug][$eq]": group,
  });
  return json({
    fixture,
  });
};

const Group = () => {
  const { fixture } = useLoaderData();
  return (
    <div className="fixture__matches-container">
      {fixture.data.map((match) => (
        <FixtureMatch
          onlyInfo={false}
          key={match.id}
          match={match.attributes}
        />
      ))}
    </div>
  );
};

export default Group;
