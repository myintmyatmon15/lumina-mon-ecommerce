"use client";
import { useState, useEffect } from "react";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/Footer";
import ProductCard from "@/src/components/ProductCard";
import { useCart } from "@/src/context/CartContext";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <main className="max-w-7xl mx-auto p-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-serif font-bold text-[#96694C]">
            OUR SHOP
          </h1>
          <p className="text-gray-600 mt-2">Explore our premium collection</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item: any) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
