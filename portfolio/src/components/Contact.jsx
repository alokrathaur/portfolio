import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="text-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact</h2>
      <p className="text-lg">📧 <a href="mailto:alok.rathaur26@gmail.com" className="text-blue-600">alok.rathaur26@gmail.com</a></p>
      <p className="text-lg">📞 +91-7571868833</p>
      <div className="mt-4 space-x-4">
        <a href="https://linkedin.com/in/alokrathaur" target="_blank" className="text-blue-600 font-semibold">LinkedIn</a>
        <a href="https://github.com/alokrathaur" target="_blank" className="text-blue-600 font-semibold">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;