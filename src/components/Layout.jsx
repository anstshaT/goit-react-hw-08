import { Outlet } from "react-router-dom";
import UserMenu from "./userMenu/UserMenu";

const Layout = () => {
  return (
    <div>
      <UserMenu />
      <Outlet />
    </div>
  );
};

export default Layout;
