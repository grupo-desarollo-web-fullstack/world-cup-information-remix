import { DateTime } from "luxon";
import { useState } from "react";

const FixtureMatch = ({ match, className, onlyInfo = true }) => {
  const { home, away, date, stadium } = match;
  const [dateMatch] = useState(DateTime.fromISO(date));
  return (
    <article className={"match".concat(className ? ` ${className}` : "")}>
      <div className="match-container">
        <div className="match__team">
          <div className="match__flag-container">
            <img
              src={home.data.attributes.flag.data.attributes.url}
              alt={`Logo ${home.data.attributes.name}`}
              className="match__flag"
            />
          </div>
          <h3 className="match__team__name">{home.data.attributes.name}</h3>
        </div>
        {onlyInfo && (
          <div className="match__info">
            <h3 className="match__date">
              {dateMatch.day}/{dateMatch.month}/{dateMatch.year}
            </h3>
            <div className="match__stadium">
              <h4 className="match__stadium__name">
                {stadium.data.attributes.name}
              </h4>
              <div className="match__stadium__img-container">
                <img
                  src={stadium.data.attributes.image.data.at(0).attributes.url}
                  width={300}
                  height={200}
                  alt={stadium.data.attributes.name}
                  className="match__stadium__img"
                />
              </div>
            </div>
          </div>
        )}
        <div className="match__team">
          <div className="match__flag-container">
            <img
              src={away.data.attributes.flag.data.attributes.url}
              alt={`Logo ${away.data.attributes.name}`}
              className="match__flag"
            />
          </div>
          <h3 className="match__team__name">{away.data.attributes.name}</h3>
        </div>
      </div>
    </article>
  );
};

export default FixtureMatch;
