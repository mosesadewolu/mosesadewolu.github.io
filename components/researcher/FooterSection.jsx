import React from "react";

export default function FooterSection() {
  return (
    <footer className="pt-10 border-t border-border">
      <span className="font-mono text-xs text-muted-foreground block pb-2 mb-6 uppercase tracking-wider">
        06 / Connect
      </span>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-6">
        Open to research collaborations, engineering opportunities, and conversations about ML, robotics, and beyond. Feel free to reach out.
      </p>
      <div className="flex flex-wrap gap-6">
        <a href="mailto:mosesoluwatobiadewolu@gmail.com" className="font-mono text-xs text-primary font-medium uppercase hover:underline">
          Email
        </a>
        <a href="https://github.com/MosesTheRedSea" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-primary font-medium uppercase hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com/in/moses-adewolu" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-primary font-medium uppercase hover:underline">
          LinkedIn
        </a>
  
      </div>
      <p className="mt-12 font-mono text-xs text-muted-foreground opacity-40">
        © 2025 Moses Adewolu
      </p>
    </footer>
  );
}