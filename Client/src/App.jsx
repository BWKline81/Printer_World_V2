import { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Upload from "./Pages/Upload";
import Contracting from "./pages/contracting";
import Products from "./Pages/Products";
import NotFound from "./Pages/NotFound";
import { HashRouter, Routes, Route } from "react-router-dom";
import { SelectedProduct, SubmitScreen, ProductCost } from "./Pages/Products";

function App() {
  return (
    <>
      <SelectedProduct.Provider value={SelectedProduct}>
        <SubmitScreen.Provider value={SubmitScreen}>
          <ProductCost.Provider value={ProductCost}>
            <HashRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/contracting" element={<Contracting />} />
                <Route path="/products" element={<Products />}></Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HashRouter>
          </ProductCost.Provider>
        </SubmitScreen.Provider>
      </SelectedProduct.Provider>
    </>
  );
}

export default App;
