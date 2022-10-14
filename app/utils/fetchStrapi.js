import { Headers } from "@remix-run/node";
import { jointToBase } from "./jointToBase";

export default async function fetchStrapi(path = '/countries', params = { populate: '*'}) {
  const { STRAPI_TOKEN_CLIENT } = process.env;
  const paramsString = new URLSearchParams(params).toString();
  const response = await fetch(`${jointToBase(path)}?${decodeURIComponent(paramsString)}`, {
    headers: new Headers({
      Authorization: `Bearer ${STRAPI_TOKEN_CLIENT}`,
      "Content-Type": "application/json;charset=utf-8",
    }),
  });
  const data = await response.json();
  return data;
}
