import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <main className="max-w-xl mx-auto p-5 py-10">
        <h1 className="text-4xl font-serif font-bold text-[#96694C] text-center mb-2">
          CONTACT US
        </h1>
        <form className="space-y-4 bg-white py-6 px-8 rounded-xl shadow-sm border border-gray-100">
          <div>
            <label className="block text-sm font-medium text-[#96694C] mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border-gray-200 border p-3 rounded-md focus:ring-[#A67C52] focus:border-[#A67C52] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#96694C] mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border-gray-200 border p-3 rounded-md outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#96694C] mb-2">
              Message
            </label>
            <textarea
              rows={3}
              className="w-full border-gray-200 border p-3 rounded-md outline-none"
            ></textarea>
          </div>
          <button className="w-full bg-[#96694C] text-white font-bold py-4 rounded-md hover:bg-[#8B6543] transition">
            SEND MESSAGE
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
