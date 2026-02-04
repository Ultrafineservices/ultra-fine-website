import React from "react";

export default function UltraFineWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Ultra Fine Supply & Services</h1>
          <div className="mt-3 md:mt-0 text-center md:text-right">
            <p className="text-sm">📞 832-490-0899</p>
            <p className="text-sm">📧 ultrafineservices@gmail.com</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-semibold mb-4">
            Nourishing Young Minds with Quality Meals & Expert Support
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Reliable food solutions and nutrition program support for daycare facilities.
            We make meal service easier, healthier, and fully compliant.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-2xl font-semibold mb-4">
          Reliable Food Solutions for Daycare Facilities
        </h3>
        <p className="max-w-3xl">
          At Ultra Fine Supply & Services, we specialize in providing high-quality,
          dependable support to daycare centers. Our mission is to simplify food
          service operations so you can focus on what matters most: caring for children.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Food & Milk Distribution</h4>
              <p>Timely, consistent delivery of nutritious meals, snacks, and dairy products.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Food Program Assistance (CACFP)</h4>
              <p>Support with documentation, claims, and compliance.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Menu Planning</h4>
              <p>USDA and CACFP-compliant menus that fit your budget.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Nutritional Support</h4>
              <p>Guidance to ensure balanced, healthy meals for children.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-2xl font-semibold mb-6 text-center">Why Choose Us?</h3>
        <ul className="max-w-3xl mx-auto space-y-3 list-disc list-inside">
          <li>Trusted by daycare facilities</li>
          <li>Knowledgeable team focused on quality and compliance</li>
          <li>Reliable delivery and responsive support</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p>📞 832-490-0899</p>
          <p>📧 ultrafineservices@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} Ultra Fine Supply & Services. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
