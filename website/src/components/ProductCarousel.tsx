
import storeItems from '../data/items.json';
import { ProductCard } from './ProductCard';

export function ProductCarousel() {
  // Pobierz listę produktów z pliku JSON
  const products = storeItems;

  // Duplikujemy listę, aby uzyskać efekt ciągłego przewijania
  const duplicatedProducts = [...products, ...products];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee space-x-4">
        {duplicatedProducts.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <ProductCard id={item.id} name={item.name} imgUrl={item.imgUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductCarousel;