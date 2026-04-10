'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function WordPressDevelopmentPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">WordPress Development</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Build powerful, scalable websites with WordPress using our professional development services.
            </p>
            <p>
              From custom themes to plugin development, we create WordPress solutions tailored to your business needs.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">WordPress Services:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom WordPress theme development</li>
              <li>Plugin development and customization</li>
              <li>WooCommerce integration</li>
              <li>SEO optimization</li>
              <li>Performance optimization</li>
              <li>Security implementation</li>
              <li>Maintenance and support</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
