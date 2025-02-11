
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import ProductCarousel from "../components/ProductCarousel";
export function Store() {
  return (
    <>
      <HeroSection />
      <div className="py-8">
        <ProductCarousel />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-9/12 mx-auto flex-1">
        {storeItems.map(item => (
          <div key={item.id} className="aspect-square p-2">
            <StoreItem {...item} />
          </div>
        ))}
        
      </div>
      <Footer />
    </>
  );
}
