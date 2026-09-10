import Link from "next/link";

export default function DesignHeader() {
  return (
    <header className="w-full px-[28px] pt-5">
      <div className="flex items-center justify-between h-[60px]">
        <Link href="/home" aria-label="Bure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Bure" width={77} height={20} />
        </Link>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
        </a>
      </div>
    </header>
  );
}
