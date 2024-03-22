import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <main className="manrope">
      <div className="container mx-auto">
      <Navbar />
      </div>
      <div className="container mx-auto">
      <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
