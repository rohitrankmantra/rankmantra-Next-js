'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function OnlineReputationPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">ORM (Online Reputation Management) Packages</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Our ORM packages help manage and improve your online reputation by addressing negative content and boosting positive reviews.
            </p>
            <p>
              We help enhance brand perception, build customer trust, and maintain a strong positive online presence across all platforms.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">What We Do:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Monitor brand mentions and reviews</li>
              <li>Address negative reviews professionally</li>
              <li>Enhance positive content visibility</li>
              <li>Build and promote positive reviews</li>
              <li>Content creation and distribution</li>
              <li>Social media reputation management</li>
              <li>Crisis response and management</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
