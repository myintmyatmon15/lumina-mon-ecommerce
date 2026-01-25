"use client";
import Link from "next/link";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <section className="relative h-[70vh] flex items-center justify-center bg-[#F3F0E9] text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#96694C] mb-6 animate-fade-in">
            Elevate Your Style
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Discover our curated collection of premium essentials designed for
            modern elegance.
          </p>
          <Link
            href="/shop"
            className="bg-[#96694C] text-white px-10 py-4 rounded-sm font-semibold hover:bg-[#8B6543] transition-all uppercase tracking-widest shadow-lg"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          QUALITY YOU CAN TRUST
        </h2>
        <div className="h-1 w-16 bg-[#A67C52] mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white shadow-sm border border-gray-100">
            <h3 className="text-[#96694C] font-bold mb-3">Premium Quality</h3>
            <p className="text-gray-600 text-sm">
              We ensure every item meets the highest standards of craftsmanship.
            </p>
          </div>
          <div className="p-8 bg-white shadow-sm border border-gray-100">
            <h3 className="text-[#96694C] font-bold mb-3">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Swift and safe delivery straight to your doorstep within 3-5 days.
            </p>
          </div>
          <div className="p-8 bg-white shadow-sm border border-gray-100">
            <h3 className="text-[#96694C] font-bold mb-3">Secure Payment</h3>
            <p className="text-gray-600 text-sm">
              Your transactions are protected with industry-leading security.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
