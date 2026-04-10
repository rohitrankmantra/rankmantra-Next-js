'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function PayPerClickPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">PPC (Pay-Per-Click) Packages</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Our PPC packages provide custom strategies to optimize ad spend, boost traffic, and increase conversions with measurable, high-impact results.
            </p>
            <p>
              We manage keyword research, ad copywriting, campaign setup, bid management, and provide detailed analytics to improve ROI.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">Package Benefits:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Keyword research and analysis</li>
              <li>Ad copywriting and optimization</li>
              <li>Campaign setup and management</li>
              <li>Bid management and optimization</li>
              <li>Landing page optimization</li>
              <li>Detailed performance reporting</li>
              <li>ROI tracking and optimization</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
