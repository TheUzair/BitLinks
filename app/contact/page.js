import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-purple-100 text-gray-800 p-8">
      <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-center mb-6">
          Have questions or need assistance? We’re here to help. Use the form below or reach out to us directly.
        </p>

        {/* Contact Form */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-purple-600"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-purple-600"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-purple-600"
                placeholder="Write your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-md font-bold shadow-md hover:bg-purple-600"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Contact Details */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:support@bitlinks.com" className="text-purple-600 underline">
                support@bitlinks.com
              </a>
            </p>
            <p className="text-lg">
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+1234567890" className="text-purple-600 underline">
                +1 234 567 890
              </a>
            </p>
            <p className="text-lg">
              <span className="font-semibold">Address:</span> 123 Link Street, URL City, Webland
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
