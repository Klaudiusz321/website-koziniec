import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { Store } from "./pages/Store";
import { CheckoutPage } from "./pages/CheckoutPage"; // Import strony Checkout
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import AboutUs from "./components/Aboutus"; // Import komponentu AboutUs

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutUs />} /> {/* Dodaj trasę do AboutUs */}
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;