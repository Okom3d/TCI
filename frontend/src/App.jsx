import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ContactPage from "./components/ContactPage";
import EbookPage from "./components/EbookPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consultation" element={<ContactPage />} />
          <Route path="/investments" element={<ContactPage />} />
          <Route path="/ebook" element={<EbookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;