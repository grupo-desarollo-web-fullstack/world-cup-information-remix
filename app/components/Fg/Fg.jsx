import { useLoaderData } from "@remix-run/react";
import FgCard from "./FgCard";

const Fg = () => {
  const { groups } = useLoaderData();
  return (
    <section id="fg" className="section section--fg">
      <div className="container-wci container--fg">
        <h2 className="section__title">Fase de Grupos</h2>
        <div className="fg-container">
          {groups.data.map((country) => (
            <FgCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fg;
