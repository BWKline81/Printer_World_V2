import { useState } from "react";
import Home from "./Pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
