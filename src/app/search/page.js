'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function SearchSEOPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Search Engine Optimization (SEO)</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Enhance your website's visibility with our comprehensive SEO strategies designed to improve rankings and drive organic traffic.
            </p>
            <p>
              Our specialized SEO services include on-page optimization, technical SEO, link building, and continuous monitoring.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">Our SEO Services:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Keyword research and analysis</li>
              <li>On-page optimization</li>
              <li>Technical SEO implementation</li>
              <li>Link building and backlink analysis</li>
              <li>Content optimization</li>
              <li>Local SEO services</li>
              <li>Monthly performance reports</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
