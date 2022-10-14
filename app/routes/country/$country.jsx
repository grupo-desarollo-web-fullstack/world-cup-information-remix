import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fetchStrapi from "~/utils/fetchStrapi";

export const loader = async ({ params }) => {
  const dataCountry = await fetchStrapi("/countries", {
    "populate[0]": "flag",
    "filters[slug][$eq]": params.country,
  });
  return json({
    countries: dataCountry,
  });
};

const CountryParams = () => {
  const { countries } = useLoaderData();
  const [country] = countries.data;
  console.log(country)
  return <div>CountryParams</div>;
};

export default CountryParams;
