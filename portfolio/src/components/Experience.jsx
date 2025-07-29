import React from "react";

const experiences = [
  {
    role: "Senior iOS Developer",
    company: "Currencies Direct Solutions Pvt. Ltd.",
    period: "Aug 2023 – Present",
    details: [
      "Developed & maintained international money transfer app.",
      "Built reusable MVVM components for scalability.",
      "Integrated Firebase analytics & localization."
    ]
  },
  {
    role: "Senior iOS Developer",
    company: "Sugar Cosmetics",
    period: "Dec 2022 – Jul 2023",
    details: [
      "Enhanced UI & performance of Sugar Cosmetics app.",
      "Integrated WebEngage & Branch SDKs.",
      "Optimized memory usage and animations with Lottie."
    ]
  },
  {
    role: "Software Engineer",
    company: "Jawk Softwares",
    period: "May 2017 – Oct 2019",
    details: [
      "Developed Neborhud, Tap2Health Pro, MyVote apps.",
      "End-to-end feature development & API integrations."
    ]
  },
  {
    role: "Software Engineer",
    company: "CBIL 360",
    period: "Sep 2016 – Jan 2017",
    details: ["Worked on Infinite Journeys travel booking website."]
  },
  {
    role: "Software Engineer",
    company: "The Next Interface Technologies",
    period: "Sep 2014 – Jul 2016",
    details: ["Developed websites and custom solutions across industries."]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">Experience</h2>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-6 p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
          <p className="text-gray-500">{exp.period}</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            {exp.details.map((d, j) => <li key={j}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;