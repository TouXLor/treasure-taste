import React from "react";

const Contactus: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#FFFBF0]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-amber-700 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-10 text-lg">
          Have questions about our menu, catering, or event bookings? Reach out
          and we’ll get back to you as soon as we can.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Left column – contact info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-amber-700 mb-2">
                Email
              </h2>
              <a
                href="mailto:hello@treasuretaste.com"
                className="text-gray-800 text-lg hover:text-amber-500 transition-colors"
              >
                hello@treasuretaste.com
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-700 mb-2">
                Phone
              </h2>
              <a
                href="tel:+16085551234"
                className="text-gray-800 text-lg hover:text-amber-500 transition-colors"
              >
                (608) 555-1234
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-amber-700 mb-2">
                Location
              </h2>
              <p className="text-gray-800 text-lg">
                125 W St Paul Ave
                <br />
                Waukesha, WI 53188
              </p>
            </div>
          </div>

          {/* Right column – interactive map */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-72 md:h-full">
            <iframe
              title="Treasure Taste Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.8145267286588!2d-88.2313434!3d43.0100686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88050ff5ebc4215d%3A0xd7fc97ba91444cfc!2s125%20W%20St%20Paul%20Ave%2C%20Waukesha%2C%20WI%2053188!5e0!3m2!1sen!2sus!4v1733438485586!5m2!1sen!2sus"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
