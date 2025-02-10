
import { useShoppingCart } from "../context/ShoppingCartContext";

export function CheckoutButton() {
  const { cartItems } = useShoppingCart(); // Pobieramy dynamiczne dane koszyka

  async function handleCheckout() {
    try {
      const response = await fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Zamiast statycznej listy wpisujemy dynamiczne dane z koszyka
        body: JSON.stringify({
          items: cartItems,
        }),
      });
      
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;  // Przekierowanie do Stripe Checkout
      } else {
        console.error("Błąd tworzenia sesji:", data.error);
      }
    } catch (error) {
      console.error("Błąd przy próbie płatności:", error);
    }
  }

  return (
    <div className="mt-auto p-10">
      <button
        onClick={handleCheckout}
        className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
      >
        Zapłać
      </button>
    </div>
  );
}
