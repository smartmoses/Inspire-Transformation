import DonateTiers from '../components/DonateTiers'

export default function Donate() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-3xl font-bold">Donate / Support Us</h1>
      <p className="mt-2 text-slate-600">
        Every contribution you make helps bring transformation to families, 
        young people, and entire communities. Your gift fuels programs that 
        provide hope, education, and sustainable solutions to break cycles of 
        poverty and despair.
      </p>

      {/* Story Section */}
      <div className="mt-8 bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500 shadow-sm">
        <h2 className="text-xl font-semibold">Why Your Support Matters</h2>
        <p className="text-slate-700 mt-2">
          Behind every number is a person with a story. From children gaining 
          access to quality education, to women learning skills that restore 
          dignity, to communities building resilience in faith and livelihood 
          — your generosity makes it possible. 
        </p>
        <p className="text-slate-700 mt-2">
          Together, we can reach those often forgotten, empower them with 
          resources, and inspire transformation that lasts for generations.
        </p>
      </div>

      {/* One-time Donation */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">One-time Gifts</h3>
        <p className="text-slate-600 mt-2">
          A single act of kindness can change a life. Choose from our suggested 
          tiers or give according to your heart.
        </p>
        <div className="mt-4">
          <DonateTiers />
        </div>
      </div>

      {/* Monthly Donation */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Monthly Support</h3>
        <p className="text-slate-600 mt-2">
          Become part of our family of changemakers who sustain this mission 
          every month. Monthly support helps us plan ahead, expand programs, 
          and respond quickly to urgent community needs.
        </p>
        <div className="mt-4">
          <button className="bg-rose-500 hover:bg-rose-600 transition text-white px-6 py-3 rounded-lg shadow">
            Become a Monthly Supporter
          </button>
        </div>
      </div>

      {/* Transparency Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Where Your Money Goes</h3>
        <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
          <li><strong>40%</strong> — Education and skills development</li>
          <li><strong>30%</strong> — Community projects and empowerment</li>
          <li><strong>20%</strong> — Relief, welfare, and outreach</li>
          <li><strong>10%</strong> — Administration and operational costs</li>
        </ul>
        <p className="text-slate-600 mt-3">
          We are committed to transparency and stewardship. Regular impact 
          reports are shared with our partners and donors.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold">Every gift counts. Every gift transforms.</h3>
        <p className="text-slate-600 mt-2">
          Whether you give once or join us monthly, you become part of a 
          movement that restores hope and empowers lives.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="/donate" className="bg-amber-500 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-600 transition">
            Give Now
          </a>
          <a href="/contact" className="border border-rose-500 text-rose-600 px-6 py-3 rounded-lg hover:bg-rose-50 transition">
            Partner with Us
          </a>
        </div>
      </div>
    </div>
  )
}
