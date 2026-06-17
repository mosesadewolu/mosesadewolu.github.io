import React from "react";

const COURSEWORK = [
  "Object-Oriented Programming",
  "Data Structures & Algorithms",
  "Computer Organization",
  "Linear Algebra",
  "Design & Analysis of Algorithms",
  "Machine Learning",
  "Introduction to Robotics",
  "Perception",
];

const ACTIVITIES = [
  "RoboJackets (RoboNav)",
  "RoboRambler",
  "Competitive Programming",
  "Machine Learning Researcher",
];

export default function EducationSection() {
  return (
    <section id="education" className="mb-24 lg:mb-28">
      <span className="font-mono text-xs text-muted-foreground block border-b border-border pb-2 mb-8 uppercase tracking-wider">
        05 / Education
      </span>
      <div className="border border-border rounded-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
          <div>
            <h3 className="text-base font-semibold leading-snug">Georgia Institute of Technology</h3>
            <p className="font-heading italic text-sm text-muted-foreground mt-0.5">
              B.S. Computer Science · Minor in Robotics
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="font-mono text-xs text-primary block">Atlanta, GA</span>
            <span className="font-mono text-xs text-muted-foreground block mt-0.5">In Progress</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
              Relevant Coursework
            </p>
            <ul className="space-y-1.5">
              {COURSEWORK.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
              Activities
            </p>
            <ul className="space-y-1.5">
              {ACTIVITIES.map((a) => (
                <li key={a} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}