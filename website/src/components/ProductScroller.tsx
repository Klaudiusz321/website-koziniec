
import { StoreItem } from './StoreItem';
import storeItems from '../data/items.json';

export function ProductScroller() {
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex space-x-4 px-4">
        {storeItems.map(item => (
          <div key={item.id} className="flex-shrink-0 w-64 h-64 p-2">
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
