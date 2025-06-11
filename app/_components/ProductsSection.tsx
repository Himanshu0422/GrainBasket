const products = [
  {
    code: "W",
    title: "Wheat Flour",
    description: "Fresh whole wheat flour ground from premium quality grains",
  },
  // {
  //   code: "M",
  //   title: "Refined Flour (Maida)",
  //   description: "Fine quality refined flour perfect for baking and cooking",
  // },
  // {
  //   code: "B",
  //   title: "Besan",
  //   description: "Pure gram flour made from high-quality chickpeas",
  // },
  // {
  //   code: "S",
  //   title: "Semolina",
  //   description: "Coarse wheat flour ideal for traditional recipes",
  // },
  // {
  //   code: "MG",
  //   title: "Multi-grain Flour",
  //   description: "Nutritious blend of various grains for healthy living",
  // },
  // {
  //   code: "R",
  //   title: "Rice Flour",
  //   description: "Fine rice flour perfect for gluten-free cooking",
  // },
];

const ProductsSection = () => {
  return (
    <section className="py-24 px-6 bg-white" id="products">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Products</h2>
        <p className="text-gray-600 text-lg mb-16">
          Premium quality flour products milled fresh daily for your kitchen
          needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 text-left bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl font-bold text-gray-300 mb-2">
                {product.code}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
