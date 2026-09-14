import Link from "next/link";

export default function HeaderContent() {
  return (
    <div className="flex items-center justify-between h-[60px]">
      <Link href="/home" aria-label="Bure">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Bure" width={77} height={20} />
      </Link>
      <div className="flex items-center gap-4">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-sm border border-black/20 rounded-full px-4 py-1.5 hover:bg-black hover:text-white transition-colors"
        >
          Descargar CV
        </a>
        <a
          href="https://www.linkedin.com/in/bureboto/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="6.5" y="10" width="2" height="7.5" fill="currentColor" />
            <circle cx="7.5" cy="6.5" r="1.25" fill="currentColor" />
            <path
              d="M11 17.5V10h2v1.1c.5-.75 1.35-1.3 2.4-1.3 1.85 0 3.1 1.25 3.1 3.4v4.3h-2v-4c0-1.05-.5-1.7-1.5-1.7s-1.6.65-1.6 1.7v4h-2.4Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
