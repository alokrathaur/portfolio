import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Senior iOS Developer</h1>
      <p className="text-lg max-w-xl mx-auto">
        Experienced iOS Developer with 7+ years in building high-quality, user-centric apps.
        Skilled in Swift, Objective-C, and modern architectures (MVC, MVVM).
      </p>
      <div className="mt-6 space-x-4">
        <a href="/Alok_kumar_Rathaur_ios.pdf" target="_blank"
          className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100">
          Download Resume
        </a>
        <a href="https://linkedin.com/in/alokrathaur" target="_blank"
          className="px-6 py-2 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600">
          LinkedIn
        </a>
        <a href="https://github.com/alokrathaur" target="_blank"
          className="px-6 py-2 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;