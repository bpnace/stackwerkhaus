import React from "react";

export interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link?: string;
}

export function PortfolioHighlights({ projects }: { projects: Project[] }) {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#fff] border-t-8 border-black">
      <h3 className="text-3xl font-extrabold mb-8 brutalist-shadow">Featured Projects</h3>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <a
            key={project.title + idx}
            href={project.link || "#"}
            className="block border-4 border-black bg-[#f7f7f7] brutalist-shadow p-6 hover:bg-black hover:text-white transition-colors duration-200 group"
            style={{ boxShadow: "8px 8px 0 #000" }}
            target={project.link ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <div className="w-full h-40 bg-gray-200 border-2 border-black mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title + " screenshot"}
                className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <h4 className="text-xl font-extrabold brutalist-shadow mb-2">{project.title}</h4>
            <p className="mb-3 font-mono text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-black text-white font-mono text-xs brutalist-shadow border-2 border-black">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// .brutalist-shadow { text-shadow: 2px 2px 0 #000, 4px 4px 0 #fff; } 