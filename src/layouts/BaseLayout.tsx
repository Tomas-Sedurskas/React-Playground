import { Outlet } from "react-router-dom";
import { Navigation } from "components";

export const BaseLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
