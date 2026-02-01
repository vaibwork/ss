'use client'

import { motion } from 'framer-motion'

const Section = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="min-h-screen flex items-center justify-center px-6 py-32"
  >
    <div className="max-w-5xl w-full">{children}</div>
  </motion.section>
)

export default function Home() {
  return (
    <main className="bg-[#f7f5f2] text-[#1c1c1c]">

      <Section>
        <div className="text-center space-y-6">
          <p className="uppercase tracking-widest text-sm">
            Corporate Turnkey Interior Fit-Out Contractor
          </p>
          <h1 className="text-5xl md:text-7xl font-light">
            SS CREATION
          </h1>
          <p className="italic text-lg">Excellence in Every Project</p>
          <p className="text-sm">Your Growth, Our Mission</p>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl mb-4">Introduction</h2>
        <p>
          SS Creation is a professionally managed Interior Construction &
          Commercial Fit-Out Company delivering end-to-end solutions for
          offices, retail spaces, and commercial establishments.
        </p>
      </Section>

      <Section>
        <h2 className="text-3xl mb-4">Contact</h2>
        <p>21 Camac Street, Bell House, 9th Floor, Kolkata – 700016</p>
        <p>📞 9831157971</p>
        <p>📧 info@sscreation.co.in</p>
      </Section>

    </main>
  )
}
