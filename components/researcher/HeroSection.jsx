import React from "react";

export default function HeroSection() {
  return (
    <section id="about" className="mb-24 lg:mb-28">
      <span className="font-mono text-xs text-muted-foreground block border-b border-border pb-2 mb-8 uppercase tracking-wider">
        01 / Intent
      </span>

      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-semibold leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
          Moses Adewolu
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          B.S. Student · Georgia Institute of Technology · Computer Science &amp; Robotics Minor
        </p>
      </div>

      <div className="space-y-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
        <p>
          Hello! I am a Computer Science undergraduate at Georgia Tech, pursuing a minor in Robotics. My research interests lie at the intersection of <em className="text-foreground not-italic font-medium">Embodied AI</em>, <em className="text-foreground not-italic font-medium">Reinforcement Learning</em>, and <em className="text-foreground not-italic font-medium">Robotic Perception</em> — areas I find both scientifically fascinating and practically impactful.
        </p>
        <p>
          I currently conduct research at GTRI's Electro-Optical Systems Laboratory, where my work spans LLM-guided neural architecture search (contributing to work cited by DeepMind AlphaEvolve), deep learning pipelines for object detection and person re-identification, and autonomous robotics software. I also develop robotics software with RoboJackets, focusing on autonomous navigation and computer vision for the University Rover Challenge and RoboMaster competition.
        </p>
        <p>
          Outside of research, I engage in competitive programming and contribute to open-source robotics projects. I am drawn to work that is rigorous, deployable at scale, and pushes the boundary of what autonomous systems can perceive and do.
        </p>
        <p>
          <span className="text-foreground font-medium">Collaboration.</span> If you would like to discuss anything related to research, robotics, machine learning, or life in general, I would be eager to hear from you. Please feel free to reach out via{" "}
          <a href="mailto:mosesoluwatobiadewolu@gmail.com" className="text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity">
            email
          </a>.
        </p>
      </div>
    </section>
  );
}