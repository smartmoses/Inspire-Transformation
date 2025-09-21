import React from 'react'

export default function Media() {
  return (
    <div className="py-12">
      <div className="container-padding mx-auto">
        <h1 className="text-4xl font-bold mb-8">Media Center</h1>

        {/* Latest News */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
              <img
                src="https://source.unsplash.com/600x400/?community,people"
                alt="Community event"
                className="rounded-lg mb-4 object-cover h-48 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">
                Inspire Transformation Launches Youth Empowerment Program
              </h3>
              <p className="text-slate-600 flex-grow">
                Over 100 young people enrolled in skills training programs this quarter.
              </p>
              <a
                href="#"
                className="mt-4 text-blue-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
              <img
                src="https://source.unsplash.com/600x400/?education,learning"
                alt="Training session"
                className="rounded-lg mb-4 object-cover h-48 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">
                Partnership with Local Schools Expands Mentorship
              </h3>
              <p className="text-slate-600 flex-grow">
                New mentorship collaborations help students gain guidance and confidence.
              </p>
              <a
                href="#"
                className="mt-4 text-blue-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>

            {/* News Card 3 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
              <img
                src="https://source.unsplash.com/600x400/?donation,help"
                alt="Donation drive"
                className="rounded-lg mb-4 object-cover h-48 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">
                Community Food Drive Supports 200+ Families
              </h3>
              <p className="text-slate-600 flex-grow">
                Generous donors made it possible to distribute food and essentials
                to families in need.
              </p>
              <a
                href="#"
                className="mt-4 text-blue-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Inspire Transformation Receives National Recognition
              </h3>
              <p className="text-slate-600">
                <span className="italic">Published March 12, 2025</span> — We are honored 
                to be recognized nationally for our impact in community development.
              </p>
              <a href="#" className="text-blue-600 hover:underline mt-2 block">
                Read Full Release →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Quarterly Report Shows Growth in Volunteer Engagement
              </h3>
              <p className="text-slate-600">
                <span className="italic">Published Feb 5, 2025</span> — Volunteer participation
                increased by 30%, reflecting strong community involvement.
              </p>
              <a href="#" className="text-blue-600 hover:underline mt-2 block">
                Read Full Release →
              </a>
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Brand Assets</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    📦 Logo Package (ZIP)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    📘 Brand Guidelines (PDF)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    📸 Photo Library
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p>
                  <strong>Media Inquiries:</strong>
                  <br />
                  media@inspire-transformation.org
                </p>
                <p>
                  <strong>Press Contact:</strong>
                  <br />
                  (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-blue-600 text-white p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">
              Subscribe to our newsletter to receive the latest news and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-gray-900 flex-grow max-w-md"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
