import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/About/About";
import Training from "./Components/Training/Training";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path='/contact_us' element={<ContactUs/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
