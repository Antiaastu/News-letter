import React from "react";
import testimonials from "../../../Testimonials";

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-10 sm:mb-12">
          What People Are Saying
        </h2>
        <div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-900 shadow-lg dark:shadow-black rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-gray-700 transition-all duration-300 ease-in-out"
              >
                <p className="text-yellow-400 text-xl sm:text-lg mb-2">
                  {"★".repeat(testimonial.rating)}
                </p>
                <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
