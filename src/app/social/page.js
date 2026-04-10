'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function SocialMediaPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Social Media Marketing</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Build a powerful social media presence with our comprehensive social media marketing strategies.
            </p>
            <p>
              We help you engage with your audience, increase brand awareness, and drive conversions across all social platforms.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">Social Media Services:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Account setup and optimization</li>
              <li>Content creation and scheduling</li>
              <li>Community management</li>
              <li>Paid social media campaigns</li>
              <li>Influencer collaborations</li>
              <li>Analytics and reporting</li>
              <li>Brand strategy development</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
