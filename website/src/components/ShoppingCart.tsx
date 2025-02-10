
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { CheckoutButton } from "./CheckoutButton";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  // Obliczenie sumy koszyka
  const total = cartItems.reduce((sum, cartItem) => {
    const item = storeItems.find(i => i.id === cartItem.id);
    return sum + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <div
      className={`
        fixed top-0 right-0
        h-screen w-80
        bg-black text-white
        border-l border-gray-700
        shadow-lg
        z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Cart</h2>
        <button
          onClick={closeCart}
          className="text-2xl leading-none font-bold text-gray-400 hover:text-gray-200"
        >
          &times;
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-col h-full">
        {/* Lista przedmiotów */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {cartItems.map(item => (
            <CartItem key={item.id} id={item.id} quantity={item.quantity} />
          ))}
        </div>

        {/* Sekcja podsumowania */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex justify-end text-lg font-bold">
            Total: {formatCurrency(total)}
          </div>
        </div>

        {/* Przycisk Checkout - wyświetlany tylko gdy koszyk nie jest pusty */}
        {cartItems.length > 0 && (
          <div className="mt-auto p-7 z-10">
            <CheckoutButton />
          </div>
        )}
      </div>
    </div>
  );
}
