import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>{/* <Route path="/" element={< />} /> */}</Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
