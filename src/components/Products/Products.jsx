import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const Products = () => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  // Fetch products.json
  useEffect(() => {
    fetch("/products.json") // public/data OR src/data depending on setup
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const addToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {products.length === 0 ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-xl">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Product Content */}
              <div className="p-3 text-center">
                <h3 className="text-sm font-medium mb-2 line-clamp-2 hover:text-blue-600 transition-colors min-h-[2.5rem]">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="mb-3 flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-base font-semibold text-gray-900">
                    Tk {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      Tk {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={16} />
                  Quick Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary */}
      {Object.keys(cart).length > 0 && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
          Cart: {Object.values(cart).reduce((a, b) => a + b, 0)} items
        </div>
      )}
    </div>
  );
};

export default Products;
