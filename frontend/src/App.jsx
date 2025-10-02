import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consultation" element={<ContactPage />} />
          <Route path="/investments" element={<ContactPage />} />
          {/* (optionnel) rediriger les anciens liens /ebook vers l'accueil */}
          <Route path="/ebook" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;