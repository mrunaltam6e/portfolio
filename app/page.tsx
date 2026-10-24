import Sidebar from "@/components/Sidebar";
import { About, Experience, Projects, Involvement, Contact } from "@/components/Sections";
import { site } from "@/data/site";

export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-[minmax(300px,38%)_1fr]">
      <Sidebar />
      <main className="max-w-[900px] px-6 py-12 lg:px-14 lg:py-[72px]">
        <About />
        <Experience />
        <Projects />
        <Involvement />
        <Contact />
        <footer className="text-base text-ink/70 dark:text-blush/70">© {new Date().getFullYear()} {site.name}</footer>
      </main>
    </div>
  );
}
