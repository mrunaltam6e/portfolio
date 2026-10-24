"use client";
import { useState } from "react";

function Base() {
  return (
    <>
      {/* Light outline so the berry hair stays visible on the berry sidebar */}
      <g fill="#5f0f40" stroke="#f6e8ee" strokeWidth="8">
        <ellipse cx="34" cy="120" rx="28" ry="30" />
        <ellipse cx="166" cy="120" rx="28" ry="30" />
        <ellipse cx="100" cy="92" rx="68" ry="58" />
        <ellipse cx="100" cy="110" rx="62" ry="50" />
        <path d="M96 46 Q92 26 74 24 Q84 36 92 48 Z" />
      </g>
      <ellipse cx="34" cy="120" rx="28" ry="30" fill="#5f0f40" />
      <ellipse cx="166" cy="120" rx="28" ry="30" fill="#5f0f40" />
      <ellipse cx="100" cy="92" rx="68" ry="58" fill="#5f0f40" />
      <ellipse cx="100" cy="110" rx="62" ry="50" fill="#f6cf9f" stroke="#5f0f40" strokeWidth="3" />
      <path d="M38 100 Q40 54 100 48 Q160 54 162 100 Q140 78 100 82 Q60 78 38 100 Z" fill="#5f0f40" />
      <path d="M96 46 Q92 26 74 24 Q84 36 92 48 Z" fill="#5f0f40" />
      <ellipse cx="60" cy="130" rx="10" ry="7" fill="#fb8b24" fillOpacity="0.6" />
      <ellipse cx="140" cy="130" rx="10" ry="7" fill="#fb8b24" fillOpacity="0.6" />
      <circle cx="74" cy="112" r="17" fill="#ffffff" fillOpacity="0.35" stroke="#9a031e" strokeWidth="4" />
      <circle cx="126" cy="112" r="17" fill="#ffffff" fillOpacity="0.35" stroke="#9a031e" strokeWidth="4" />
      <path d="M91 110 Q100 105 109 110" fill="none" stroke="#9a031e" strokeWidth="4" />
    </>
  );
}

function Happy() {
  return (
    <>
      <circle cx="74" cy="113" r="4.5" fill="#2a1020" />
      <circle cx="126" cy="113" r="4.5" fill="#2a1020" />
      <circle cx="76" cy="111" r="1.5" fill="#fff" />
      <circle cx="128" cy="111" r="1.5" fill="#fff" />
      <path d="M92 132 Q100 140 108 132" fill="none" stroke="#2a1020" strokeWidth="3" />
    </>
  );
}

function Surprised() {
  return (
    <>
      <circle cx="74" cy="113" r="6" fill="#2a1020" />
      <circle cx="126" cy="113" r="6" fill="#2a1020" />
      <circle cx="77" cy="110" r="2" fill="#fff" />
      <circle cx="129" cy="110" r="2" fill="#fff" />
      <ellipse cx="100" cy="140" rx="7" ry="9" fill="#9a031e" stroke="#2a1020" strokeWidth="2.5" />
      <path d="M170 48 L182 36 M176 62 L192 60" fill="none" stroke="#fb8b24" strokeWidth="5" />
    </>
  );
}

// Decorative mascot: happy by default, surprised while the pointer is over it.
export default function Mascot() {
  const [surprised, setSurprised] = useState(false);
  return (
    <div
      aria-hidden="true"
      onMouseEnter={() => setSurprised(true)}
      onMouseLeave={() => setSurprised(false)}
      className="w-24 origin-left transition-transform duration-150 hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <svg viewBox="0 14 200 160" className="block w-full overflow-visible" strokeLinecap="round" strokeLinejoin="round">
        <Base />
        {surprised ? <Surprised /> : <Happy />}
      </svg>
    </div>
  );
}
