import { useLoaderData } from "@remix-run/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SimulatorGroup from "./FixtureGroup";

const FixtureGroups = () => {
  const { groups } = useLoaderData();
  return (
    <Swiper className="simulator__groups">
      {groups.data.map(({ id, attributes }) => (
        <SwiperSlide key={id}>
          <SimulatorGroup
            className="simulator__groups__card"
            group={{
              attributes,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FixtureGroups;
