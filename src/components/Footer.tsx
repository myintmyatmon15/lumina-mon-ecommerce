import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#96694C] text-white pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-serif font-bold mb-4 tracking-wider uppercase">
              LUMINA MON
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
              Your one-stop destination for premium products. We deliver quality
              and style to your doorstep.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#A67C52] pb-1 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                <Link
                  href="/products"
                  className="hover:text-black transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/new-arrivals"
                  className="hover:text-black transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/offers"
                  className="hover:text-black transition-colors"
                >
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#A67C52] pb-1 inline-block">
              Service
            </h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-black transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-black transition-colors"
                >
                  Return & Refund
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#A67C52] pb-1 inline-block">
              Stay Updated
            </h3>
            <div className="flex w-full mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border border-white/20 px-3 py-2 text-sm w-full focus:outline-none focus:bg-white/20 text-white placeholder-gray-300"
              />
              <button className="bg-white text-[#96694C] px-4 py-2 text-sm font-bold hover:bg-gray-200 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-transform hover:scale-110"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-transform hover:scale-110"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-transform hover:scale-110"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>

          <p className="text-[10px] md:text-xs text-gray-200 tracking-widest uppercase">
            © 2026 LUMINA MON ONLINE SHOP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
