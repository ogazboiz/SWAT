import React from 'react';

const ContactForm = () => {
  return (
    <section className="w-full min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row bg-slate-200 py-9 px-9 mt-10 font-sanss rounded-lg">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[700px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15961.959622177567!2d36.82194185!3d-1.2920659999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1637334155695!5m2!1sen!2ske"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
          <button 
            className="absolute px-4 py-2 text-sm transition-colors bg-white rounded shadow-md top-4 left-4 hover:bg-gray-50"
          >
            View larger map
          </button>
        </div>

        {/* Form Section */}
        <div className="w-full p-6 bg-transparent lg:w-1/2 sm:p-8 lg:p-12 xl:p-16">
          <div className="max-w-xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wider text-[#7E689A]">ABOUT US</h2>
                <div className="h-0.5 w-8 bg-red-600"></div>
              </div>
              <h1 className="text-3xl font-semibold leading-tight text-blacke sm:text-4xl lg:text-[45px]">
                Writing Us something
              </h1>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full px-4 py-3 bg-transparent text-black placeholder-gray-400 border border-[#3D2B68] rounded focus:outline-none focus:border-red-600 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full px-4 py-3 bg-transparent text-black placeholder-gray-400 border border-[#3D2B68] rounded focus:outline-none focus:border-red-600 transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone No"
                    className="w-full px-4 py-3 bg-transparent text-black placeholder-gray-400 border border-[#3D2B68] rounded focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject*"
                    className="w-full px-4 py-3 bg-transparent text-black placeholder-gray-400 border border-[#3D2B68] rounded focus:outline-none focus:border-red-600 transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full px-4 py-3 bg-transparent text-black placeholder-gray-400 border border-[#3D2B68] rounded focus:outline-none focus:border-red-600 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 text-white transition-colors bg-red-600 rounded hover:bg-red-700"
              >
                Send Message
                <span className="text-xl">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

