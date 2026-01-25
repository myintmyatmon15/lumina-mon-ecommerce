"use client";
import React, { useState } from "react";
import { useCart } from "@/src/context/CartContext";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/navbar";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const subtotal = cartItems.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      clearCart();
      router.push("/success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 md:p-10">
        <h1 className="text-3xl font-serif font-bold text-[#96694C] mb-8 text-center">
          CHECKOUT
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-sm border space-y-4"
          >
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <input
              required
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#A67C52] outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#A67C52] outline-none"
            />
            <input
              required
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#A67C52] outline-none"
            />
            <textarea
              required
              placeholder="Delivery Address"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#A67C52] outline-none h-32"
            ></textarea>

            <button
              disabled={loading}
              className="w-full bg-[#96694C] text-white py-4 rounded-lg font-bold hover:bg-[#8B6543] transition-colors"
            >
              {loading ? "Processing..." : "PLACE ORDER"}
            </button>
          </form>

          <div className="bg-[#FAF9F6] p-6 rounded-xl border h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 border-b pb-4">
              {cartItems.map((item: any) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.title} (x{item.quantity})
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total Amount</span>
              <span className="text-[#96694C]">${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
