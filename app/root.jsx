import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/css/index.css";

export const meta = () => {
  return {
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1.0",
    compatible: {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge",
    },
    title: "World Cup Information ⚽",
    description:
      "La mejor información de la máxima competición del fútbol a nivel mundial, la encuentras aquí. Desde cada selección clasificada, pasando por los estadios hasta un simulador donde podrás tener a tu propio Campeón Mundial ⚽🌍.",
  };
};

export const links = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Oswald:wght@200;300;400;500;600;700&family=Roboto+Slab:wght@100;200;300;400;600;700;800&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

const App = () => {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="body">
        <Outlet />
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;
