import type { Metadata } from "next";
import BankVerifyRedirect from "@/components/BankVerifyRedirect";
import { shakilaSultana } from "@/lib/nid";

export const metadata: Metadata = {
  title: "Redirecting to Pubali Bank PLC verification",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ShakilaSultanaBankVerifyPage() {
  return <BankVerifyRedirect targetUrl={shakilaSultana.bankVerifyUrl} />;
}