import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
