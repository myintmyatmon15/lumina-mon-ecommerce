"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/src/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartCount = cartItems.length;

  const displayCount = mounted ? cartCount : 0;

  return (
    <nav className="bg-[#FAF9F6] shadow-sm sticky top-0 z-[100] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/LMb-logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-serif font-bold text-[#96694C] tracking-tight group-hover:text-[#8B6543]">
              LUMINA MON
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "Shop", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-[#96694C] font-medium transition-colors duration-300 hover:text-[#8B6543] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#A67C52] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            ))}

            <Link
              href="/cart"
              className="relative p-2 cursor-pointer transition-transform hover:scale-110 active:scale-90 group"
            >
              <span className="text-2xl text-[#96694C] group-hover:text-[#8B6543]">
                🛒
              </span>

              <AnimatePresence mode="popLayout">
                {displayCount > 0 && (
                  <motion.span
                    key={displayCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="absolute top-0 right-0 bg-[#A67C52] text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    {displayCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Link href="/cart" className="relative p-2">
              <span className="text-2xl text-[#96694C]">🛒</span>
              <AnimatePresence>
                {displayCount > 0 && (
                  <motion.span
                    key={displayCount}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 bg-[#A67C52] text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center"
                  >
                    {displayCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#96694C] p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-[150] p-6 animate-slide-down md:hidden">
          <div className="flex justify-between items-center mb-10 border-b pb-4">
            <div className="flex items-center gap-2">
              <Image src="/LMb-logo.jpg" alt="Logo" width={30} height={30} />
              <span className="font-serif font-bold text-[#96694C]">
                LUMINA MON
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl text-[#96694C]"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col space-y-4 text-center">
            {["Home", "Shop", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-[#96694C] font-medium py-3 px-4 rounded-lg hover:bg-[#FAF9F6] transition-all"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-[#96694C] font-medium py-3 px-4 rounded-lg bg-[#FAF9F6] flex justify-center items-center gap-3 shadow-sm border"
            >
              VIEW CART{" "}
              <span className="bg-[#A67C52] text-white text-sm px-3 py-1 rounded-full">
                {displayCount}
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
