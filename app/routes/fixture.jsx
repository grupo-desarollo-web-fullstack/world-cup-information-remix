import { Outlet } from "@remix-run/react";

const FixturePage = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};

export default FixturePage;
