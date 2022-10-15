import { Link } from "@remix-run/react";

const FgCountry = ({ country }) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    to={`/team/${country.slug}`}
    className="fg-card__team"
  >
    <div className="fg-card__team-img__container">
      <img
        className="fg-card__team-img"
        src={country.flag.data?.attributes.url}
        alt="Qatar logo"
        width="50"
      />
    </div>
    <div className="fg-card__team-text__container">
      <h6 className="fg-card__team-text">{country.name}</h6>
    </div>
  </Link>
);

export default FgCountry;
