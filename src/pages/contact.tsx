import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Have questions or feedback? We'd love to hear from you! You can
          reach out to us through the following contact methods.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Address:</strong> 123 Main Street, Stockholm, Sweden
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Email:</strong> info@Rebelrunway.com
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Phone:</strong> +46 (123) 456-789
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Contact Form
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-800 dark:text-gray-200"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 dark:text-gray-200"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-800 dark:text-gray-200"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                id="message"
                name="message"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              className="bg-black text-white  rounded px-4 py-2" 
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
