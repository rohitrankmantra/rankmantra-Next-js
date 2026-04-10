'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function EcommerceDevelopPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">E-Commerce Development</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Build a powerful online store with our comprehensive e-commerce development solutions.
            </p>
            <p>
              From product catalogs to secure payments, we create e-commerce platforms that drive sales and enhance customer experience.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">E-Commerce Features:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Responsive product catalog</li>
              <li>Secure payment gateway integration</li>
              <li>Inventory management system</li>
              <li>Order tracking and management</li>
              <li>Customer account management</li>
              <li>SEO-friendly product pages</li>
              <li>Analytics and reporting</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
