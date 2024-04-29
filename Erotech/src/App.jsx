import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/About/About";
import Training from "./Components/Training/Training";
import ContactUs from "./Components/ContactUs/ContactUs";
import Career from "./Components/Career/Career";
import Service from "./Components/Pages/Service";
import OurClient from "./Components/Pages/OurClient";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/Services/IOT" element={<Service page={"IOT"} />} />
          <Route
            path="/Services/EmbeddedSystems"
            element={<Service page={"EmbeddedSystems"} />}
          />
          <Route path="/ourclients" element={<OurClient />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
