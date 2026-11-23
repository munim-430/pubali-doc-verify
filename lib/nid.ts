export type NidRecord = {
  number: string;
  nameBn: string;
  nameEn: string;
  fatherBn: string;
  motherBn: string;
  dateOfBirth: string;
  placeOfBirth: string;
  issueDate: string;
  addressBn: string;
  mrz: string[];
  bankVerifyPath: string;
  bankVerifyUrl: string;
};

export type NidField = {
  label: string;
  value: string;
  /** Render with the Bengali-capable font stack. */
  bengali?: boolean;
  /** Render in a monospaced face and allow wrapping. */
  mono?: boolean;
};

export const DEFAULT_BANK_VERIFY_URL =
  "https://verify.pubalibankbd.com/verify/226019711";

export const nid: NidRecord = {
  number: "372 454 0814",
  nameBn: "নিত্যানন্দ সুত্রধর",
  nameEn: "NITYANANDA SUTRADHAR",
  fatherBn: "গোপাল সুত্রধর",
  motherBn: "মৃণালী সুত্রধর",
  dateOfBirth: "05 May 1967",
  placeOfBirth: "FARIDPUR",
  issueDate: "14 Oct 2026",
  addressBn:
    "গ্রাম/মৌজা: আটরাশি, ৪০নংওয়ার্ড, ডাকঘর: বিশ্বজকের মঞ্জিল - ৭৮২২, সদরপুর, ফরিদপুর",
  mrz: [
    "I<BGD372454081<44<<<<<<<<<<<<<<",
    "6705053M3501254BGD<<<<<<<<<<<8",
    "SUTRADHAR<<NITYANANDA<<<<<<<<<<",
  ],
  bankVerifyPath: "/bank-verify",
  bankVerifyUrl: DEFAULT_BANK_VERIFY_URL,
};

export const jahangirMridha: NidRecord = {
  number: "N/A",
  nameBn: "N/A",
  nameEn: "Md Jahangir Mridha",
  fatherBn: "N/A (English: Kaimuddin Mridha)",
  motherBn: "N/A (English: Ayesha Begum)",
  dateOfBirth: "N/A",
  placeOfBirth: "N/A",
  issueDate: "16 November, 2026",
  addressBn: "N/A (English: Baghra, Sreenagar, Munshiganj)",
  mrz: ["N/A"],
  bankVerifyPath: "/md-jahangir-mridha/bank-verify",
  bankVerifyUrl: DEFAULT_BANK_VERIFY_URL,
};

export const siddikurRahman: NidRecord = {
  number: "N/A",
  nameBn: "N/A",
  nameEn: "Md Siddikur Rahman",
  fatherBn: "N/A (English: Hazi Mobarak Hossain)",
  motherBn: "N/A (English: Rahela Khatun)",
  dateOfBirth: "N/A",
  placeOfBirth: "N/A",
  issueDate: "October 6, 2026",
  addressBn:
    "N/A (English: Ho:630, Laskarpur, Po:Sheikher Nagar -0, Sreenagar, Munshiganj)",
  mrz: ["N/A"],
  bankVerifyPath: "/md-siddikur-rahman/bank-verify",
  bankVerifyUrl: DEFAULT_BANK_VERIFY_URL,
};

export const shakilaSultana: NidRecord = {
  number: "N/A",
  nameBn: "N/A",
  nameEn: "Most Shakila Sultana",
  fatherBn: "N/A (English: Md. Rezaul Karim)",
  motherBn: "N/A (English: Mst. Jahanara Begum)",
  dateOfBirth: "N/A",
  placeOfBirth: "N/A",
  issueDate: "15 November, 2026",
  addressBn: "N/A (English: Home: 123 Shahibag)",
  mrz: ["N/A"],
  bankVerifyPath: "/most-shakila-sultana/bank-verify",
  bankVerifyUrl: DEFAULT_BANK_VERIFY_URL,
};

export function nidFields(record: NidRecord): NidField[] {
  return [
    { label: "NID Number", value: record.number },
    { label: "Name (Bengali)", value: record.nameBn, bengali: true },
    { label: "Name (English)", value: record.nameEn },
    { label: "Father's Name (Bengali)", value: record.fatherBn, bengali: true },
    { label: "Mother's Name (Bengali)", value: record.motherBn, bengali: true },
    { label: "Date of Birth", value: record.dateOfBirth },
    { label: "Place of Birth", value: record.placeOfBirth },
    { label: "Issue Date", value: record.issueDate },
    { label: "Address (Bengali)", value: record.addressBn, bengali: true },
    { label: "MRZ", value: record.mrz.join("\n"), mono: true },
  ];
}

// Compatibility export for existing route.
export const BANK_VERIFY_URL = nid.bankVerifyUrl;