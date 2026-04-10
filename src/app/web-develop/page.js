'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function WebDevelopPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Web Development</h1>
          <div className="text-gray-600 space-y-4">
            <p>
              We specialize in professional web development services. Our expert team creates custom, scalable, and user-friendly websites.
            </p>
            <p>
              From responsive design to seamless functionality, we deliver websites that drive results and enhance your online presence.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
