const ContactForm = () => {
    return (
      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Contact Info */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex space-x-4">
            <span className="text-2xl text-gray-700">📍</span>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
  
          {/* Phone */}
          <div className="flex space-x-4">
            <span className="text-2xl text-gray-700">📞</span>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">
                Mobile: (+84) 546-6789 <br />
                Hotline: (+84) 456-6789
              </p>
            </div>
          </div>
  
          {/* Working Time */}
          <div className="flex space-x-4">
            <span className="text-2xl text-gray-700">⏰</span>
            <div>
              <h3 className="font-semibold text-lg">Working Time</h3>
              <p className="text-gray-600">
                Monday–Friday: 9:00 – 22:00 <br />
                Saturday–Sunday: 9:00 – 21:00
              </p>
            </div>
          </div>
        </div>
  
        {/* Right Section: Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Your name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Abc"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
  
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Abc@def.com"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
  
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="This is an optional"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
  
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Hi! I’d like to ask about"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  