import ProductCard from "./ProductCard";

const ProductSection = () => {

  // 🔹 Test Data (you can move later)
  const products = [
    {
      name: "Mint flavour chocolate",
      price: 120,
      image: "/img1.jpg",
    },
    {
      name: "Dark chocolate",
      price: 40,
      image: "/img2.jpg",
    },
    {
      name: "Rich chocolate",
      price: 900,
      image: "/img3.jpg",
    },
    {
      name: "White chocolate",
      price: 60,
      image: "/img4.jpg",
    },
    {
      name: "Butter chocolate",
      price: 25,
      image: "/img5.jpg",
    },
    {
      name: "Ice chocolate",
      price: 80,
      image: "/img6.jpg",
    },
  ];

  return (
    <section className="px-10 py-20  text-white">

      {/*  Heading */}
      <div className="text-center mb-14">
        <h2 className="text-black text-4xl md:text-5xl font-bold">
          Our Products
        </h2>
        <p className="text-gray-400 mt-3">
          Explore our premium fitness collection
        </p>
      </div>

      {/*  Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

    </section>
  );
};

export default ProductSection;