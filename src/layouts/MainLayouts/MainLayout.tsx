import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
