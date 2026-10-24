import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand py-[10px] text-white shadow-header">
      <div className="bs-container px-4 sm:px-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 md:gap-3">
            <Link href="/" aria-label="Document Verifier home">
              <Image
                src="/pubali-logo.svg"
                alt="Pubali Bank PLC"
                width={184}
                height={34}
                className="brand-logo-svg"
                priority
              />
            </Link>

            <span className="hidden border-l border-white/25 ps-2 text-base font-medium text-white min-[576px]:inline sm:ps-3 md:text-xl">
              Document Verifier
            </span>
          </div>

          <div>
            <a
              href="https://www.pubalibangla.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="website-link inline-block"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
