import React from "react";

const ContactForm = () => {
  // Replace these with your location's latitude and longitude
  const latitude = "9.05785"; // Example latitude for Abuja, Nigeria
  const longitude = "7.49508"; // Example longitude for Abuja, Nigeria
  const googleMapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${latitude},${longitude}`;

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between p-6 lg:p-12 bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Contact Form */}
      <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Contact Form</h2>
        <form className="space-y-6">
          {/* Name */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-purple-800">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-purple-800">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-800">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-purple-600"
            />
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-purple-800">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here..."
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>
          {/* Recaptcha */}
          <div>
            <div className="mt-4">
              <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Location</h2>
        <div className="w-full h-80 lg:h-full">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            src={googleMapSrc}
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
