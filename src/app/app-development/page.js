'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function AppDevelopmentPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">App Development</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              Build powerful mobile and web applications with our expert app development services.
            </p>
            <p>
              We create custom, scalable, and user-friendly apps for iOS, Android, and cross-platform solutions.
            </p>
            <h2 className="text-2xl font-semibold text-[#7A6960] mt-8">App Development Services:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>iPhone/iOS app development</li>
              <li>Android app development</li>
              <li>Cross-platform app development</li>
              <li>Web app development</li>
              <li>API development</li>
              <li>Database design and management</li>
              <li>Testing and deployment</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
