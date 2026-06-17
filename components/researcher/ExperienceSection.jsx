import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Machine Learning Research Intern",
    org: "Electro-Optical Systems Laboratory, GTRI",
    location: "Atlanta, GA",
    dates: "05/2025 – Present",
    bullets: [
      "Contributed to the LLM-Guided Evolution (LMGE) framework for autonomous model design, integrating Large Language Models with Neural Architecture Search using Genetic Algorithms, resulting in state-of-the-art model evolution capabilities.",
      "Enhanced the framework's generality by implementing support for arbitrary model architectures, and locally integrated LLMs to reduce inference costs and latency.",
      "Collaborated on the optimization of ExquisiteNetV2 evolution pipeline, accelerating convergence and improving performance metrics on CIFAR-10. Contributed to research cited by DeepMind AlphaEvolve.",
      "Built and refined deep learning pipelines using YOLOv11 for object detection, tracking, and person re-identification (ReID), improving system robustness and image classification accuracy across edge cases.",
    ],
  },
  {
    role: "Robotics Software Developer",
    org: "Georgia Tech – RoboJackets — RoboRambler",
    location: "Atlanta, GA",
    dates: "01/2024 – Present",
    bullets: [
      "Contributed to robotics software for the University Rover Challenge and RoboMaster competition, focusing on autonomous navigation, path planning, and computer vision using ROS 2, C++, and Python.",
      "Redesigned the autonomous navigation state machine for the rover to improve robustness, modularity, and fault recovery.",
      "Worked on the Path Planning Team to implement and optimize navigation algorithms for Mars rover prototypes.",
      "Assisted with computer vision modules for targeting and object detection in RoboMaster combat scenarios.",
    ],
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "College of Computing, Georgia Institute of Technology",
    location: "Atlanta, GA",
    dates: "05/2023 – Present",
    bullets: [
      "Evaluated and graded Java assignments, homework, and exams for over 300 students, ensuring accuracy and providing constructive feedback to enhance learning.",
      "Led engaging recitation sessions for a cohort of 30 students, fostering an interactive and supportive environment to strengthen understanding of Object-Oriented Programming principles.",
      "Developed and implemented hands-on exercises and problem-solving activities, increasing student participation and reinforcing key concepts.",
    ],
  },
];

function ExperienceItem({ role, org, location, dates, bullets }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-10 border border-border rounded-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-secondary transition-colors duration-200"
      >
        <div>
          <h3 className="text-base font-semibold leading-snug mb-0.5">{role}</h3>
          <p className="font-heading italic text-sm text-muted-foreground">{org}</p>
          <p className="font-mono text-xs text-muted-foreground mt-0.5">{location}</p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="font-mono text-xs text-primary whitespace-nowrap">{dates}</span>
          {open ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </div>
      </button>
      {open && (
        <ul className="px-6 pb-5 space-y-2 border-t border-border pt-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-24 lg:mb-28">
      <span className="font-mono text-xs text-muted-foreground block border-b border-border pb-2 mb-8 uppercase tracking-wider">
        02 / Experience
      </span>
      {EXPERIENCES.map((exp, i) => (
        <ExperienceItem key={i} {...exp} />
      ))}
    </section>
  );
}