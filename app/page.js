import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--fonts-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-purple-100">
        <section className="grid grid-cols-1 md:grid-cols-2 h-[60vh] p-8">
          <div className="flex flex-col gap-6 md:items-center justify-center text-center md:text-left">
            <div>
              <p className={`text-5xl font-extrabold ${poppins.className} text-purple-700`}>
                Simplify Your Links, Amplify Your Reach
              </p>
              <p className="px-4 md:px-20 text-lg mt-4 text-gray-800">
                Transform long, complex URLs into clean, memorable links. Whether you’re
                a business or an individual, we make sharing smarter and easier.
              </p>
              <p className="px-4 md:px-20 text-lg mt-2 text-gray-600">
                Track performance, customize links, and unlock the power of data-driven decisions.
                Experience the ultimate link management solution.
              </p>
            </div>
            <div className="flex gap-4 justify-center md:justify-start mt-6">
              <Link href="/shorten">
                <button className="bg-purple-500 rounded-full shadow-lg px-6 py-3 text-white font-bold text-lg hover:bg-purple-600 transform hover:scale-105 transition">
                  Try BitLinks Now
                </button>
              </Link>
            </div>
          </div>


          <div className="justify-center md:justify-start relative hidden md:inline-block">
            <Image
              src="/work.png"
              alt="Link icon"
              className="mix-blend-darken"
              fill={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className="p-8 bg-white">
          <h2 className={`text-3xl font-bold ${poppins.className} text-center mb-6`}>
            Why Choose Our URL Shortener?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-200 p-4 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold">Custom Links</h3>
              <p className="mt-2">
                Create personalized short links that reflect your brand and are easy to remember.
              </p>
            </div>
            <div className="bg-purple-200 p-4 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold">Analytics Dashboard (Coming Soon)</h3>
              <p className="mt-2">
                Track the performance of your links with detailed analytics and insights.
              </p>
            </div>
            <div className="bg-purple-200 p-4 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold">Link Management</h3>
              <p className="mt-2">
                Easily manage and organize all your shortened links in one place.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 bg-purple-50">
          <h2 className={`text-3xl font-bold ${poppins.className} text-center mb-6`}>
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white p-4 rounded-md shadow-md text-center">
              <p className="italic">"This URL shortener has transformed the way I share links!"</p>
              <p className="font-semibold mt-2">- Alex J.</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md text-center">
              <p className="italic">"The analytics feature is a game changer for my marketing efforts."</p>
              <p className="font-semibold mt-2">- Jamie R.</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md text-center">
              <p className="italic">"I love how easy it is to create custom links!"</p>
              <p className="font-semibold mt-2">- Taylor M.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
