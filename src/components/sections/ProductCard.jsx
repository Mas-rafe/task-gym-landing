import { Plus } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-black rounded-3xl p-4 hover:scale-105 transition duration-300">

      {/* 🔹 Image */}
      <div className="overflow-hidden rounded-3xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-3xl"
        />
      </div>

      {/* 🔹 Bottom Content */}
      <div className="flex justify-between items-center mt-4">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-lg font-semibold">
            {product.name}
          </h3>

          <p className="text-gray-400">
            ${product.price}
          </p>

          <div className="text-yellow-400 text-sm">
            ⭐⭐⭐⭐⭐
          </div>
        </div>

        {/* RIGHT SIDE (+ BUTTON) */}
        <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition">
          <Plus size={18} />
        </button>

      </div>
    </div>
  );
};

export default ProductCard;