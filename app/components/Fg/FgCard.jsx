import FgCountry from "./FgCountry";

export default function FgCard({ country }) {
  const { attributes } = country;
  return (
    <article className="fg-card">
      <h2 className="fg-card__title">Grupo {attributes.name}</h2>
      <div className="fg-card__teams">
        {attributes.countries.data.map(({ id, attributes }) => (
          <FgCountry key={id} country={attributes} />
        ))}
      </div>
    </article>
  );
}
