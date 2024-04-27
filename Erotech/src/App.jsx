import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/About/About";
import Training from "./Components/Training/Training";
import ContactUs from "./Components/ContactUs/ContactUs";
import Career from "./Components/Career/Career";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path='/Services' element = {<Services/>} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
