import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { nid, nidFields } from "@/lib/nid";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-grow-1">
        <div className="bs-container my-3 px-2 sm:px-3 md:my-4">
          <div className="bs-container px-2 py-2 sm:px-3 md:py-3">
            <div className="mb-3 text-center">
              <span className="badge-valid inline-flex flex-wrap items-center justify-center gap-2">
                <Image
                  src="/shield-check.svg"
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden
                />
                <span>Valid Statement</span>
              </span>

              <p className="mb-0 mt-2 px-2 text-sm text-[#6c757d]">
                The following identity details are reproduced from the National
                ID (NID) record.
              </p>
            </div>

            <div className="mb-4 flex justify-center">
              <div className="w-full md:w-10/12 lg:w-9/12">
                <div className="card-box border-0 bg-white p-3 sm:p-4">
                  <div className="mb-3 text-center md:mb-4">
                    <h4 className="text-xl font-bold uppercase text-[#212529] underline md:text-2xl">
                      To Whom It May Concern
                    </h4>
                  </div>

                  <div className="mb-3 flex flex-col justify-between gap-2 border-b border-line pb-3 sm:flex-row sm:items-start">
                    <div className="flex flex-col gap-2">
                      <div>
                        <small className="block text-sm text-[#6c757d]">
                          NAME:
                        </small>
                        <span className="font-bold uppercase text-[#212529]">
                          {nid.nameEn}
                        </span>
                      </div>

                      <div>
                        <small className="block text-sm text-[#6c757d]">
                          NID NUMBER:
                        </small>
                        <span className="font-bold text-[#212529]">
                          {nid.number}
                        </span>
                      </div>
                    </div>

                    <div className="sm:text-end">
                      <small className="block text-sm text-[#6c757d]">
                        DATE OF ISSUE:
                      </small>
                      <span className="font-bold text-[#212529]">
                        {nid.issueDate}
                      </span>
                    </div>
                  </div>

                  <div className="mb-2 overflow-x-auto">
                    <table className="bs-table text-center text-sm">
                      <thead>
                        <tr className="text-sm uppercase">
                          <th style={{ width: 40 }}>SL#</th>
                          <th className="text-start">Field</th>
                          <th className="text-start">Details</th>
                        </tr>
                      </thead>

                      <tbody>
                        {nidFields.map((field, index) => (
                          <tr key={field.label}>
                            <td>{index + 1}</td>
                            <td className="whitespace-nowrap font-semibold">
                              {field.label}
                            </td>
                            <td
                              className={[
                                "text-start",
                                field.bengali ? "leading-relaxed" : "",
                                field.mono
                                  ? "whitespace-pre-line break-all font-mono text-xs leading-5"
                                  : "",
                              ]
                                .filter(Boolean)
                                .join(" ")}
                            >
                              {field.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>

                      <tfoot>
                        <tr>
                          <td colSpan={2} className="text-end">
                            Document Type
                          </td>
                          <td className="text-start">
                            National ID (NID) &mdash; Smart Card
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="mt-4 text-center">
                    <Link
                      href="/bank-verify"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      Verify Linked Bank Account
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    <p className="mb-0 mt-2 text-xs text-[#6c757d]">
                      You will be redirected to Pubali Bank PLC to confirm the
                      linked account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
