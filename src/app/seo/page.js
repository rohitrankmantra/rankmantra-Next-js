'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function SEOPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">SEO Packages</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Enhance your website's visibility with our effective SEO strategies.
            </p>
            <p>
              We help improve search rankings, drive organic traffic, and boost conversions through tailored, results-driven SEO solutions.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
