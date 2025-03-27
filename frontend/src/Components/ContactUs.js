import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="bg-gradient-to-b from-green-900 to-teal-900 text-white p-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Contact Information */}
        <div className="md:w-1/2">
          <h1 className="text-7xl font-bold mb-4 text-lime-400">
            Contact Us
            <div className="w-16 h-1 bg-lime-500 mt-2"></div>
          </h1>
          <p className="text-lg leading-relaxed">
            Have any questions or suggestions? Reach out to us!
          </p>
          <div className="mt-6 space-y-4">
            <p><strong>Email:</strong> example@email.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Address:</strong> 123 Street, City, Country</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-xl">
          <form>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Name</label>
              <input type="text" className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-lime-400 focus:outline-none" placeholder="Your Name" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Email</label>
              <input type="email" className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-lime-400 focus:outline-none" placeholder="Your Email" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-lime-400 focus:outline-none" rows="4" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-lime-500 to-green-500 text-black font-bold py-3 rounded hover:from-green-500 hover:to-teal-500 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
