import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import GetStarted from "../Components/GetStarted/GetStarted";

function RootLayout() {
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
        <GetStarted/>
      </div>

      <Footer />
    </>
  );
}

export default RootLayout;
