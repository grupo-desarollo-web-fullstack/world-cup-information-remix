import { useLoaderData } from "@remix-run/react";
import { Swiper, SwiperSlide } from "swiper/react";
import FixtureGroup from "./FixtureGroup";

const FixtureGroups = () => {
  const { groups } = useLoaderData();
  return (
    <Swiper className="fixture__groups">
      {groups.data.map(({ id, attributes }) => (
        <SwiperSlide key={id}>
          <FixtureGroup
            className="fixture__groups__card"
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
