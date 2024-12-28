import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Strategy from "./Pages/Strategy";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-300 h-dvh">
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/strategy" element={<Strategy/>} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
