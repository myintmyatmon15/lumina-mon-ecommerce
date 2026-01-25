"use client";
import { useCart } from "@/src/context/CartContext";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/Footer";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  price: number;
  images: string;
  quantity: number;
}

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6 md:p-10">
        <h1 className="text-3xl font-serif font-bold text-[#96694C] mb-4 uppercase tracking-tight text-center">
          Your Shopping Bag
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-[#E5E1DA]">
            <span className="text-6xl mb-4 block">🛒</span>
            <p className="text-gray-500 text-lg mb-6 font-medium">
              Your cart is currently empty.
            </p>
            <Link
              href="/shop"
              className="bg-[#96694C] text-white px-8 py-3 rounded-sm hover:bg-[#8B6543] transition-all inline-block uppercase text-sm tracking-widest"
            >
              Return to Shop
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E1DA] overflow-hidden">
              {cartItems.map((item: CartItem) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-6 p-6 border-b border-[#F3F0E9] last:border-b-0"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <img
                      src={item.images}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-serif font-bold text-lg text-[#96694C] uppercase">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 bg-[#FAF9F6] rounded-full px-4 py-2 border border-[#E5E1DA]">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="..."
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold text-[#96694C]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="..."
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="..."
                  >
                    <span className="text-xl">🗑️</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E1DA] text-right">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 font-medium uppercase tracking-widest">
                  Subtotal
                </span>
                <span className="text-2xl font-serif font-bold text-[#96694C]">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <Link href="/checkout" className="w-full sm:w-auto">
                <button className="w-100 item-center bg-[#96694C] text-white px-12 py-3 rounded-sm font-bold hover:bg-[#8B6543] transition-all uppercase tracking-widest shadow-md active:scale-95">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
