import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Main = () => {
  return (
    <div className="mx-24">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
