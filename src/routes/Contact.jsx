import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center">Get in Touch</h1>
      <p className="mt-4 text-lg text-slate-700 leading-relaxed text-center max-w-2xl mx-auto">
        Whether you’re looking to partner with us, volunteer, share your story, 
        or simply learn more about our work, we’d love to hear from you. 
        At Inspire Transformation, every message matters because every person matters.
      </p>

      {/* Contact Grid */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Send a Message</h3>
          <p className="text-slate-600 mt-2 text-sm">
            Fill out the form below and a member of our team will respond within 2–3 business days.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Contact Details</h3>
          <p className="text-slate-600 mt-4">
            <span className="font-medium">General Inquiries:</span> hello@inspiretransformation.org
          </p>
          <p className="text-slate-600 mt-2">
            <span className="font-medium">Partnerships:</span> partners@inspiretransformation.org
          </p>
          <p className="text-slate-600 mt-2">
            <span className="font-medium">Media & Press:</span> press@inspiretransformation.org
          </p>
          <p className="text-slate-600 mt-4">
            <span className="font-medium">Phone:</span> +234 800 000 0000
          </p>
          <p className="text-slate-600 mt-2">
            <span className="font-medium">Office Address:</span> Inspire Transformation Center, 
            123 Community Road, Calabar, Nigeria.
          </p>
          <p className="text-slate-600 mt-4">
            <span className="font-medium">Office Hours:</span><br />
            Monday – Friday: 9:00 AM – 5:00 PM<br />
            Saturday – Sunday: Closed
          </p>

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="mt-3 flex gap-4">
              <a href="https://facebook.com" className="text-rose-600 hover:underline">Facebook</a>
              <a href="https://instagram.com" className="text-rose-600 hover:underline">Instagram</a>
              <a href="https://linkedin.com" className="text-rose-600 hover:underline">LinkedIn</a>
              <a href="https://youtube.com" className="text-rose-600 hover:underline">YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center">Visit Us</h3>
        <p className="text-slate-600 text-center mt-2">
          Stop by our community office during working hours. We’d love to welcome you.
        </p>
        <div className="mt-6 rounded-lg overflow-hidden shadow-lg h-[400px]">
          {/* Google Maps Embed (replace src with actual NGO location) */}
          <iframe
            title="Inspire Transformation Location"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="mt-16 bg-amber-50 p-8 rounded-lg text-center">
        <h3 className="text-xl font-semibold">Need Immediate Help?</h3>
        <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          If you or someone you know in our community is in urgent need of food, 
          counseling, or emergency support, please reach out to us directly via 
          phone for faster assistance.
        </p>
        <p className="mt-4 font-medium text-rose-600 text-lg">Call: +234 800 000 0000</p>
      </div>
    </div>
  )
}
