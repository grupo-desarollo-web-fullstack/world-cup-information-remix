import { useLocation, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useSwiperSlide } from "swiper/react";
import FgCard from "../Fg/FgCard";

const Fixture = ({ group, className }) => {
  const slide = useSwiperSlide();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (
      slide.isActive &&
      location.pathname !== `/simulator/groups/${group.attributes.slug}`
    ) {
      navigate(`${group.attributes.slug}`);
    }
  }, [slide.isActive]);
  return <FgCard className={className} group={group} />;
};

export default Fixture;
