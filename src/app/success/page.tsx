"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white p-10 rounded-2xl shadow-lg text-center border"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          className="text-7xl mb-6 inline-block"
        >
          🎉
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-serif font-bold text-[#96694C] mb-4"
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-600 mb-8"
        >
          Your order has been placed successfully. We will contact you soon for
          delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            href="/shop"
            className="inline-block bg-[#96694C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#8B6543] transition-all active:scale-95"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
