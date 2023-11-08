import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          About Our Company
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome to our company! We are a team of dedicated professionals who
          are passionate about what we do. Our mission is to provide high-quality
          products and exceptional service to our customers. We believe in the
          importance of quality, integrity, and customer satisfaction.
        </p>
        {/* image workspace here */}
        <img
          src="town.jpg"
          alt="Our Team"
          className="w-full mt-6 rounded-lg shadow"
        />
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our vision is to be a leading company in the fashion industry,
            providing trendy and high-quality clothing to our customers. We
            strive to innovate and set new standards in fashion while ensuring
            sustainability and ethical practices in our work.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Our Achievements
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <span className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
                95%
              </span>
              <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
                1000+
              </span>
              <p className="text-gray-600 dark:text-gray-400">Orders Delivered</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
                5000+
              </span>
              <p className="text-gray-600 dark:text-gray-400">Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const aboutPage = () => {
  return <div></div>;
};
