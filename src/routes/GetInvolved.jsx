import React from 'react'
import PartnershipForm from '../components/PartnershipForm'

export default function GetInvolved() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-3xl font-bold">Get Involved</h1>
      <p className="mt-2 text-slate-600">
        Inspire Transformation is more than an organization — it’s a movement. 
        And every movement is powered by people like you. Whether you’re an 
        individual with a willing heart, a corporate body, or a church looking 
        to create lasting community impact, there’s a place for you here.
      </p>

      {/* Volunteer & Corporate */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold">Volunteer</h3>
          <p className="text-slate-600 mt-2">
            Our volunteers are the heartbeat of what we do — from helping in 
            events, to mentoring young people, to supporting logistics during 
            community outreaches. No matter your skills, you can make a 
            difference with your time and presence.
          </p>
          <div className="mt-4">
            <button className="border border-rose-500 text-rose-600 hover:bg-rose-50 px-4 py-2 rounded transition">
              Sign Up to Volunteer
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold">Corporate Partnership</h3>
          <p className="text-slate-600 mt-2">
            We collaborate with businesses, NGOs, and faith-based organizations 
            to amplify impact. Through sponsorship packages, skill-sharing, or 
            joint initiatives, your organization can touch lives while also 
            strengthening its social responsibility goals.
          </p>
          <div className="mt-4">
            <button className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-4 py-2 rounded transition">
              Become a Partner
            </button>
          </div>
        </div>
      </div>

      {/* Ambassador Program */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold">Become an Ambassador</h3>
        <p className="text-slate-600 mt-2">
          Ambassadors are advocates who help carry the Inspire Transformation 
          message to their circles of influence. They promote our programs, 
          rally supporters, and represent us in schools, churches, and 
          communities. If you’re passionate about advocacy, this role is for you.
        </p>
        <div className="mt-4">
          <button className="border border-green-500 text-green-600 hover:bg-green-50 px-4 py-2 rounded transition">
            Join the Ambassador Network
          </button>
        </div>
      </div>

      {/* Partnership Form */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Partner Interest</h3>
        <p className="text-slate-600 mt-2">
          Ready to take the next step? Fill out this quick form and our 
          partnerships team will connect with you to explore how we can work 
          together to create lasting transformation.
        </p>
        <div className="mt-6">
          <PartnershipForm />
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold">Transformation begins with your step.</h3>
        <p className="text-slate-600 mt-2">
          Partner with us today — through volunteering, corporate support, 
          or becoming an ambassador — and let’s create impact that lasts.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="/donate" className="bg-rose-500 text-white px-6 py-3 rounded-lg shadow hover:bg-rose-600 transition">
            Donate
          </a>
          <a href="/contact" className="border border-rose-500 text-rose-600 px-6 py-3 rounded-lg hover:bg-rose-50 transition">
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  )
}
