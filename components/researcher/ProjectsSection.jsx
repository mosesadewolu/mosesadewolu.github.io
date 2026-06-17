import React from "react";

const PROJECTS = [
  {
    name: "LLMGE — Large Language Model Guided Evolution (Generic)",
    dates: "06/2025 – Present",
    bullets: [
      "Developing a generalized implementation of the LLM-Guided Evolution (LLMGE) framework, enabling seamless integration of any neural network architecture into a genetic algorithm–driven model evolution pipeline.",
      "Extended the framework to support architectures beyond 2D CNNs, including 3D point cloud models (PointNet++, PointTransformer) and hybrid multimodal networks.",
      "Built a modular system where model architectures, training routines, and fitness evaluation can be dynamically 'dropped in,' allowing rapid experimentation across domains without altering core infrastructure.",
      "Implemented automated training and evaluation workflows for 3D point cloud classification and segmentation tasks, evolving models on datasets like ModelNet40.",
    ],
    tags: ["Python", "PyTorch", "DEAP", "Genetic Algorithms", "LLMs", "PointNet++"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-24 lg:mb-28">
      <span className="font-mono text-xs text-muted-foreground block border-b border-border pb-2 mb-8 uppercase tracking-wider">
        03 / Projects
      </span>
      {PROJECTS.map((project, i) => (
        <div key={i} className="mb-10 border border-border rounded-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
            <h3 className="text-base font-semibold leading-snug max-w-xl">{project.name}</h3>
            <span className="font-mono text-xs text-primary whitespace-nowrap shrink-0">{project.dates}</span>
          </div>
          <ul className="space-y-2 mb-4">
            {project.bullets.map((b, j) => (
              <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-0.5 border border-border text-muted-foreground rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}