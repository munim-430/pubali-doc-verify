export const nid = {
  number: "372 454 0814",
  nameBn: "নিত্যানন্দ সুত্রধর",
  nameEn: "NITYANANDA SUTRADHAR",
  fatherBn: "গোপাল সুত্রধর",
  motherBn: "মৃণালী সুত্রধর",
  dateOfBirth: "05 May 1967",
  placeOfBirth: "FARIDPUR",
  issueDate: "26 Jan 2020",
  addressBn:
    "গ্রাম/মৌজা: আটরাশি, ৪০নংওয়ার্ড, ডাকঘর: বিশ্বজকের মঞ্জিল - ৭৮২২, সদরপুর, ফরিদপুর",
  mrz: [
    "I<BGD372454081<44<<<<<<<<<<<<<<",
    "6705053M3501254BGD<<<<<<<<<<<8",
    "SUTRADHAR<<NITYANANDA<<<<<<<<<<",
  ],
} as const;

export type NidField = {
  label: string;
  value: string;
  /** Render with the Bengali-capable font stack. */
  bengali?: boolean;
  /** Render in a monospaced face and allow wrapping. */
  mono?: boolean;
};

export const nidFields: NidField[] = [
  { label: "NID Number", value: nid.number },
  { label: "Name (Bengali)", value: nid.nameBn, bengali: true },
  { label: "Name (English)", value: nid.nameEn },
  { label: "Father's Name (Bengali)", value: nid.fatherBn, bengali: true },
  { label: "Mother's Name (Bengali)", value: nid.motherBn, bengali: true },
  { label: "Date of Birth", value: nid.dateOfBirth },
  { label: "Place of Birth", value: nid.placeOfBirth },
  { label: "Issue Date", value: nid.issueDate },
  { label: "Address (Bengali)", value: nid.addressBn, bengali: true },
  { label: "MRZ", value: nid.mrz.join("\n"), mono: true },
];

export const BANK_VERIFY_URL =
  "https://verify.pubalibankbd.com/verify/226019711";
