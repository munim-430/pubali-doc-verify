import NidRecordPage from "@/components/NidRecordPage";
import { nid } from "@/lib/nid";

export default function HomePage() {
  return <NidRecordPage record={nid} />;
}