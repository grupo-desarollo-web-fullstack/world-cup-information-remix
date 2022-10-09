import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta = () => {
  return {
    charset: "utf-8",
    xUaCompatible: {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge",
    },
    viewport: "width=device-width, initial-scale=1.0",
    title: "World Cup Information ⚽",
  };
};

export default function App() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
