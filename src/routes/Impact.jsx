import ImpactCounter from '../components/ImpactCounter'

export default function Impact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-3xl font-bold">Our Impact</h1>
      <p className="mt-2 text-slate-600">
        Transformation is not just an idea — it’s visible in lives restored, 
        families supported, and communities strengthened. At Inspire Transformation, 
        we track both the stories and the numbers to ensure accountability 
        and long-lasting change.
      </p>

      {/* Metrics Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Impact in Numbers</h2>
        <p className="text-slate-600 mt-2">
          Each number represents a real person, a real family, a real story.
        </p>
        <div className="mt-6">
          <ImpactCounter />
        </div>
      </div>

      {/* Stories Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Stories of Change</h2>
        <p className="text-slate-600 mt-2">
          Beyond numbers, we celebrate individuals who have experienced 
          transformation. Here are a few recent highlights:
        </p>
        <ul className="list-disc list-inside text-slate-700 mt-4 space-y-2">
          <li>
            <span className="font-semibold">Joy’s Story:</span> Once struggling 
            with self-doubt, Joy found confidence through our mentorship program 
            and is now a mentor to others.
          </li>
          <li>
            <span className="font-semibold">The Ade Family:</span> Supported 
            through our food drive, they overcame a season of hardship and now 
            volunteer with us to give back.
          </li>
          <li>
            <span className="font-semibold">Youth Empowerment:</span> 50+ young 
            people trained in vocational skills, now earning incomes and 
            supporting their households.
          </li>
        </ul>

        {/* Image Gallery */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="https://source.unsplash.com/400x300/?community,help"
              alt="Community support"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src="https://source.unsplash.com/400x300/?volunteer,people"
              alt="Volunteers"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src="https://source.unsplash.com/400x300/?children,smile"
              alt="Smiling children"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src="https://source.unsplash.com/400x300/?youth,education"
              alt="Youth empowerment"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src="https://source.unsplash.com/400x300/?family,hope"
              alt="Family support"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src="https://source.unsplash.com/400x300/?mentor,teaching"
              alt="Mentorship"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
          </div>
        </div>
      </div>

      {/* Transparency Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Reports & Accountability</h2>
        <p className="text-slate-600 mt-2">
          We believe in transparency. Every donation and every partnership is 
          stewarded with care, and we publish periodic reports for our 
          community and stakeholders.
        </p>
        <div className="mt-4 space-y-2">
          <a
            href="#"
            className="text-rose-600 hover:underline block"
          >
            📄 2024 Annual Impact Report (PDF)
          </a>
          <a
            href="#"
            className="text-rose-600 hover:underline block"
          >
            📊 Q1 2025 Community Outreach Summary
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold">Every number grows with you.</h3>
        <p className="text-slate-600 mt-2">
          Partner with us today to multiply this impact and reach even more 
          lives across our communities.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/donate"
            className="bg-rose-500 text-white px-6 py-3 rounded-lg shadow hover:bg-rose-600 transition"
          >
            Donate Now
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
