'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import About from '@/components/About'

export default function AboutUsPage() {
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden bg-[#FEFAF8] border-b border-orange-100 pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">About Us</h1>
          <About />
        </div>
      </section>
      <Footer />
    </>
  )
}
