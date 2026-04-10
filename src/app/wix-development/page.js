'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function WixDevelopmentPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Wix Development</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Create beautiful, professional websites on Wix with our expert development and customization services.
            </p>
            <p>
              We help you leverage Wix's powerful platform to build engaging websites that stand out and drive results.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">Wix Services:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Website setup and configuration</li>
              <li>Custom design implementation</li>
              <li>E-commerce integration</li>
              <li>App integration</li>
              <li>SEO optimization</li>
              <li>Performance optimization</li>
              <li>Training and support</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
