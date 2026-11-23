import type { Metadata } from "next";
import BankVerifyRedirect from "@/components/BankVerifyRedirect";
import { jahangirMridha } from "@/lib/nid";

export const metadata: Metadata = {
  title: "Redirecting to Pubali Bank PLC verification",
  robots: {
    index: false,
    follow: false,
  },
};

export default function JahangirMridhaBankVerifyPage() {
  return <BankVerifyRedirect targetUrl={jahangirMridha.bankVerifyUrl} />;
}