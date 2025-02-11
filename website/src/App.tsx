// src/App.tsx
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { Store } from "./pages/Store";
import { CheckoutPage } from "./pages/CheckoutPage";
import Aboutus from "./components/Aboutus"; // Strona z albumami
import AlbumDetails from "./components/AlbumDetail"; // Strona szczegółów albumu
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/album/:id" element={<AlbumDetails />} />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
