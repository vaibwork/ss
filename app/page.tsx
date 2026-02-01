'use client'

import { motion } from 'framer-motion'

const Section = ({ children }: { children: React.ReactNode }) => (
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

      {/* COVER / HERO */}
      <Section>
        <div className="text-center space-y-6">
          <p className="uppercase tracking-widest text-sm">
            Corporate Turnkey Interior Fit-Out Contractor
          </p>
          <h1 className="text-5xl md:text-7xl font-light">
            SS CREATION
          </h1>
          <p className="text-lg italic">
            Excellence in Every Project
          </p>
          <p className="text-sm tracking-wide">
            Your Growth, Our Mission
          </p>
        </div>
      </Section>

      {/* INTRODUCTION */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-3xl font-light">Introduction</h2>
          <p>
            SS Creation is a professionally managed Interior Construction &
            Commercial Fit-Out Company delivering end-to-end solutions for
            offices, retail spaces, and commercial establishments.
          </p>
          <p>
            With a strong focus on <strong>quality</strong>,{' '}
            <strong>timelines</strong>, and <strong>compliance</strong>,
            SS Creation transforms concepts into functional, aesthetically
            refined spaces.
          </p>
          <p className="italic">
            With over 25 years of experience, we help organisations execute
            their projects on time, within scope, and on budget.
          </p>
        </div>
      </Section>

      {/* FOUNDER */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-3xl font-light">About Founder</h2>
          <p className="font-semibold">Amit Jasu – Founder</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>25 years of experience in project management and strategic planning</li>
            <li>Strong focus on execution quality and coordination</li>
            <li>Ensures timely project delivery</li>
            <li>Practical site knowledge and problem-solving approach</li>
            <li>Smooth handling of multi-trade interior works</li>
          </ul>
        </div>
      </Section>

      {/* OUR APPROACH */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-3xl font-light">Our Approach</h2>
          <p>
            Our goal is to align project objectives with business goals,
            ensuring every project delivers maximum value.
          </p>
          <p>
            We believe in a collaborative and systematic approach to project
            management, where structured planning and execution are core
            principles.
          </p>
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-3xl font-light">Services Offered</h2>
          <ul className="grid md:grid-cols-2 gap-3 list-disc ml-6">
            <li>Market Research</li>
            <li>Scope Definition</li>
            <li>Timeline Development</li>
            <li>Resource Allocation</li>
            <li>Project Execution</li>
            <li>Task Management</li>
            <li>Progress Tracking</li>
            <li>Quality Control</li>
            <li>Project Evaluation</li>
            <li>Performance Analysis</li>
            <li>Stakeholder Feedback</li>
            <li>Lessons Learned</li>
          </ul>
        </div>
      </Section>

      {/* PERFORMANCE METRICS */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-3xl font-light">Performance Metrics</h2>
          <p><strong>On-Time Delivery:</strong> High percentage of projects completed on schedule</p>
          <p><strong>Budget Adherence:</strong> Projects executed within approved budgets</p>
          <p><strong>Client Satisfaction:</strong> Repeat clients and positive feedback</p>
          <p><strong>Quality Standards:</strong> Compliance with quality and client requirements</p>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-3xl font-light">Projects</h2>
          <p><strong>Amway</strong> – 5,500 Sqft | Design & Build</p>
          <p><strong>Visteon</strong> – 21,000 Sqft | Civil & Interior</p>
          <p><strong>OSL Prestige (BMW)</strong> – 12,000 Sqft | Civil & Interior</p>
          <p><strong>OSL Future (Tata Motors)</strong> – 10,000 Sqft | Civil & Interior</p>
        </div>
      </Section>

      {/* OTHER PROJECTS */}
      <Section>
        <div className="space-y-6">
          <h2 className="text-3xl font-light">Other Major Projects</h2>
          <p>Cordlife – 3,000 Sqft | Design & Build</p>
          <p>Allcargo – 1,500 Sqft | Design & Build</p>
          <p>Incuspaze (Samsung Bhubaneshwar) – 6,000 Sqft | Civil & Interior</p>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <div className="space-y-8">
          <h2 className="text-3xl font-light">Client Testimonials</h2>

          <blockquote className="italic">
            “We would like to express our gratitude for the top-quality work of
            SS Creation which allowed our project to be commissioned ahead of
            schedule.”
            <br />
            <span className="not-italic font-semibold">
              — Mr. Sukanta Das, Cordlife
            </span>
          </blockquote>

          <blockquote className="italic">
            “It has been a wonderful experience working with SS Creation.
            They are extremely helpful, receptive and great at their work.”
            <br />
            <span className="not-italic font-semibold">
              — Mr. Pattynayak, OSL Group
            </span>
          </blockquote>
        </div>
      </Section>

      {/* CONTACT */}
      <Section>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-light">Contact</h2>
          <p>
            21 Camac Street, Bell House<br />
            9th Floor, Kolkata – 700016
          </p>
          <p>📞 9831157971</p>
          <p>📧 info@sscreation.co.in</p>
          <p className="italic max-w-xl mx-auto">
            For more information or to discuss how SS Creation can help your
            business achieve its project goals, please contact us.
          </p>
        </div>
      </Section>

    </main>
  )
}
