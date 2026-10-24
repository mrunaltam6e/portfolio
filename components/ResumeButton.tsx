import { site } from "@/data/site";

export function ResumeButton({ label, alt = false }: { label: string; alt?: boolean }) {
  const cls = alt
    ? "border-[3px] border-current bg-transparent hover:bg-white hover:text-berry"
    : "bg-orange text-ink hover:bg-white";
  const href = site.resumeFile ?? `mailto:${site.email}?subject=Resume%20request`;
  return (
    <a className={`inline-block rounded-md px-5 py-3 font-display text-lg font-bold ${cls}`} href={href} {...(site.resumeFile ? { download: true } : {})}>
      {label}
    </a>
  );
}
