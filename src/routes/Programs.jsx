import { PROGRAMS } from '../utils/constants'
import ProgramCard from '../components/ProgramCard'

export default function Programs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Our Programs</h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          At Inspire Transformation, our programs are designed to bring hope, 
          build resilience, and equip communities with the tools they need to 
          thrive. Explore our different focus areas and discover where you can 
          make a difference.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {PROGRAMS.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Get Involved</h2>
        <p className="mt-2 text-slate-600">
          Every program grows stronger with your support. Whether you choose to 
          volunteer your time, donate resources, or become a partner, you are 
          helping transform lives.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/donate"
            className="bg-rose-500 text-white px-6 py-3 rounded-lg shadow hover:bg-rose-600 transition"
          >
            Support a Program
          </a>
          <a
            href="/get-involved"
            className="border border-rose-500 text-rose-600 px-6 py-3 rounded-lg hover:bg-rose-50 transition"
          >
            Volunteer / Partner
          </a>
        </div>
      </div>
    </div>
  )
}
