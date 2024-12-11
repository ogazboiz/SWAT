import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
