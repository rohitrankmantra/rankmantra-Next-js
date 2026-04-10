'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function WebsiteRedesignPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Website Redesigning</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Revitalize your outdated website with our comprehensive redesign services.
            </p>
            <p>
              We modernize your site with current design trends, improved functionality, and better user experience to boost conversions.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">Redesign Includes:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Modern design implementation</li>
              <li>Mobile responsiveness</li>
              <li>Performance optimization</li>
              <li>SEO improvement</li>
              <li>Content restructuring</li>
              <li>User experience enhancement</li>
              <li>Speed optimization</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
