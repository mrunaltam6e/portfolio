"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { SocialLinks } from "./SocialLinks";
import { ResumeButton } from "./ResumeButton";
import Mascot from "./Mascot";

const nav = ["About", "Experience", "Projects", "Involvement", "Contact"];

export default function Sidebar() {
  const [active, setActive] = useState(0);
  // After a click, keep the clicked item selected until the user scrolls by hand.
  const locked = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (locked.current) return;
      const secs = nav.map((n) => document.getElementById(n.toLowerCase()));
      let cur = 0;
      secs.forEach((s, i) => {
        if (s && s.getBoundingClientRect().top <= window.innerHeight * 0.35) cur = i;
      });
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) cur = nav.length - 1;
      setActive(cur);
    };
    const release = () => { locked.current = false; };
    const manual = ["wheel", "touchstart", "keydown", "pointerdown"];
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    manual.forEach((e) => window.addEventListener(e, release, { passive: true }));
    return () => {
      window.removeEventListener("scroll", onScroll);
      manual.forEach((e) => window.removeEventListener(e, release));
    };
  }, []);

  return (
    <header className="flex flex-col gap-2 bg-berry px-6 py-10 text-white lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:px-10">
      <div>
        <h1 className="mb-3.5 font-display text-[clamp(38px,4.4vw,60px)] font-extrabold leading-none tracking-tight text-orange">{site.name}</h1>
        <p className="font-display text-2xl font-bold">{site.role}</p>
      </div>

      {/* The menu is centered vertically between the role line and the mascot, and stays left aligned. */}
      <nav aria-label="Sections" className="flex flex-row flex-wrap gap-x-5 gap-y-1 py-4 lg:flex-1 lg:flex-col lg:flex-nowrap lg:justify-center lg:gap-y-0 lg:py-0">
        {nav.map((n, i) => (
          <a
            key={n}
            href={`#${n.toLowerCase()}`}
            onClick={() => { locked.current = true; setActive(i); }}
            aria-current={active === i ? "true" : undefined}
            className="flex h-11 w-max items-center"
          >
            <span
              className={`border-b-[3px] font-display leading-tight transition-all duration-200 motion-reduce:transition-none ${
                active === i
                  ? "border-orange text-[27px] font-extrabold text-orange"
                  : "border-transparent text-[21px] font-medium text-[#e9c9d8] hover:border-orange hover:text-white"
              }`}
            >
              {n}
            </span>
          </a>
        ))}
      </nav>

      <div className="mb-5 hidden tall:block">
        <Mascot />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <ResumeButton label="Get my resume" />
        <SocialLinks />
      </div>
    </header>
  );
}
