# Krishna Kumar — Portfolio

> **[krishna.novitrail.com](https://krishna.novitrail.com/)**

Personal portfolio site built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion. Dark-themed, responsive, and designed to showcase my work as a software engineer.

---

## ✨ Sections

| Section | Description |
|---|---|
| **Hero** | Intro with animated terminal-style profile card and CTA buttons |
| **System Stats** | At-a-glance metrics (experience, cloud, auth stack) |
| **Experience** | Timeline of roles at Accenture, Envint Global, and WeFrameTech |
| **Projects** | Featured projects with live/GitHub links and tech stack badges |
| **Skills** | Categorized skill matrix (Languages, Backend, Databases, Cloud, Concepts) |
| **Certifications** | Oracle Cloud professional certifications with badge links |

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, Framer Motion
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # CSS variables + Tailwind import
├── components/
│   ├── hero/               # Hero + ProfileTerminal
│   ├── experience/         # ExperienceTimeline
│   ├── projects/           # ProjectsSection + ProjectCard
│   ├── skills/             # SkillsMatrix
│   ├── certifications/     # Certifications
│   ├── system/             # SystemStats
│   └── ui/                 # Button, Section, Footer
├── data/
│   ├── certifications.ts   # Cert titles + badge links
│   ├── projects.ts         # Project descriptions, stacks, links
│   └── skills.ts           # Categorized skill arrays
└── public/
    ├── krishna_kumar.pdf   # Resume PDF
    └── profile.png         # Profile photo
```

## 📄 Resume

The resume PDF is served from `public/krishna_kumar.pdf`. The "View Resume" button in the Hero section opens it in a new tab for preview.

## 🔗 Links

- **Portfolio:** [krishna.novitrail.com](https://krishna.novitrail.com/)
- **GitHub:** [github.com/009-KumarJi](https://github.com/009-KumarJi)
- **LinkedIn:** [in/krishna-kumar-975b25186](https://www.linkedin.com/in/krishna-kumar-975b25186/)
- **Email:** krishna902kumar@gmail.com

---

Built with ☕ and Next.js.
