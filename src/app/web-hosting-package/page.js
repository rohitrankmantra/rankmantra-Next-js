'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function WebHostingPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Web Hosting Packages</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Our web hosting packages provide secure, fast, and reliable hosting solutions ensuring excellent uptime and scalability.
            </p>
            <p>
              Choose from shared hosting, VPS, dedicated servers, or cloud solutions based on your website's requirements.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">Hosting Features:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>SSL certificates for security</li>
              <li>Daily automated backups</li>
              <li>24/7 technical support</li>
              <li>High uptime guarantee (99.9%)</li>
              <li>Scalable resources</li>
              <li>Email hosting included</li>
              <li>Free domain registration</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
