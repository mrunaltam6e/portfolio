# Portfolio

Next.js (App Router, TypeScript), Tailwind CSS, static export, deployed on Vercel.

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # static site in /out

- Update text, projects and links in `data/site.ts`.
- Resume: put the PDF in `public/` (for example `public/resume.pdf`) and set `resumeFile: "/resume.pdf"` in `data/site.ts`.
- Colors live in `tailwind.config.ts`.
- Deploy: push to GitHub, import the repo in Vercel (framework preset: Next.js).
