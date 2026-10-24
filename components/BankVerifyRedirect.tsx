"use client";

import { useEffect } from "react";
import { BANK_VERIFY_URL } from "@/lib/nid";

export default function BankVerifyRedirect() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = BANK_VERIFY_URL;
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-xl border border-line bg-white px-6 py-10 text-center shadow-card">
        <div
          className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#d7e7de] border-t-brand"
          role="status"
          aria-label="Loading"
        />

        <p className="mt-6 text-base font-semibold text-[#212529]">
          Redirecting to Pubali Bank PLC verification...
        </p>

        <p className="mt-2 text-sm text-[#6c757d]">
          Please wait. You are being securely transferred to the bank&apos;s
          verification page.
        </p>

        <noscript>
          <a
            href={BANK_VERIFY_URL}
            className="mt-4 inline-block font-semibold text-brand underline"
          >
            Continue to Pubali Bank PLC verification
          </a>
        </noscript>
      </div>
    </main>
  );
}
