import { site, experience, projects, involvement, type Entry } from "@/data/site";
import { SocialLinks } from "./SocialLinks";
import { ResumeButton } from "./ResumeButton";

const h2 = "mb-8 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-crimson dark:text-orange lg:text-[44px]";

function Tags({ tags, featured }: { tags: string[]; featured?: boolean }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className={`rounded-full px-3 py-[3px] font-display text-[15px] font-medium ${featured ? "bg-orange text-ink" : "bg-teal text-white dark:bg-orange dark:text-ink"}`}>
          {t}
        </li>
      ))}
    </ul>
  );
}

function Item({ e }: { e: Entry }) {
  const frame = e.featured
    ? "mb-7 rounded-[10px] bg-teal p-7 text-white"
    : `mb-7 border-l-8 pb-7 pl-6 ${e.current ? "border-crimson" : "border-rust"}`;
  return (
    <div className={frame}>
      <h3 className="font-display text-2xl font-bold">{e.title}</h3>
      {e.when && <p className={`mb-2 mt-0.5 text-[17px] italic ${e.featured ? "text-[#cfe3e8]" : "text-ink/70 dark:text-blush/70"}`}>{e.when}</p>}
      <p>{e.body}</p>
      {e.tags && <Tags tags={e.tags} featured={e.featured} />}
    </div>
  );
}

const Block = ({ id, title, items }: { id: string; title: string; items: Entry[] }) => (
  <section id={id} className="mb-20">
    <h2 className={h2}>{title}</h2>
    {items.map((e) => <Item key={e.title} e={e} />)}
  </section>
);

export const About = () => (
  <section id="about" className="mb-20">
    <h2 className={h2}>About</h2>
    {site.about.map((p) => <p key={p} className="mb-3">{p}</p>)}
  </section>
);
export const Experience = () => <Block id="experience" title="Experience" items={experience} />;
export const Projects = () => <Block id="projects" title="Projects" items={projects} />;
export const Involvement = () => <Block id="involvement" title="Involvement" items={involvement} />;

export const Contact = () => (
  <section id="contact" className="mb-20 rounded-[10px] bg-berry p-8 text-white lg:p-10">
    <h2 className={`${h2} !text-orange`}>Let’s talk</h2>
    <p className="mb-6 max-w-[34ch]">I’m open to full stack developer roles. Email me and I’ll send my resume.</p>
    <div className="flex flex-wrap items-center gap-3.5">
      <a className="inline-block rounded-md bg-orange px-5 py-3 font-display text-lg font-bold text-ink hover:bg-white" href={`mailto:${site.email}`}>{site.email}</a>
      <ResumeButton label="Request my resume" alt />
      <SocialLinks />
    </div>
  </section>
);
