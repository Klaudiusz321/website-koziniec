
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

export function CheckoutPage() {
  const { cartItems } = useShoppingCart();

  // Obliczenie łącznej ceny
  const total = cartItems.reduce((sum, cartItem) => {
    const product = storeItems.find(i => i.id === cartItem.id);
    return sum + (product?.price || 0) * cartItem.quantity;
  }, 0);

  // Funkcja wywoływana po kliknięciu przycisku "Zapłać"
  async function handleCheckout() {
    try {
      const response = await fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Przekazujemy wszystkie pozycje z koszyka
          items: cartItems,
        }),
      });
      
      const data = await response.json();
      if (data.url) {
        // Przekierowanie do Stripe Checkout
        window.location.href = data.url;
      } else {
        console.error("Błąd tworzenia sesji:", data.error);
      }
    } catch (error) {
      console.error("Błąd przy próbie płatności:", error);
    }
  }

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Podsumowanie Zamówienia</h1>
      
      {/* Lista zamówionych produktów */}
      <div className="space-y-4">
        {cartItems.map(item => {
          const product = storeItems.find(i => i.id === item.id);
          if (!product) return null;
          return (
            <div key={item.id} className="flex justify-between">
              <div>
                {product.name} {item.quantity > 1 && <span className="text-sm text-gray-400">x{item.quantity}</span>}
              </div>
              <div>{formatCurrency(product.price * item.quantity)}</div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 text-xl font-bold">
        Łącznie: {formatCurrency(total)}
      </div>
      
      {/* Przycisk wywołujący Stripe Checkout */}
      <div className="mt-8">
        <button
          onClick={handleCheckout}
          className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          Zapłać
        </button>
      </div>
    </div>
  );
}
