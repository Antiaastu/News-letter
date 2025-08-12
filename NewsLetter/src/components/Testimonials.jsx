import React from "react";
import testimonials from "../Testimonials";

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          What People Are Saying
        </h2>
        <div>
            <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <p className="text-yellow-400 text-lg mb-2">
                {"★".repeat(testimonial.rating)}
              </p>
              <p className="text-gray-800 text-sm italic leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
