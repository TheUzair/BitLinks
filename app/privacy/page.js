import React from "react";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-purple-100 text-gray-800 p-8">
      <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-purple-600 mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="text-lg mb-6">
          Your privacy is important to us. This policy explains how we collect, use, 
          and protect your information when you use our services.
        </p>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p className="text-lg leading-relaxed">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
            <li>Personal information such as your name, email address, and phone number.</li>
            <li>Usage data like your IP address, browser type, and interaction with our site.</li>
            <li>Analytics data to improve our services and provide a better user experience.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="text-lg leading-relaxed">
            We use your information to:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
            <li>Provide, maintain, and improve our services.</li>
            <li>Respond to your inquiries or support requests.</li>
            <li>Send updates, promotional offers, or service-related notifications.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Data Protection</h2>
          <p className="text-lg leading-relaxed">
            We implement robust security measures to protect your personal information 
            from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p className="text-lg leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of receiving promotional emails or notifications.</li>
            <li>Request clarification about our data practices.</li>
          </ul>
        </section>
        
        <section className="text-center mt-8">
          <p className="text-lg">
            If you have any questions about this Privacy Policy, please 
            <Link href="/contact" className="text-purple-600 underline"> contact us</Link>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Privacy;
