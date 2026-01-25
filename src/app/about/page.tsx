import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <main className="max-w-4xl mx-auto p-10 py-20 text-center">
        <h1 className="text-3xl font-serif font-bold text-[#96694C] mb-1">
          About LUMINA MON
        </h1>
        <div className="h-1 w-85 bg-[#A67C52] mx-auto mb-10"></div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Founded in 2026, Lumina Mon represents elegance and quality. Our
          mission is to provide carefully curated products that bring style and
          comfort to your everyday life.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Every item in our shop is selected with passion and high standards,
          ensuring that you receive nothing but the best.
        </p>
      </main>
      <Footer />
    </div>
  );
}
