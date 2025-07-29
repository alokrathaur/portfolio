import React from "react";

const projects = [
  {
    name: "Currencies Direct",
    desc: "International money transfer app with localization & Firebase analytics.",
    link: "https://apps.apple.com/gb/app/currencies-direct/id1094746471"
  },
  {
    name: "Sugar Cosmetics",
    desc: "Beauty & e-commerce app with smooth UI and analytics integration.",
    link: "https://apps.apple.com/us/app/sugar-cosmetics/id1476501793"
  },
  {
    name: "Neborhud",
    desc: "Community app built for engagement and API-driven features.",
    link: "https://apps.apple.com/us/app/neborhud/id1241312755"
  },
  {
    name: "Tap2Health Pro",
    desc: "Healthcare app with appointment and professional services.",
    link: "https://apps.apple.com/cz/app/tap2health-pro/id1638911400"
  },
  {
    name: "MyVote",
    desc: "Voting app designed for secure and scalable user participation.",
    link: "https://itunes.apple.com/us/app/my-vote/id757649127?ls=1&mt=8"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-600">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
            <a href={p.link} target="_blank" className="text-blue-600 font-semibold mt-3 inline-block">
              View on App Store →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;