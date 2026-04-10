'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function LogoDesignPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Logo Design</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Create a memorable brand identity with our professional logo design services.
            </p>
            <p>
              We design unique, creative logos that capture your brand's essence and make a lasting impression on your audience.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">Design Process:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Brand strategy consultation</li>
              <li>Concept development</li>
              <li>Multiple design variations</li>
              <li>Unlimited revisions</li>
              <li>Vector format delivery</li>
              <li>Color palette guidelines</li>
              <li>Brand guidelines document</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
