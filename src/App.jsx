import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume/:id" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
