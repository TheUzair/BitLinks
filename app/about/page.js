import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image"; 

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-purple-100 text-gray-800">
      <main className="flex-grow p-8">
        <div className="container mx-auto">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-600">About BitLinks</h1>
            <p className="mt-4 text-lg">
              Discover the power of simplicity and efficiency in link management.
            </p>
            <Image
              src="/hero.jpg" 
              alt="About BitLinks"
              width={600}
              height={400}
              className="mx-auto mt-6 rounded-lg shadow-lg"
            />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At BitLinks, our mission is to make your digital journey seamless.
              "Whether you're sharing content, managing campaigns, or tracking clicks,"
              we provide the tools to simplify and enhance your online presence.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Shorten long URLs for easier sharing.</li>
              <li>Track clicks and monitor link performance.</li>
              <li>Manage all your links in one convenient dashboard.</li>
              <li>Ensure link reliability and uptime.</li>
              <li>Generate QR codes for your shortened links.</li>
              <li>API access for seamless integration into your applications.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg leading-relaxed">
              BitLinks is powered by a passionate team of developers and digital
              enthusiasts dedicated to delivering the best link management solution.
              We believe in innovation, simplicity, and empowering users worldwide.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <Image
                src="/team-member1.jpg" 
                alt="Team Member 1"
                width={150}
                height={150}
                className="rounded-full border-2 border-purple-500"
              />
              <Image
                src="/team-member2.jpg" 
                alt="Team Member 2"
                width={150}
                height={150}
                className="rounded-full border-2 border-purple-500"
              />
              <Image
                src="/team-member3.jpg" 
                alt="Team Member 3"
                width={150}
	              height={150}
                className="rounded-full border-2 border-purple-500"
              />
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Join thousands of users who trust BitLinks for their link-shortening needs.
              Try it out today and experience the difference.
            </p>
            <Link
              href="/shorten"
              className="bg-purple-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-purple-600 font-bold"
            >
              Start Now
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;