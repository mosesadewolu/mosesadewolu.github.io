import React from "react";

const SKILL_GROUPS = [
  {
    category: "AI, ML & Robotics",
    skills: ["ROS 2", "PyTorch", "DEAP", "YOLOv11", "OpenCV", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    category: "Programming & Tools",
    skills: ["Python", "C++", "C", "C#", "Java", "JavaScript", "Lua", "Git", "Bash", "LaTeX", "Docker"],
  },
  {
    category: "Additional Technologies",
    skills: ["HTML/CSS", "React", "Material UI", "Firebase"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-24 lg:mb-28">
      <span className="font-mono text-xs text-muted-foreground block border-b border-border pb-2 mb-8 uppercase tracking-wider">
        04 / Technical Skills
      </span>
      <div className="space-y-8">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-6">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider pt-0.5">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1 border border-border text-foreground rounded-sm hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}