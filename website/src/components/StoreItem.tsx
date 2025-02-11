import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div
      className="
        aspect-square
        grid
        grid-rows-[auto,1fr,auto,auto]
        overflow-hidden
        rounded-md
        border border-gray-700
        bg-gray-900
        text-white
        shadow-sm
        transition-transform
        duration-200
        hover:shadow-lg
      "
    >
      {/* Tytuł */}
      <div className="p-2">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
      </div>

      {/* Obrazek */}
      <div className="overflow-hidden">
        <img
          src={imgUrl}
          alt={name}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-200
            hover:scale-110
          "
        />
      </div>

      {/* Cena */}
      <div className="p-2">
        <p className="text-lg font-semibold text-center">
          {formatCurrency(price)}
        </p>
      </div>

      {/* Przycisk "Add to Cart" */}
      <div className="p-2 flex justify-center">
        {quantity === 0 ? (
          <button
            onClick={() => increaseCartQuantity(id)}
            className="
              w-full
              bg-red-600
              text-white font-bold py-2 px-4 rounded-full
              transition duration-200
            "
          >
            Dodaj do koszyka
          </button>
        ) : (
          <div className="flex flex-col items-center gap-2">
            {/* Kontrolki +/- */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => decreaseCartQuantity(id)}
                className="
                  rounded-md
                  bg-gray-700
                  px-3 py-1
                  text-white
                  transition-all
                  duration-200
                  hover:bg-gray-600
                  hover:shadow
                  active:scale-95
                "
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <span className="text-sm">in cart</span>
              <button
                onClick={() => increaseCartQuantity(id)}
                className="
                  rounded-md
                  bg-gray-700
                  px-3 py-1
                  text-white
                  transition-all
                  duration-200
                  hover:bg-gray-600
                  hover:shadow
                  active:scale-95
                "
              >
                +
              </button>
            </div>

            {/* Usunięcie produktu */}
            <button
              onClick={() => removeFromCart(id)}
              className="
                rounded-md
                bg-red-600
                px-4 py-1
                text-white
                transition-all
                duration-200
                hover:bg-red-700
                hover:shadow-md
                active:scale-95
              "
            >
              Usuń
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
