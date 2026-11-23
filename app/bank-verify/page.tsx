import type { Metadata } from "next";
import BankVerifyRedirect from "@/components/BankVerifyRedirect";
import { nid } from "@/lib/nid";

export const metadata: Metadata = {
  title: "Redirecting to Pubali Bank PLC verification",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BankVerifyPage() {
  return <BankVerifyRedirect targetUrl={nid.bankVerifyUrl} />;
}