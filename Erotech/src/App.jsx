import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
