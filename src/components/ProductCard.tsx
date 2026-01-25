"use client";
import React from "react";
import { useCart } from "@/src/context/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col h-full">
      <div className="w-full h-48 relative flex items-center justify-center overflow-hidden mb-4">
        <img
          src={product.images}
          alt={product.title}
          className="max-w-full max-h-full object-contain"
          onError={(e: any) => {
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
      </div>
      <div className="grow">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 h-10">
          {product.title}
        </h3>
        <p className="text-[#A67C52] font-bold text-lg mt-2">
          ${product.price}
        </p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-[#A67C52] text-white font-medium py-3 px-6 rounded-sm mt-4 hover:bg-[#8B6543] transition-all active:scale-95 uppercase text-xs tracking-widest"
      >
        Add to Cart
      </button>
    </div>
  );
}
