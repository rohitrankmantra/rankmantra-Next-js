'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Shopify Development</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Launch your e-commerce business with our expert Shopify development and customization services.
            </p>
            <p>
              We create powerful Shopify stores with custom themes, apps, and integrations to maximize your sales potential.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">Shopify Services:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Store setup and configuration</li>
              <li>Custom theme development</li>
              <li>App integration</li>
              <li>Payment gateway setup</li>
              <li>Product import and management</li>
              <li>Marketing optimization</li>
              <li>Ongoing maintenance and support</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
