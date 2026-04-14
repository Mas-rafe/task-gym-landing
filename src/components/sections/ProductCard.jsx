import { Plus } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-black rounded-3xl p-4 hover:scale-105 transition duration-300">

      {/*  Image */}
      <div className="overflow-hidden rounded-3xl  h-[425]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[410] p-2  object-cover rounded-3xl"
        />
      </div>

      {/*  Bottom Content */}
      <div className="flex justify-between items-center mt-4">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-lg font-semibold">
            {product.name}
          </h3>


          <div className="text-yellow-400 text-sm flex items-center gap-4">
            <p className="text-gray-400">
              ${product.price}
            </p>

            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>

        {/* RIGHT SIDE  */}
        <button className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 transition">
          <Plus size={18} />
        </button>

      </div>
    </div>
  );
};

export default ProductCard;