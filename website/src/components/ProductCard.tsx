type ProductCardProps = {
  name: string;
  imgUrl: string;
};

export function ProductCard({ name, imgUrl }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-bold mt-4">{name}</h3>
    </div>
  );
}

export default ProductCard;
