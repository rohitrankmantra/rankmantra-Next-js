'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function WebsiteDesigningPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Website Designing</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Create stunning, user-friendly websites with our professional website design services.
            </p>
            <p>
              We focus on aesthetics, usability, and conversion to deliver websites that not only look great but also drive results.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">Design Services:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom website design</li>
              <li>Responsive layout design</li>
              <li>UI/UX optimization</li>
              <li>Brand identity integration</li>
              <li>User experience optimization</li>
              <li>Wireframing and prototyping</li>
              <li>Design-to-code implementation</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
