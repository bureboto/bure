import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-5 pt-5">
      <div className="flex items-center justify-between h-[60px] max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-2 text-lg font-medium tracking-tight">
          <span aria-hidden className="inline-block w-[18px] h-[19px]">
            <svg viewBox="0 0 18 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0L18 19H0L9 0Z" />
            </svg>
          </span>
          Bure
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            About
          </Link>
          <Link href="/archive" className="hover:opacity-60 transition-opacity">
            Archive
          </Link>
          <Link href="/pieces" className="hover:opacity-60 transition-opacity">
            Pieces
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:opacity-60 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
