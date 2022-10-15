import Bootstrap from "~/styles/css/modules/bootstrap.css";
import styleBootstrap from "~/styles/css/modules/styleBootstrap.css";
import carrusel from "~/styles/css/modules/carrusel.css";
import { Outlet } from "@remix-run/react";


export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: Bootstrap,
    },
    {
      rel: "stylesheet",
      href: styleBootstrap,
    },
    {
      rel: "stylesheet",
      href: carrusel,
    },
  ];
};

const MoreInfoQatar = () => {
    return (
      <Outlet />
    );
  };
  
  export default MoreInfoQatar;
