import Section from "./Section";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">
      <Section className="py-12 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-semibold">Krishna Kumar</p>
          <p className="text-gray-400 text-sm">
            Software Engineer • Full Stack • Cloud • Bengaluru, India
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a
            href="mailto:krishna902kumar@gmail.com"
            className="hover:text-white"
          >
            Email
          </a>

          <a
            href="https://github.com/009-KumarJi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/krishna-kumar-975b25186/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </Section>

      <div className="text-center text-xs text-gray-500 pb-6">
        Built with Next.js • React 19 • Tailwind v4
      </div>
    </footer>
  );
}
