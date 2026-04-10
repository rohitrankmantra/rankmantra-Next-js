'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function SMMPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">SMM Packages</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Boost your brand on social media with our customized SMM strategies.
            </p>
            <p>
              We help enhance brand visibility, engage your audience, drive targeted traffic, and increase conversions across all platforms.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
